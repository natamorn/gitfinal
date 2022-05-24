<template>
  <div class="row">
    <div class="col-sm-10 mx-auto" id="printableArea">
      <div class="card-body">
        <form @submit.prevent="onFormSubmit">
          <div class="row mt-4">
            <div class="form-group col">
              <label htmlFor="OrderFormNo" class="fw-bold"
                >Order Form NO.</label
              >
              <br />
              <label>{{ formElements.OrderFormNo.value }}</label>
              <!-- <input
                type="text"
                :class="getInputClass('OrderFormNo')"
                id="OrderFormNo"
                name="OrderFormNo"
                v-model="formElements.OrderFormNo.value"
                @keyup="onFormChange($event)"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                required
                :disabled="orderId"
                style="border: 0px black solid"
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("OrderFormNo") }}
              </div> -->
            </div>

            <div class="form-group col">
              <label htmlFor="Sale" class="fw-bold"
                >Sale
                <h5 class="dokjun" style="display: inline">*</h5></label
              >
              <!-- <input
                type="text"
                :class="getInputClass('Sale')"
                id="Sale"
                name="Sale"
                v-model="formElements.Sale.value"
                @keyup="onFormChange($event)"
                required
              /> -->

              <select
                v-model="formElements.Sale.value"
                :class="`form-select ${getInputClass('Sale')}`"
                aria-label="Default select example"
                id="Sale"
                :disabled="orderId"
                name="Sale"
                required
              >
                <option
                  v-for="(it, index) in listEmployee"
                  :key="index"
                  :value="it.EmployeeID"
                >
                  {{ it.email }}
                </option>
              </select>
              <div class="invalid-feedback">
                {{ getErrorMessage("Sale") }}
              </div>
            </div>
          </div>

          <!-- <div class="row mt-4">
            <div class="form-group col">
              <label htmlFor="TanderNo">Tander No. *</label>
              <input
                type="text"
                :class="getInputClass('TanderNo')"
                id="TanderNo"
                name="TanderNo"
                v-model="formElements.TanderNo.value"
                @keyup="onFormChange($event)"
                required
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("TanderNo") }}
              </div>
            </div>

            <div class="form-group col">
              <label htmlFor="ProductLine">Product Line *</label>
              <input
                type="text"
                :class="getInputClass('ProductLine')"
                id="ProductLine"
                name="ProductLine"
                v-model="formElements.ProductLine.value"
                @keyup="onFormChange($event)"
                required
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("ProductLine") }}
              </div>
            </div>
          </div> -->
          <div class="row mt-4">
            <div class="form-group col">
              <label htmlFor="HospitalName" class="fw-bold"
                >Hospital Name
                <h5 class="dokjun" style="display: inline">*</h5></label
              >
              <div class="form-group col">
                <select
                  :disabled="orderId"
                  v-model="formElements.HospitalName.value"
                  :class="`form-select ${getInputClass('HospitalName')}`"
                  aria-label="Default select example"
                  id="HospitalName"
                  name="HospitalName"
                  required
                >
                  <option v-for="(it, index) in customerList" :key="index">
                    {{ it.Name }}
                  </option>
                </select>
              </div>
              <!-- <input
                type="text"
                :class="getInputClass('HospitalName')"
                id="HospitalName"
                name="HospitalName"
                v-model="formElements.HospitalName.value"
                @keyup="onFormChange($event)"
                required
              /> -->
              <div class="invalid-feedback">
                {{ getErrorMessage("HospitalName") }}
              </div>
            </div>

            <div class="form-group col">
              <label for="HospitalDate" class="fw-bold"
                >Date
                <h5 class="dokjun" style="display: inline">*</h5></label
              >
              <input
                :disabled="orderId"
                class="form-control"
                type="Date"
                v-model="formElements.HospitalDate.value"
                id="HospitalDate"
                name="HospitalDate"
              />
            </div>
          </div>

          <div class="row mt-4">
            <div class="form-group col">
              <label htmlFor="HospitalID" class="fw-bold"
                >Hospital Phone
              </label>
              <br />
              <label>{{ formElements.HospitalPhone.value }}</label>
              <!-- <input
                :disabled="orderId"
                type="text"
                :class="getInputClass('HospitalID')"
                id="HospitalID"
                name="HospitalID"
                v-model="formElements.HospitalID.value"
                @keyup="onFormChange($event)"
                required
                style="border: 0px black solid"
              />

              <div class="invalid-feedback">
                {{ getErrorMessage("HospitalID") }}
              </div> -->
            </div>

            <div class="form-group col">
              <label htmlFor="Department" class="fw-bold"
                >Department
                <h5 class="dokjun" style="display: inline">*</h5></label
              >
              <input
                :disabled="orderId"
                type="text"
                :class="getInputClass('Department')"
                id="Department"
                name="Department"
                v-model="formElements.Department.value"
                @keyup="onFormChange($event)"
                required
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("Department") }}
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="form-group col">
              <label htmlFor="Address" class="fw-bold">Address</label>
              <br />
              <label>{{ formElements.Address.value }}</label>
              <!-- <input
                :disabled="orderId"
                type="text"
                :class="getInputClass('Address')"
                id="Address"
                name="Address"
                v-model="formElements.Address.value"
                @keyup="onFormChange($event)"
                required
                style="border: 0px black solid"
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("Address") }}
              </div> -->
            </div>
          </div>

          <div class="B">
            <div class="row mt-4">
              <div class="form-group col">
                <label for="DateOpen" class="fw-bold"
                  >วันที่เปิดซอง/สรุป :
                  <h5 class="dokjun" style="display: inline">*</h5></label
                >
                <input
                  :disabled="orderId"
                  class="form-control"
                  type="Date"
                  v-model="formElements.DateOpen.value"
                  id="DateOpen"
                  name="DateOpen"
                />
              </div>

              <div class="form-group col">
                <label htmlFor="WarrantyY" class="fw-bold"
                  >Warranty(Y)
                  <h5 class="dokjun" style="display: inline">*</h5></label
                >
                <!-- <input
                type="text"
                :class="getInputClass('WarrantyY')"
                id="WarrantyY"
                name="WarrantyY"
                v-model="formElements.WarrantyY.value"
                @keyup="onFormChange($event)"
                required
              /> -->
                <select
                  :disabled="orderId"
                  v-model="formElements.WarrantyY.value"
                  :class="`form-select ${getInputClass('WarrantyY')}`"
                  aria-label="Default select example"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <div class="invalid-feedback">
                  {{ getErrorMessage("WarrantyY") }}
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="form-group col">
                <label htmlFor="OutNo" class="fw-bold"
                  >เลขที่หมดสัญญา/ใบสั่งซื้อ
                  <h5 class="dokjun" style="display: inline">*</h5></label
                >
                <input
                  :disabled="orderId"
                  type="text"
                  :class="getInputClass('OutNo')"
                  id="OutNo"
                  name="OutNo"
                  v-model="formElements.OutNo.value"
                  @keyup="onFormChange($event)"
                  required
                />
                <div class="invalid-feedback">
                  {{ getErrorMessage("OutNo") }}
                </div>
              </div>

              <div class="form-group col">
                <label htmlFor="MaintenanceM" class="fw-bold"
                  >Maintenance(M)
                  <h5 class="dokjun" style="display: inline">*</h5></label
                >
                <!-- <input
                type="text"
                :class="getInputClass('MaintenanceM')"
                id="MaintenanceM"
                name="MaintenanceM"
                v-model="formElements.MaintenanceM.value"
                @keyup="onFormChange($event)"
                required
              /> -->
                <select
                  :disabled="orderId"
                  v-model="formElements.MaintenanceM.value"
                  :class="`form-select ${getInputClass('MaintenanceM')}`"
                  aria-label="Default select example"
                >
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <div class="invalid-feedback">
                  {{ getErrorMessage("MaintenanceM") }}
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="form-group col">
                <label htmlFor="InOrder" class="fw-bold"
                  >ใบสั่งซื้อในประเทศ
                  <h5 class="dokjun" style="display: inline">*</h5></label
                >
                <!-- <input
                type="text"
                :class="getInputClass('InOrder')"
                id="InOrder"
                name="InOrder"
                v-model="formElements.InOrder.value"
                @keyup="onFormChange($event)"
                required
              /> -->
                <select
                  :disabled="orderId"
                  v-model="formElements.InOrder.value"
                  :class="`form-select ${getInputClass('InOrder')}`"
                  aria-label="Default select example"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <div class="invalid-feedback">
                  {{ getErrorMessage("InOrder") }}
                </div>
              </div>

              <div class="form-group col">
                <label htmlFor="Installation" class="fw-bold"
                  >Installation
                  <h5 class="dokjun" style="display: inline">*</h5></label
                >
                <!-- <input
                type="text"
                :class="getInputClass('Installation')"
                id="Installation"
                name="Installation"
                v-model="formElements.Installation.value"
                @keyup="onFormChange($event)"
                required
              /> -->
                <select
                  :disabled="orderId"
                  v-model="formElements.Installation.value"
                  :class="`form-select ${getInputClass('Installation')}`"
                  aria-label="Default select example"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <div class="invalid-feedback">
                  {{ getErrorMessage("Installation") }}
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="form-group col">
                <label htmlFor="DateDeliver" class="fw-bold"
                  >กำหนดส่งมอบ
                  <h5 class="dokjun" style="display: inline">*</h5></label
                >
                <input
                  :disabled="orderId"
                  class="form-control"
                  type="date"
                  v-model="formElements.DateDeliver.value"
                  id="DateDeliver"
                  name="DateDeliver"
                  required
                />
              </div>

              <div class="form-group col">
                <label for="DateExpire" class="fw-bold"
                  >วันที่หมดสัญญา
                  <h5 class="dokjun" style="display: inline">*</h5></label
                >
                <input
                  :disabled="orderId"
                  class="form-control"
                  type="Date"
                  v-model="formElements.DateExpire.value"
                  id="DateExpire"
                  name="DateExpire"
                  required
                />
              </div>
              <!-- <div class="form-group col">
              <label htmlFor="Calibrate">Calibrate *</label>
              <input
                type="text"
                :class="getInputClass('Calibrate')"
                id="Calibrate"
                name="Calibrate"
                v-model="formElements.Calibrate.value"
                @keyup="onFormChange($event)"
                required
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("Calibrate") }}
              </div>
            </div> -->
            </div>

            <div class="row mt-4">
              <div class="form-group col">
                <label htmlFor="Refer" class="fw-bold"
                  >อ้างอิงใบเสนอราคา
                  <h5 class="dokjun" style="display: inline">*</h5></label
                >
                <input
                  :disabled="orderId"
                  type="text"
                  :class="getInputClass('Refer')"
                  id="Refer"
                  name="Refer"
                  v-model="formElements.Refer.value"
                  @keyup="onFormChange($event)"
                  required
                />
                <div class="invalid-feedback">
                  {{ getErrorMessage("Refer") }}
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="form-group col">
                <label htmlFor="Agreement" class="fw-bold"
                  >ข้อตกลงเพิ่มเติม</label
                >
                <input
                  :disabled="orderId"
                  type="text"
                  :class="getInputClass('Agreement')"
                  id="Agreement"
                  name="Agreement"
                  v-model="formElements.Agreement.value"
                  @keyup="onFormChange($event)"
                />
                <div class="invalid-feedback">
                  {{ getErrorMessage("Agreement") }}
                </div>
              </div>
            </div>
          </div>

          <div class="row text-center mt-4">
            <table
              :class="`table table-hover ${
                flag === 'addOrder' ? 'table-hover' : 'table-borderless'
              }`"
            >
              <thead>
                <tr class="table-danger">
                  <td class="fw-bold">Items</td>
                  <td class="fw-bold">P/N</td>
                  <td class="fw-bold">PG</td>
                  <td class="fw-bold">QTY</td>
                  <td class="fw-bold">Price</td>
                  <td class="fw-bold">Total</td>
                  <td class="fw-bold">Description</td>
                  <td class="fw-bold">Remark</td>
                  <td class="fw-bold"></td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(it, index) in productHistory" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ it.PN }}</td>
                  <td>{{ it.c }}</td>
                  <td>{{ it.qty }}</td>
                  <td>{{ it.price.toLocaleString("en-US") }}</td>
                  <td>{{ it.total.toLocaleString("en-US") }}</td>
                  <td>{{ it.desription }}</td>
                  <td>{{ it.remark }}</td>
                  <td></td>
                </tr>

                <tr
                  v-show="flag === 'addOrder'"
                  v-for="(it, index) in formProducts"
                  :key="index"
                >
                  <td>
                    <label class="mt-2" for="">{{
                      productHistory.length + index + 1
                    }}</label>
                  </td>
                  <td>
                    <select
                      v-model="it.selectedProduct"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option
                        v-for="(itA, indexA) in listProduct"
                        :key="indexA"
                        :value="itA"
                      >
                        {{ itA.PN }}
                      </option>
                    </select>
                  </td>
                  <td>
                    <!-- <input
                      v-model="it.c"
                      type="text"
                      class="form-control"
                      id="C"
                      name="C"
                    /> -->
                    <label class="mt-2" for="">{{
                      it.selectedProduct && it.selectedProduct.C
                    }}</label>
                  </td>
                  <td>
                    <input
                      v-model="it.qty"
                      type="number"
                      class="form-control"
                      id="Option"
                      name="Option"
                    />
                  </td>
                  <td>
                    <label class="mt-2" for="">{{
                      it.selectedProduct &&
                      it.selectedProduct.Price.toLocaleString("en-US")
                    }}</label>
                  </td>
                  <td>
                    <label class="mt-2" for="">{{
                      it.total && it.total.toLocaleString("en-US")
                    }}</label>
                  </td>
                  <td>
                    <input
                      v-model="it.desription"
                      type="text"
                      class="form-control"
                      id="Desription"
                      name="Desription"
                    />
                  </td>
                  <td>
                    <input
                      v-model="it.remark"
                      type="text"
                      class="form-control"
                      id="Remark"
                      name="Remark"
                    />
                  </td>
                  <td>
                    <v-btn
                      @click="removeFieldProduct(index)"
                      class="mt-2"
                      icon
                      color="red"
                    >
                      <v-icon>mdi-window-close</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="5" class="fw-bold">รวมทั้งสิ้น</td>
                  <td class="fw-bold">{{ sumTotal() }}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div class="text-center" v-show="flag === 'addOrder'">
            <v-btn
              dark
              type="button"
              @click="addFieldProduct()"
              class="btn btn-primary"
              style="border: 0px gray solid"
            >
              Add
            </v-btn>
          </div>

          <!-- <div class="row justify-content-end">
            <div class="col col-2 d-grid gap-2">
              <button
                v-show="flag === 'addOrder'"
                type="submit"
                class="btn btn-primary"
                style="border: 0px gray solid"
              >
                Submit
              </button>
            </div>
            <div class="col col-2 d-grid gap-2" v-show="flag === 'viewOrder'">
              <button
                v-show="flag === 'viewOrder'"
                @click="printDiv"
                type="button"
                class="btn btn-outline"
              >
                Print
              </button>
            </div>
          </div> -->
          <v-row class="d-flex justify-end mb-6">
            <v-col cols="2" v-show="flag === 'addOrder'">
              <v-btn
                dark
                block
                type="submit"
                class="btn btn-primary"
                style="border: 0px gray solid"
              >
                Submit
              </v-btn>

              <!-- <v-btn
                dark
                block
               @click="reduceStock()"
                class="btn btn-primary"
                style="border: 0px gray solid"
              >
                Submittest
              </v-btn> -->
            </v-col>
            <v-col cols="1" v-show="flag === 'viewOrder'">
              <v-btn block @click="printDiv" type="button" class="btn white">
                Print
              </v-btn>
            </v-col>
          </v-row>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from "../database/firebase";
import OrderService from '../services/OrderService'
import CustomerService from '../services/CustomerService'
import ProductService from '../services/ProductService'
import SignupService from '../services/SignupService'
import pdfMake from 'pdfmake'
import pdfFonts from '@/assets/font/custom-fonts'
export default {
  name: 'OrderForm',
  props: {
    orderId: {
      type: String,
      default: null
    },
    flag: {
      type: String,
      default: 'addOrder'
    }
  },
  data () {
    return {
      formElements: {
        OrderFormNo: {
          type: 'text',
          value: 1,
          validator: {
            // minLength: 1,
            // maxLength: 15,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        Sale: {
          type: 'text',
          value: null,
          validator: {
            // minLength: 5,
            // maxLength: 15,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        // TanderNo: {
        //   type: "text",
        //   value: null,
        //   validator: {
        //     minLength: 5,
        //     maxLength: 15,
        //   },
        //   touched: false,
        //   error: { status: true, message: "" },
        // },
        // ProductLine: {
        //   type: "text",
        //   value: null,
        //   validator: {
        //     minLength: 5,
        //     maxLength: 15,
        //   },
        //   touched: false,
        //   error: { status: true, message: "" },
        // },
        HospitalName: {
          type: 'text',
          value: null,
          validator: {
            // minLength: 5,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        HospitalEmail: {
          type: 'text',
          value: null,
          validator: {
            // minLength: 5,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        HospitalDate: {
          type: 'date',
          value: null,
          validator: {
            // minLength: 5,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        HospitalPhone: {
          type: 'text',
          value: null,
          validator: {
            // minLengh: 15,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        HospitalID: {
          type: 'text',
          value: null,
          validator: {
            // minLengh: 15,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        Department: {
          type: 'text',
          value: null,
          validator: {
            //   minLength: 5,
            //   maxLength: 15,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        Address: {
          type: 'text',
          value: null,
          validator: {
            // minLength: 5,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        DateOpen: {
          type: 'date',
          value: null,
          validator: {
            // minLength: 5,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        WarrantyY: {
          type: 'text',
          value: null,
          validator: {
            // minLength: 5,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        OutNo: {
          type: 'text',
          value: null,
          validator: {
            // minLength: 5,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        MaintenanceM: {
          type: 'text',
          value: null,
          validator: {
            // minLength: 5,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        DateExpire: {
          type: 'date',
          value: null,
          validator: {
            // minLength: 5,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        Installation: {
          type: 'text',
          value: null,
          validator: {
            // minLength: 5,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        DateDeliver: {
          type: 'date',
          value: null,
          validator: {
            // minLength: 5,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        Calibrate: {
          type: 'text',
          value: null,
          validator: {
            // minLength: 5,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        InOrder: {
          type: 'text',
          value: null,
          validator: {
            // minLength: 5,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        Refer: {
          type: 'text',
          value: null,
          validator: {
            // minLength: 5,
          },
          touched: false,
          error: { status: true, message: '' }
        },
        Agreement: {
          type: 'text',
          value: null,
          validator: {
            // minLength: 5,
          },
          touched: false,
          error: { status: true, message: '' }
        }
      },
      formValid: false,
      uid: null,
      customerList: [],
      listProduct: [],

      productHistory: [],

      formProducts: [
        {
          c: 'HW',
          qty: 1,
          price: null,
          total: null,
          desription: null,
          remark: null,
          selectedProduct: null
        }
      ],
      defaultFormProducts: {
        c: 'HW',
        qty: 1,
        price: null,
        total: null,
        desription: null,
        remark: null,
        selectedProduct: null
      },
      listEmployee: [],
      tempHospital: null,
      tempSale: null
    }
  },
  watch: {
    formProducts: {
      handler (item) {
        item.forEach((it) => {
          if (it.selectedProduct) {
            it.total = +it.qty * it.selectedProduct.Price
            it.price = it.selectedProduct.Price
          }
        })
      },
      deep: true
    },
    'formElements.HospitalName.value' (v) {
      if (v) {
        const found = this.customerList.find((it) => it.Name === v)
        if (found) {
          this.tempHospital = found
          this.formElements.HospitalID.value = found.key
          this.formElements.HospitalPhone.value = found.WorkPhone
          this.formElements.Address.value = found.Address
          this.formElements.HospitalEmail.value = found.Email
        }
      }
    },
    'formElements.DateExpire.value' (v) {
      if (v) {
        if (this.formElements.InOrder.value === 'No') {
          this.formElements.DateDeliver.value = this.addDays(v, 90)
        }
      }
    },
    'formElements.Sale.value' (v) {
      const found = this.listEmployee.find((it) => it.EmployeeID === v)
      if (found) {
        this.tempSale = found
      }
    },
    price (v) {
      if (v) {
        this.total = this.qty * v
      }
    },
    qty (v) {
      if (v) {
        this.total = v * this.price
      } else {
        this.total = 0
      }
    },
    // selectedProduct(v) {
    //   this.price = v.Insert_Product_Price;
    //   // this.total = v.Total_RI;
    // },
    orderId (key) {
      if (key) {
        OrderService.doc(key)
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
    }
  },
  mounted () {
    // OrderService.get().then((snapshotChange) => {
    //       snapshotChange.forEach((doc) => {
    //        OrderService.doc(doc.id).delete()
    //       });
    //     });
    if (this.flag === 'addOrder') {
      // firebase.auth().onAuthStateChanged((user) => {
      //   if (user) {
      //     // User logged in already or has just logged in.
      //     this.formElements.Sale.value = user.uid;
      //   } else {
      //     // User not logged in or has just logged out.
      //   }
      // });

      // SignupService.add({ Emp_ID: 'ME1111', Email: 'Employee@text.com', Pass: '123456'})

      // SignupService.get().then((snapshotChange) => {
      //   snapshotChange.forEach((doc) => {
      //     this.listEmployee.push(doc.data())
      //   })
      // })

      OrderService.get().then((snapshotChange) => {
        this.formElements.OrderFormNo.value = snapshotChange.docs.length + 1
      })
    }
    SignupService.get().then((snapshotChange) => {
      snapshotChange.forEach((doc) => {
        this.listEmployee.push(doc.data())
      })
    })
    console.log(
      '🚀 ~ file: OrderForm.vue ~ line 1019 ~ snapshotChange.forEach ~ this.listEmployee',
      this.listEmployee
    )
    CustomerService.get().then((snapshotChange) => {
      this.customerList = []
      snapshotChange.forEach((doc) => {
        this.customerList.push({
          key: doc.id,
          ...doc.data()
        })
      })
    })

    ProductService.get().then((snapshotChange) => {
      snapshotChange.forEach((doc) => {
        this.listProduct.push({
          key: doc.id,
          ...doc.data()
        })
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

      if (value.length <= rule.minLength && valid) {
        valid = false
        message = `น้อยกว่า ${rule.minLength} ตัวอักษร`
      }
      if (value.length > rule.maxLength && valid) {
        valid = false
        message = `มากกว่า ${rule.maxLength} ตัวอักษร`
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
    async  onFormSubmit () {
      const formData = {}
      for (const name in this.formElements) {
        formData[name] = this.formElements[name].value
      }

      formData.products = [
        ...this.productHistory,

        ...this.formProducts.map((it) => ({
          key: it.selectedProduct.key,
          PN: it.selectedProduct.PN,
          c: it.c,
          qty: it.qty,
          price: it.selectedProduct.Price,
          total: it.total,
          desription: it.desription,
          remark: it.remark
        }))
      ]

      console.log('formData :>> ', formData)

      const chkOrder = await OrderService.where('OutNo', '==', formData.OutNo).get()
      if (!chkOrder.empty) {
        this.$swal.fire('Oops...', 'OrderFormNo have a duplicate!', 'warning')
        return 0
      }

      if (this.flag === 'addOrder') {
        OrderService.add(formData)
          .then(() => {
            this.reduceStock()

            this.$swal.fire(
              'success!',
              'Created new item successfully!',
              'success'
            )
            this.$router.push('/Home')
          })
          .catch((e) => {
            this.$swal.fire('Oops...', e, 'error')
          })
      } else {
        OrderService.doc(this.orderId)
          .update(formData)
          .then(() => {
            this.reduceStock()

            this.$swal.fire('success!', 'Update item successfully!', 'success')
            this.$router.push('/')
          })
          .catch((e) => {
            this.$swal.fire('Oops...', e, 'error')
          })
      }
    },
    async reduceStock () {
      for (const key in this.formProducts) {
        const doc = await ProductService.doc(
          this.formProducts[key].selectedProduct.key
        ).get()
        const tempData = doc.data()
        tempData.Total_RI = tempData.Total_RI - +this.formProducts[key].qty
        await ProductService.doc(
          this.formProducts[key].selectedProduct.key
        ).update(tempData)
      }
    },
    onReset () {
      this.formElements = ''
    },
    addDays (v, days) {
      const today = new Date(v)
      const tomorrow = new Date()

      // Add 1 Day
      tomorrow.setDate(today.getDate() + days)
      return tomorrow.toISOString().split('T')[0]
    },
    addFieldProduct () {
      this.formProducts.push(
        JSON.parse(JSON.stringify(this.defaultFormProducts))
      )
    },
    removeFieldProduct (index) {
      this.formProducts.splice(index, 1)
    },
    printDiv () {
      pdfMake.vfs = pdfFonts.pdfMake.vfs // 2. set vfs pdf font
      pdfMake.fonts = {
        // download default Roboto font from cdnjs.com

        Sarabun: {
          // 3. set Kanit font
          normal: 'Sarabun-Regular.ttf',
          bold: 'Sarabun-Medium.ttf',
          italics: 'Sarabun-Italic.ttf',
          bolditalics: 'Sarabun-MediumItalic.ttf'
        }
      }

      const docDefinition = {
        pageSize: 'A4',
        pageMargins: [20, 20, 20, 20],
        pageOrientation: 'portrait',
        defaultStyle: {
          // 4. default style 'KANIT' font to test
          font: 'Sarabun'
        },
        content: [
          { text: 'ENP', style: 'header', alignment: 'center' },
          {
            table: {
              widths: ['50%', '50%'],
              body: [
                [
                  {
                    text: [
                      { text: 'Order NO : \t', style: 'title' },
                      {
                        text: this.formElements.OrderFormNo.value,
                        style: 'paragraph'
                      }
                    ]
                  },
                  {
                    text: [
                      { text: 'Sale : \t', style: 'title' },
                      { text: this.tempSale.email, style: 'paragraph' }
                    ]
                  }
                ],
                [
                  {
                    text: [
                      { text: 'Hospital Name : \t', style: 'title' },
                      { text: this.tempHospital.Name, style: 'paragraph' }
                    ]
                  },
                  {
                    text: [
                      { text: 'Date : \t', style: 'title' },
                      {
                        text: this.formElements.HospitalDate.value,
                        style: 'paragraph'
                      }
                    ]
                  }
                ],
                [
                  {
                    text: [
                      { text: 'Hospital Phone : \t', style: 'title' },
                      {
                        text: this.formElements.HospitalPhone.value,
                        style: 'paragraph'
                      }
                    ]
                  },
                  {
                    text: [
                      { text: 'Department  : \t', style: 'title' },
                      {
                        text: this.formElements.Department.value,
                        style: 'paragraph'
                      }
                    ]
                  }
                ],
                [
                  {
                    text: [
                      { text: 'Address : \t', style: 'title' },
                      {
                        text: this.formElements.Address.value,
                        style: 'paragraph'
                      }
                    ],
                    colSpan: 2
                  },
                  {}
                ],
                [
                  {
                    text: [
                      { text: 'วันที่เปิดซอง/สรุป : \t', style: 'title' },
                      {
                        text: this.formElements.DateOpen.value,
                        style: 'paragraph'
                      }
                    ]
                  },
                  {
                    text: [
                      { text: 'Warranty(Y) : \t', style: 'title' },
                      {
                        text: this.formElements.WarrantyY.value,
                        style: 'paragraph'
                      }
                    ]
                  }
                ],
                [
                  {
                    text: [
                      {
                        text: 'เลขที่หมดสัญญา/ใบสั่งซื้อ : \t',
                        style: 'title'
                      },
                      {
                        text: this.formElements.OutNo.value,
                        style: 'paragraph'
                      }
                    ]
                  },
                  {
                    text: [
                      { text: 'Maintenance(M) : \t', style: 'title' },
                      {
                        text: this.formElements.MaintenanceM.value,
                        style: 'paragraph'
                      }
                    ]
                  }
                ],
                [
                  {
                    text: [
                      { text: 'ใบสั่งซื้อในประเทศ : \t', style: 'title' },
                      {
                        text: this.formElements.InOrder.value,
                        style: 'paragraph'
                      }
                    ]
                  },
                  {
                    text: [
                      { text: 'Installation : \t', style: 'title' },
                      {
                        text: this.formElements.Installation.value,
                        style: 'paragraph'
                      }
                    ]
                  }
                ],
                [
                  {
                    text: [
                      { text: 'กำหนดส่งมอบ : \t', style: 'title' },
                      {
                        text: this.formElements.DateDeliver.value,
                        style: 'paragraph'
                      }
                    ]
                  },
                  {
                    text: [
                      { text: 'วันที่หมดสัญญา : \t', style: 'title' },
                      {
                        text: this.formElements.DateExpire.value,
                        style: 'paragraph'
                      }
                    ]
                  }
                ],
                [
                  {
                    text: [
                      { text: 'อ้างอิงใบเสนอราคา : \t', style: 'title' },
                      {
                        text: this.formElements.Refer.value,
                        style: 'paragraph'
                      }
                    ]
                  },
                  {
                    text: [
                      { text: 'ข้อตกลงเพิ่มเติม : \t', style: 'title' },
                      {
                        text: this.formElements.Agreement.value,
                        style: 'paragraph'
                      }
                    ]
                  }
                ]
              ]
            },
            layout: 'noBorders',
            style: 'paragraph'
          },
          {
            table: {
              headerRows: 1,
              widths: ['4%', '25%', 'auto', 'auto', 'auto', 'auto', '20%', '20%'],
              body: [
                [
                  { text: 'No', style: 'tableHeader' },
                  { text: 'P/N', style: 'tableHeader' },
                  { text: 'C', style: 'tableHeader' },
                  { text: 'QTY', style: 'tableHeader' },
                  { text: 'Price', style: 'tableHeader' },
                  { text: 'Total', style: 'tableHeader' },
                  { text: 'Description', style: 'tableHeader' },
                  { text: 'Remark', style: 'tableHeader' }
                ],
                ...this.mapPdf(),
                [
                  {
                    text: 'รวมทั้งสิ้น',
                    alignment: 'center',
                    colSpan: 5
                  },
                  {},
                  {},
                  {},
                  {},
                  {
                    text: this.sumTotal(),
                    alignment: 'right'
                  },
                  { text: '', colSpan: 2, border: [false, false, true, true] },
                  {}
                ]
              ]
            }
          }
        ],
        styles: {
          header: {
            fontSize: 20,
            bold: true,
            alignment: 'justify'
          },
          title: {
            fontSize: 12,
            bold: true
          },
          paragraph: {
            fontSize: 12,
            bold: false
          }
        }
      }
      pdfMake.createPdf(docDefinition).open()
    },
    mapPdf () {
      const result = []
      this.productHistory.forEach((it, index) => {
        result.push([
          {
            text: index + 1,
            alignment: 'center'
          },
          {
            text: it.PN
          },
          {
            text: it.c
          },
          {
            text: it.qty,
            alignment: 'right'
          },
          {
            text: it.price.toLocaleString('en-US'),
            alignment: 'right'
          },
          {
            text: it.total.toLocaleString('en-US'),
            alignment: 'right'
          },
          {
            text: it.desription
          },
          {
            text: it.remark
          }
        ])
      })
      return result
    },
    sumTotal () {
      if (this.flag === 'viewOrder') {
        if (this.productHistory.length) {
          const sum = this.productHistory.reduce(
            (total, num) => total + num.total,
            0
          )
          return sum.toLocaleString('en-US')
        }
        return 0
      } else {
        if (this.formProducts.length) {
          const sum = this.formProducts.reduce(
            (total, num) => total + num.total,
            0
          )
          return sum.toLocaleString('en-US')
        }
        return 0
      }
    }
  }
}
</script>

<style scoped>
.dokjun {
  color: red;
}
.form-control {
  border-radius: 8px;
  /* border: 1px ; */
  /* border-block-color: rgb(192, 188, 188); */
  border-color: rgb(228, 227, 227);
}
.table {
  /* padding-top: 5rem; */
  margin-top: 2rem;
}
.B {
  margin-top: 5rem;
}
.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
</style>
>
