import React from "react";
import styles from "./table.module.css";

export const Table = ({ headers = [], data = [] }) => {
  return (
    <div className={styles.all}>
      {headers?.length > 0 && (
        <table className={`table ${styles.rating_table}`}>
          <thead>
            <tr>
              {headers?.map((head, i) => {
                return <th key={`table-head-${i}`}>{head?.title}</th>;
              })}
            </tr>
          </thead>

          <tbody>
            {data.length > 0 &&
              data.map((item, i) => {
                return (
                  <tr key={`table-body-row-${i}`}>
                    {headers?.map((head, j) => {
                      return (
                        <td
                          key={`table-data-${j}`}
                          className="py-4"
                          style={{
                            borderBottom: i === data.length - 1 ? "none" : "",
                          }}
                        >
                          {item[head.accessor]}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};
