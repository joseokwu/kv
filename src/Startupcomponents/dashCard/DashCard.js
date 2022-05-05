import React from "react";
import "./dashCard.css";
import { CardWrapper, CardWrap , Wrapper } from "./dash.styled";

// export const DashCard = ({
//   count = '100',
//   name = 'name',
//   color = '#E5FFE4',
//   icon,
//   ...rest
// }) => {

export const DashCard = ({ icon, count, name, color }) => {
  return (
    // <div className={`dashCard-main ${rest?.className ?? ""}`}>
    //   <section className="d-flex flex-column justify-content-between">
    //     <h3>{name}</h3>
    //     <p>{count}</p>
    //     <img src={icon} style={{ color: color }} className="card-star" />
    //   </section>
    // </div>

    <CardWrapper className="position-relative" style={{ overflow: "hidden" }}>
      <h3>{name}</h3>
      <p>{count}</p>
      {/* <img src={icon} style={{ color: color }} className="card_star" /> */}
      <Star color={color} />
    </CardWrapper>
  );
};

const Star = ({ color }) => {
  return (
    <svg
      width="56"
      height="93"
      viewBox="0 0 56 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="card-star"
    >
      <path
        d="M48.2745 21.2719C51.5318 0.491081 77.8914 -6.57196 91.1027 9.79615C98.5701 19.0478 111.643 21.5214 121.975 15.6374C140.253 5.22743 162.21 21.4325 157.65 41.9669C155.072 53.5734 161.289 65.3368 172.331 69.7455C191.866 77.5453 192.887 104.816 173.989 114.054C163.308 119.275 157.987 131.47 161.425 142.852C167.506 162.988 146.822 180.788 127.817 171.773C117.075 166.678 104.223 170.122 97.4677 179.905C85.5166 197.215 58.7028 192.142 53.9017 171.662C51.188 160.087 40.4825 152.186 28.6215 153.005C7.63683 154.453 -5.11469 130.326 7.90324 113.804C15.2613 104.465 14.7638 91.169 6.72842 82.4061C-7.48782 66.9028 3.42502 41.8903 24.4593 41.7666C36.3483 41.6967 46.4334 33.0178 48.2745 21.2719Z"
        fill={color}
      />
    </svg>
  );
};

export const CardFill = ({ header, color, amount, time }) => {
  return (
    <>
      {/* <div
        className="col d-flex justify-content-center"
        // style={{ paddingTop: '150px' }}
      > */}
      <CardWrap bg={color}>
        <p className="pb-3"> {header} </p>
        <h5>
          {amount}
          <span className=""> {time} </span>
        </h5>
      </CardWrap>
      {/* </div> */}
    </>
  );
};


export  const RandomCard = ({ img, name }) => {
  return (
    <Wrapper>
      <img src={img} alt='profile' />
      <h5>{name}</h5>
    </Wrapper>
  );
};