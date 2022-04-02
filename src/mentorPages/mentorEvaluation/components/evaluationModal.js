import React from "react";
import apple from "../../../assets/images/apple.svg";
import office from "../../../assets/icons/office.svg";
import clock from "../../../assets/icons/clockTime.svg";
import web from "../../../assets/icons/web.svg";
import compitch from "../../../assets/images/companyPitch.svg";
import { Button } from "../../../mentorComponents";
import { useHistory, Link } from "react-router-dom";

export const EvaluationModal = ({ data = {} }) => {
  const { push } = useHistory();
  return (
    <div className="px-4">
      <section className="pt-2">
        <button
          type="button"
          className="close close-founder-modal"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </section>

      <section className="evaluationModal_title pt-4">
        <img src={apple} alt="company logo" />
        <h3 className="pt-3">{data?.name}</h3>
        <p className="pt-2">{data?.industry} Industry</p>

        <div className="d-flex pt-3 pb-3">
          <p className="pr-3">
            <img className="pr-1" src={office} alt="" /> {data?.location}
            States
          </p>
          <p className="pr-3">
            <img className="pr-1" src={clock} alt="" /> Incorporated{" "}
            {data?.incorporationDate}
          </p>
          <p>
            <img className="pr-1" src={web} alt="" /> {data?.website}
          </p>
        </div>

        <span onClick={() => push("/mentor/evaluation/view#Product")}>
          View profile
        </span>
        <div className="mb-4">
          <img className="pt-5" src={compitch} alt="company pitch" />
        </div>

        <Button
          label="Evaluate"
          onClick={() =>
            push("/mentor/evaluation/evaluate#market_attractiveness")
          }
        />
      </section>
    </div>
  );
};
