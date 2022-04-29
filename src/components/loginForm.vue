<template>
  <div class="row mt-5">
    <div class="col-lg-4"></div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-body">
          <form @submit.prevent="onFormSubmit">
            <div class="mb-3">
              <label htmlFor="username" class="form-label">Username</label>
              <input
                type="text"
                :class="getInputClass('username')"
                id="username"
                name="username"
                v-model="formElements.username.value"
                @keyup="onFormChange($event)"
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("username") }}
              </div>
            </div>
            <div class="mb-3">
              <label htmlFor="password" class="form-label">Password</label>
              <input
                type="password"
                :class="getInputClass('password')"
                id="password"
                name="password"
                v-model="formElements.password.value"
                @keyup="onFormChange($event)"
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("password") }}
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 mb-2">
                <button type="submit" class="btn btn-primary w-100">Login</button>
              </div>
              <div class="col-lg-6 mb-2">
                <button type="button" class="btn btn-outline w-100" @click="onSignUp">Sign up</button>
              </div>
            </div>

            <div class="text-center">
              <router-link class="nav-item nav-link" to="/ForgotPassword">Forgot password?</router-link>
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
  name: "loginForm",
  data() {
    return {
      formElements: {
        username: {
          type: "text",
          value: null,
          validator: {
            minLength: 5,
            maxLength: 64,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        password: {
          type: "password",
          value: null,
          validator: {
            minLength: 8,
          },
          touched: false,
          error: { status: true, message: "" },
        },
      },
      formValid: false,
    };
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
    
    checkUser: function() {
      // firebase.auth().onAuthStateChanged(user =>  {
      //   if (user) {
      //     this.$router.replace("/");
      //   }
      // })
    },
    onFormChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      let updatedForm = { ...this.formElements };
      updatedForm[name].value = value;
      updatedForm[name].touched = true;
      const validatorObject = this.checkValidator(
        value,
        updatedForm[name].validator
      );
      updatedForm[name].error = {
        status: validatorObject.status,
        message: validatorObject.message,
      };
      let formStatus = true;
      for (let name in updatedForm) {
        if (updatedForm[name].validator.required === true) {
          formStatus = !updatedForm[name].error.status && formStatus;
        }
      }
      this.formElements = updatedForm;
      this.formValid = formStatus;
    },
    checkValidator(value, rule) {
      let valid = true;
      let message = "";

      if (value.length < rule.minLength && valid) {
        valid = false;
        message = `น้อยกว่า ${rule.minLength} ตัวอักษร`;
      }
      if (value.length > rule.maxLength && valid) {
        valid = false;
        message = `มากกว่า ${rule.maxLength} ตัวอักษร`;
      }

      return { status: !valid, message: message };
    },
    getInputClass(name) {
      const elementErrorStatus = this.formElements[name].error.status;
      if (!this.formElements[name].touched) {
        return ["form-control"];
      } else {
        return elementErrorStatus && this.formElements[name].touched
          ? ["form-control", "is-invalid"]
          : ["form-control", ""];
      }
    },
    getErrorMessage(name) {
      return this.formElements[name].error.message;
    },
    onFormSubmit() {
      const formData = {};
      for (let name in this.formElements) {
        formData[name] = this.formElements[name].value;
      }
      console.log(formData);
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.username, formData.password)
        .then(() => {
          this.$router.replace("/");
        })
        .catch(() => {
          alert("Username or password is incorrect")
        });
      //this.$router.replace("/Home");
    },
    onSignUp() {
      this.$router.replace("/Signup");
    },

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
  beforeMount(){
    this.checkUser()
 },
};
</script>
<style>
/* 
.card {
  max-width: 450px;
} */
.buttonn {
  text-align: center;
}
</style>
