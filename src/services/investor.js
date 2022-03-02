import { request } from "../utils/axios";

export const addInvestorProfile = async (values) => {
  try {
    const result = await request.post("investor/add-investor-detail", values);
    return result.data;
  } catch (err) {
    const error = err?.response?.data?.message || err?.message;
    throw new Error(error);
  }
};

export const getInvestorDashboard = async () =>{
  try{
    const result = await request.post("investor/dashboard");
    return result.data;
  }catch(err){
    throw err;
  }
}


// industry: (3) ['Tech', 'Engineering', 'Career']
// logo: "Yebox"
// name: "Yebox Technology"
// stage: "idea-stage"

//opportunities

{/* <OpportunityCard
onClick={() => push(`/investor/opportunities/1`)}
/> */}

