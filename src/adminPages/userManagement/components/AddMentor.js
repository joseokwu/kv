import React from "react";
import { Button, Select, TextField } from "../../../components";
import { sectors } from "../../../utils/utils";

export const AddMentor = () => {
  return (
    <div className="px-4">
      <form>
        <TextField
          label="Mentor Name*"
          className="max_fill mb-4"
          placeholder="Enter event title"
        />

        <TextField
          label="Email Address*"
          className="max_fill mb-4"
          type="email"
          placeholder="Smith@gmail.com"
        />

        <TextField
          label="Designation"
          className="max_fill mb-4"
          placeholder="Eg: Engr"
        />

        <TextField
          label="Company"
          className="max_fill mb-4"
          placeholder="Eg: Stilt Tech"
        />

        <Select
          label="Industry"
          className="max_fill mb-4"
          placeholder="Select"
          options={sectors}
        />

        <section className="text-right mb-4 mt-5">
          <Button label="Create" variant="secondary" />
        </section>
      </form>
    </div>
  );
};
