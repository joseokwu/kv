export const FinancialDetails = () => {
  return (
    <div className="mt-4 opp-page-card py-3 mb-4">
      <h3 className="sub-card-title">Financial Details</h3>

      <section
        className="mt-4 d-flex align-items-center justify-content-between flex-wrap"
        style={{ rowGap: 10 }}
      >
        <div className="d-flex align-items-center">
          <span className="opp-tag-label">Investors</span>
          <span className="opp-tag">Mope Abudu</span>
          <span className="opp-tag">+1</span>
        </div>

        <div className="d-flex align-items-center">
          <span className="opp-tag-label">Valuation</span>
          <span className="opp-tag">$5 Million (9 Oct.,2021)</span>
        </div>
      </section>
    </div>
  );
};
