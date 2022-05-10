<template>
  <div class="row">
    <div class="col-sm-8 mx-auto">
      <div class="card-body">
        <form @submit.prevent="onFormSubmit">
          <div class="row mt-4">
            <div class="form-group col">
              <label htmlFor="RequestInventoryNO"
                >Request Inventory NO. *</label
              >
              <input
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
              </div>
            </div>

            <div class="form-group col">
              <!-- <div class="col"> -->
              <label for="Date">Date</label>
              <input
                class="form-control"
                type="Date"
                id="Date"
                v-model="formElements.date.value"
                name="Date"
                required
              />
              <!-- </div> -->
            </div>
          </div>

          <div class="row mt-4">
            <div class="form-group col">
              <label htmlFor="division">แผนก *</label>
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
            </div>

            <div class="form-group col">
              <label htmlFor="name">ผู้ขอเบิก *</label>
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
          </div>

          <div class="row mt-4">
            <div class="form-group col">
              <label htmlFor="note">หมายเหตุ </label>
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
            </div>

            <div class="form-group col">
              <label htmlFor="ReferTo">อ้างถึง *</label>
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
            </div>
          </div>

          <div class="container text-center">
            <table class="table table-hover">
              <thead>
                <tr class="table-active">
                  <td>ลำดับ</td>
                  <td>P/N</td>
                  <td>รายการ</td>
                  <td>จำนวนเบิก</td>
                  <td>จำนวนที่ได้รับ</td>
                  <td>หมายเหตุ</td>
                </tr>
              </thead>
              <tbody>
                <td>1</td>
                <td>
                  <input type="text" class="form-control" id="P/N" name="P/N" />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    id="list"
                    name="list"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    class="form-control"
                    id="NumberOfRequests"
                    name="NumberOfRequests"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    class="form-control"
                    id="AmountReceived"
                    name="AmountReceived"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    id="NoteTable"
                    name="NoteTable"
                  />
                </td>
              </tbody>
            </table>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary">Submit</button>

            &nbsp;
            <button
              type="reset"
              class="btn btn-outline-danger"
              value="reset"
              @click="onReset()"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import RequestInventoryService from "../services/RequestInventoryService";
export default {
  name: "AddProductForm",
  data() {
    return {
      formElements: {
        RequestInventoryNO: {
          type: "text",
          value: null,
          validator: {
            minLength: 5,
            maxLength: 15,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        date: {
          type: "date",
          value: null,
          validator: {
            minLength: 5,
            maxLength: 15,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        division: {
          type: "text",
          value: null,
          validator: {
            minLength: 5,
            maxLength: 15,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        name: {
          type: "text",
          value: null,
          validator: {
            minLength: 5,
            maxLength: 15,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        note: {
          type: "text",
          value: null,
          validator: {
            minLength: 5,
          },
          touched: false,
          error: { status: true, message: "" },
        },
        ReferTo: {
          type: "text",
          value: null,
          validator: {
            minLength: 5,
            maxLength: 15,
          },
          touched: false,
          error: { status: true, message: "" },
        },
      },
      formValid: false,
    };
  },
mounted () {
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
      if (rule.pattern === "email" && valid) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) === false) {
          valid = false;
          message = "กรอกอีเมล์ไม่ถูกต้อง";
        }
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
      RequestInventoryService.add(formData)
        .then(() => {
          this.$swal.fire("success!", "Created new item successfully!", "success");
        })
        .catch((e) => {
          this.$swal.fire("Oops...", e, "error");
        });
      this.$router.replace("/AddProduct");
    },
    onReset() {
      this.formElements = "";
    },
  },
};
</script>

<style></style>
