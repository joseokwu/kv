import React, { useState , useEffect } from "react";
import { FullTab } from "../../../adminComponents";
import down from "../../../assets/icons/chevronDown.svg";
import filter from "../../../assets/icons/filterFunnel.svg";
import { KVMemberEvaluation } from "./KVMemberEvaluation";
import { MentorEvaluation } from "./MentorEvaluation";
import { getCriteria } from './../../../services/admin';


export const EvaluationTable = () => {
  const tabs = ["KV Members Evaluation", "Mentor Evaluation"];
  const [kvMems , setKvMems] = useState([])
  const [currentTab, setCurrentTab] = useState(0);
  const tables = [<KVMemberEvaluation />, <MentorEvaluation />];



  useEffect(() =>{

    const fetchCriteria = async() =>{
      const res = await getCriteria();
      console.log(res)
    }

    fetchCriteria()
  },[])


  return (
    <div>
      <section
        className="white-strip d-flex align-items-center justify-content-between mb-4"
        style={{ padding: "10px 2.2rem" }}
      >
        <FullTab
          tabItems={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <div className="d-flex align-items-center justify-content-end">
          <Filter />
        </div>
      </section>

      <section>{tables[currentTab]}</section>
    </div>
  );
};

const Filter = () => {
  return (
    <div className="dropdown">
      <button
        className="d-flex align-items-center filter-btn"
        style={{ columnGap: 7, boxShadow: "none", border: "1px solid #F2F2F2" }}
        data-toggle="dropdown"
      >
        <img src={filter} alt="filter" />
        <p>Filter</p>
        <img src={down} alt="down" />
      </button>
    </div>
  );
};
