<template>
  <div class="row">
    <div class="col-sm-8 mx-auto">
      <div class="card-body">
        <form @submit.prevent="onFormSubmit" @click="onReset">
          <div class="row mt-4">
            <div class="form-group col">
              <label htmlFor="OrderFormNo">Order Form NO. *</label>
              <input
                type="text"
                :class="getInputClass('OrderFormNo')"
                id="OrderFormNo"
                name="OrderFormNo"
                v-model="formElements.OrderFormNo.value"
                @keyup="onFormChange($event)"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                required
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("OrderFormNo") }}
              </div>
            </div>

            <div class="form-group col">
              <label htmlFor="Sale">เขตการขาย *</label>
              <input
                type="text"
                :class="getInputClass('Sale')"
                id="Sale"
                name="Sale"
                v-model="formElements.Sale.value"
                @keyup="onFormChange($event)"
                required
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("Sale") }}
              </div>
            </div>
          </div>

          <div class="row mt-4">
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
          </div>

          <div class="row mt-4">
            <div class="form-group col">
              <label htmlFor="HospitalName">Hospital Name *</label>
              <input
                type="text"
                :class="getInputClass('HospitalName')"
                id="HospitalName"
                name="HospitalName"
                v-model="formElements.HospitalName.value"
                @keyup="onFormChange($event)"
                required
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("HospitalName") }}
              </div>
            </div>

            <div class="form-group col">
              <label for="Datee">Date</label>
              <input
                class="form-control"
                type="Date"
                id="Datee"
                name="Datee"
                required
              />
            </div>
          </div>

          <div class="row mt-4">
            <div class="form-group col">
              <label htmlFor="HospitalID">Hospital ID *</label>
              <input
                type="text"
                :class="getInputClass('HospitalID')"
                id="HospitalID"
                name="HospitalID"
                v-model="formElements.HospitalID.value"
                @keyup="onFormChange($event)"
                required
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("HospitalID") }}
              </div>
            </div>

            <div class="form-group col">
              <label htmlFor="Department">Department *</label>
              <input
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
              <label htmlFor="Address">Address *</label>
              <input
                type="text"
                :class="getInputClass('Address')"
                id="Address"
                name="Address"
                v-model="formElements.Address.value"
                @keyup="onFormChange($event)"
                required
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("Address") }}
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="form-group col">
              <label for="DateOpen">วันที่เปิดซอง *</label>
              <input
                class="form-control"
                type="Date"
                id="DateOpen"
                name="DateOpen"
                required
              />
            </div>

            <div class="form-group col">
              <label htmlFor="WarrantyM">Warranty(M) *</label>
              <input
                type="text"
                :class="getInputClass('WarrantyM')"
                id="WarrantyM"
                name="WarrantyM"
                v-model="formElements.WarrantyM.value"
                @keyup="onFormChange($event)"
                required
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("WarrantyM") }}
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="form-group col">
              <label htmlFor="OutNo">เลขที่หมดสัญญา/ใบสั่งซื้อ *</label>
              <input
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
              <label htmlFor="MaintenanceM">Maintenance(M) *</label>
              <input
                type="text"
                :class="getInputClass('MaintenanceM')"
                id="MaintenanceM"
                name="MaintenanceM"
                v-model="formElements.MaintenanceM.value"
                @keyup="onFormChange($event)"
                required
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("MaintenanceM") }}
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="form-group col">
              <label for="DateOpen">วันที่หมดสัญญา *</label>
              <input
                class="form-control"
                type="Date"
                id="DateOpen"
                name="DateOpen"
                required
              />
            </div>

            <div class="form-group col">
              <label htmlFor="Installation">Installation *</label>
              <input
                type="text"
                :class="getInputClass('Installation')"
                id="Installation"
                name="Installation"
                v-model="formElements.Installation.value"
                @keyup="onFormChange($event)"
                required
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("Installation") }}
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="form-group col">
              <label htmlFor="DateDeliver">กำหนดส่งมอบ *</label>
              <input
              class="form-control"
                type="date"
                id="DateDeliver"
                name="DateDeliver"
                required
              />
            </div>

            <div class="form-group col">
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
            </div>
          </div>

          <div class="row mt-4">
            <div class="form-group col">
              <label htmlFor="InOrder">ใบสั่งซื้อในประเทศ *</label>
              <input
                type="text"
                :class="getInputClass('InOrder')"
                id="InOrder"
                name="InOrder"
                v-model="formElements.InOrder.value"
                @keyup="onFormChange($event)"
                required
              />
              <div class="invalid-feedback">
                {{ getErrorMessage("InOrder") }}
              </div>
            </div>

            <div class="form-group col">
              <label htmlFor="Refer">อ้างอิงใบเสนอราคา *</label>
              <input
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
              <label htmlFor="Agreement">ข้อตกลงเพิ่มเติม</label>
              <input
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

          <div class="container text-center">
            <table class="table table-hover">
                <thead>
                  <tr class="table-active">
                    <td>Items</td>
                    <td>P/N</td>
                    <td>C</td>
                    <td>Option</td>
                    <td>QTY</td>
                    <td>Price</td>
                    <td>Total</td>
                    <td>Description</td>
                    <td>Remark</td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table">
                    <td>1</td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        id="P/N"
                        name="P/N"
                      />
                    </td>
                    <td>
                      <input type="text" class="form-control" id="C" name="C" />
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        id="Option"
                        name="Option"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        id="QTY"
                        name="QTY"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        id="Price"
                        name="Price"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        id="Total"
                        name="Total"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        id="Desription"
                        name="Desription"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        id="Remark"
                        name="Remark"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>

          <div class="text-center">
            <button
              type="submit"
              class="btn btn-primary"
              
            >
              Submit
            </button>

            &nbsp;
            <button  type="reset" class="btn btn-outline-danger" value="reset">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ForgotPasswordForm",
  data() {
    return {
      formElements: {
        OrderFormNo: {
          type: "text",
          value: null,
          validator: {
            minLength: 5,
            maxLength: 15,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        Sale: {
          type: "text",
          value: null,
          validator: {
            
            minLength: 5,
            maxLength: 15,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        TanderNo: {
          type: "text",
          value: null,
          validator: {
            
            minLength: 5,
            maxLength: 15,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        ProductLine: {
          type: "text",
          value: null,
          validator: {
            
            minLength: 5,
            maxLength: 15,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        HospitalName: {
          type: "text",
          value: null,
          validator: {
            
            minLength: 5,
          },
          touched: false,
          error: { status: true, message: "" },
        },

        HospitalID: {
          type: "text",
          value: null,
          validator: {
            
            minLength: 5,
            maxLength: 15,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        Department: {
          type: "text",
          value: null,
          validator: {
            
            minLength: 5,
            maxLength: 15,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        Address: {
          type: "text",
          value: null,
          validator: {
            
            minLength: 5,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        WarrantyM: {
          type: "text",
          value: null,
          validator: {
            
            minLength: 5,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        OutNo: {
          type: "text",
          value: null,
          validator: {
            
            minLength: 5,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        MaintenanceM: {
          type: "text",
          value: null,
          validator: {
            
            minLength: 5,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        Installation: {
          type: "text",
          value: null,
          validator: {
            
            minLength: 5,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        Calibrate: {
          type: "text",
          value: null,
          validator: {
            
            minLength: 5,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        InOrder: {
          type: "text",
          value: null,
          validator: {
            
            minLength: 5,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        Refer: {
          type: "text",
          value: null,
          validator: {
            
            minLength: 5,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        Agreement: {
          type: "text",
          value: null,
          validator: {
            
            minLength: 5,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        
      },
      formValid: false,
    };
  },
  methods: {
    onFormChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      let updatedForm = { ...this.formElements };
      updatedForm[name].value = value;
      updatedForm[name].touched = true;
      const validatorObject = this.checkValidator(
        value,
        updatedForm[name].validator
      );
      updatedForm[name].error = {
        status: validatorObject.status,
        message: validatorObject.message,
      };
      let formStatus = true;
      for (let name in updatedForm) {
        if (updatedForm[name].validator.required === true) {
          formStatus = !updatedForm[name].error.status && formStatus;
        }
      }
      this.formElements = updatedForm;
      this.formValid = formStatus;
    },
    checkValidator(value, rule) {
      let valid = true;
      let message = "";
      
      if (value.length < rule.minLength && valid) {
        valid = false;
        message = `น้อยกว่า ${rule.minLength} ตัวอักษร`;
      }
      if (value.length > rule.maxLength && valid) {
        valid = false;
        message = `มากกว่า ${rule.maxLength} ตัวอักษร`;
      }

      return { status: !valid, message: message };
    },
    getInputClass(name) {
      const elementErrorStatus = this.formElements[name].error.status;
      if (!this.formElements[name].touched) {
        return ["form-control"];
      } else {
        return elementErrorStatus && this.formElements[name].touched
          ? ["form-control", "is-invalid"]
          : ["form-control", ""];
      }
    },
    getErrorMessage(name) {
      return this.formElements[name].error.message;
    },
    onFormSubmit() {
      const formData = {};
      for (let name in this.formElements) {
        formData[name] = this.formElements[name].value;
      }
      console.log(formData);
    },
    onReset() {
       this.formElements.Agreement = "";

    },
  },
};
</script>

<style>
</style>