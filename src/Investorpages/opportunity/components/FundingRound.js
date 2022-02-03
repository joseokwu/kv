import { Tag } from "../../../components";

export const FundingRound = () => {
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
          <Tag name="$50,000" color="#212463" />
        </div>
        <div className="text-right">
          <p className="opp-tag-label">Dilution</p>
          <Tag name="20%" color="#058DC1" />
        </div>
      </section>

      <section
        className="d-flex align-items-center justify-content-between"
        style={{ marginBottom: "1.75rem" }}
      >
        <div>
          <p className="opp-tag-label">Total Commitment</p>
          <Tag name="$100,000 (100%)" color="#212463" />
        </div>
        <div className="text-right">
          <p className="opp-tag-label">Funding Stage</p>
          <Tag name="Seed" color="#058DC1" />
        </div>
      </section>

      <section
        className="d-flex align-items-center justify-content-between"
        style={{ marginBottom: "1.75rem" }}
      >
        <div>
          <p className="opp-tag-label">Total Funding</p>
          <Tag name="$50,000" color="#212463" />
        </div>
        <div className="text-right">
          <p className="opp-tag-label">Last Funding Round</p>
          <Tag name="Angel (9 Oct.,2021)" color="#058DC1" />
        </div>
      </section>

      <section className="d-flex align-items-center justify-content-between">
        <div>
          <p className="opp-tag-label">Minimum Investment Amount</p>
          <Tag name="$100,000 (100%)" color="#212463" />
        </div>
        <div className="text-right">
          <p className="opp-tag-label">Round Type</p>
          <Tag name="Seed" color="#058DC1" />
        </div>
      </section>
    </div>
  );
};
