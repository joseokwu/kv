import React from 'react'
import { Header } from '../../mentorComponents/index'

const RegisterLayout = ({ children }) => {
  return (
    <div>
      <section className="layout-header">
        <Header />
      </section>
      <section className="">
        <div className="layout-child">{children}</div>
      </section>
    </div>
  )
}

export const WithMentorRegisterLayout = (Component) => {
  return (props) => {
    return (
      <>
        <RegisterLayout>
          <Component {...props} />
        </RegisterLayout>
      </>
    )
  }
}
