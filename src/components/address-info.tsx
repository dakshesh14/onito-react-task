import { useEffect, useState } from "react";
// react hook form
import { useFormContext, Controller } from "react-hook-form";
// material ui
import { TextField, Grid, Autocomplete } from "@mui/material";
// types
import { UserInfo, Country } from "../../types";

export const AddressInfo: React.FC = () => {
  const { control, watch } = useFormContext<UserInfo>();

  // states
  const [countriesOptions, setCountriesOptions] = useState<string[]>([]);

  // derived values
  const country = watch("country");

  useEffect(() => {
    async function getCountries() {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${country || ""}`
      );
      const data = await res.json();
      return data as Country[];
    }

    if (country !== "")
      getCountries().then((data) => {
        const options = data.map((country) => country.name.common);
        setCountriesOptions(options);
      });
  }, [country]);

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
              <Autocomplete
                options={countriesOptions}
                fullWidth
                getOptionLabel={(option) => option || ""}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    {...field}
                    label="Country"
                    error={!!formState.errors.country}
                    helperText={formState.errors.country?.message}
                  />
                )}
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
