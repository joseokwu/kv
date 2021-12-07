import React from "react";
import { Header } from "../../components/index";

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
