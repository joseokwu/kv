export const FinancialDetails = ({ data }) => {
  return (
    <div className="my-4 opp-page-card py-3">
      <h3 className="sub-card-title">Financial Details</h3>

      <section
        className="mt-4 d-flex align-items-center justify-content-between flex-wrap"
        style={{ rowGap: 10 }}
      >
        <div
          className="d-flex align-items-center flex-wrap"
          style={{ rowGap: 10 }}
        >
          <p className="opp-tag-label">Investors</p>
          <span className="opp-tag">{data?.investor}</span>
          <span className="opp-tag">+1</span>
        </div>

        <div
          className="d-flex align-items-center flex-wrap"
          style={{ rowGap: 10 }}
        >
          <p className="opp-tag-label">Valuation</p>
          <span className="opp-tag">{data?.valuation}</span>
        </div>
      </section>
    </div>
  );
};
