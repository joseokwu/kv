import React from "react";
import { RowOption, Select, TextArea, Button } from "../../../../components";
import FormCard from "../../../partnerRegisteration/components/formCard/FormCard";
import { useHistory } from "react-router";
import { sectors } from "../../../../utils/utils";

export const InvestmentApproach = () => {
  const { push } = useHistory();

  const investmentStages = [
    "Pre-Seed",
    "Seed",
    "angel",
    "accelerator",
    "MVP",
    "pre series A",
    "series A",
  ];

  const expBetter = [
    "You have invested in startups before",
    "You come from an entrepreneurial family or have been a founder/co-founder of a business venture family",
    "You have at least 10 years of work experience",
    "I have not made any investments before, but I'm excited to get started",
    "I have invested in one or two businesses and would like to find more opportunities",
    "I am an angel investor / high net worth individual making regular investments",
    "I am an institutional investor, working in Venture Capital / Private Equity",
    "None of the above",
  ];

  const region = [
    "Africa - the whole continent",
    "North Africa",
    "East Africa",
    "West Africa",
    "Central Africa",
    "Southern Africa",
  ];

  const funding = [
    "Less than $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "More than $100,000",
    "Less than $10,000",
    "$10,000 - $40,000",
    "$40,000 - $100,000",
    "$100,000 - $300,000",
    "More than $300,000",
  ];
  return (
    <div className="register-form-wrap">
      <h3>Investment Approach</h3>
      <p>Let’s help you provide startups personalised for your preferences</p>

      <FormCard>
        <div className="row">
          <section className="col-12 mb-4">
            <Select
              placeholder="Choose sectors you are interested in"
              label="Are you interested in any sectors or technologies in particular?"
              className="edit_input"
              options={sectors}
            />
          </section>

          <section className="col-12 mb-4">
            <Select
              placeholder="Choose option"
              label="Help us understand your experience better:"
              className="edit_input"
              options={expBetter}
            />
          </section>

          <section className="col-12 mb-4">
            <p className="mb-3">I Prefer to invest in</p>
            <RowOption options={["B2B", "B2C", "Marketplace"]} />
          </section>

          <section className="col-12 mb-4">
            <TextArea
              label="Investment Thesis"
              placeholder="e.g i want to invest in start-ups which have global potential and have validated traction"
            />
          </section>
        </div>
      </FormCard>

      <FormCard>
        <div className="row">
          <section className="col-12 mb-4">
            <p className="mb-3">What is your Preferred Stage</p>
            <RowOption options={investmentStages} />
          </section>

          <section className="col-12 mb-4">
            <Select
              label="What regions are you interested in investing in?"
              placeholder="Choose regions you are interested in investing in"
              className="edit_input"
              options={region}
            />
          </section>

          <section className="col-12 mb-4">
            <p className="mb-3">What is your Preferred Stage</p>
            <RowOption
              options={[
                "Top College Graduates",
                "Prior Start-up experience",
                "Doesn't matter",
              ]}
            />
          </section>

          <section className="col-12 mb-4">
            <Select
              label="On average, how much would you like to invest in each business you choose to fund (in USD)?"
              placeholder="Choose an option"
              className="edit_input"
              options={funding}
            />
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
              push("#portfolio");
            }}
          />
        </div>
      </section>
    </div>
  );
};


























// import React from "react";
// import { RowOption, Button } from "../../../../components";
// import FormCard from "../../../partnerRegisteration/components/formCard/FormCard";
// import { useHistory } from "react-router";
// import { Input , Form , Select } from 'antd';
// import { sectors } from "../../../../utils/utils";
// import { useAuth } from "../../../../hooks/useAuth";
// import { investmentStages, expBetter, region, funding } from "../../../../constants/domiData";
// import { TextareaCustom } from "../../../../components/textArea/cutstomTextarea";


// const { Option } = Select;
// const { TextArea } = Input;

// export const InvestmentApproach = () => {
//   const { push } = useHistory();
//   const { updateInvestorProfileData, stateAuth, updateInvestorInfo } = useAuth()
//   const onFinish = async (values) => {
//     updateInvestorInfo()
//     console.log(values)
//   }
//   console.log(stateAuth);


//   return (
//     <div className="register-form-wrap">
//       <h3>Investment Approach</h3>
//       <p>Let’s help you provide startups personalised for your preferences</p>

