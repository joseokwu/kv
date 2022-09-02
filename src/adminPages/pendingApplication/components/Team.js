import React, { useEffect, useState } from 'react';
import twitter from '../../../assets/icons/twitterLogo.svg';
import linkedIn from '../../../assets/icons/linkedInLogo.svg';
import whatsApp from '../../../assets/icons/whatsapp.svg';
import member from '../../../assets/images/sampleTeamMember.png';
import { LargeModal, Tag } from '../../../Startupcomponents';
import moment from 'moment';
import mail from '../../../assets/icons/mail.svg';

export const Team = ({ data }) => {
  console.log('data', data);

  const [showCofounder, setCofounder] = useState(false);

  useEffect(() => {
    console.log(showCofounder);
  }, [showCofounder]);

  return (
    <div>
      {/* <h3 className="tab-section-title">Team</h3> */}

      <section>
        <h4 className='team-group-title'>Founder & Co-Founders</h4>

        {data?.coFounder.length > 0 ?? (
          <div className='row'>
            <article className='col-lg-4 mb-4'>
              <TeamMember
                data={data}
                showCofounder={showCofounder}
                setCofounder={setCofounder}
              />
            </article>
          </div>
        )}
      </section>

      <section>
        <h4 className='team-group-title mt-5'>Team Members</h4>

        <div className='row'>
          {data?.coFounder?.map((c, i) => {
            return (
              <article className='col-lg-4 mb-4'>
                <TeamMember
                  data={c}
                  key={i}
                  showCofounder={showCofounder}
                  setCofounder={setCofounder}
                />
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

const TeamMember = ({ data, showCofounder, setCofounder }) => {
  return (
    <>
      {showCofounder ? (
        <LargeModal closeModal={setCofounder} id='founderModal'>
          <FounderModal data={data} setCofounder={setCofounder} />
        </LargeModal>
      ) : (
        <span />
      )}
      <div
        className='d-flex align-items-center flex-wrap member-card'
        onClick={() => {
          setCofounder(true);
        }}
      >
        {data?.avatar && (
          <img
            src={data?.avatar}
            alt='team member'
            className='mr-4'
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '60px',
            }}
          />
        )}
        <section>
          <p> {data?.firstName + ' ' + data?.lastName} </p>
          <p className='small'> {data?.position} </p>
          <span className='d-flex'>
            <a href={data?.socialMedia?.linkedIn} target='_blank'>
              <img
                src={linkedIn}
                alt='linkedIn'
                to={data?.socialMedia?.linkedIn}
                width='20'
                height='20'
              />
            </a>
            <a href={data?.socialMedia?.twitter} target='_blank'>
              <img
                src={twitter}
                alt='twitter'
                className='mx-3'
                width='20'
                to={data?.socialMedia?.twitter}
                height='20'
              />
            </a>
            <a
              href={`https://wa.me/${data?.mobile_number}?text=`}
              target='_blank'
            >
              <img src={whatsApp} alt='whatsapp' width='20' height='20' />
            </a>
          </span>
        </section>
      </div>
    </>
  );
};

const FounderModal = ({ data, setCofounder }) => {
  return (
    <section className='container dashboard_profle mt-4'>
      <div className='row founder_profile px-5'>
        <div className='col-lg-2 me-5'>
          <img
            src={data?.avatar}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '60px',
            }}
            alt=''
          />
        </div>
        <div className='col-lg-9 mt-3'>
          <div className='d-flex justify-content-between '>
            <div>
              <h1>{data?.firstName + data?.lastName}</h1>
              <p> {data?.position ?? 'Founder'} </p>
            </div>
            <div className=''>
              <a href={data?.socialMedia?.linkedIn} target='_blank'>
                <img src={linkedIn} alt='linkedIn' />
              </a>
              <a href={data?.socialMedia?.twitter} target='_blank'>
                <img className='px-3' src={twitter} alt='twitter' />
              </a>
              <a
                href={`https://wa.me/${data?.mobile_number}?text=`}
                target='_blank'
              >
                <img src={whatsApp} alt='whatsApp' />
              </a>
            </div>
          </div>

          <div className='my-2'>
            <p>
              <img className='pr-2' src={mail} alt='mail' />
              {data?.email}
            </p>
          </div>
        </div>
      </div>

      <div className='col'>
        {/* <div className="dashboard_profile_banner"></div> */}
        <div className='dashboard_profile_info'>
          <section className='row founder_main mt-5 pb-5 mb-5 py-5'>
            <div className='col-lg-11 founder_card'>
              <div className='p-4'>
                <h3
                  className='pb-3'
                  onClick={() => {
                    setCofounder(false);
                  }}
                >
                  About{' '}
                </h3>
                <p>{data?.briefIntroduction}</p>
              </div>

              <div className='p-4 industry border-bottom'>
                <h3>Experience</h3>
                <div className='mt-4 mb-4 d-flex'>
                  {data?.experience?.map((item, i) => (
                    <div key={i}>
                      <div className='founder_experience ml-4'>
                        <h3 className=''> {item?.companyName} </h3>
                        <p className='pt-2 pb-2'> {item?.position} </p>
                        <p className='pb-4'>{item?.location} </p>

                        <h4>
                          {' '}
                          {`${moment(item?.startDate).format('YYYY')} - ${
                            item?.endDate === 'present'
                              ? item?.endDate
                              : moment(item?.endDate).format('YYYY')
                          }`}
                        </h4>
                        <p className='pt-3'>{item?.responsibility}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='row p-4 education mt-4'>
                <h3>Education</h3>
                {data?.education.map((item, i) => (
                  <div key={i} className='col-lg-8 d-flex mt-4'>
                    <div className='mx-4'>
                      <h6> {item?.schoolName} </h6>
                      <p className='py-2'>{item?.course} </p>
                      <article>{item?.degreeType ?? ''}</article>
                      <article className='py-2'>{`${moment(
                        item?.startDate
                      ).format('YYYY')} - ${
                        item?.endDate === 'present'
                          ? item?.endDate
                          : moment(item?.endDate).format('YYYY')
                      }`}</article>
                    </div>
                  </div>
                ))}
              </div>

              <section className='col-lg mt-4 mb-5'>
                <h3 className='pb-3'>Skills</h3>
                <span
                  className='d-flex align-items-center flex-wrap'
                  style={{ columnGap: 10, rowGap: 10 }}
                >
                  {data?.skills.map((item, i) => (
                    <Tag name={item} key={i} color='#E31937' bg='#FFF1F3' />
                  ))}
                </span>
              </section>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
