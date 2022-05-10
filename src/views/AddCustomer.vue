<template>
  <Navbar />
  <div class="container">
    <div class="row justify-content-center">
      <div class="col col-auto">
        <h1 class="text-primary">Add Customer</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-8 mx-auto">
        <div class="row g-5">
          <div class="mb-3 col">
            <label for="Name" class="form-label">Name : </label>
            <input v-model="formData.Name" type="text" class="form-control" id="Name" />
          </div>

          <div class="form-group col">
            <label for="Work" class="form-label">Work phone : </label>
            <input v-model="formData.WorkPhone" type="tel" class="form-control" id="Work" />
          </div>
        </div>

        <div class="row g-5">
          <div class="mb-3 col">
            <label for="email" class="form-label">Email : </label>
            <input v-model="formData.Email" type="email" class="form-control" id="email" />
          </div>

          <div class="form-group col">
            <label for="pic" class="form-label">รูป : </label>
            <input v-model="formData.Picture" type="text" class="form-control" id="pic" />
          </div>
        </div>

        <div class="row g-5">
          <div class="mb-3 col">
            <label for="Address" class="form-label">Address : </label>
            <textarea v-model="formData.Address" class="form-control" id="Address" rows="3"></textarea>
          </div>

          <div class="form-group col"></div>
        </div>

        <div class="row justify-content-end mt-5">
          <div class="col col-2 d-grid">
            <button
              type="button"
              class="btn btn-primary"
              @click="onFormSubmit()"
            >
              บันทึก
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import CustomerService from "../services/CustomerService";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      formData: {
        Name: null,
        WorkPhone: null,
        Email: null,
        Picture: null,
        Address: null,
      }
    }
  },
  methods: {
    onFormSubmit() {
       CustomerService.add(this.formData)
        .then(() => {
          this.$swal.fire("success!", "Created new item successfully!", "success");
        })
        .catch((e) => {
          this.$swal.fire("Oops...", e, "error");
        });
    }
  },
};
</script>

<style lang="scss" scoped></style>
