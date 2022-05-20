<template>
  <div>
    <Navbar />

    <div class="container">
      <div class="row justify-content-between">
        <div class="col col-4">
          <div>
            <input
            v-model="txtSearch"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="ชื่อ"
            />
          </div>
        </div>
        <div class="col col-2 d-grid gap-2">
          <button
            type="button"
            class="btn btn-primary"
            @click="$router.push('/AddCustomer')"
            style="border: 0px gray solid"
          >
            Add Customer
          </button>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col">
          <div v-for="(it, index) in listCustomer" :key="index">
            <div class="card py-2" @click="selectCustomer(it)">
              <div class="row g-0">
                <div class="col-3">
                  <div class="align-items-center justify-content-center">
                    <img
                      :src="it.Picture"
                      alt="Image"
                      class="rounded-circle"
                      height="60"
                    />
                  </div>
                </div>
                <div class="col align-items-center justify-content-center">
                  <div class="d-flex flex-column justify-content-center">
                    <span> {{ it.Name }}</span>
                    <span class="f-20 font-weight-bold">{{ it.Address }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-8 d-flex align-items-center justify-content-center">
          <div class="col-10" v-show="selectedCustomer">
            <ProfileCustomer :customerData="selectedCustomer" />
            <div class="row justify-content-end">
              <div class="col col-4">
                <h5
                  class="text-primary"
                  @click="
                    $router.push(`/customerHistory?key=${selectedCustomer.key}`)
                  "
                >
                  ประวัติการซื้อ
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import ProfileCustomer from '../components/profileCustomer.vue'
import CustomerService from '../services/CustomerService'
export default {
  name: 'customer',
  components: {
    Navbar,
    ProfileCustomer
  },
  data () {
    return {
      txtSearch: '',
      listCustomer: [],
      originList: [],
      selectedCustomer: null
    }
  },
  watch: {
    txtSearch (v) {
      if (v) {
        console.log(
          '🚀 ~ file: customerHistory.vue ~ line 70 ~ txtSearch ~ v',
          v
        )
        this.listCustomer = this.originList.filter(
          (it) => `${it.Name}`.indexOf(v) > -1
        )
      } else {
        this.listCustomer = this.originList
      }
    }
  },
  mounted () {
    // CustomerService.onSnapshot((snapshotChange) => {

    //   snapshotChange.forEach((doc) => {
    //     CustomerService.doc(doc.id).delete()
    //   });
    // });

    CustomerService.onSnapshot((snapshotChange) => {
      this.listCustomer = []
      snapshotChange.forEach((doc) => {
        this.listCustomer.push({
          key: doc.id,
          ...doc.data()
        })
      })
      this.originList = this.listCustomer
    })
  },
  methods: {
    selectCustomer (it) {
      this.selectedCustomer = it
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
.container {
  margin-bottom: 5rem;
}
.card {
  margin-top: 0.5rem;
  /* border-color: black; */
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
</style>
