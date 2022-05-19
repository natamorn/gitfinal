<template>
  <div class="row mt-5">
    <div class="col-lg-4"></div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-body">
          <h4 class="mb-4 ">Sign Up</h4>
          <form @submit.prevent="onSubmit">
            <div class="mb-3">
              <label class="mb-2 fw-bold" htmlFor="email">Email</label>
              <input
                type="email"
                :class="getInputClass('email')"
                id="email"
                name="email"
                v-model="formElements.email.value"
                @keyup="onFormChange($event)"
                placeholder="Email"
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("email") }}
              </div>
            </div>
            <div class="mb-3">
              <label class="mb-2 fw-bold" htmlFor="password">Password</label>
              <input
                type="password"
                :class="getInputClass('password')"
                id="password"
                name="password"
                v-model="formElements.password.value"
                @keyup="onFormChange($event)"
                placeholder="Password"
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("password") }}
              </div>
            </div>

            <div class="mb-3">
              <label class="mb-2 fw-bold" htmlFor="EmployeeID">Employee ID</label>
              <input
                type="text"
                :class="getInputClass('EmployeeID')"
                id="EmployeeID"
                name="EmployeeID"
                v-model="formElements.EmployeeID.value"
                @keyup="onFormChange($event)"
                placeholder="Employee ID"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              />
              <small id="employeeID" class="form-text text-muted ">เป็นตัวเลขเท่านั้น</small>
              <div class="invalid-feedback">
                {{ getErrorMessage("EmployeeID") }}
              </div>
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

import firebase from '../database/firebase'

export default {
  name: 'SignupForm',
  data () {
    return {
      formElements: {
        EmployeeID: {
          type: 'text',
          value: null,
          validator: {
            required: true
            // pattern: "emloyeeID",
            // minLength: 5,
            // maxLength: 15,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        email: {
          type: 'email',
          value: null,
          validator: {
            required: true,
            pattern: 'email'
          },
          touched: false,
          error: { status: true, message: '' }
        },
        password: {
          type: 'password',
          value: null,
          validator: {
            required: true
            // minLength: 8,
          },
          touched: false,
          error: { status: true, message: '' }
        }
      },
      formValid: false
    }
  },

  methods: {
    onFormChange (event) {
      const name = event.target.name
      const value = event.target.value
      const updatedForm = { ...this.formElements }
      updatedForm[name].value = value
      updatedForm[name].touched = true
      const validatorObject = this.checkValidator(
        value,
        updatedForm[name].validator
      )
      updatedForm[name].error = {
        status: validatorObject.status,
        message: validatorObject.message
      }
      let formStatus = true
      for (const name in updatedForm) {
        if (updatedForm[name].validator.required === true) {
          formStatus = !updatedForm[name].error.status && formStatus
        }
      }
      this.formElements = updatedForm
      this.formValid = formStatus
    },
    checkValidator (value, rule) {
      let valid = true
      let message = ''

      if (value.length < rule.minLength && valid) {
        valid = false
        message = `น้อยกว่า ${rule.minLength} ตัวอักษร`
      }
      if (value.length > rule.maxLength && valid) {
        valid = false
        message = `มากกว่า ${rule.maxLength} ตัวอักษร`
      }
      if (rule.pattern === 'email' && valid) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) === false) {
          valid = false
          message = 'กรอกอีเมล์ไม่ถูกต้อง'
        }
      }

      return { status: !valid, message: message }
    },
    getInputClass (name) {
      const elementErrorStatus = this.formElements[name].error.status
      if (!this.formElements[name].touched) {
        return ['form-control']
      } else {
        return elementErrorStatus && this.formElements[name].touched
          ? ['form-control', 'is-invalid']
          : ['form-control', '']
      }
    },
    getErrorMessage (name) {
      return this.formElements[name].error.message
    },
    onSubmit () {
      const formData = {}
      for (const name in this.formElements) {
        formData[name] = this.formElements[name].value
      }
      console.log(formData)

      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(data => {
          data.user
            .updateProfile({
              employeeId: formData.EmployeeID
            })
            .then(() => {
              alert('Registered Successful')
              this.$router.replace('/')
            })
        })
        .catch(err => {
          this.error = err.message
        })
    }
  }
}
</script>
<style scoped>

.buttonn {
  text-align: center;
}
.form-control{
  border-radius:8px;
  /* border: 1px ; */
  /* border-block-color: rgb(192, 188, 188); */
  border-color: rgb(228, 227, 227);
}

#employeeID{
  font-size: 0.7rem ;
}
.btn:hover{
     transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
</style>
