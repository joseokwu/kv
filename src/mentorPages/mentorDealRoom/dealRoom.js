// import React from "react";
// import { OpportunityCard } from "../../mentorComponents";
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

import React from 'react'
import { Section } from './dealRoom.styled'
import comingSoon from '../../assets/images/comingsoon.svg'

export const MentorDealRoom = () => {
  return (
    <>
      <Section>
        <div className="mx-auto text-center my-auto">
          <img src={comingSoon} alt="" />
          <h3 className="py-5">Feature Under Construction</h3>
          <p>
            We know you really want to use this feature and we are <br />{' '}
            excited to show you how awesomes it is but unfortunately it’s <br />{' '}
            still under construction. Please exercise a little patient.
          </p>
        </div>
      </Section>
    </>
  )
}
