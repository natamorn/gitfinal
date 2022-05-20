<template>
  <div class="row mt-5">
    <div class="col-lg-4"></div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-body">
          <form @submit.prevent="onFormSubmit">
            <div class="mb-3">
              <label htmlFor="username" class="fw-bold">Email</label>
              <input
                class="form-control"
                type="email"
                :class="getInputClass('username')"
                id="username"
                name="username"
                v-model="formElements.username.value"
                @keyup="onFormChange($event)"
                placeholder="Email"
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("username") }}
              </div>
            </div>
            <div class="mb-3">
              <label htmlFor="password" class="fw-bold">Password</label>
              <input
                class="form-control"
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

            <div class="row">
              <div class="col-lg-6 mb-2">
                <button
                  type="submit"
                  class="btn btn-primary w-100"
                  style="border: 0px gray solid"
                >
                  Login
                </button>
              </div>
              <div class="col-lg-6 mb-2">
                <button
                  type="button"
                  class="btn btn-outline w-100"
                  @click="onSignUp"
                >
                  Sign up
                </button>
              </div>
            </div>

            <!-- <div class="text-center">
              <router-link class="nav-item nav-link" to="/ForgotPassword">Forgot password?</router-link>
            </div> -->
          </form>
        </div>
      </div>
    </div>
    <div class="col-lg-4"></div>
  </div>
</template>

<script>
// import firebase from '../database/firebase'
import store from '@/store'
import SignupService from '../services/SignupService'
export default {
  name: 'loginForm',
  data () {
    return {
      formElements: {
        username: {
          type: 'email',
          value: null,
          validator: {
            pattern: 'email'
            // minLength: 5,
            // maxLength: 64,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        password: {
          type: 'password',
          value: null,
          validator: {
            // minLength: 8,
          },
          touched: false,
          error: { status: true, message: '' }
        }
      },
      formValid: false
    }
  },
  // created() {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if(user) {
  //       this.$router.push("/loginForm").catch(() => {});
  //     }
  //   });
  // },

  methods: {
    checkUser: function () {
      // firebase.auth().onAuthStateChanged(user =>  {
      //   if (user) {
      //     this.$router.replace("/");
      //   }
      // })
    },
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
    async onFormSubmit () {
      const formData = {}
      for (const name in this.formElements) {
        formData[name] = this.formElements[name].value
      }
      console.log(formData)

      const chkUser = await SignupService.where('email', '==', formData.username).where('password', '==', formData.password).get()
      if (chkUser.empty) {
        this.$swal.fire('Oops...', 'Username or password is incorrect!', 'warning')
        return 0
      }
      store.state.user.loggedIn = true
      this.$router.push('/Home')
      // .then((snapshotChange) => {
      //   console.log('🚀 ~ file: loginForm.vue ~ line 188 ~ .then ~ snapshotChange', snapshotChange)
      //   // snapshotChange.forEach((doc) => {
      //   //   console.log('doc.data() :>> ', doc.data())
      //   // })
      //   store.state.user.loggedIn = true
      //   this.$router.push('/Home')
      // })
      // .catch((e) => {
      //   console.log('🚀 ~ file: loginForm.vue ~ line 196 ~ onFormSubmit ~ e', e)
      //   this.$swal.fire(
      //     'warning!',
      //     'Username or password is incorrect!',
      //     'warning'
      //   )
      // })
      // this.$router.replace("/Home");
    },
    onSignUp () {
      this.$router.replace('/Signup')
    }

    // async onSubmit(event) {
    //   event.preventDefault();
    //   const auth = getAuth();
    //   await signInwithEmailAndPassword(
    //     auth,
    //     this.form.username,
    //     this.form.password
    //   )
    //   .then(() => {
    //     this.$router.push("./AddProductForm").catch(() => {});
    //   })
    //   .catch((error) => {
    //     alert(error.massage);
    //   });
    // },
  },
  beforeMount () {
    this.checkUser()
  }
}
</script>

<style scoped>
.card {
  padding-top: 2em;
  padding-bottom: 4em;
}
.buttonn {
  text-align: center;
}
.form-control {
  border-radius: 8px;
  /* border: 1px ; */
  /* border-block-color: rgb(192, 188, 188); */
  border-color: rgb(228, 227, 227);
}
.mb-3 {
  /* margin-top: 2em; */
  padding-top: 1em;
}
.row {
  padding-top: 1em;
}
.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
</style>
