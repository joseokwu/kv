// import React from "react";
// import { OpportunityCard } from "../../components";
// import down from "../../assets/icons/chevronDown.svg";
// import filter from "../../assets/icons/filterFunnel.svg";
// import './dealRoom.css'


// export const MentorDealRoom = ({ history }) => {
//   const { push } = history;
//   return (
//     <div className="my-3 mx-3">
//       <section className="mb-5 d-flex align-items-center justify-content-end">
//         {/* <h5 className="page-header" role="button">
//           Deal Room
//         </h5> */}
//         <DealFilter />
//       </section>

//       <section>
//         <div className="row">
//           {Array.from("123456").map((d, i) => {
//             return (
//               <section className="col-xl-4 col-lg-6 mb-4">
//                 <OpportunityCard
//                   onClick={() => push(`/deal_room/${i}`)}
//                 />
//               </section>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// };

// export const DealFilter = () => {
//   return (
//     <div className="dropdown">
//       <button
//         className="d-flex align-items-center filter-btn"
//         style={{ columnGap: 7 }}
//         data-toggle="dropdown"
//       >
//         <img src={filter} alt="filter" />
//         <span>Filter</span>
//         <img src={down} alt="down" />
//       </button>
//     </div>
//   );
// };


import React from 'react';

export const MentorDealRoom = () => {
  return (
    <div className="mx-auto text-center my-auto" style={{padding: '25% 0'}}>
      <h1 style={{color: '#00adef', fontSize: '70px'}}>Coming Soon ...</h1>
      <span style={{color: '#242679', fontSize: '30px'}}>Under Contruction</span>
    </div>
  )
}