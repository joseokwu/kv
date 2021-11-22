import React from "react";
import { Header, Sidebar } from "../index";
import "./mainLayout.css";

 const MainLayout = ({ children }) => {
  return (
    <div>
      <section className="layout-header">
        <Header />
      </section>
      <section className="layout-main">
        <div>
          <Sidebar />
        </div>
        <div className="layout-child">{children}</div>
      </section>
    </div>
  );
};


export const WithMainLayout = (Component) => {
	return (props) => {
		return (
			<>
				<MainLayout>
					<Component {...props} />
				</MainLayout>
			</>
		);
	};
};
