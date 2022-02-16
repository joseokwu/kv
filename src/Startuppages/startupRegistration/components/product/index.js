import React, { useState } from 'react'
import { HeaderProduct, FormWrapper, VideoWrapper } from './product.styled'
import { useActivity } from '../../../../hooks/useBusiness'
import RedFile from '../../../../assets/icons/redFile.svg'
import { CustomButton } from '../../../../Startupcomponents/button/button.styled'
import BlueFile from '../../../../assets/icons/bluFile.svg'

export const Product = () => {
  const {
    changePath,
    state: { path },
  } = useActivity()

  const next = () => {
    changePath(path + 1)
  }

  const back = () => {
    changePath(path - 1)
  }

  return (
    <>
      <HeaderProduct>
        <h5 className="text-nowrap"> Product / Services </h5>
        <p className="text-nowrap">Let's help you explain your product</p>
      </HeaderProduct>
      <form style={{ marginBottom: '4rem' }}>
        <FormWrapper>
          <div className="div">
            <span>Product / Service Description</span>
            <p>A brief description of your product</p>

            <hr />

            <div className="row">
              <div className="form-group col-12">
                <div className="d-flex justify-content-between mt-2">
                  <label>
                    Briefly describe the users of your product or services?
                  </label>
                  <label style={{color: '#828282'}}>250 words</label>
                </div>
                <textarea
                  cols="5"
                  rows="5"
                  classNam="form-control"
                  placeholder="Enter Brief info about your product"
                ></textarea>
              </div>
              <div className="form-group col-12">
                <div className="d-flex justify-content-between">
                  <label>
                    What makes your solution unique from others in the market? *
                  </label>
                  <label style={{color: '#828282'}}>250 words</label>
                </div>

                <textarea
                  cols="5"
                  rows="5"
                  classNam="form-control"
                  placeholder="Enter your uniqueness "
                ></textarea>
              </div>
            </div>

            <div className="form-group col-12">
              <VideoWrapper>
                <label> Product demo upload</label>
                <div className="row">
                  <div className=" col-lg-6 col-12">
                    <div className="div p-5">
                      <img src={RedFile} alt=".#" />
                    </div>
                    <div id="div" className="p-2">
                      <div className="d-flex mt-n2">
                        <img
                          src={BlueFile}
                          alt=".#"
                          style={{ width: '10%', height: '10%' }}
                          className="mt-3"
                        />
                        <p
                          className=""
                          style={{ marginLeft: '0.2rem', fontSize: '0.9rem' }}
                        >
                          Product Demo
                        </p>
                      </div>
                      <p className="my-n2 p">2.5 mb</p>
                    </div>
                  </div>
                  <div className=" col-lg-6 col-12">
                    <div className="div p-5">
                      <img src={RedFile} alt=".#" />
                    </div>
                    <div id="div" className="p-2">
                      <div className="d-flex mt-n2">
                        <img
                          src={BlueFile}
                          alt=".#"
                          style={{ width: '10%', height: '10%' }}
                          className="mt-3"
                        />
                        <p
                          className=""
                          style={{ marginLeft: '0.2rem', fontSize: '0.9rem' }}
                        >
                          Product Demo
                        </p>
                      </div>
                      <p className="my-n2 p">2.5 mb</p>
                    </div>
                  </div>
                </div>
              </VideoWrapper>
            </div>
          </div>
        </FormWrapper>
        <div className="row mt-4">
          <div className="col-3">
            <CustomButton className="" background="#D0D0D1" onClick={back}>
              Back
            </CustomButton>
          </div>
          <div className="col-9 d-flex justify-content-lg-end">
            <CustomButton className="mx-4" background="#00ADEF">
              Save
            </CustomButton>
            <CustomButton
              onClick={next}
              style={{ marginLeft: '0.5rem', marginRight: '7rem' }}
              background="#2E3192"
            >
              Next
            </CustomButton>
          </div>
        </div>
      </form>
    </>
  )
}
