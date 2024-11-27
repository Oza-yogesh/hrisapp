// validationSchema.js
import * as Yup from "yup";

const bankAccountValidation = Yup.object().shape({
  accountHolderName: Yup.string().required("Account holder's name is required"),
  effectiveDate: Yup.date().required("Effective date is required"),
  bankName: Yup.string().required("Bank name is required"),
  city: Yup.string().required("City is required"),
  branchName: Yup.string().required("Branch name is required"),
  ifscCode: Yup.string()
    .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC Code format")
    .required("IFSC Code is required"),
  accountNumber: Yup.string()
    .matches(/^\d+$/, "Account number must be numeric")
    .required("Account number is required"),
});

export default bankAccountValidation;
