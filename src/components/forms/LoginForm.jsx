import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { login } from "./../../features/users/usersSlice";

const schema = yup.object().shape({
  email: yup.string().email().max(30).required(),
  password: yup.string().max(30).required(),
});

const defaultValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: defaultValues,
  });

  const onSubmit = async (data) => {
    console.log(data);
    dispatch(login(data));
    reset();
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          control={control}
          name="email"
          defaultValue = {''}
          render={({ field }) => (
            <TextField
              type="email"
              error={!!errors.email}
              {...field}
              label="email"
              helperText={errors.email?.message}
            />
          )}
        />
      </div>

      <div style={{marginTop: 20}}>
        <Controller
          control={control}
          name="password"
          defaultValue = {''}
          render={({ field }) => (
            <TextField
              type="password"
              error={!!errors.password}
              {...field}
              label="password"
              helperText={errors.password?.message}
              autoComplete="current-password"
            />
          )}
        />
      </div>

      <div style={{marginTop: 20}}>
        <Button type="reset" onClick={reset} variant="contained">
          Reset
        </Button>
        {" "}
        <Button type="submit" primary="true" variant="contained" disabled={isSubmitting || !isDirty || (isDirty && !isValid)}>
          Login
        </Button>
      </div>
    </form>
  );
}
