import { defineStore } from "pinia";
export const useStepperStore = defineStore("stepper", {
  state: () => ({
    stepperFormSignUp: {
      value: 0,
      disabled: "true",
      complete: {
        stepper1: false,
        stepper2: false,
        stepper3: false,
      },
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        verifyPassword: "",
      },
      textNext: "Seguir",
      textPrev: "Regresar",
    },
    drawerShoppingCart: false,
  }),
  actions: {
    increaseValueStepperFormSignUp() {
      this.stepperFormSignUp.disabled = "next";
      this.stepperFormSignUp.value++;
      if (
        this.stepperFormSignUp.value == 1 &&
        this.stepperFormSignUp.complete.stepper2
      ) {
        this.stepperFormSignUp.disabled = "false";
      }
    },
    decreaseValueStepperFormSignUp() {
      this.stepperFormSignUp.value--;
      console.log(this.stepperFormSignUp.value);
      if (
        this.stepperFormSignUp.value == 0 &&
        this.stepperFormSignUp.complete.stepper1
      ) {
        this.stepperFormSignUp.disabled = "prev";
      }
      if (
        this.stepperFormSignUp.value == 1 &&
        this.stepperFormSignUp.complete.stepper1
      ) {
        this.stepperFormSignUp.disabled = "false";
      }
    },
    changeDisabledStepperFormSignUp(item: number) {
      this.stepperFormSignUp.value = item;
    },
    changeCompleteStepperFormSignUp(item: number, value: boolean) {
      switch (item) {
        case 1:
          this.stepperFormSignUp.complete.stepper1 = value;
          if (value == true) {
            this.stepperFormSignUp.disabled = "prev";
          } else {
            this.stepperFormSignUp.disabled = "true";
          }
          break;
        case 2:
          this.stepperFormSignUp.complete.stepper2 = value;
          if (value == true) {
            this.stepperFormSignUp.disabled = "false";
          } else {
            this.stepperFormSignUp.disabled = "next";
          }
          break;

        case 3:
          this.stepperFormSignUp.complete.stepper3 = value;
      }
    },
    resetAllFormSignUp() {
      this.stepperFormSignUp.complete.stepper1 = false;
      this.stepperFormSignUp.complete.stepper2 = false;
      this.stepperFormSignUp.complete.stepper3 = false;
      this.stepperFormSignUp.disabled = "true";
      this.stepperFormSignUp.form.email = "";
      this.stepperFormSignUp.form.firstName = "";
      this.stepperFormSignUp.form.lastName = "";
      this.stepperFormSignUp.form.password = "";
      this.stepperFormSignUp.form.verifyPassword = "";
      this.stepperFormSignUp.value = 0;
    },
  },
});
