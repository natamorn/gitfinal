
<template>
  <div class="row">
    <div class="col-sm-10 mx-auto">
      <div class="card-body">
        <form @submit.prevent="onFormSubmit">
          <div class="row mt-4">
            <!-- <div class="form-group col">
              <label htmlFor="RequestInventoryNO" class="fw-bold">Request Inventory NO. </label>
              <br>
              <label>{{ formElements.RequestInventoryNO.value }}</label> -->
            <!-- <input
                type="text"
                :class="getInputClass('RequestInventoryNO')"
                id="RequestInventoryNO"
                name="RequestInventoryNO"
                v-model="formElements.RequestInventoryNO.value"
                @keyup="onFormChange($event)"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                required
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("RequestInventoryNO") }}
              </div> -->
            <!-- </div> -->

            <!-- <div class="form-group col"> -->
            <!-- <div class="col"> -->
            <!-- <label for="Date" class="fw-bold">Date <h5 class="dokjun" style="display: inline">*</h5></label>
              <br>
              <input
                class="form-control"
                type="Date"
                id="Date"
                v-model="formElements.date.value"
                name="Date"
                required

              /> -->
            <!-- </div> -->
            <!-- </div>
          </div> -->

            <!-- <div class="row mt-4">
            <div class="form-group col">
              <label htmlFor="division" class="fw-bold">แผนก <h5 class="dokjun" style="display: inline">*</h5></label>
              <br>
              <input
                type="text"
                :class="getInputClass('division')"
                id="division"
                name="division"
                v-model="formElements.division.value"
                @keyup="onFormChange($event)"
                required

              />
              <div class="invalid-feedback">
                {{ getErrorMessage("division") }}
              </div>
            </div> -->

            <!-- <div class="form-group col">
              <label htmlFor="name" class="fw-bold">ผู้ขอเบิก <h5 class="dokjun" style="display: inline">*</h5></label>
              <input
                type="text"
                :class="getInputClass('name')"
                id="name"
                name="name"
                v-model="formElements.name.value"
                @keyup="onFormChange($event)"
                required

              />
              <div class="invalid-feedback">
                {{ getErrorMessage("name") }}
              </div>
            </div>
          </div> -->

            <!-- <div class="row mt-4">
            <div class="form-group col">
              <label htmlFor="note" class="fw-bold">หมายเหตุ </label>
              <input
                type="text"
                :class="getInputClass('note')"
                id="note"
                name="note"
                v-model="formElements.note.value"
                @keyup="onFormChange($event)"

              />
              <div class="invalid-feedback">
                {{ getErrorMessage("note") }}
              </div>
            </div> -->

            <!-- <div class="form-group col">
              <label htmlFor="ReferTo" class="fw-bold">อ้างถึง <h5 class="dokjun" style="display: inline">*</h5></label>
              <input
                type="text"
                :class="getInputClass('ReferTo')"
                id="ReferTo"
                name="ReferTo"
                v-model="formElements.ReferTo.value"
                @keyup="onFormChange($event)"
                required

              />
              <div class="invalid-feedback">
                {{ getErrorMessage("ReferTo") }}
              </div>
            </div> -->
          </div>
          <div class="row m-4 text-center">
            <table class="table table-hover">
              <thead>
                <tr class="table-danger fw-bold">
                  <td>ลำดับ</td>
                  <td>P/N</td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>จำนวนเบิก</td>
                  <td>Total</td>
                  <td>หมายเหตุ</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(it, index) in productHistory" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ it["Insert_Product_P/N"] }}</td>
                  <td>{{ it.Insert_Product_Name }}</td>
                  <td>{{ it.Insert_Product_Price }}</td>
                  <td>{{ it.payCount.toLocaleString("en-US") }}</td>
                  <td>{{ it.Total_RI.toLocaleString("en-US") }}</td>
                  <td>{{ it.remark }}</td>
                </tr>
                <tr v-for="(it, index) in formProducts" :key="index">
                  <td>
                    <label for="">{{ productHistory.length + 1 }}</label>
                  </td>
                  <td>
                    <div class="form-group col">
                      <select
                        v-model="it.selectedProduct"
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option
                          v-for="itA in listProduct"
                          :key="itA"
                          :value="itA"
                        >
                          {{ itA["p/n"] }}
                        </option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <label for="">{{
                      it.selectedProduct && it.selectedProduct.Name
                    }}</label>
                  </td>
                  <td>
                    <label for="">{{
                      it.selectedProduct &&
                      it.selectedProduct.Price.toLocaleString("en-US")
                    }}</label>
                  </td>
                  <td>
                    <input
                      v-model="it.payCount"
                      type="number"
                      class="form-control"
                      id="AmountReceived"
                      name="AmountReceived"
                    />
                  </td>
                  <td>
                    <label for="">{{
                      it.Total_RI.toLocaleString("en-US")
                    }}</label>
                  </td>
                  <td>
                    <input
                      v-model="it.remark"
                      type="text"
                      class="form-control"
                      id="NoteTable"
                      name="NoteTable"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--
          <div class="text-center">
            <button
              type="button"
              @click="addFieldProduct()"
              class="btn btn-primary"
              style="border: 0px gray solid"
            >
              Add
            </button>

            &nbsp;
            <button
              type="reset"
              class="btn btn-outline-danger"
              value="reset"
              @click="removeFieldProduct()"
            >
              Delete
            </button>
          </div> -->

          <div class="row justify-content-end">
            <div class="col col-2 d-grid gap-2">
              <button
                type="submit"
                class="btn btn-primary"
                style="border: 0px gray solid"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import RequestInventoryService from '../services/RequestInventoryService'
