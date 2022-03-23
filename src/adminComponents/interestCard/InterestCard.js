import { RowOption, Tag } from "../../components";
import styles from "./interestCard.module.css";

export const InterestCard = ({ data = {} }) => {
  return (
    <section className={styles.interestCard}>
      <p className="mb-2">{data?.title1}</p>
      <div className="mb-4">
        <RowOption options={data?.list1} selectAll={true} />
      </div>

      <p className="mb-2">{data?.title2}</p>
      <div className="d-flex space-out flex-wrap">
        {data?.list2?.length > 0 &&
          data?.list2?.map((info, i) => {
            return (
              <Tag
                name={info?.name}
                color={info?.color}
                className={styles.tag}
                key={`tag-${i}`}
              />
            );
          })}
      </div>
    </section>
  );
};
