import React , {useState} from "react";
import { useHistory } from "react-router-dom";
import left from "../../assets/icons/chervonLeft.svg";
import scaleIcon from "../../assets/icons/scaleIcon.svg";
import { Button, Modal, Select, TextField } from "../../components";
import styles from "./createNewCriteria.module.css";
import { Form } from 'antd';

export const CreateNewCriteriaIntro = () => {
  const { goBack } = useHistory();
  return (
    <div className="bg-white" style={{ minHeight: "93vh" }}>
      <Modal
        id="createNewCriteriaModal"
        title="Create New Criteria"
        width={568}
      >
        <CreateNewCriteriaModal />
      </Modal>
      <section className="p-5">
        <div
          className="d-flex align-items-center mb-3"
          onClick={() => goBack()}
          role="button"
          style={{ width: "fit-content" }}
        >
          <img
            src={left}
            alt="left"
            className="mr-2"
            style={{ transform: "rotate(180deg)" }}
          />
          <p className="bread-start" role="button">
            Go back
          </p>
        </div>

        <section className="d-flex align-items-center justify-content-center">
          <div className={styles.content_wrap}>
            <section className={styles.info_box}>
              <h4>Create Evaluation Criteria</h4>
              <p className="border-bottom">
                Welcome to evaluation criteria. Create the necessary questions
                which you will use to analayze and evaluate the startups
                applying for the KV program. Please know that all question
                categories are prefilled and you are expected to adjust the
                questions base on your criteria.
              </p>

              <div>
                <h6>Note</h6>
                <p className="mb-4">
                  All questions are graded on a scale of 0 - 5 and a total score
                  rating of the evaluation criteria is 100.
                </p>

                <p>To help you understand this, here is a visual example.</p>
              </div>

              <div className={styles.scale_info}>
                <img src={scaleIcon} alt="scale" />
                <h5>Scale-</h5>
                <p>1-Poor</p>
                <p>2-Fair</p>
                <p>3-Good</p>
                <p>4-Very Good</p>
                <p className="border-0">5-Excellent</p>
              </div>
            </section>

            <section className="d-flex align-items-center justify-content-end space-out mt-5">
              <Button label="Cancel" variant="trans" onClick={goBack} />
              <Button
                label="Next"
                data-toggle="modal"
                data-target="#createNewCriteriaModal"
              />
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

const CreateNewCriteriaModal = () => {
  const { push } = useHistory();
  const onFinish = async(values) =>{
    console.log(values)
  }
  const [seletType , setSelect] = useState('')

  return (
    <Form
        name="Criteria"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        onFinish={onFinish}
       >
    <div className="px-4">
      <TextField
        label="Criteria Title"
        name={'title'}
        placeholder="Enter criteria title"
        className="max_fill mb-4"
      />

      <Select
        id="type"
        name='criteriaType'
        label="Evaluation Type"
        onChange={(e) => console.log(e.target.value)}
        placeholder="Choose evaluation type"
        options={["KV Member", "Mentors"]}
        className="max_fill mb-4"
      />

      <TextField
      name={'date'}
        label="Evaluation Date"
        placeholder="yyyy-mm-dd"
        type="date"
        className="max_fill mb-4"
      />

      <section className="row">
        <div className="col-lg-6">
          <TextField type="time"
            name={'startDate'}
           label="Start time" className="max_fill mb-4" />
        </div>
        <div className="col-lg-6">
          <TextField 
          name={'endDate'}
           type="time" label="End time" className="max_fill mb-4" />
        </div>
      </section>

      <section className="d-flex align-items-center justify-content-end space-out mb-4">
        <Button label="Cancel" variant="trans" data-dismiss="modal" />

        <Button
          label="Continue"
          
          type={'submit'}
        />
      </section>
    </div>
    </Form>
  );
};
