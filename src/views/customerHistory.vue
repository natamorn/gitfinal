<template>
  <Navbar />

  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <ProfileCustomer :keyCustomer="keyCustomer"/>
      </div>

      <div class="col-8 d-flex justify-content-center">
        <div class="col-10">
          <div class="mb-3 row">
            <label for="search" class="col-auto col-form-label">
              <h5 class="text-primary">ประวัติการซื้อ</h5></label
            >
            <div class="col-sm-6">
              <input type="text" class="form-control" id="search" />
            </div>
          </div>

          <div class="mb-3 row">
            <div class="card py-2  border-success ">
              <div class="d-flex justify-content-between">
                <div class="p-2">
                  <h5>หมายเลข 1</h5>
                </div>
                <div class="p-2">
                  <div class="d-flex justify-content-between">
                    <div>วันที่สั่งซืื้อ</div>&nbsp;&nbsp;&nbsp;
                    <div>1 กก 56</div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div>ยอด</div>
                    <div>1000</div>
                  </div>
                </div>
              </div>
              <!-- <div class="row g-0 justify-content-between" >
                <div class="col-3">
                  <div class="align-items-center justify-content-center">
                    <img
                      src="https://picsum.photos/400/400/?image=20"
                      alt="Image"
                      class="rounded-circle"
                      height="60"
                    />
                  </div>
                </div>
                <div class="col align-items-center justify-content-center">
                  <div class="d-flex flex-column justify-content-center">
                    <span> 111</span>
                    <span class="f-20 font-weight-bold">22</span>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ProfileCustomer from "../components/profileCustomer.vue";
export default {
  name: "customer",
  components: {
    Navbar,
    ProfileCustomer,
  },
  data() {
    return {
      keyCustomer: null
    }
  },
  mounted () {
   if(this.$route.query.key){
     this.keyCustomer = this.$route.query.key
   }
  },
};
</script>

<style lang="scss" scoped></style>
