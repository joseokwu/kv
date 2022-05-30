import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Table } from "../../../adminComponents";
import down from "../../../assets/icons/chevronDown.svg";
import filter from "../../../assets/icons/filterFunnel.svg";
import apple from "../../../assets/images/apple.svg";
import styles from "../user.module.css";
import { getStakeHolders } from "../../../services";
import { Tag } from "../../../components";

export const Partner = () => {
  const [boosterPartner, setBoosterPartner] = useState([]);
  const [NumOfPartner, setNumOfPartner] = useState(0);

  const getData = async () => {
    const res = await getStakeHolders({
      page: 1,
      limit: 2,
      type: "boosterpartner",
      query: { applicationCompleted: true },
    });

    console.log("res", res);

    if (res.success && res?.data?.mentors?.length > 0) {
      setNumOfPartner(res?.data?.metadata?.total);
      setBoosterPartner(() =>
        res?.data?.mentors.map((partner) => ({
          name: (
            <div className="d-flex align-items-center space-out">
              <img
                src={partner?.personalDetail?.logo ?? apple}
                alt="user"
                className={styles.userPic}
              />
              <p className="mb-0">{`${partner?.personalDetail?.lastname} ${partner?.personalDetail?.firstname}`}</p>
            </div>
          ),
          skills: (
            <div className="d-flex space-out flex-wrap">
              {partner?.areaOfInterest?.skills?.map((skill, i) => (
                <Tag name={skill} color={i > 0 ? "#40439A" : "#058dc1"} />
              ))}
            </div>
          ),
          company: "Seam Technologies Inc.",
          sessions: 3,
          actions: (
            <div className="d-flex align-items-center space-out">
              <Link
                to={`/admin/users/mentors/${partner?.userId}`}
                className="view-link"
              >
                View
              </Link>
              <p
                role="button"
                className="delete-link"
                data-target="#deleteMentor"
                data-toggle="modal"
              >
                Delete
              </p>
            </div>
          ),
        }))
      );
    }
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);
  const header = [
    { title: "Brand", accessor: "brand" },
    { title: "Name", accessor: "name" },
    { title: "Email", accessor: "email" },
    { title: "Contact No:", accessor: "contactNo" },
    { title: "Category", accessor: "category" },
    { title: "Action", accessor: "action" },
  ];
  const [partnersData, setPartnerData] = useState({});

  const data = [
    {
      brand: (
        <img src={apple} alt="partner logo" className={styles.brandIcon} />
      ),
      name: "Applean Partner",
      email: "KateMc@gmail.com",
      contactNo: "+234 709 975 097",
      category: "Application",
      action: (
        <div className="d-flex align-items-center space-out">
          <Link to="/admin/users/partners/0" className="view-link">
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
      ),
    },
  ];

  useEffect(() => {
    const getData = async () => {
      const res = await getStakeHolders({
        page: 1,
        limit: 5,
        type: "boosterpartner",
        query: { applicationCompleted: true },
      });
      console.log(res);

      setPartnerData(res?.data);
    };
    getData();
  }, []);

  return (
    <div>
      <section className="d-flex align-items-center justify-content-between white-strip mb-3">
        <h2 className="mb-0">Booster Partner (20)</h2>
        <div
          style={{ columnGap: 10 }}
          className="d-flex align-items-center justify-content-end"
        >
          <Filter />
        </div>
      </section>
      <section>
        <Table headers={header} data={data.concat(data)} />
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
