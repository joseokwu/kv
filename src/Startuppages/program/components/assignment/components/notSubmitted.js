import React, { useState , useEffect } from 'react'
import { SmallModal, Tag } from '../../../../../Startupcomponents'
import { SubmitAssignment, TodoCard } from '../styled'
import {
  FileSize,
  FileText,
  FileWrapper,
  LabelButton,
} from '../../../../startupRegistration/components/pitchdeck/pitch.styled'
import downloadIcon from '../../../../../assets/icons/download.svg';
import redIcon from '../../../../../assets/icons/redFile.svg';
import doc from '../../../../../assets/icons/assdoc.svg'
import { months } from '../../../../../utils/helpers';
import { useHistory } from 'react-router-dom';
import { assignment ,submitAssignment  } from '../../../../../services';
import { PageLoader } from '../../../../../components'
import Pagination from 'react-bootstrap/Pagination';
import { upload } from './../../../../../services/utils';
import { useAuth } from '../../../../../hooks/useAuth';
import { CircularLoader } from './../../../../../Startupcomponents/CircluarLoader/CircularLoader';
import toast from 'react-hot-toast';

export const NotSubmitted = () => {
  

  const [openModal, setOpenModal] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [NotsubmittedAssignment , setNotSubmittedAssignment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sub , setSub] = useState('');

  const nextPage = ()=>{
    setCurrentPage(currentPage+1)
 
   }
 
   const prevPage = ()=>{
     setCurrentPage(currentPage-1)
 
   }
   
	const movePage =(id)=>{
		setCurrentPage(id)
	}


  useEffect(() =>{

    const getData = async () => {
      setLoading(true);
      const res = await assignment({
        page:currentPage,
        limit:5
      });
      console.log(res?.data)
      setNotSubmittedAssignment(res?.data);
      setLoading(false);
    };
    
    getData();
  
  }, [currentPage ])

  if (loading) {
    return (
      <PageLoader num={[1, 2, 3, 4, 5]} />
    );
  }

  return (
    <div>
      <div className="row mt-3">
        {NotsubmittedAssignment && NotsubmittedAssignment?.data.map((info, i) => (
          <TodoCard key={i} className="col-lg-6 col-md-6 col-12 mx-3 px-4 mt-3">
            {showModal ? (
              <SmallModal id={i} title="" closeModal={setShowModal}>
                <SubmitAssignmentModal data={info}  />
              </SmallModal>
            ) : (
              <span></span>
            )}
            {openModal ? (
              <SmallModal id={i} title="" closeModal={setOpenModal}>
                <DownloadAssignmentModal data={info} />
              </SmallModal>
            ) : (
              <span></span>
            )}
            <div className="d-flex justify-content-between head">
              <div className="d-flex">
                <h6 className="mr-3"> { info?.topic} </h6>
              </div>
            </div>

            <div className="d-flex justify-content-between my-2 date">
              <h6>
                {new Date(info?.deadlineDay).getDate()} |{' '}
                {months[new Date(info?.deadlineTime).getMonth()]}
              </h6>
              <Tag
                name="Not Submitted"
                bg="#F8F8F8"
                color="#464646"
                fz="12px"
              />
            </div>

            <div className="my-2 body">
              <p>
                {info?.description}
              </p>
            </div>

            <div className="my-4 notSubAssbtn justify-content-between d-flex">
              <button data-target={i} onClick={() => setShowModal(true)}>
                Submit
              </button>
              <button className="download-ass" data-target={i}
               onClick={() => setOpenModal(true)}
               >
                Download
              </button>
            </div>
          </TodoCard>
        ))}
        { 
          NotsubmittedAssignment && NotsubmittedAssignment?.data.length > 0 ? (

            <div className='d-flex justify-content-center text-center' >
              <span>  </span>
            </div>
            
        ):(<span />)
         }
      </div>
    </div>
  )
}

export const SubmitAssignmentModal = ({data }) => {

const { stateAuth } = useAuth();
  console.log(stateAuth)
  const [logoUploading, setLogoUploading] = useState(false);
  const [fileDoc, setFileDoc] = useState('');
  const [loading , setLoading] = useState(false);
  const history = useHistory();



 // console.log()

  const handleSubmit = async(e) =>{

    try{
      const assignment = {
        name:stateAuth?.user?.startupname,
        email:stateAuth?.email,
        assignmentDoc:fileDoc,
        assignmentId:data?._id
      }
      
      setLoading(true);
      const response = await submitAssignment(assignment)
      
      if(!response?.success){
        console.log(response?.message)
        setLoading(false);
       return toast.error(response?.message);
      }

        toast.success(response?.message);
        history.push(history.location.pathname)
        setLoading(false);
        return ;
      
     
    }catch(err){
      console.log(err?.response);
      setLoading(false);
     return toast.error(err?.response?.data?.message)
    }
  }

  const handleChange = async(e) => {
    const { files } = e.target;
    const formData = new FormData();
    formData.append("dir", "kv");
    formData.append("ref", data?.topic);
    formData.append("type", "pdf");
    formData.append(0 , files[0])

    try {
      setLogoUploading(true);
      const response = await upload(formData)
      console.log(response) 
      setFileDoc(response?.path)
      setLogoUploading(false)

    } catch(error) {
      setLogoUploading(false)
      console.log(error)
    }
  }




  return (
    <SubmitAssignment>
      <div className="mx-4">
        <div className="mt-4 pb-4 border-bottom">
          <h2>Submit Assignment</h2>
          <span>Upload your completed assignment</span>
        </div>

        <div className="mt-5">
        
         <FileWrapper className="d-flex justify-content-center text-center col-lg-12">
  {        logoUploading ?( <CircularLoader color={"#000"} />) :  
  (
        <>
          {
            fileDoc ? 
            ( <img src={redIcon}

            style={{ width: "70px", height: "70px" }}
             alt="Download Icon" /> )
              :(
              <>
              <img src={downloadIcon} alt="Download Icon" />
            <FileText className="my-3 font-weight-bold">Drag & Drop</FileText>
            <FileText>Drag files or click here to upload </FileText>
            <FileSize className="my-3">{'(Max. File size 5mb)'}</FileSize>
              </>
            )
          }
            <input type="file"
             id="pitch-doc"
             onChange={handleChange}
              hidden />
            <LabelButton for="pitch-doc">Upload Files</LabelButton>
          </>
  )
  }
          </FileWrapper>
        
        </div>
        <div className="mt-5">
          <button type='button' 
          onClick={handleSubmit}
           > { loading ? <CircularLoader /> : 'Submit' }  </button>
        </div>
      </div>
    </SubmitAssignment>
  )
}

export const DownloadAssignmentModal = ({data}) => {
  return (
    <SubmitAssignment>
      <div className="mx-4">
        <div className="mt-4 pb-4 border-bottom">
          <h2>Download Assignment</h2>
          <span>Download your complete assignment</span>
        </div>

        <div className="mt-5">
          <FileWrapper className="d-flex justify-content-center text-center col-lg-12">
            <FileText>Click the button below to <br/> download your assignment </FileText>
            <img className="my-3" src={doc} alt="Download Icon" />
            <LabelButton className="download mt-2" style={{cursor: 'pointer'}} for="download"> <a  
            style={{textDecoration:'none'}}
            href={`${data?.assignmentFile}`}
            download
             > Download Files</a> </LabelButton>
          </FileWrapper>
        </div>
      </div>
    </SubmitAssignment>
  )
}
