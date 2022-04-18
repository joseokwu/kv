import { useHistory } from "react-router-dom";

export const NoticeItem = ({
  noticeImage = "",
  userImage = "",
  container = "",
}) => {
  const { push } = useHistory();
  return (
    <>
      {/* {container !== "page" ? (
        <article
          className="d-flex align-items-start notice-item"
          onClick={() => push("/startup/notification#all")}
        >
          <img src={userImage} alt="user" className="notice-from-img" />
          <section className="notice-text">
            <p>
              Henry Ken has invited you to an Event ; Applean Demo day. Dated:
              14th Oct 2021
            </p>
            <small>Yesterday 12/oct/21</small>
          </section>
          {String(noticeImage) && (
            <img src={noticeImage} alt="notice" className="notice-img" />
          )}
        </article>
      ) : (
        <article
          className="d-flex align-items-start justify-content-between notice-item w-100"
          onClick={() => push("/startup/notification#all")}
        >
          <div className="d-flex align-items-center">
            <img src={userImage} alt="user" className="notice-from-img" />
            <section className="notice-text ml-5">
              <p style={{ fontSize: "1.15rem" }} className="mb-3">
                Henry Ken has invited you to an Event ; Applean Demo day. Dated:
                14th Oct 2021
              </p>
              <div
                className="d-flex align-items-center"
                style={{ columnGap: 30 }}
              >
                <small style={{ fontSize: 14 }}>Yesterday 12/oct/21</small>
                <small style={{ fontSize: 14 }}>Type: Admin</small>
              </div>
            </section>
          </div>
          {String(noticeImage) && (
            <img src={noticeImage} alt="notice" className="notice-img" />
          )}
        </article>
      )} */}
      <div className="text-center font-weight-bold py-3">
        <p style={{fontSize: '22px'}}>No notifications</p>
      </div>
    </>
  );
};
