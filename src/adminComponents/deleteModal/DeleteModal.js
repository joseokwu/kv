import React from "react";
import { Button, Modal } from "../../components";

export const DeleteModal = ({
  id = "",
  title = "",
  desc = "",
  onDelete = () => {},
}) => {
  return (
    <div>
      <Modal id={id} title={title} width={492}>
        <div className="px-4">
          <p className="text-center mb-4">{desc}</p>
          <section
            className="d-flex align-items-center justify-content-center pt-2 pb-4"
            style={{ columnGap: 18 }}
          >
            <Button label="Delete" variant="danger" onClick={onDelete} />
            <Button label="Cancel" variant="trans" data-dismiss="modal" />
          </section>
        </div>
      </Modal>
    </div>
  );
};
