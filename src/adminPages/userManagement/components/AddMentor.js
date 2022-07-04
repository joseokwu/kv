import { useFormik } from "formik";
import React from "react";
import { Button, PhoneInput, Select, TextField } from "../../../components";
import { addMentor } from "../../../services";
import { sectors } from "../../../utils/utils";

export const AddMentor = () => {
  const handleSubmit = async (values) => {
    const res = await addMentor({
      ...values,
      type: "mentor",
      origin: window.location.origin,
    });
    console.log("res", res);
  };
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => handleSubmit(values),
  });

  const handleChange = (e) => {
    formik.handleChange(e);
  };
  console.log("formik.values", formik.values);
  return (
    <div className="px-4">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="First Name*"
          className="max_fill mb-4"
          placeholder="Enter mentor first name"
          name="firstname"
          onChange={handleChange}
        />

        <TextField
          label="Last Name*"
          className="max_fill mb-4"
          placeholder="Enter mentor last name"
          name="lastname"
          onChange={handleChange}
        />

        <TextField
          label="Email Address*"
          className="max_fill mb-4"
          type="email"
          placeholder="Smith@gmail.com"
          name="email"
          onChange={handleChange}
        />

        <TextField
          label="Password*"
          className="max_fill mb-4"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />

        <PhoneInput
          id="phone"
          name="phone"
          label="Mobile Number"
          value={formik.values.phone}
          onChange={(e) =>
            handleChange({
              target: { name: "phone", value: e.id },
            })
          }
        />

        {/* <TextField
          label="Designation"
          className="max_fill mb-4"
          placeholder="Eg: Engr"
        /> */}

        {/* <TextField
          label="Company"
          className="max_fill mb-4"
          placeholder="Eg: Stilt Tech"
        /> */}

        {/* <Select
          label="Industry"
          className="max_fill mb-4"
          placeholder="Select"
          options={sectors}
        /> */}

        <section className="text-right mb-4 mt-5">
          <Button label="Create" variant="secondary" />
        </section>
      </form>
    </div>
  );
};
