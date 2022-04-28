import { useActivity } from "../../../hooks";
import { Tag } from "../../../mentorComponents";

export const FundingRound = ({ data = {} }) => {


  return (
    <div className=" opp_page_card py-4">
      <h3 className="sub-card-title border-bottom pb-3 mb-4">
        Funding Round Summary
      </h3>

      <section
        className="d-flex align-items-center justify-content-between"
        style={{ marginBottom: "1.75rem" }}
      >
        <div>
          <span className="opp_tag_label">Funding Ask</span>
          <Tag name={data?.fundingAsk} color="#212463" />
        </div>
        <div className="text-right">
          <span className="opp_tag_label">Dilution</span>
          <Tag name={data?.dilution} color="#058DC1" />
        </div>
      </section>

      <section
        className="d-flex align-items-center justify-content-between"
        style={{ marginBottom: "1.75rem" }}
      >
        <div>
          <span className="opp_tag_label">Total Commitment</span>
          <Tag name={data?.totalCommittment} color="#212463" />
        </div>
        <div className="text-right">
          <span className="opp_tag_label">Funding Stage</span>
          <Tag name={data?.fundingStage} color="#058DC1" />
        </div>
      </section>

      <section
        className="d-flex align-items-center justify-content-between"
        style={{ marginBottom: "1.75rem" }}
      >
        <div>
          <span className="opp_tag_label">Total Funding</span>
          <Tag name={data?.totalFunding} color="#212463" />
        </div>
        <div className="text-right">
          <span className="opp_tag_label">Last Funding Round</span>
          <Tag
            name={data?.lastFundingRoundAndDate?.substr(0, 10)}
            color="#058DC1"
          />
        </div>
      </section>

      <section className="d-flex align-items-center justify-content-between">
        <div>
          <span className="opp_tag_label">Minimum Investment</span>
          <Tag name={data?.minimumInvestmentAmount} color="#212463" />
        </div>
        <div className="text-right">
          <span className="opp_tag_label">Round Type</span>
          <Tag name={data?.roundType} color="#058DC1" />
        </div>
      </section>
    </div>
  );
};
