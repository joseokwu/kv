import React from "react";
import { Header } from "../../components/index";
import { StartupSideBar } from "../sidebar/Sidebar";

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
  );
};


export const WithRegisterLayout = (Component) => {
	return (props) => {
		return (
			<>
				<RegisterLayout>
					<Component {...props} />
				</RegisterLayout>
			</>
		);
	};
};

const StartupRegistrationLayout = ({ children }) => {
  return (
    <div>
      <section className="layout-header">
        <Header />
      </section>
      <section className="">
        <div className='row'>
        <div className='col-3 is-hidden-mobile' style={{background:'white'}} >
          <StartupSideBar />
        </div>
        <div className="col-9" style={{background:"#f0f0f0"}} >{children}</div>
        </div>

      </section>
    </div>
  );
};


export const WithStartupRegistrationLayout = (Component) => {
	return (props) => {
		return (
			<>
				<StartupRegistrationLayout>
					<Component {...props} />
				</StartupRegistrationLayout>
			</>
		);
	};
};