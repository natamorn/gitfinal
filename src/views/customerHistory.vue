<template>
  <div>
    <Navbar />

    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <ProfileCustomer :keyCustomer="keyCustomer" />
        </div>

        <div class="col-8 d-flex justify-content-center">
          <div class="col-10">
            <div class="mb-3 row">
              <label for="search" class="col-auto col-form-label">
                <h5 class="text-primary">ประวัติการซื้อ</h5></label
              >
              <div class="col-sm-6">
                <input
                  v-model="txtSearch"
                  type="text"
                  class="form-control"
                  id="search"
                />
              </div>
            </div>

            <div class="mb-3 row">
              <div
                class="card py-2 border"
                v-for="(it, index) in listOrder"
                :key="index"
              >
                <a :href="`/viewOrder?key=${it.key}`">
                  <div class="d-flex justify-content-between">
                    <div class="p-2">
                      <h5>หมายเลข {{ it.OrderFormNo }}</h5>
                    </div>
                    <div class="p-2">
                      <div class="d-flex justify-content-between">
                        <div>วันที่สั่งซืื้อ</div>
                        &nbsp;&nbsp;&nbsp;
                        <div>{{ dataFormat(it.HospitalDate) }}</div>
                      </div>
                      <div class="d-flex justify-content-between">
                        <div>ยอด</div>
                        <div>
                          {{
                            it.products[
                              it.products.length - 1
                            ].total.toLocaleString("en-US")
                          }}
                          บาท
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
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
import OrderService from '../services/OrderService'
export default {
  name: 'customer',
  components: {
    Navbar,
    ProfileCustomer
  },
  data () {
    return {
      keyCustomer: null,
      listOrder: [],
      originList: [],
      txtSearch: null
    }
  },
  watch: {
    txtSearch (v) {
      if (v) {
        console.log(
          '🚀 ~ file: customerHistory.vue ~ line 70 ~ txtSearch ~ v',
          v
        )
        this.listOrder = this.originList.filter(
          (it) => `${it.OrderFormNo}`.indexOf(v) > -1
        )
      } else {
        this.listOrder = this.originList
      }
    }
  },
  mounted () {
    if (this.$route.query.key) {
      this.keyCustomer = this.$route.query.key

      OrderService.where('HospitalID', '==', this.keyCustomer)
        .get()
        .then((snapshotChange) => {
          snapshotChange.forEach((doc) => {
            this.listOrder.push({ key: doc.id, ...doc.data() })
          })
          this.listOrder.sort((itA, itB) => itA.OrderFormNo - itB.OrderFormNo)
          this.originList = this.listOrder
        })
    }
  },
  methods: {
    dataFormat (tmp) {
      const date = new Date(tmp)

      return date.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style  scoped>
.form-control {
  border-radius: 8px;
  /* border: 1px ; */
  /* border-block-color: rgb(192, 188, 188); */
  border-color: rgb(228, 227, 227);
}
.card {
  margin-top: 0.5rem;
  border-color: black;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
</style>
