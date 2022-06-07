import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, GoBack, Modal, Tabs } from "../../components";
import { AddRole } from "./components/AddRole";
import { RoleAndPermission } from "./components/RoleAndPermission";
import { UserBasicInfo } from "./components/UserBasicInfo";
import { Users } from "./components/Users";

export const PermissionControl = () => {
  const [state, setState] = useState("Users");
  const { userId } = useParams();

  const switchTab = (item) => {
    if (!userId?.length > 0) {
      setState(item);
    }
  };
  return (
    <div className="p-5">
      <Modal id="addRole" title="Add Role" width={568}>
        <AddRole />
      </Modal>
      {userId?.length > 0 && <GoBack />}
      <section className="mb-4">
        <h4>Permission Control</h4>
      </section>

      <section className="mb-4 d-flex align-items-center justify-content-between">
        <Tabs
          tabItems={["Users", "Roles & Permissions"]}
          withState={true}
          state={state}
          setState={switchTab}
        />

        {state === "Roles & Permissions" && (
          <Button
            label="Add Role"
            variant="secondary"
            data-target="#addRole"
            data-toggle="modal"
          />
        )}
      </section>

      {userId?.length > 0 ? (
        <UserBasicInfo />
      ) : (
        <section>
          {state === "Users" ? <Users /> : <RoleAndPermission />}
        </section>
      )}
    </div>
  );
};
