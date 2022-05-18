import React from "react";
import { Button, TextArea } from "../../../components";

export const AddNote = () => {
  return (
    <div className="px-4">
      <form>
        <TextArea
          label="Note"
          placeholder="Send a message"
          className="max_fill mb-45"
          rows={5}
        />

        <section className="d-flex justify-content-end mb-4">
          <Button label="Send" />
        </section>
      </form>
    </div>
  );
};
