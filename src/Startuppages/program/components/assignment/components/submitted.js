import React, { useState , useEffect } from 'react'
import { SmallModal, LargeModal, Tag } from '../../../../../Startupcomponents'
import { Feedback, TodoCard } from '../styled'
import doc from '../../../../../assets/icons/assdoc.svg'
import docIcon from '../../../../../assets/icons/docIcon.svg'
import lady from '../../../../../assets/images/smileLady.svg'
import { months } from '../../../../../utils/helpers'
import { getSubmittedAssignment } from '../../../../../services'
import { PageLoader } from '../../../../../components'
import Pagination from 'react-bootstrap/Pagination';
import moment from 'moment';


export const Submitted = () => {

  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [submittedAssignment , setSubmittedAssignment] = useState(null);
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
    const res = await getSubmittedAssignment({
      page:currentPage,
      limit:5
    });
    //console.log(res?.data)
    setSubmittedAssignment(res?.data);
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
        { submittedAssignment &&  submittedAssignment?.data.map((info, i) => (
          <TodoCard key={i} className="col-lg-6 col-md-6 col-12 mx-3 px-4 mt-3">
            {showModal ? (
              <LargeModal id={i} title="" closeModal={setShowModal}>
                <AssignmentFeedBackModal data={info} />
              </LargeModal>
            ) : (
              <span></span>
            )}
            <div className="d-flex justify-content-between head">
              <div className="d-flex">
                <h6 className="mr-3">{info?.topic}</h6>
              </div>
            </div>

            <div className="d-flex justify-content-between my-2 date">
              <h6>
                {new Date(info?.deadlineDay).getDate()} |{' '}
                {months[new Date(info?.deadlineTime).getMonth()]}
              </h6>
              <Tag name="Complete" bg="#D1FFD3" color="#337808" fz="12px" />
            </div>

            <div className="my-2 body">
              <p>{info?.description}</p>
            </div>

            <div className="my-4 subAssbtn">
              <button data-target={i} onClick={() => setShowModal(true)}>
                View Feedback
              </button>
            </div>
          </TodoCard>
        ))}
      </div>
      <div className="d-flex justify-content-end">
				<Pagination>

				{
          submittedAssignment &&	submittedAssignment?.results?.currentPage > 1 ? (
						 <>
				  <Pagination.Prev onClick={prevPage} className='mx-1' />
						{
			
					
					<Pagination.Item  className='mx-1' >{ `${currentPage} of  ${submittedAssignment?.results?.limit}` }</Pagination.Item>
						

				}
				 			{
                submittedAssignment?.results?.currentPage === submittedAssignment?.results?.limit ? <span />:<Pagination.Next onClick={nextPage} className='mx-1' /> 
							 }
						 </>

					):(
						<>
            {

      <Pagination.Item onClick={()=> movePage(currentPage + 1)} className='mx-1' >{ `${currentPage} of  ${submittedAssignment?.results?.limit ?? 1}` }</Pagination.Item>
        
    }

                        {
                          submittedAssignment &&  submittedAssignment?.results?.currentPage === submittedAssignment?.results?.limit ? <span /> : <Pagination.Next onClick={nextPage} className='mx-1' />
							     }

						</>
					)
				}

				</Pagination>
			</div>

    </div>
  )
}

export const AssignmentFeedBackModal = ({ data }) => {



  return (
    <Feedback className="mx-4 mb-5">
      <div className="row mx-5">
        <div className="mt-0 pb-2 border-bottom">
          <h2>Feedback</h2>
        </div>
        <div className="col-lg-4 my-5">
          <article className="deck-card">
            <div className="deck-card-img">
              <img src={doc} alt="document" />
            </div>
            <div className="d-flex align-items-start p-3">
              <img src={docIcon} alt="document icon" className="mr-2" />
              <span>
                <p>Business Plan</p>
                <small>21MB</small>
              </span>
            </div>
          </article>
        </div>
        <div className="col-lg-7 mx-2 my-5">
          <h4 className="pt-5 pb-2">{data?.topic}</h4>
          <span style={{ color: '#525151' }}>Submitted On</span>
          <div className="my-4 ">
            <h3>
              {new Date(data?.deadlineDay).getDate()} |{' '}
              {months[new Date(data?.deadlineTime).getMonth()]}
            </h3>
          </div>
        </div>

        <div className="body mb-3 py-4 px-5">
          <div className="d-flex mb-5">
            <img src={lady} alt="mentor pic" />
            <div className="ms-3">
              <h4>{data?.host?.name}</h4>
              <span>{data?.host?.position}</span>
            </div>
            <div className="ms-5 mt-4">
              <Tag name={`${moment(data?.deadlineTime).fromNow()}`} bg="none" fz="12px" color="#2E3192" />
            </div>
          </div>
          <p>{data?.description}</p>
        </div>
      </div>
    </Feedback>
  )
}
