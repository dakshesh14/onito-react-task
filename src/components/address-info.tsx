// react hook form
import { useFormContext, Controller } from "react-hook-form";
// material ui
import { TextField, Grid } from "@mui/material";
// types
import { UserInfo } from "../../types/index";

export const AddressInfo: React.FC = () => {
  const { control } = useFormContext<UserInfo>();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Controller
          name="addressLine1"
          control={control}
          render={({ field, formState }) => (
            <>
              <TextField
                label="Address"
                error={!!formState.errors.addressLine1}
                helperText={formState.errors.addressLine1?.message}
                {...field}
                fullWidth
              />
            </>
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="country"
          control={control}
          render={({ field, formState }) => (
            <>
              <TextField
                label="Country"
                error={!!formState.errors.country}
                helperText={formState.errors.country?.message}
                {...field}
                fullWidth
              />
            </>
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="state"
          control={control}
          render={({ field, formState }) => (
            <>
              <TextField
                label="State"
                error={!!formState.errors.state}
                helperText={formState.errors.state?.message}
                {...field}
                fullWidth
              />
            </>
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="city"
          control={control}
          render={({ field, formState }) => (
            <>
              <TextField
                label="City"
                error={!!formState.errors.city}
                helperText={formState.errors.city?.message}
                {...field}
                fullWidth
              />
            </>
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="pincode"
          control={control}
          render={({ field, formState }) => (
            <>
              <TextField
                label="Pincode"
                error={!!formState.errors.pincode}
                helperText={formState.errors.pincode?.message}
                {...field}
                fullWidth
              />
            </>
          )}
        />
      </Grid>
    </Grid>
  );
};
