import { useState } from "react";
// react hook form
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
// redux
import { useSelector, useDispatch } from "react-redux";
// material ui
import { Button, Grid, Typography } from "@mui/material";
// types
import { UserInfo, userInfoSchema } from "../types/index";
// components
import { PersonalInfo, AddressInfo, CTable } from "./components";
// actions
import { addUser } from "./actions/user-actions";
import { RootState } from "./reducers";

const defaultValues: UserInfo = {
  name: "",
  age: 18,
  sex: "Male",
  mobile: "",
  govtIssuedIdType: "Aadhar",
  govtIssuedId: "",
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

  // states
  const [currentStep, setCurrentStep] = useState(0);

  // derived values
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const onSubmit = (data: UserInfo) => {
    if (currentStep === 0) return setCurrentStep(1);

    dispatch(addUser(data));

    // resetting
    control.reset();
    setCurrentStep(0);
  };

  return (
    <FormProvider {...control}>
      <form onSubmit={control.handleSubmit(onSubmit)}>
        <Grid container spacing={2} height={"100vh"} padding={2}>
          <Grid item xs={12}>
            <Typography variant="h4" marginBottom={4} fontWeight="bold">
              {currentStep === 0 ? "Personal Info" : "Address Info"}
            </Typography>
            {currentStep === 0 ? <PersonalInfo /> : <AddressInfo />}
          </Grid>

          <Grid item xs={12}>
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

          <Grid item xs={12}>
            <CTable columns={["name", "age", "sex"]} data={users} />
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
}

export default App;
