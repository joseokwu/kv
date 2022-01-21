// import React from "react";
// import { useParams } from "react-router-dom";
// import { DealFilter } from "..";
// import { Button, DeckCard } from "../../components/index";
// import back from "../../assets/icons/chervonLeft.svg";
// import download from "../../assets/icons/cloudDownload.svg";
// import view from "../../assets/icons/visibility.svg";
// import createFolder from "../../assets/icons/create_new_folder.svg";
// import shareAccess from "../../assets/icons/person_add_share.svg";
// import "./dealFolder.css";

// export const DealFolder = ({ history }) => {
//   const { id, folderName } = useParams();
//   const { push } = history;

//   const data = [
//     { name: "Investor Dec", type: "xlsx", size: "21MB" },
//     { name: "Cap Table", type: "doc", size: "21MB" },
//     { name: "Annual Report", type: "pdf", size: "21MB" },
//     { name: "Compliance Document", type: "pdf", size: "21MB" },
//     { name: "Financial Statements Pr...", type: "doc", size: "21MB" },
//     { name: "Certificate", type: "pdf", size: "21MB" },
//     { name: "Cap Document", type: "doc", size: "21MB" },
//     { name: "Financial Statements", type: "doc", size: "21MB" },
//     { name: "Share Certificate", type: "xlsx", size: "21MB" },
//   ];
//   return (
//     <div className="wrapper">
//       <section
//         className="mb-5 d-flex align-items-center justify-content-between"
//         role="button"
//         onClick={() => push(`/deal_room/${id}`)}
//       >
//         <h5 className="page-header d-flex align-items-center">
//           <img src={back} alt="back" className="go-back-deal" />
//           Deal Room
//         </h5>
//         <DealFilter />
//       </section>

//       <section
//         className="d-flex align-items-center justify-content-between flex-wrap mb-5"
//         style={{ rowGap: 10 }}
//       >
//         <p className="crumbs-text">{`Data Room / Folder / ${folderName}`}</p>
//         <div className="d-flex align-items-center">
//           <span className="deal-extra-cta">
//             <img src={view} alt="view" />
//             <p>View</p>
//           </span>
//           <span className="deal-extra-cta">
//             <img src={shareAccess} alt="share access" />
//             <p>Share Access</p>
//           </span>
//           <span className="deal-extra-cta">
//             <img src={createFolder} alt="create folder" />
//             <p>Create Folder</p>
//           </span>
//           <Button
//             label={
//               <div className="d-flex align-items-center">
//                 <img src={download} alt="download" className="mr-2" />
//                 Upload Doc
//               </div>
//             }
//           />
//         </div>
//       </section>

//       <section className="doc-space">
//         <div className="row">
//           {data.map((d, i) => {
//             return (
//               <article className="col-xl-4 col-lg-6 mb-3 " key={`docs-${i}`}>
//                 <DeckCard name={d.name} size={d.size} type={d.type} />
//               </article>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// };
