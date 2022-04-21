<template>
  <div class="row">
    <div class="col-sm-6 mt-5 card mx-auto">
      <div class="card-body">
        <form @submit.prevent="onFormSubmit">
          <div class="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              :class="getInputClass('email')"
              id="email"
              name="email"
              v-model="formElements.email.value"
              @keyup="onFormChange($event)"
            />
            <div class="invalid-feedback">
              {{ getErrorMessage("email") }}
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

          <div class="form-group">
            <label htmlFor="EmployeeID">Employee ID</label>
            <input
              type="text"
              :class="getInputClass('EmployeeID')"
              id="EmployeeID"
              name="EmployeeID"
              v-model="formElements.EmployeeID.value"
              @keyup="onFormChange($event)"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" 
            />
            <div class="invalid-feedback">
              {{ getErrorMessage("EmployeeID") }}
            </div>
          </div>

          <div class="text-center">
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="!formValid"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { 
  getAuth,
  createUserWithemailAndpassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

export default {
  name: "SingupForm",
  data() {
    return {
      formElements: {
        EmployeeID: {
          type: "text",
          value: null,
          validator: {
            required: true,
            minLength: 5,
            maxLength: 15,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        email: {
          type: "email",
          value: null,
          validator: {
            required: true,
            pattern: "email",
          },
          touched: false,
          error: { status: true, message: "" },
        },
        password: {
          type: "password",
          value: null,
          validator: {
            required: true,
            minLength: 8,
          },
          touched: false,
          error: { status: true, message: "" },
        },
      },
      formValid: false,
    };
  },
  created() { 
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user) {
        this.$router.push("/loginForm").catch(() => {});
      }
    });
  },

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
      if (rule.pattern === "email" && valid) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) === false) {
          valid = false;
          message = "กรอกอีเมล์ไม่ถูกต้อง";
        }
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
    // onFormSubmit() {
    //   const formData = {};
    //   for (let name in this.formElements) {
    //     formData[name] = this.formElements[name].value;
    //   }
    //   console.log(formData);
    // },

    onsubmit(event) {
      event.preventDefault();
      const auth = getAuth();
      createUserWithemailAndpassword(auth, this.form.email, this.form.password)
        .then(async (userCredential) => {
          await updateProfile(userCredential.user, { displayName: this.form.name});
          this.$router.push("/loginForm").catch(() => {});
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
