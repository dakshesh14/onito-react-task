import { useState } from "react";
// react hook form
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
// redux
import { useSelector, useDispatch } from "react-redux";
// material ui
import { Button, Grid } from "@mui/material";
// types
import { UserInfo, userInfoSchema } from "../types/index";
// components
import { PersonalInfo, AddressInfo } from "./components";
// actions
import { addUser } from "./actions/user-actions";
import { RootState } from "./reducers";

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

  // states
  const [currentStep, setCurrentStep] = useState(0);

  // derived values
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const onSubmit = (data: UserInfo) => {
    if (currentStep === 0) return setCurrentStep(1);

    dispatch(addUser(data));
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

          <Grid item xs={12} overflow={"auto"}>
            <pre>{JSON.stringify(users, null, 2)}</pre>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
}

export default App;