//       <Form onFinish={onFinish} initialValues={{ remember: true }}>
//       <FormCard>
//         <div className="row">
//           <section className="col-12 mb-4">
//             <Form.Item
//               label="Are you interested in any sectors or technologies in particular?"
//               name={"techSector"}
//               initialValue={ stateAuth?.investorData?.techSector}
//               rules={[{required: true, message: 'Please select any sector!'}]}
//             >
//             <Select
//               placeholder="Choose sectors you are interested in"
//               className="edit_input"
//               onChange={(e) => updateInvestorProfileData("investorApproach", {techSector: e.target.value})}
//             >
//               {
//                 sectors.map((item, i) => (
//                   <Option key={i} value={item}>{item}</Option>
//                 ))
//               }
//             </Select>
//             </Form.Item>
//           </section>

//           <section className="col-12 mb-4">
//             <Form.Item
//               label="Help us understand your experience better"
//               name={"investmentExperience"}
//               initialValue={ stateAuth?.investorData?.averageInvestment}
//               rules={[{required: true, message: 'Please select investment experience!'}]}
//             >
//             <Select
//               placeholder="Choose option"
//               className="edit_input"
//               onChange={(e) => updateInvestorProfileData("investorApproach", {investmentExperience: e.target.value})}
//             >
//               {
//                 expBetter.map((item, i) => (
//                   <Option key={i} value={item}>{item}</Option>
//                 ))
//               }
//             </Select>
//             </Form.Item>
//           </section>

//           {/* <section className="col-12 mb-4">
//             <p className="mb-3">I Prefer to invest in</p>
//             <RowOption options={["B2B", "B2C", "Marketplace"]} />
//           </section> */}

//           <section className="col-12 mb-4">
//             <TextareaCustom 
//               name={"investmentThesis"}
//               label="Investment Thesis"
//               placeholder="e.g i want to invest in start-ups which have global potential and have validated traction"
//               value={stateAuth?.investorData?.investmentThesis}
//               onChange={(e)=>  updateInvestorProfileData("investorApproach",{ investmentThesis: e.target.value })}
//             />
//           </section>
//         </div>
//       </FormCard>

//       <FormCard>
//         <div className="row">
//           {/* <section className="col-12 mb-4">
//             <p className="mb-3">What is your Preferred Stage</p>
//             <RowOption options={investmentStages} />
//           </section> */}

//           {/* <section className="col-12 mb-4">
//             <Form.Item
//               label="What region are you interested in investing in?"
//               name={"investmentThesis"}
//               initialValue={ stateAuth?.investorData?.investmentThesis}
//               rules={[{required: true, message: 'Please select investment region!'}]}
//             >
//             <Select
//               placeholder="Choose regions you are interested in investing in"
//               className="edit_input"
//             >
//                {
//                 region.map((item, i) => (
//                   <Option key={i} value={item}>{item}</Option>
//                 ))
//               }
//             </Select>
//             </Form.Item>
//           </section> */}

//           {/* <section className="col-12 mb-4">
//             <p className="mb-3">What is your Preferred Stage</p>
//             <RowOption
//               options={[
//                 "Top College Graduates",
//                 "Prior Start-up experience",
//                 "Doesn't matter",
//               ]}
//             />
//           </section> */}

//           <section className="col-12 mb-4">
//             <Form.Item 
//               label="On average, how much would you like to invest in each business you choose to fund (in USD)?"
//               name={"averageInvestment"}
//               initialValue={ stateAuth?.investorData?.averageInvestment}
//               rules={[{required: true, message: 'Please select average investment!'}]}
//             >
//             <Select
//               placeholder="Choose an option"
//               className="edit_input"
//               onChange={(e) => updateInvestorProfileData("investorApproach", {averageInvestment: e.target.value})}
//             >
//               {
//                 funding.map((item, i) => (
//                   <Option key={i} value={item}>{item}</Option>
//                 ))
//               }
//             </Select>
//             </Form.Item>
//           </section>
//         </div>
//       </FormCard>

//       <section className="d-flex align-items-center justify-content-between">
//         <button
//           className="back-btn"
//           onClick={() => {
//             push("#investor");
//           }}
//         >
//           Go Back
//         </button>

//         <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
//           <Button label="Save" variant="secondary" />
//           <Button
//             label="Next"
//             onClick={() => {
//               push("#portfolio");
//             }}
//           />
//         </div>
//       </section>
//       </Form>
//     </div>
//   );
// };