import ProductService from '../services/ProductService'
export default {
  name: 'AddProductForm',
  data () {
    return {
      formElements: {
        RequestInventoryNO: {
          type: 'text',
          value: null,
          validator: {
            // minLength: 5,
            // maxLength: 15,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        date: {
          type: 'date',
          value: null,
          validator: {
            // minLength: 5,
            // maxLength: 15,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        division: {
          type: 'text',
          value: null,
          validator: {
            // minLength: 5,
            // maxLength: 15,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        name: {
          type: 'text',
          value: null,
          validator: {
            // minLength: 5,
            // maxLength: 15,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        note: {
          type: 'text',
          value: null,
          validator: {
            // minLength: 5,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        ReferTo: {
          type: 'text',
          value: null,
          validator: {
            // minLength: 5,
            // maxLength: 15,
          },
          touched: false,
          error: { status: true, message: '' }
        }
      },
      formValid: false,

      listProduct: [],
      defaultFormProducts: {
        selectedProduct: null,
        payCount: 1,
        Total_RI: 1,
        remark: ''
      },
      formProducts: [
        {
          selectedProduct: null,
          payCount: 1,
          Total_RI: 1,
          remark: ''
        }
      ],
      rid: null,
      productHistory: []
    }
  },
  watch: {
    formProducts: {
      handler (item) {
        item.forEach((it) => {
          if (it.selectedProduct) {
            it.Total_RI = it.payCount
          }
        })
      },
      deep: true
    },
    // selectedProduct(v) {
    //   if (v) {
    //     this.Total_RI = this.selectedProduct.Price * this.payCount;
    //   }
    // },
    payCount (v) {
      if (v) {
        this.Total_RI = this.payCount
      }
    }
  },
  mounted () {
    // ProductService.add({'p/n': 1, Name: 'productA', Price: 100000})
    // ProductService.add({'p/n': 2, Name: 'productB', Price: 200000})
    //  RequestInventoryService.get().then((snapshot) => {
    //         snapshot.forEach((doc) => {

    //           RequestInventoryService.doc(doc.id).delete()
    //         });
    //       });

    if (this.$route.query.key) {
      this.rid = this.$route.query.key

      RequestInventoryService.doc(this.rid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            for (const name in this.formElements) {
              this.formElements[name].value = doc.data()[name]
            }

            this.productHistory = doc.data().products
          } else {
            // doc.data() will be undefined in this case
            console.log('No such document!')
          }
        })
    }
    ProductService.get().then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        var id = childSnapshot.id
        var data = childSnapshot.data()
        this.listProduct.push({ id: id, ...data })
      })
    })
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
      const groupBy = (array) => {
        // Return the end result
        return array.reduce((result, currentValue) => {
          if (currentValue.selectedProduct) {
            (result[currentValue.selectedProduct['p/n']] =
              result[currentValue.selectedProduct['p/n']] || []).push(
              currentValue
            )
            return result
          }
        }, {}) // empty object is the initial value for result object
      }

      const tempData = [
        ...this.formProducts.filter((it) => it.selectedProduct)
      ]
      if (this.rid) {
        const tempForm = this.productHistory.map((it) => {
          const found = this.listProduct.find(
            (itR) => itR['p/n'] === it['Insert_Product_P/N']
          )
          return {
            selectedProduct: found,
            payCount: it.payCount,
            Total_RI: it.Total_RI,
            remark: it.remark
          }
        })
        tempData.push(...tempForm)
      }

      const groupProduct = groupBy(tempData)
      console.log(
        '🚀 ~ file: AddProductForm.vue ~ line 446 ~ onFormSubmit ~ groupProduct',
        groupProduct
      )

      if (groupProduct) {
        formData.products = Object.keys(groupProduct).map((key) => {
          const TotalRI = groupProduct[key].reduce(
            (total, num) => (total += num.Total_RI),
            0
          )
          const payCount = groupProduct[key].reduce(
            (total, num) => (total += num.payCount),
            0
          )
          console.log('groupProduct[key] :>> ', groupProduct[key])
          return {
            'Insert_Product_P/N': groupProduct[key][0].selectedProduct['p/n'],
            Total_RI: TotalRI,
            payCount,
            Insert_Product_Name: groupProduct[key][0].selectedProduct.Name,
            Insert_Product_Price: groupProduct[key][0].selectedProduct.Price,
            remark: groupProduct[key][0].remark
          }
        })
      }
      if (this.rid) {
        RequestInventoryService.doc(this.rid)
          .update(formData)
          .then(() => {
            this.$swal.fire('success!', 'Update item successfully!', 'success')
            this.$router.replace('/Product')
          })
          .catch((e) => {
            this.$swal.fire('Oops...', e, 'error')
          })
      } else {
        RequestInventoryService.add(formData)
          .then(() => {
            this.$swal.fire(
              'success!',
              'Created new item successfully!',
              'success'
            )
            this.$router.replace('/Product')
          })
          .catch((e) => {
            this.$swal.fire('Oops...', e, 'error')
          })
      }
    },
    onReset () {
      this.formElements = ''
    },
    addFieldProduct () {
      this.formProducts.push(
        JSON.parse(JSON.stringify(this.defaultFormProducts))
      )
    },
    removeFieldProduct () {
      this.formProducts.splice(this.formProducts.length - 1, 1)
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
.dokjun {
  color: red;
}
</style>>
