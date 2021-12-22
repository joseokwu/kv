import React from "react";
import { Button, Modal } from "../../../components";

export const DeleteScheduleModal = ({ id = "" }) => {
  return (
    <Modal title="Delete Schedule" id={`deleteScheduleModal-${id}`}>
      <div className="px-4">
        <p className="mb-5">Are you sure you want to delete event?</p>

        <section className="text-right">
          <Button label="Delete" />
        </section>
      </div>
    </Modal>
  );
};
