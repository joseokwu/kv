import React ,  { useEffect, useState , useMemo } from "react";
import { Link } from "react-router-dom";
import { DeleteModal, Table } from "../../../adminComponents";
import styles from "../user.module.css";
import down from "../../../assets/icons/chevronDown.svg";
import filter from "../../../assets/icons/filterFunnel.svg";
import { getStakeHolders } from "../../../services";


export const Investor = () => {
  const header = [
    { title: "Name", accessor: "name" },
    { title: "Email", accessor: "email" },
    { title: "Phone Number", accessor: "phone" },
    { title: "Country", accessor: "country" },
    { title: "Type", accessor: "type" },
    { title: "Action", accessor: "action" },
  ];

  const [investorsData , setInvestors] = useState({});




    useEffect(() => {
      const getData = async () => {
        const res = await getStakeHolders({
          page: 1,
          limit: 5,
          type: "investor",
          query: { applicationCompleted: true },
        });
        console.log(res)

        setInvestors(res?.data)
      }
      getData();
     
    }, []);

    

  const data = useMemo(()=> investorsData?.investors?.map((item , i) =>{
    return {
      name:  (
        <div className="d-flex align-items-center space-out">
          <img src={item?.profile?.avatar} alt="user" className={styles.userPic} />
          <p className="mb-0"> {item?.profile?.firstName + " " + item?.profile?.lastName} </p>
        </div>
      ),
      email: item?.profile?.email,
      phone: item?.profile?.mobile_number,
      country:item?.profile?.country,
      type: item?.investorApproach?.stage,
      action:(
        <div className="d-flex align-items-center space-out">
          <Link to={`/admin/users/investors/${item?.userId}`} className="view-link">
            View
          </Link>
          <p
            role="button"
            data-target="#deleteInvestor"
            data-toggle="modal"
            className="delete-link"
          >
            Delete
          </p>
        </div>
      )
      
    }
  }))
  
  return (
    <div>
      <DeleteModal
        id="deleteInvestor"
        title="Delete Investor"
        desc="Are you sure you want to delete Kate Mcbeth Joan"
      />
      <section className="d-flex align-items-center justify-content-between white-strip mb-3">
        <h2 className="mb-0">Investors (20)</h2>

        <div
          style={{ columnGap: 10 }}
          className="d-flex align-items-center justify-content-end"
        >
          <Filter />
        </div>
      </section>

      <section>
        <Table headers={header} data={data} />
      </section>
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
