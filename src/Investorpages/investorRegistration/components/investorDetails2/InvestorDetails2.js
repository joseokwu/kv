import React from "react";
import { RowOption,  TextField, Button } from "../../../../components";
import FormCard from "../../../partnerRegisteration/components/formCard/FormCard";
import { useHistory } from "react-router";
import { sectors } from "../../../../utils/utils";
import { Form , Select } from "antd";
import { useAuth } from "../../../../hooks/useAuth";

const { Option } = Select;

export const InvestorDetails2 = () => {
  const { push } = useHistory();
  const { updateInvestorProfileData, stateAuth, updateInvestorInfo } = useAuth()
  const onFinish = async (values) => {
    updateInvestorInfo()
    console.log(values)
  }
  //console.log(stateAuth);
  

  return (
    <div className="register-form-wrap">
      <h3 style={{color: "#2e3192"}}>Investor Details</h3>
      <p>
        This will help us provide startups personalised for your preferences
      </p>
      <Form onFinish={onFinish} initialValues={{ remember: true }}>
      <FormCard>
        <div className="row">
          <section className="col-12 mb-4">
            <p className="mb-3">Are you a Lead investor</p>
            <RowOption  
             currentSelected={stateAuth?.investorData?.personalDetail?.isLeadInvestor === true ? 'yes' : 'no'}
            getSelected={(value) => {
            updateInvestorProfileData('personalDetail', {
              isLeadInvestor: value === 'yes' ? true : false ,
            }) 
          }}
             options={["yes", "no"]} />
          </section>

          <section className="col-12 mb-4">
            <p className="mb-3"> Have you angel invested before?</p>
            <RowOption
            currentSelected={stateAuth?.investorData?.personalDetail?.angelInvestedBefore === true ? 'yes' : 'no'}
            getSelected={(value) => {
            updateInvestorProfileData('personalDetail', {
              angelInvestedBefore: value === 'yes' ? true : false ,
            }) 
          }}
             options={["yes", "no"]} />
          </section>
            {
              stateAuth?.investorData?.personalDetail?.angelInvestedBefore ? (
                <section className="col-12 mb-4">
            <p className="mb-3">Do you invest as an Angel or via Syndicate?</p>
            <RowOption 
            currentSelected={stateAuth?.investorData?.personalDetail?.angelInvestorOrSyndicateInvestor}
              getSelected={(value) => {
            updateInvestorProfileData('personalDetail', {
              angelInvestorOrSyndicateInvestor: value,
            }) 
          }}
             options={["solo", "Syndicate", "Both"]} />
          </section>
              ) :(
                <section className="col-12 mb-4">
            <p className="mb-3">
              Do you have any experience in investing as an Angel investors
            </p>
            <RowOption
              currentSelected={stateAuth?.investorData?.personalDetail?.angelInvestedExperience}
             getSelected={(value) => {
            updateInvestorProfileData('personalDetail', {
              angelInvestedExperience: value,
            }) 
          }}
              options={["First time investor", "Experience angel investor"]}
            />
          </section>
              )  
            }
       

          

          <section className="col-12 mb-4">
          <Form.Item
          name="sectorOfExpertise"
          label="Choose the sectors you have expertise in?"
          initialValue={stateAuth?.investorData?.personalDetail?.sectorOfExpertise}
          rules={[{ required: true, message: 'Please select a sector' }]}
        >
            <Select
              placeholder="Choose sector"
              className="edit_input"
              onChange={(e) => updateInvestorProfileData("personalDetail", { sectorOfExpertise: e})}
            >
      {
        sectors.map((item , i) =>(
         <Option value={item} key={i} > { item} </Option>
        ))
       
      }
</Select>
</Form.Item>
          </section>
        </div>
      </FormCard>

      <FormCard>
        <div className="row">
          <section className="col-12 mb-4">
            <p className="mb-3">Would you like to mentor startups?</p>
            <RowOption 
             currentSelected={stateAuth?.investorData?.personalDetail?.mentorsStartups === true ? 'yes' : 'no'}
            getSelected={(value) => {
            updateInvestorProfileData('personalDetail', {
              mentorsStartups: value === 'yes' ? true : false ,
            }) 
          }}
             options={["yes", "no"]} />
          </section>

          <section className="col-12 mb-4">
            <p className="mb-3">
              Are you interested in online pitching sessions?
            </p>
            <RowOption
           currentSelected={stateAuth?.investorData?.personalDetail?.interestedInOnlinePitching === true ? 'yes' : 'no'}
            getSelected={(value) => {
            updateInvestorProfileData('personalDetail', {
              interestedInOnlinePitching: value === 'yes' ? true : false ,
            }) 
          }}
             options={["yes", "no"]} />
          </section>
        </div>
      </FormCard>

      <FormCard>
        <div className="row">
          <section className="col-12 mb-4">
            <p className="mb-3">Where are you investing from?</p>
            <RowOption 
            currentSelected={stateAuth?.investorData?.personalDetail?.investingFrom}
            getSelected={(value) => {
            updateInvestorProfileData('personalDetail', {
              investingFrom: value ,
            }) 
          }}
             options={["Personal Fund", "Family Fund"]} />
          </section>

          <section className="col-lg-6">
            <TextField
              label="Investing budget per year"
              placeholder="$"
              type={'number'}
              name={'budgetPerYear'}
              value={stateAuth?.investorData?.personalDetail?.budgetPerYear}
              onChange={(e) => updateInvestorProfileData("personalDetail", { budgetPerYear: e.target.value})}
              className="edit_input"
            />
          </section>
          <section className="col-lg-6">
            <TextField
              label="Amount"
              placeholder="Enter amount"
              className="edit_input"
              name={'budgetAmount'}
              onChange={(e) => updateInvestorProfileData("personalDetail", { budgetAmount: e.target.value})}
              value={stateAuth?.investorData?.personalDetail?.budgetAmount}
            />
          </section>
          <section className="col-12 mb-4 mt-2">
            <input type="checkbox"
            onChange={() => updateInvestorProfileData("personalDetail", { yetToInvest: true})}
            checked={stateAuth?.investorData?.personalDetail?.yetToInvest}
             id="yet-to" />
            <label htmlFor="yet-to" className="ml-2">
              Yet to invest
            </label>
          </section>

          <section className="col-12 mb-4">
            <TextField
              label="Typical number of investment per year"
              placeholder="Enter number of start-ups invested in"
              className="edit_input"
              value={stateAuth?.investorData?.personalDetail?.numberOfInvestmentPerYear}
              name={"numberOfInvestmentPerYear"}
              onChange={(e) => updateInvestorProfileData("personalDetail", { numberOfInvestmentPerYear: e.target.value })}
            />
          </section>

          {/* <section className="col-lg-6">
            <TextField
              label="Typical investment amount per year"
              placeholder="$"
              className="edit_input"
              onChange={(e) => updateInvestorProfileData("personalDetail", {})}
            />
          </section>
          <section className="col-lg-6">
            <TextField
              label="Amount"
              placeholder="Select amount"
              className="edit_input"
            />
          </section> */}
          <section className="col-12 mb-4 mt-2">
            <input type="checkbox" 
            onChange={() => updateInvestorProfileData("personalDetail", { isPublic: true})}
            checked={stateAuth?.investorData?.personalDetail?.isPublic}
             id="yet-to" />
            <label htmlFor="yet-to" className="ml-2">
              Make it public
            </label>
          </section>
        </div>
      </FormCard>

      <section className="d-flex align-items-center justify-content-between">
        <button
          style={{color: "white", background: "#808080"}}
          className="back-btn"
          onClick={() => {
            push("#investor");
          }}
        >
          Go Back
        </button>

        <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
          <Button label="Save" variant="secondary" />
          <Button
            label="Next"
            onClick={() => {
              push("#approach");
            }}
          />
        </div>
      </section>
      </Form>
    </div>
  );
};
