import { useState } from "react";
// react hook form
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
// material ui
import { Button, Grid } from "@mui/material";
// types
import { UserInfo, userInfoSchema } from "../types/index";
// components
import { PersonalInfo, AddressInfo } from "./components";

// TODO: remove before pushing
const defaultValues: UserInfo = {
  name: "Dakshesh",
  age: 20,
  sex: "Male",
  mobile: "8888888888",
  govtIssuedIdType: "Aadhar",
  govtIssuedId: "564635786315",
  addressLine1: "",
  country: "",
  state: "",
  city: "",
  pincode: "",
};

function App() {
  const control = useForm<UserInfo>({
    defaultValues,
    resolver: yupResolver(userInfoSchema),
  });

  const [currentStep, setCurrentStep] = useState(0);

  const onSubmit = (data: UserInfo) => {
    if (currentStep === 0) setCurrentStep(1);

    console.log(data);
  };

  return (
    <FormProvider {...control}>
      <form onSubmit={control.handleSubmit(onSubmit)}>
        <Grid container spacing={2} height={"100vh"} padding={2}>
          <Grid item xs={12}>
            {currentStep === 0 ? <PersonalInfo /> : <AddressInfo />}
          </Grid>

          <Grid style={{ marginTop: "auto" }} item xs={12}>
            {currentStep === 1 && (
              <Button
                style={{ marginRight: "10px" }}
                variant="outlined"
                onClick={() => setCurrentStep((prev) => prev - 1)}
                type="button"
              >
                Previous
              </Button>
            )}

            <Button variant="outlined" type="submit">
              {currentStep === 0 ? "Next" : "Submit"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
}

export default App;
