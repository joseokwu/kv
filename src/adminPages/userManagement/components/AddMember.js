import { useFormik } from "formik";
import React from "react";
import { Button, TextField } from "../../../components";

export const AddMember = () => {
  return (
    <div className="px-4">
      <form>
        <TextField
          label="Name*"
          className="max_fill mb-4"
          placeholder="Enter member name"
        />

        <TextField
          label="Phone number"
          placeholder="Enter phone number"
          className="max_fill mb-4"
        />

        <TextField
          label="Email Address"
          className="max_fill mb-4"
          placeholder="Smith@gmail.com"
          type="email"
        />

        <TextField
          label="Role"
          className="max_fill mb-4"
          placeholder="Ex: Engr"
        />

        <TextField
          label="Department"
          className="max_fill mb-4"
          placeholder="Ex Stilt Tech"
        />

        <TextField
          label="Password"
          className="max_fill mb-4"
          placeholder="Enter password"
          type="password"
        />

        <div className="text-right mb-3">
          <Button label="Create" variant="secondary" />
        </div>
      </form>
    </div>
  );
};
