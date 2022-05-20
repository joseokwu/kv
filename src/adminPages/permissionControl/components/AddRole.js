import React from "react";
import { Button, TextField } from "../../../components";

export const AddRole = () => {
  return (
    <form className="px-4">
      <TextField
        label="Role Type"
        placeholder="Enter role"
        className="mb-4 max_fill"
      />
      <div className="text-right">
        <Button label="Add" />
      </div>
    </form>
  );
};
