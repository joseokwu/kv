// import React from "react";
// import back from "../../assets/icons/chervonLeft.svg";
// import download from "../../assets/icons/cloudDownload.svg";

// import { Button, Tabs } from "../../mentorComponents";
// import { DealFilter } from "../mentorDealRoom/dealRoom";
// import { DataRoom } from "./mentorComponents/DataRoom";
// import { DealOverview } from "./mentorComponents/DealOverview";
// import "./dealRoom.css";

// export const DealRoom = ({ history }) => {
//   const {
//     location: { hash },
//     push,
//   } = history;

//   const rendermentorComponents = () => {
//     switch (hash?.replaceAll("%20", " ")) {
//       case "#deal overview":
//         return <DealOverview />;
//       case "#data room":
//         return <DataRoom />;

//       default:
//         return <DealOverview />;
//     }
//   };
//   return (
//     <div className="wrapper">
//       <section
//         className="mb-5 d-flex align-items-center justify-content-between"
//         role="button"
//         onClick={() => push("/deal_room")}
//       >
//         <h5 className="page-header d-flex align-items-center">
//           <img src={back} alt="back" className="go-back-deal" />
//           Deal Room
//         </h5>
//         <DealFilter />
//       </section>

//       <section className="mb-4 d-flex align-items-center justify-content-between">
//         <Tabs tabItems={["deal overview", "data room"]} />
//         <Button
//           label={
//             <div className="d-flex align-items-center">
//               <img src={download} alt="download" className="mr-2" />
//               Download
//             </div>
//           }
//         />
//       </section>

//       <div>{rendermentorComponents()}</div>
//     </div>
//   );
// };
