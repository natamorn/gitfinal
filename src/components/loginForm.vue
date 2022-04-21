<template>
  <div class="row">
    <div class="col-sm-6 mt-5 card mx-auto">
      <div class="card-body">
        <form @submit.prevent="onFormSubmit">
          <div class="form-group">
            <label htmlFor="username">User Name</label>
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

          <div class="form-group">
            <label htmlFor="password">Password</label>
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


          <div class="buttonn">
            <button
              type="submit"
              class="btn btn-outline-success"
              :disabled="!formValid"
            >
              Login
            </button>
&nbsp;
            <button
            class="btn btn-outline" @click="onSingup" >
              Singup
            </button>
<div>
           <button
            class="btn -outline" @click="onForgotPassword" >
              Forgot Password?
            </button></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { 
//   getAuth,
//   signInwithEmailAndPassword,
//   onAuthStateChanged,
//   } from "firebase/auth";
  
// import AddProductFormVue from './AddProductForm.vue';

export default {
  name: "loginForm",
  data() {
    return {
      formElements: {
        username: {
          type: "text",
          value: null,
          validator: {
            required: true,
            minLength: 5,
            maxLength: 15
          },
          touched: false,
          error: { status: true, message: "" }
        },
        password: {
          type: "password",
          value: null,
          validator: {
            required: true,
            minLength: 8
          },
          touched: false,
          error: { status: true, message: "" }
        }
      },
      formValid: false
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
        message: validatorObject.message
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
      if (value.trim().length === 0 && rule.required) {
        valid = false;
        message = "จำเป็นต้องกรอก";
      }
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
          : ["form-control", "is-valid"];
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
    },
    onSingup() {
      this.$router.replace("/Singup");
    },
  onForgotPassword(){
    this.$router.replace("/ForgotPassword");
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
};
</script>
<style>
/* 
.card {
  max-width: 450px;
} */
.buttonn{
 text-align: center;
}

</style>
