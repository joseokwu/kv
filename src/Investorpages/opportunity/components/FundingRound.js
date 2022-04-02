import { Tag } from "../../../components";

export const FundingRound = ({data}) => {
  return (
    <div className=" opp-page-card py-4">
      <h3 className="sub-card-title border-bottom pb-3 mb-4">
        Funding Round Summary
      </h3>

      <section
        className="d-flex align-items-center justify-content-between"
        style={{ marginBottom: "1.75rem" }}
      >
        <div>
          <p className="opp-tag-label">Funding Ask</p>
          <Tag name={data?.fundAsk} color="#212463" />
        </div>
        <div className="text-right">
          <p className="opp-tag-label">Dilution</p>
          <Tag name={data?.dilution} color="#058DC1" />
        </div>
      </section>

      <section
        className="d-flex align-items-center justify-content-between"
        style={{ marginBottom: "1.75rem" }}
      >
        <div>
          <p className="opp-tag-label">Total Commitment</p>
          <Tag name={data?.totalCommitment} color="#212463" />
        </div>
        <div className="text-right">
          <p className="opp-tag-label">Funding Stage</p>
          <Tag name={data?.fundStage} color="#058DC1" />
        </div>
      </section>

      <section
        className="d-flex align-items-center justify-content-between"
        style={{ marginBottom: "1.75rem" }}
      >
        <div>
          <p className="opp-tag-label">Total Funding</p>
          <Tag name={data?.totalFunding} color="#212463" />
        </div>
        <div className="text-right">
          <p className="opp-tag-label">Last Funding Round</p>
          <Tag name={"Angel (9 Oct.,2021)"} color="#058DC1" />
        </div>
      </section>

      <section className="d-flex align-items-center justify-content-between">
        <div>
          <p className="opp-tag-label">Minimum Investment Amount</p>
          <Tag name={data?.minimumInvestment} color="#212463" />
        </div>
        <div className="text-right">
          <p className="opp-tag-label">Round Type</p>
          <Tag name={data?.roundType} color="#058DC1" />
        </div>
      </section>
    </div>
  );
};
