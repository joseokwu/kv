import React from "react";
import { TextField, Button } from "../../../components";
import searchIcon from "../../../assets/icons/searchSm.svg";
import close from "../../../assets/icons/close.svg";
import apple from "../../../assets/images/apple.svg";
import styles from "../selection.module.css";

export const CreateCohort = () => {
    const addedStartups = [
        { image: apple, name: "Gecko Labs" },
        { image: apple, name: "Crypt Inc." },
        { image: apple, name: "Data Flow Inc." },
        { image: apple, name: "Apple Inc." },
    ];
    return (
        <form className="px-4">
            <section className="row">
                <div className="col-12 mb-4">
                    <TextField
                        className="max_fill"
                        label="Cohort Title"
                        placeholder="Enter criteria title"
                    />
                </div>
                <div className="col-lg-6 mb-4">
                    <TextField label="Cohort Start Date" type="date" />
                </div>
                <div className="col-lg-6 mb-4">
                    <TextField label="Cohort End Date" type="date" />
                </div>

                <div className="col-12 border-bottom pb-3 mb-4 mt-4">
                    <h5 className={styles.title}>Add Startups</h5>
                </div>

                <div className="col-12 mb-4">
                    <p>
                        Select startups that will participate in the
                        acceleration program
                    </p>
                </div>

                <div className="col-9 mb-4">
                    <section className="search-input">
                        <img src={searchIcon} alt="search" />
                        <input
                            type="search"
                            placeholder="Search startup list"
                        />
                    </section>
                </div>
                <div className="col-3 mb-4">
                    <Button label="Add" variant="trans" className="w-100" />
                </div>

                {addedStartups?.map((startup, i) => (
                    <div className="col-12 mb-3" key={`added-startup-${i}`}>
                        <StartupSearchItem
                            image={startup?.image}
                            name={startup?.name}
                        />
                    </div>
                ))}

                <div className="col-12 mb-5 d-flex align-items-center justify-content-end space-out">
                    <Button label="Cancel" variant="trans" />
                    <Button label="Continue" />
                </div>
            </section>
        </form>
    );
};

const StartupSearchItem = ({ image, name }) => {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <section className="d-flex align-items-center space-out">
                <img src={image} alt={name} />
                <p>{name}</p>
            </section>
            <img src={close} alt="close" />
        </div>
    );
};
