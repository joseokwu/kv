import React , {useState} from "react";
import { useHistory } from "react-router-dom";
import "./companyOverview.css";
import imageRep from "../../../../assets/icons/image.svg";
import add from "../../../../assets/icons/addFile.svg";
import {
  Button,
  TextField,

} from "../../../../components/index";
import FormCard from "../formCard/FormCard";
import { useAuth } from '../../../../hooks/useAuth';
import { upload } from '../../../../services/utils';
import { CircularLoader } from './../../../../Startupcomponents/CircluarLoader/CircularLoader';
import toast from "react-hot-toast";
import { Input , Form , Select } from 'antd';
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { updateStartup } from '../../../../services';



const { Option } = Select;
const { TextArea } = Input;

// const industry = [
//   ''
// ]

const CompanyOverview = () => {



  const { stateAuth , updatePartnerLocalData ,  updatePartnerInfo } = useAuth();
  const [logoUploading, setLogoUploading] = useState(false);

  const onChange = e => {
    console.log('Change:', e.target.value);
  };
  console.log(stateAuth)
  const onFinish = async(values) =>{
      
    updatePartnerInfo()
      
      console.log(values)
 
}


const handleCountry = (value)=>{

  updatePartnerLocalData("",{
    country: value,
  });

 
  console.log(value)
}

const handleChangeState = (value) => {

  updatePartnerLocalData("",{
    state: value,
  });

}

  const onChangeImage = async (e) => {
    const { files } = e.target;
    const formData = new FormData();
    formData.append("dir", "kv");
    formData.append("ref", stateAuth.user?.userId);
    formData.append("type", "image");
    formData.append(0, files[0]);
    try {
      setLogoUploading(true);
      const response = await upload(formData);
    
      updatePartnerLocalData( '' ,{
        logo: response?.path,
      });
      setLogoUploading(false);
    } catch (error) {
      setLogoUploading(false);
      toast.error(error?.response?.data?.message ?? "Unable to upload image");
    }
  };

  const handlePhoneInput = (value) => {
   
    updatePartnerLocalData("",{
        phoneNumber: value,
      });
  };



  const { push } = useHistory();
  return (
    <div className="register-form-wrap">
      <h3>Company Overview</h3>
      <p>Fill in partner details</p>
      <Form  
         name='Sign-Up'
              className="row"
          		initialValues={{
                remember: true,
              }}
              layout="vertical"
              onFinish={onFinish}
      >
      <FormCard>
        <div className="row mb-4">
          <section className="col-md-3">
            <div className="form-dp">
              <span className="image-placeholder">

              {
                stateAuth?.partnerData?.logo === null ? (
                
                logoUploading ? (
                  <CircularLoader color={"#000"} />
                ):(
                  <>
                  <img src={imageRep} alt="placeholder" />
                <p>
                  Company
                  <br />
                  logo
                </p>
                  </>
                )
                
                ): ( 
                  <img src={stateAuth?.partnerData?.logo} alt="add" className="image-placeholder" />
                )
              }
                
              </span>

              <label for="op" >
               <img src={add} className="add-dp" alt="add"  />
                <input type="file"  onChange={onChangeImage}  id="op" hidden />
              </label>

            </div>
          </section>
          <section className="col-md-9 pl-5">
          <Form.Item
        name="companyDescription"
        label="Company Description"
       
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
            <TextArea

              rows={4}
              style={{ height: 150 }}
              onChange={(e)=>  updatePartnerLocalData("",{
                companyDescription: e.target.value})}
              label="Company Description"
              
              placeholder="250 characters at most"
            />
            </Form.Item>
          </section>
        </div>

        <div className="row">
          <section className="col-md-6 mb-4">
            <TextField
              label="Company Name"
              name={'companyName'}
              onChange={(e)=>  updatePartnerLocalData("",{
                companyName: e.target.value})}
                value={
                  stateAuth?.partnerData?.companyName 
          }
              required={true}
              placeholder="Enter name of partner"
            />
          </section>
          <section className="col-md-6 mb-4">
            <TextField
              onChange={(e)=>  updatePartnerLocalData("",{
                website: e.target.value})}
              label="Website"
              name={'website'}
              required={true}
              placeholder="Enter website URL"
            />
          </section>

          <section className="col-md-6 mb-4">

          <Form.Item
        name="industry"
        label="Industry"
        rules={[{ required: true, message: 'Please select a industry!' }]}
        onChange={(e)=>  updatePartnerLocalData("",{
          industry: e.target.value})}
      >
        <Select
         id="industry"
         style={{width: "fit-content"}}
         placeholder="select your categories"
    
         >
        <Option disabled selected>
                        Select your industry
                      </Option>
                      <Option value="Advanced manufacturing and materials">
                        Advanced manufacturing and materials
                      </Option>
                      <Option value="Agriculture, food and beverages">
                        Agriculture, food and beverages
                      </Option>
                      <Option value="Energy">Energy</Option>
                      <Option value="Engineering and Technology">
                        Engineering and Technology
                      </Option>
                      <Option value="Finance">Finance</Option>
                      <Option value="Health: Pharmaceuticals and Biotechnology">
                        Health: Pharmaceuticals and Biotechnology
                      </Option>
                      <Option value="Healthcare: Devices and Supplies">
                        Healthcare Devices and Supplies
                      </Option>
                      <Option value="Healthcare: Other services and Technologies">
                        Healthcare: Other services and Technologies
                      </Option>
                      <Option value="Information and Communication Technology(ICT)">
                        Information and Communication Technology(ICT)
                      </Option>
                      <Option value="Life-science Technologies">
                        Life-science Technologies
                      </Option>
                      <Option value="Micro/name-electronic and photonics">
                        Micro/name-electronic and photonics
                      </Option>
                      <Option value="Security and Connectivity">
                        Security and Connectivity
                      </Option>
                      <Option value="Space and Aerospace">
                        Space and Aerospace
                      </Option>
                      <Option value="Sustainability and circular economy">
                        Sustainability and circular economy
                      </Option>
                      <Option value="Transportation">Transportation</Option>
                      <Option value="Others">Others</Option>
                      <Option value="Financial Services">Financial Services</Option>
                      <Option value="Education">Education</Option>
                      <Option value="Health">Health</Option>
                      <Option value="Agriculture">Agriculture</Option>
                      <Option value="Insurance">Insurance</Option>
                      <Option value="Clean Energy">Clean Energy</Option>
                      <Option value="Construction">Construction</Option>
                      <Option value="Mobility/Logistics">Mobility/Logistics</Option>
                      <Option value="Social Impact">Social Impact</Option>
                      <Option value="Artificial Intelligence">Artificial Intelligence</Option>
                      <Option value="Blockchain">Blockchain</Option>
                      <Option value="Internet of Things">Internet of Things</Option>
                      <Option value="Mobile">Mobile</Option>
                      <Option value="Software as a Service">Software as a Service</Option>
                      <Option value="Sports">Sports</Option>
                      <Option value="B2B">B2B</Option>
                      <Option value="B2C">B2C</Option>
                      <Option value="D2C">D2C</Option>
                      <Option value="Marketplace">Marketplace</Option>
        </Select>
      </Form.Item>

          </section>
          <section className="col-md-6 mb-4">
          <Form.Item
        name="categories"
        label="Categories"
        onChange={(e)=> updatePartnerLocalData("",{
          categories: e.target.value})}
        rules={[{ required: true, message: 'Please select a category!' }]}
      >
        <Select
          style={{width: "fit-content"}}
         placeholder="select your categories"
         
         >
        <Option disabled selected>
                        Select your industry
                      </Option>
                      <Option value="Advanced manufacturing and materials">
                        Advanced manufacturing and materials
                      </Option>
                      <Option value="Agriculture, food and beverages">
                        Agriculture, food and beverages
                      </Option>
                      <Option value="Energy">Energy</Option>
                      <Option value="Engineering and Technology">
                        Engineering and Technology
                      </Option>
                      <Option value="Finance">Finance</Option>
                      <Option value="Health: Pharmaceuticals and Biotechnology">
                        Health: Pharmaceuticals and Biotechnology
                      </Option>
                      <Option value="Healthcare: Devices and Supplies">
                        Healthcare Devices and Supplies
                      </Option>
                      <Option value="Healthcare: Other services and Technologies">
                        Healthcare: Other services and Technologies
                      </Option>
                      <Option value="Information and Communication Technology(ICT)">
                        Information and Communication Technology(ICT)
                      </Option>
                      <Option value="Life-science Technologies">
                        Life-science Technologies
                      </Option>
                      <Option value="Micro/name-electronic and photonics">
                        Micro/name-electronic and photonics
                      </Option>
                      <Option value="Security and Connectivity">
                        Security and Connectivity
                      </Option>
                      <Option value="Space and Aerospace">
                        Space and Aerospace
                      </Option>
                      <Option value="Sustainability and circular economy">
                        Sustainability and circular economy
                      </Option>
                      <Option value="Transportation">Transportation</Option>
                      <Option value="Others">Others</Option>
                      <Option value="Financial Services">Financial Services</Option>
                      <Option value="Education">Education</Option>
                      <Option value="Health">Health</Option>
                      <Option value="Agriculture">Agriculture</Option>
                      <Option value="Insurance">Insurance</Option>
                      <Option value="Clean Energy">Clean Energy</Option>
                      <Option value="Construction">Construction</Option>
                      <Option value="Mobility/Logistics">Mobility/Logistics</Option>
                      <Option value="Social Impact">Social Impact</Option>
                      <Option value="Artificial Intelligence">Artificial Intelligence</Option>
                      <Option value="Blockchain">Blockchain</Option>
                      <Option value="Internet of Things">Internet of Things</Option>
                      <Option value="Mobile">Mobile</Option>
                      <Option value="Software as a Service">Software as a Service</Option>
                      <Option value="Sports">Sports</Option>
                      <Option value="B2B">B2B</Option>
                      <Option value="B2C">B2C</Option>
                      <Option value="D2C">D2C</Option>
                      <Option value="Marketplace">Marketplace</Option>
        </Select>
      </Form.Item>

          </section>
          <section className="col-md-6 mb-4">
            <TextField label="Twitter"
            name={'twitter'}
            onChange={(e)=> updatePartnerLocalData("",{
              twitter: e.target.value})}
             placeholder="Enter twitter URL" />
          </section>

          <section className="col-md-6 mb-4">
            <TextField label="Linkedin"
              name={'linkedin'}
              onChange={(e)=> updatePartnerLocalData("",{
                linkedin: e.target.value})}
             placeholder="Enter Linkedin URL" />
          </section>
        </div>
      </FormCard>

      <FormCard>
        <div className="contact-title">
          <h4>Contact Info</h4>
        </div>

        <div className="row">
          <section className="col-md-6 mb-4">
            <TextField
            name={'coordinatorName'}
              label="Coordinator Name"
              placeholder="Enter contact person"
            />
          </section>

          <section className="col-md-6 mb-4">
            <TextField
            name={'designation'}
              label="Designation"
              placeholder="Enter contact person"
              onChange={(e)=> updatePartnerLocalData("",{
                designation: e.target.value})}
            />
          </section>
          <section className="col-md-6 mb-4 ">
          <label>
                Mobile Number<span style={{ color: "red" }}>*</span>
              </label>
          <PhoneInput
                id="phoneNumber"
                international
                name="phoneNumber"
                countryCallingCodeEditable={true}
                className="custs ps-3 py-2"
                value={
                  stateAuth?.partnerData?.phoneNumber 
                }
                onChange={handlePhoneInput}
                MaxLength={17}
              />

          </section>
          <section className="col-md-6 mb-4">
            <TextField
              label="Email"
              placeholder="Enter email address"
              type="email"
              name={'email'}
              onChange={(e)=> updatePartnerLocalData("",{
                email: e.target.value})}
              required={true}
            />
          </section>
          <section className="col-md-4 mb-4">
          <label>
                Country<span style={{ color: "red" }}>*</span>
              </label>
          <CountryDropdown
              className="form-control px-5 py-1 country-bg"
              value={stateAuth.partnerData.country}
              onChange={(value) => handleCountry(value)}

            ></CountryDropdown>
          
          </section>
          <section className="col-md-4 mb-4">
          <label>
         State<span style={{ color: "red" }}>*</span>
             </label>
               <RegionDropdown
                 name="state"
                country={stateAuth.partnerData.country}
                value={stateAuth.partnerData.state}
                onChange={(value) => handleChangeState(value)}
                className="form-control ps-3"
                 /> 
           
          </section>
          <section className="col-md-4 mb-4">
            <TextField
              onChange={(e)=> updatePartnerLocalData("",{
                city: e.target.value})}
              name={'city'}
             label="City"
             placeholder="Enter partner city" />
          </section>
        </div>
      </FormCard>

      <section
        className="d-flex align-items-center justify-content-end my-4"
        style={{ columnGap: 9 }}
      >
        <Button
          type='submit'
         label="Save" 
         variant="secondary" />
        <Button
          label="Next"
          onClick={() => {
            push("#offerings");
          }}
        />
      </section>
     </Form>
    </div>
  );
};

export default CompanyOverview;
