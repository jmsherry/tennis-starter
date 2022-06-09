import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { add, update } from "./../../features/members/membersSlice";

const schema = yup.object().shape({
  firstName: yup.string().max(30).required(),
  lastName: yup.string().max(30).required(),
  email: yup.string().email().max(30).required(),
});

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
};

export default function MemberForm({ member }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: member || defaultValues,
  });

  let onSubmit = async (data) => {
    console.log(data);
    dispatch(add(data));
    reset();
    navigate("/admin/members");
  };

  if (member) {
    onSubmit = async (data) => {
      console.log(data);
      // Because of the way JSON-server works you'd need to do a 'PATCH' request to do diffs only
      // const diffs = {};
      // for (const key of Object.keys(member)) {
      //   // if(key === '_id') continue;
      //   if (member[key] !== data[key]) {
      //     diffs[key] = data[key];
      //   }
      // }
      // console.log("diffs", member._id, diffs);

      // sending all data is slightly abnormal, but...
      dispatch(update({_id: member._id, ...data}));
      navigate("/admin/members");
    };
  }

  const formRowStyle = {
    marginBlockEnd: "1em",
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="firstName"
          defaultValue={""}
          render={({ field }) => (
            <TextField
              type="firstName"
              error={!!errors.firstName}
              {...field}
              label="firstName"
              helperText={errors.firstName?.message}
            />
          )}
        />
      </div>

      <div style={formRowStyle}>
        <Controller
          control={control}
          name="lastName"
          defaultValue={""}
          render={({ field }) => (
            <TextField
              type="lastName"
              error={!!errors.lastName}
              {...field}
              label="lastName"
              helperText={errors.lastName?.message}
            />
          )}
        />
      </div>

      <div style={formRowStyle}>
        <Controller
          control={control}
          name="email"
          defaultValue={""}
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

      <div style={{ marginTop: 20 }}>
        <Button type="reset" onClick={reset} variant="contained">
          Reset
        </Button>{" "}
        <Button
          type="submit"
          primary="true"
          variant="contained"
          disabled={isSubmitting || !isDirty || (isDirty && !isValid)}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
