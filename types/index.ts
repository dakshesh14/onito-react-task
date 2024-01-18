import * as Yup from "yup";

export const personalDetailsSchema = Yup.object().shape({
  name: Yup.string()
    .required("First Name is required")
    .min(3, "First Name must be at least 3 characters"),
  age: Yup.number().positive().integer().required("Age is required"),
  sex: Yup.string()
    .oneOf(["Male", "Female"], "Invalid gender")
    .required("Gender is required"),
  mobile: Yup.string().matches(/^[6-9]\d{9}$/, "Invalid Indian mobile number"),
  govtIssuedIdType: Yup.string()
    .oneOf(["Aadhar", "PAN"], "Invalid ID type")
    .required("ID type is required"),
  govtIssuedId: Yup.string().when("govtIssuedIdType", (idType, schema) => {
    return idType.join("") === "Aadhar"
      ? schema
          .length(12, "Aadhar number must be 12 characters long")
          .matches(
            /^[2-9]\d{11}$/,
            "Aadhar number should not start with 0 or 1"
          )
      : schema
          .length(10, "PAN number must be 10 characters long")
          .matches(/^[A-Za-z0-9]{10}$/, "Invalid PAN number");
  }),
});

export const addressSchema = Yup.object().shape({
  addressLine1: Yup.string(),
  country: Yup.string(),
  state: Yup.string(),
  city: Yup.string(),
  pincode: Yup.string().matches(/^[0-9]*$/, "Pincode must be numeric"),
});

export const userInfoSchema = addressSchema.concat(personalDetailsSchema);

export type PersonalDetails = Yup.InferType<typeof personalDetailsSchema>;
export type Address = Yup.InferType<typeof addressSchema>;

export type UserInfo = Yup.InferType<typeof userInfoSchema>;
