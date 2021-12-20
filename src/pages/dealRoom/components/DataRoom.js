import React from "react";
import file from "../../../assets/icons/fileIcon.svg";
import more from "../../../assets/icons/more.svg";
import person from "../../../assets/images/sampleEventPerson.png";
import { DeckCard } from "../../../components";

export const DataRoom = () => {
  const data = [
    { name: "Investor Dec", type: "xlsx", size: "21MB" },
    { name: "Cap Table", type: "doc", size: "21MB" },
    { name: "Annual Report", type: "pdf", size: "21MB" },
    { name: "Compliance Document", type: "pdf", size: "21MB" },
    { name: "Financial Statements Pr...", type: "doc", size: "21MB" },
    { name: "Share Certificate", type: "xlsx", size: "21MB" },
  ];
  return (
    <div>
      <p className="mb-5">Filter: All Documents</p>

      <p className="mb-4 page-title">Folders</p>

      <section className="row mb-5" style={{ width: "90%" }}>
        <div className="col-xl-4 mb-4">
          <FolderCard />
        </div>
        <div className="col-xl-4 mb-4">
          <FolderCard color="#E9F6FB" />
        </div>

        <div className="col-xl-4 mb-4">
          <FolderCard />
        </div>
      </section>

      <p className="mb-4 page-title">Documents</p>

      <section className="row" style={{ width: "90%" }}>
        {data.map((d, i) => {
          return (
            <div className="col-xl-4 mb-3">
              <DeckCard name={d.name} size={d.size} type={d.type} />
            </div>
          );
        })}
      </section>
    </div>
  );
};

const FolderCard = ({ color = "#F3F3FD", name = "New Files" }) => {
  return (
    <section className="folder-card" style={{ background: color }}>
      <article
        className="d-flex align-items-center flex-wrap"
        style={{ columnGap: "1.63rem", rowGap: 10 }}
      >
        <img src={file} alt="file" />
        <div>
          <p className="folder-name">{name}</p>
          <span className="d-flex align-items-center">
            <p className="folder-card-text mr-2">Shared With</p>
            <section className="event-people folder-share">
              <img src={person} alt="person" />
              <img src={person} alt="person" />
            </section>
          </span>
        </div>
      </article>
      <img src={more} alt="more" />
    </section>
  );
};
