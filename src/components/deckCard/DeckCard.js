import React from "react";
import doc from "../../assets/icons/greenDoc.svg";
import docIcon from "../../assets/icons/docIcon.svg";
import download from "../../assets/icons/cloudDownloadB.svg";
import editDoc from "../../assets/icons/editDoc.svg";

export const DeckCard = ({
  name = "Deal Termsheet",
  size = "21MB",
  type = "xlsx",
}) => {
  const getColorForType = () => {
    switch (type) {
      case "xlsx":
        return "#1AA728";
      case "doc":
        return "#327BE8";
      case "pdf":
        return "#E83274";
      default:
        return "#E83274";
    }
  };
  return (
    <article className="deck-card" style={{ width: 302 }}>
      <div
        className="deck-card-img position-relative"
        style={{ maxWidth: 302 }}
      >
        <DocIcon color={getColorForType()} />
        <img
          src={editDoc}
          alt="edit document"
          className="edit-doc"
          role="button"
        />
      </div>
      <div className="d-flex align-items-center  justify-content-between p-3">
        <section className="d-flex align-items-start">
          <img src={docIcon} alt="document icon" className="mr-2" />
          <span>
            <p>{name}</p>
            <small>{size}</small>
          </span>
        </section>
        <img src={download} alt="download" role="button" />
      </div>
    </article>
  );
};

const DocIcon = ({ color = "#1AA728" }) => {
  return (
    <svg
      width="302"
      height="246"
      viewBox="0 0 302 246"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 8.00001C0 3.58173 3.58172 0 8 0H294C298.418 0 302 3.58172 302 8V246H0V8.00001Z"
        fill="#F9F9FC"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M140.334 107C138.861 107 137.667 108.194 137.667 109.667V136.333C137.667 137.806 138.861 139 140.334 139H161.667C163.14 139 164.334 137.806 164.334 136.333V123V115.096C164.334 114.82 164.223 114.556 164.024 114.357L156.995 107.328C156.786 107.118 156.496 107 156.194 107H151H140.334ZM145.445 120.067C144.985 120.067 144.611 120.425 144.611 120.867C144.611 121.308 144.985 121.667 145.445 121.667H154.536C154.996 121.667 155.369 121.308 155.369 120.867C155.369 120.425 154.996 120.067 154.536 120.067H145.445ZM145.445 124.333C144.985 124.333 144.611 124.692 144.611 125.133C144.611 125.575 144.985 125.933 145.445 125.933H156.556C157.016 125.933 157.389 125.575 157.389 125.133C157.389 124.692 157.016 124.333 156.556 124.333H145.445ZM145.445 128.6C144.985 128.6 144.611 128.958 144.611 129.4C144.611 129.842 144.985 130.2 145.445 130.2H156.556C157.016 130.2 157.389 129.842 157.389 129.4C157.389 128.958 157.016 128.6 156.556 128.6H145.445Z"
        fill={color}
      />
      <path
        d="M164.333 115C164.333 115 164.333 114.333 163.666 113.667L157.666 107.667C157 107 156.333 107 156.333 107V113.667C156.333 114.333 157 115 157.666 115H164.333Z"
        fill="#093D0E"
      />
    </svg>
  );
};
