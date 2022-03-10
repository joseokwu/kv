import { useActivity } from "../../../hooks";
import { Tag } from "../../../mentorComponents";

export const FundingRound = () => {
  const {
    state: {
      dash_view: { fundingRoundSummary },
    },
  } = useActivity();

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
          <Tag name={fundingRoundSummary?.fundingAsk} color="#212463" />
        </div>
        <div className="text-right">
          <span className="opp_tag_label">Dilution</span>
          <Tag name={fundingRoundSummary?.dilution} color="#058DC1" />
        </div>
      </section>

      <section
        className="d-flex align-items-center justify-content-between"
        style={{ marginBottom: "1.75rem" }}
      >
        <div>
          <span className="opp_tag_label">Total Commitment</span>
          <Tag name={fundingRoundSummary?.totalCommittment} color="#212463" />
        </div>
        <div className="text-right">
          <span className="opp_tag_label">Funding Stage</span>
          <Tag name={fundingRoundSummary?.fundingStage} color="#058DC1" />
        </div>
      </section>

      <section
        className="d-flex align-items-center justify-content-between"
        style={{ marginBottom: "1.75rem" }}
      >
        <div>
          <span className="opp_tag_label">Total Funding</span>
          <Tag name={fundingRoundSummary?.totalFunding} color="#212463" />
        </div>
        <div className="text-right">
          <span className="opp_tag_label">Last Funding Round</span>
          <Tag
            name={fundingRoundSummary?.lastFundingRoundAndDate.substr(0,10)}
            color="#058DC1"
          />
        </div>
      </section>

      <section className="d-flex align-items-center justify-content-between">
        <div>
          <span className="opp_tag_label">Minimum Investment</span>
          <Tag
            name={fundingRoundSummary?.minimumInvestmentAmount}
            color="#212463"
          />
        </div>
        <div className="text-right">
          <span className="opp_tag_label">Round Type</span>
          <Tag name={fundingRoundSummary?.roundType} color="#058DC1" />
        </div>
      </section>
    </div>
  );
};
