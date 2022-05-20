<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col col-auto">
          <h1 class="text-primary">New Product</h1>
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
                <label for="PN" class="form-label"
                  >P/N
                  <h5 class="dokjun" style="display: inline">*</h5></label
                >
                <input
                  v-model="formData.PN"
                  type="text"
                  :class="['form-control', formWarning.PN ? '' : 'is-invalid']"
                  id="PN"
                />
                <!-- <div class="invalid-feedback">* WorkPhone</div> -->
              </div>
            </div>

            <div class="row g-5">
              <div class="mb-3 col">
                <label for="C" class="form-label"
                  >C
                  <h5 class="dokjun" style="display: inline">*</h5></label
                >
                <input
                  v-model="formData.C"
                  type="text"
                  :class="['form-control', formWarning.C ? '' : 'is-invalid']"
                  id="C"
                />
                <!-- <div class="invalid-feedback">* Email</div> -->
              </div>

              <div class="form-group col">
                <label for="Price" class="form-label"
                  >Price (บาท)
                  <h5 class="dokjun" style="display: inline">*</h5></label
                >

                <input
                  v-model.number="formData.Price"
                  type="number"
                  :class="[
                    'form-control',
                    formWarning.Price ? '' : 'is-invalid',
                  ]"
                  id="Price"
                />
                <small id="employeeID" class="form-text text-muted"
                  >เป็นตัวเลขเท่านั้น</small
                >
                <!-- <div class="invalid-feedback">* Picture</div> -->
              </div>
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
import ProductService from '@/services/ProductService'
export default {
  name: 'NewProduct',
  data () {
    return {
      formData: {
        Name: null,
        PN: null,
        C: null,
        Price: null
      },
      formWarning: {
        Name: true,
        PN: true,
        C: true,
        Price: true
      },
      imgBase64: null
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

    onFormSubmit () {
      console.log('1 :>> ', 1)
      this.validate()
      if (!this.valid) return 0
      ProductService.add({
        ...this.formData,
        history: []
      })
        .then(() => {
          this.$swal.fire(
            'success!',
            'Created new item successfully!',
            'success'
          )

          this.$router.push('/Product')
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
