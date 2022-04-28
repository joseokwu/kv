import { useActivity } from "../../../hooks";
import { convertToMillion } from "./../../../utils/helpers";

export const FinancialDetails = ({ data = {} }) => {
  // const {
  //   state: {
  //     dash_view: { financialDetails },
  //   },
  // } = useActivity();

  console.log(data?.valuate);

  return (
    <div className="mt-4 opp_page_card py-3 mb-4">
      <h3 className="sub-card-title">Financial Details</h3>

      <section
        className="mt-4 d-flex align-items-center justify-content-between flex-wrap"
        style={{ rowGap: 10 }}
      >
        <div className="d-flex align-items-center">
          <span className="opp_tag_label">Investors</span>
          <span className="opp_tag">{data?.investor}</span>
          <span className="opp_tag">{data?.count ?? 2}</span>
        </div>

        <div className="d-flex align-items-center">
          <span className="opp_tag_label">Valuation</span>
          <span className="opp_tag">{`${convertToMillion(
            data?.valuation
          )} ${data?.date?.substr(0, 10)}`}</span>
        </div>
      </section>
    </div>
  );
};
