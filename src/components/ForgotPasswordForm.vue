<template>
  <div class="row mt-5">
    <div class="col-lg-4"></div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-body">
          <h4 class="mb-4">Reset Your Password</h4>

          <form @submit.prevent="onFormSubmit">
            <div class="mb-3">
              <label class="mb-2" htmlFor="email">Email Address</label>
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
            <div class="mb-3">
              <label class="mb-2" htmlFor="EmployeeID">Employee ID</label>
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

            <div class="row">
              <div class="col-lg-12 mb-2">
                <button type="submit" class="btn btn-primary w-100">
                  Confirm
                </button>
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
export default {
  name: 'ForgotPasswordForm',
  data () {
    return {
      formElements: {
        EmployeeID: {
          type: 'text',
          value: null,
          validator: {
            required: true,
            minLength: 5,
            maxLength: 15
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
    onFormSubmit () {
      const formData = {}
      for (const name in this.formElements) {
        formData[name] = this.formElements[name].value
      }
      console.log(formData)
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
