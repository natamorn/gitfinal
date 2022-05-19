<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-lg-4 col-sm-6 mx-auto">
        <button class="btn btn-primary" @click="randomIndex">Random</button>
        <hr />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-lg-4 col-sm-6 m-3 mx-auto">
        <div class="card">
          <image class="card-img-top" :src="currentCustomer.image" />
          <div class="card-header">
            <div class="float-left">{{ currentCustomer.name }}</div>
            <button
              class="btn btn-primaray btn-sm float-right"
              style="border: 0px gray solid"
              @click="onUserClick"
            >{{ buttonName }}</button>
          </div>
          <div class="card-body" v-if="!currentCustomer.status && currentCustomer.address">
            <dl class="row">
              <dt class="col-lg-3 col-sm-4 col-3">ที่อยู่:</dt>
              <dd class="col-lg-9 col-sm-8 col-9">{{ currentCustomer.address }}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Customer",
  data() {
    return {
      currentId: 0,
      customers: [
        {
          name: "Jeerawuth Varin",
          address: "123/321 Moo 1 Kanom Nakornsritammaraj",
          image: "https://picsum.photos/id/1/200/100",
          status: false
        },
        {
          name: "Sombat Suntareewong",
          address: "77/75 Moo 3 Pradubdown Nonthaburi",
          image: "https://picsum.photos/id/290/200/100",
          status: false
        },
        {
          name: "Manee Pimjan",
          address: "3 Klongchagpra Talinchan Bangkok",
          image: "https://picsum.photos/id/12/200/100",
          status: false
        },
        {
          name: "Supaporn Neamsiri",
          address: "5 Moo 1 Moung Suphanburi",
          image: "https://picsum.photos/id/78/200/100",
          status: false
        },
        {
          name: "Aumporn Waenpej",
          image: "https://picsum.photos/id/7/200/100",
          status: false
        },
        {
          name: "Domrong Sugaseam",
          image: "https://picsum.photos/id/32/200/100",
          status: false
        }
      ]
    };
  },
  computed: {
    currentCustomer() {
      return this.customers[this.currentId];
    },
    buttonName() {
      if (this.currentCustomer.address) {
        return this.currentCustomer.status ? "Show" : "Hide";
      } else {
        return "";
      }
    }
  },
  methods: {
    onUserClick() {
      this.currentCustomer.status = !this.currentCustomer.status;
    },
    randomIndex() {
      this.currentId = Math.floor(Math.random() * 6);
    }
  }
};
</script>


<style>
</style>