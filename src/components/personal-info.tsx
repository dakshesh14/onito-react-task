// react hook form
import { useFormContext, Controller } from "react-hook-form";
// material ui
import { TextField, Select, Grid, MenuItem } from "@mui/material";
// types
import { UserInfo } from "../../types/index";

export const PersonalInfo: React.FC = () => {
  const { control } = useFormContext<UserInfo>();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Controller
          name="name"
          control={control}
          render={({ field, formState }) => (
            <>
              <TextField
                label="First Name"
                error={!!formState.errors.name}
                helperText={formState.errors.name?.message}
                {...field}
                fullWidth
              />
            </>
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="age"
          control={control}
          render={({ field, formState }) => (
            <>
              <TextField
                label="Age"
                type="number"
                error={!!formState.errors.age}
                helperText={formState.errors.age?.message}
                {...field}
                fullWidth
              />
            </>
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="mobile"
          control={control}
          render={({ field, formState }) => (
            <>
              <TextField
                label="Mobile"
                type="tel"
                error={!!formState.errors.mobile}
                helperText={formState.errors.mobile?.message}
                {...field}
                fullWidth
              />
            </>
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="govtIssuedIdType"
          control={control}
          render={({ field, formState }) => (
            <>
              <Select
                label="Govt Issued Id Type"
                error={!!formState.errors.sex}
                fullWidth
                {...field}
              >
                <MenuItem value={"Aadhar"}>Aadhar</MenuItem>
                <MenuItem value={"PAN"}>PAN</MenuItem>
              </Select>
            </>
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="govtIssuedId"
          control={control}
          render={({ field, formState }) => (
            <>
              <TextField
                label="Govt Issued Id"
                error={!!formState.errors.govtIssuedId}
                helperText={formState.errors.govtIssuedId?.message}
                {...field}
                fullWidth
              />
            </>
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="sex"
          control={control}
          render={({ field, formState }) => (
            <>
              <Select
                label="Sex"
                error={!!formState.errors.sex}
                fullWidth
                {...field}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </>
          )}
        />
      </Grid>
    </Grid>
  );
};
