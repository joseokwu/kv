import { Button, Modal, Tabs } from "../../components";
import { useHistory } from "react-router-dom";

export const StartupsAssigned = () => {
    const tabs = ["All", "Pending", "Accepted"];

    const {
        location: { hash },
        push,
    } = useHistory();

    const programList = [
        { status: "pending" },
        { status: "accepted" },
        { status: "pending" },
        { status: "pending" },
        { status: "accepted" },
    ];

    return (
        <div>
            <section className="mb-45" style={{ maxWidth: 2000 }}>
                <Tabs tabItems={tabs} />
            </section>
        </div>
    );
};
