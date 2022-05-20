<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col col-auto">
          <h1 class="text-primary">Add Customer</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-8 mx-auto">
          <form class="g-0" @submit.prevent="onFormSubmit">
            <div class="row g-5">
              <div class="mb-3 col">
                <label for="Name" class="form-label"
                  >Name
                  <h5 class="dokjun" style="display: inline">*</h5></label
                >
                <input
                  v-model="formData.Name"
                  type="text"
                  :class="[
                    'form-control',
                    formWarning.Name ? '' : 'is-invalid',
                  ]"
                  id="Name"
                />
                <!-- <div class="invalid-feedback">* Name</div> -->
              </div>

              <div class="form-group col">
                <label for="Work" class="form-label"
                  >Work phone
                  <h5 class="dokjun" style="display: inline">*</h5></label
                >
                <input
                  v-model="formData.WorkPhone"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  :class="[
                    'form-control',
                    formWarning.WorkPhone ? '' : 'is-invalid',
                  ]"
                  id="Work"
                />
                <!-- <div class="invalid-feedback">* WorkPhone</div> -->
              </div>
            </div>

            <div class="row g-5">
              <div class="mb-3 col">
                <label for="email" class="form-label"
                  >Email
                  <h5 class="dokjun" style="display: inline">*</h5></label
                >
                <input
                  v-model="formData.Email"
                  type="email"
                  :class="[
                    'form-control',
                    formWarning.Email ? '' : 'is-invalid',
                  ]"
                  id="email"
                />
                <!-- <div class="invalid-feedback">* Email</div> -->
              </div>

              <div class="form-group col">
                <label for="pic" class="form-label"
                  >Hospital Logo
                  <h5 class="dokjun" style="display: inline">*</h5></label
                >

                <input
                  @click="getFile"
                  v-model="formData.Picture"
                  type="text"
                  :class="[
                    'form-control',
                    formWarning.Picture ? '' : 'is-invalid',
                  ]"
                  id="pic"
                />
                <!-- <div class="invalid-feedback">* Picture</div> -->
              </div>
            </div>

            <div class="row g-5">
              <div class="mb-3 col">
                <label for="Address" class="form-label"
                  >Address
                  <h5 class="dokjun" style="display: inline">*</h5></label
                >
                <textarea
                  v-model="formData.Address"
                  :class="[
                    'form-control',
                    formWarning.Address ? '' : 'is-invalid',
                  ]"
                  id="Address"
                  rows="3"
                ></textarea>
                <!-- <div class="invalid-feedback">* Address</div> -->
              </div>

              <div class="form-group col"></div>
            </div>

            <div class="row justify-content-end mt-5">
              <div class="col col-2 d-grid">
                <v-btn
                  dark
                  type="submit"
                  class="btn btn-primary"
                  style="border: 0px gray solid"
                >
                  Submit
                </v-btn>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CustomerService from '../services/CustomerService'
export default {
  components: {
    Navbar
  },
  data () {
    return {
      formData: {
        Name: null,
        WorkPhone: null,
        Email: null,
        Picture: null,
        Address: null
      },
      formWarning: {
        Name: true,
        WorkPhone: true,
        Email: true,
        Picture: true,
        Address: true
      },
      imgBase64: null,
      valid: false
    }
  },
  watch: {
    formData: {
      handler () {
        this.validate()
      },
      deep: true
    }
  },
  methods: {
    validate () {
      for (const key in this.formWarning) {
        this.formData[key]
          ? (this.formWarning[key] = true)
          : (this.formWarning[key] = false)
      }
      this.valid = Object.values(this.formWarning).every((it) => it === true)
    },
    async getFile () {
      const file = await this.selectFile({
        accept: 'image/*',
        multiple: true,
        limit: 1
      })
      if (file) {
        this.formData.Picture = file[0].name

        this.imgBase64 = await this.readFile(file[0])
      }
    },
    selectFile ({ multiple, accept, limit }) {
      return new Promise((resolve) => {
        const input = document.createElement('input')
        input.type = 'file'
        input.multiple = multiple
        input.accept = accept
        input.addEventListener('change', () => {
          if (limit) {
            return resolve(Array.from(input.files).slice(0, limit))
          }
          return resolve(input.files)
        })
        input.click()
      })
    },
    readFile (file) {
      return new Promise((resolve) => {
        const reader = new FileReader()

        reader.addEventListener(
          'load',
          function () {
            resolve(this.result)
          },
          false
        )

        reader.readAsDataURL(file)
      })
    },
    onFormSubmit () {
      this.validate()
      if (!this.valid) return
      CustomerService.add({
        ...this.formData,
        Picture: this.imgBase64
      })
        .then(() => {
          this.$swal.fire(
            'success!',
            'Created new item successfully!',
            'success'
          )

          this.$router.push('/customer')
        })
        .catch((e) => {
          this.$swal.fire('Oops...', e, 'error')
        })
    }
  }
}
</script>

<style scoped>
.form-control {
  border-radius: 8px;
  /* border: 1px ; */
  /* border-block-color: rgb(192, 188, 188); */
  border-color: rgb(228, 227, 227);
}
.dokjun {
  color: red;
}
.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
</style>
