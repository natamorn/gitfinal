<template>
  <div class="row mt-5">
    <div class="col-lg-4"></div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-body">
          <h4 class="mb-4">Sign Up</h4>
          <form @submit.prevent="onSubmit">
            <div class="mb-3">
              <label class="mb-2 fw-bold" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                v-model="formData.email"
                :class="['form-control', formWarning.email ? '' : 'is-invalid']"
                placeholder="Email"
              />
            </div>
            <div class="mb-3">
              <label class="mb-2 fw-bold" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                :class="[
                  'form-control',
                  formWarning.password ? '' : 'is-invalid',
                ]"
                v-model="formData.password"
                placeholder="Password"
              />
            </div>

            <div class="mb-3">
              <label class="mb-2 fw-bold" htmlFor="EmployeeID"
                >Employee ID</label
              >
              <input
                type="text"
                id="EmployeeID"
                name="EmployeeID"
                v-model="formData.EmployeeID"
                :class="[
                  'form-control',
                  formWarning.EmployeeID ? '' : 'is-invalid',
                ]"
                placeholder="Employee ID"
              />
              <small id="employeeID" class="form-text text-muted"
                >เป็นตัวเลขเท่านั้น</small
              >
            </div>

            <div class="row mt-4">
              <div class="col-lg-12 mb-2">
                <button type="submit" class="btn btn-light w-100">
                  Create an Account
                </button>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-lg-12 mb-2">
                <div class="text-center">
                  Already registered? <router-link to="/">Log In</router-link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-lg-4"></div>
  </div>
</template>

<script>
// import firebase from '../database/firebase'
import SignupService from '../services/SignupService'
export default {
  name: 'SignupForm',
  data () {
    return {
      formData: {
        email: null,
        password: null,
        EmployeeID: null
      },
      formWarning: {
        email: true,
        password: true,
        EmployeeID: true
      },
      formValid: false
    }
  },
  mounted () {
    // SignupService.get().then((snapshotChange) => {
    //   snapshotChange.forEach((doc) => {
    //     SignupService.doc(doc.id).delete()
    //   })
    // })
  },
  methods: {
    validate () {
      for (const key in this.formWarning) {
        this.formData[key]
          ? (this.formWarning[key] = true)
          : (this.formWarning[key] = false)
      }
      this.formValid = Object.values(this.formWarning).every((it) => it === true)
    },
    async onSubmit () {
      this.validate()
      if (!this.formValid) return
      const chkuser = await SignupService.where('email', '==', this.formData.email).where('password', '==', this.formData.password).get()
      if (!chkuser.empty) {
        this.$swal.fire('Oops...', 'ชื่อผู้งานนี้มีอยู่แล้ว', 'warning')
        return 0
      }

      const chkEmpId = await SignupService.where('EmployeeID', '==', this.formData.EmployeeID).get()
      if (!chkEmpId.empty) {
        this.$swal.fire('Oops...', 'Employee ID นี้มีอยู่แล้ว', 'warning')
        return 0
      }
      SignupService.add(this.formData)
        .then(() => {
          this.$swal.fire(
            'success!',
            'Sign Up successfully!',
            'success'
          )

          this.$router.push('/')
        })
        .catch((e) => {
          this.$swal.fire('Oops...', e, 'error')
        })
    }
  }
}
</script>
<style scoped>
.buttonn {
  text-align: center;
}
.form-control {
  border-radius: 8px;
  /* border: 1px ; */
  /* border-block-color: rgb(192, 188, 188); */
  border-color: rgb(228, 227, 227);
}

#employeeID {
  font-size: 0.7rem;
}
.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
</style>
