<template>
  <div class="card-body">
    <div class="text-center col-12">
      <img
        :src="formData.Picture"
        alt="Image"
        class="rounded-circle"
        height="150"
      />
    </div>
    <div class="row g-0">
      <div class="mb-3 d-flex flex-column">
        <label class="fw-bold">Name</label>
        <label>{{ formData.Name }}</label>
      </div>
    </div>
    <div class="row g-0">
      <div class="mb-3 d-flex flex-column">
        <label class="fw-bold">Email</label>
        <label>{{ formData.Email }}</label>
      </div>
    </div>
    <div class="row g-0">
      <div class="mb-3 d-flex flex-column">
        <label for="Address" class="fw-bold">Address</label>
        <div class="col-8">
          <input
            type="text"
            class="form-control"
            id="Address"
            :value="formData.Address"
          />
        </div>
      </div>
    </div>
    <div class="row g-0">
      <div class="mb-3 d-flex flex-column">
        <label for="Address" class="fw-bold">Phone</label>
        <div class="col-6">
          <input
            type="text"
            class="form-control"
            id="Address"
            :value="formData.WorkPhone"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerService from "../services/CustomerService";
export default {
  name: "profileCustomer",
  props: {
    customerData: {
      type: Object,
      default: () => {},
    },
    keyCustomer: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      formData: {
        Name: null,
        WorkPhone: null,
        Email: null,
        Picture: null,
        Address: null,
      },
    };
  },
  watch: {
    customerData(v) {
      if (v) {
        this.formData = v;
      }
    },
    keyCustomer(v) {
      console.log("🚀 ~ file: profileCustomer.vue ~ line 84 ~ key ~ v", v)
      if(v) {
           let dbRef = CustomerService.doc(v);
            dbRef.get().then((doc) => {
                console.log("🚀 ~ file: profileCustomer.vue ~ line 87 ~ dbRef.get ~ doc", doc)
                this.formData = doc.data();
            }).catch((error) => {
                console.log(error)
            })
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
