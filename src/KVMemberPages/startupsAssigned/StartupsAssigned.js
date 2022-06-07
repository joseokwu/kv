import { Button, Modal, Tabs } from "../../components";
import { useHistory } from "react-router-dom";
import { StartupList } from "./components/StartupList";
import YeboxLogo from "../../assets/images/yeLogo.svg";
import startupImage from "../../assets/images/startup-image.png";
import { Filter } from "../../components";

export const StartupsAssigned = () => {
    const tabs = ["All", "Pending", "Accepted"];

    const {
        location: { hash },
        push,
    } = useHistory();
    const history = useHistory();
    console.log(history);

    const startupList = [
        {
            name: "Yebox  Technology",
            logo: YeboxLogo,
            image: startupImage,
            status: "Pending",
            industry: ["Fintech", "Incubation Program", "Accounting"],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus eu lorem ",
            eventDate: "2022-08-24T23:00:00.000Z",
            evaluated: false,
        },
        {
            name: "Yebox  Technology",
            logo: YeboxLogo,
            image: startupImage,
            status: "Pending",
            industry: ["Fintech", "Incubation Program", "Accounting"],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus eu lorem ipsum dolor sit  eu lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit consectetur adipiscing el ",
            eventDate: "2022-02-05T23:00:00.000Z",
            evaluated: false,
        },
        {
            name: "Yebox  Technology",
            logo: YeboxLogo,
            image: startupImage,
            status: "In-Progress",
            industry: ["Fintech", "Incubation Program", "Accounting"],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus eu lorem ipsum dolor sit  eu lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit consectetur adipiscing el ",
            eventDate: "2022-02-05T23:00:00.000Z",
            evaluated: false,
        },
        {
            name: "Yebox  Technology",
            logo: YeboxLogo,
            image: startupImage,
            status: "Complete",
            industry: ["Fintech", "Incubation Program", "Accounting"],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus eu lorem ipsum dolor sit  eu lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit consectetur adipiscing el ",
            eventDate: "2022-02-05T23:00:00.000Z",
            evaluated: true,
        },
        {
            name: "Yebox  Technology",
            logo: YeboxLogo,
            image: startupImage,
            status: "Pending",
            industry: ["Fintech", "Incubation Program", "Accounting"],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus eu lorem ipsum dolor sit  eu lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit consectetur adipiscing el ",
            eventDate: "2022-02-05T23:00:00.000Z",
            evaluated: true,
        },
    ];

    const renderComponent = () => {
        switch (hash) {
            case `#${tabs[0]}`:
                return <StartupList dataList={startupList} />;
                break;
            case `#${tabs[1]}`:
                return (
                    <StartupList dataList={startupList} filters={["Pending"]} />
                );
                break;
            case `#${tabs[2]}`:
                return (
                    <StartupList
                        dataList={startupList}
                        filters={["Complete"]}
                    />
                );
                break;

            default:
                break;
        }
    };

    return (
        <div className="p-5">
            <section style={{ maxWidth: 2000, marginBottom: "2rem" }}>
                <h4 className="blue-title">Startup Assigned</h4>
            </section>
            <section className="d-flex align-items-center justify-content-between mb-4">
                <Tabs tabItems={tabs} />
                <Filter list={tabs} />
            </section>
            <section className="mb-4">
                {`${startupList?.length} startups assigned to you`}
            </section>
            <section className="pt-3">{renderComponent()}</section>
        </div>
    );
};
