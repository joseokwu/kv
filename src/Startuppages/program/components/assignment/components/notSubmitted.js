import React, { useState , useEffect } from 'react'
import { SmallModal, Tag } from '../../../../../Startupcomponents'
import { SubmitAssignment, TodoCard } from '../styled'
import {
  FileSize,
  FileText,
  FileWrapper,
  LabelButton,
} from '../../../../startupRegistration/components/pitchdeck/pitch.styled'
import downloadIcon from '../../../../../assets/icons/download.svg'
import doc from '../../../../../assets/icons/assdoc.svg'
import { months } from '../../../../../utils/helpers'
import { assignment ,submitAssignment  } from '../../../../../services';
import { PageLoader } from '../../../../../components'
import Pagination from 'react-bootstrap/Pagination';
import { upload } from './../../../../../services/utils';
import { useAuth } from '../../../../../hooks/useAuth';

export const NotSubmitted = () => {
  

  const [openModal, setOpenModal] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [NotsubmittedAssignment , setNotSubmittedAssignment] = useState(null);
  const [loading, setLoading] = useState(false);


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
  
  }, [currentPage])

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
                <SubmitAssignmentModal data={info} />
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
      </div>
    </div>
  )
}

export const SubmitAssignmentModal = ({data}) => {

const { stateAuth } = useAuth();

  const [logoUploading, setLogoUploading] = useState(false);
  const [fileDoc, setFileDoc] = useState('');


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
            <img src={downloadIcon} alt="Download Icon" />
            <FileText className="my-3 font-weight-bold">Drag & Drop</FileText>
            <FileText>Drag files or click here to upload </FileText>
            <FileSize className="my-3">{'(Max. File size 5mb)'}</FileSize>
            <input type="file"
             id="pitch-doc"
             onChange={handleChange}
              hidden />
            <LabelButton for="pitch-doc">Upload Files</LabelButton>
          </FileWrapper>
        </div>
        <div className="mt-5">
          <button>Submit</button>
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
