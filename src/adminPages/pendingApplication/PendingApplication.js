import React from "react";
import { useHistory } from "react-router-dom";
import apple from "../../assets/images/apple.svg";
import left from "../../assets/icons/chervonLeft.svg";
import contributor from "../../assets/images/sampleTeamMember.png";

import { Button, Tabs, Tag } from "../../components";
import styles from "./pending.module.css";
import {
  BusinessCanvas,
  Milestone,
  PitchDeck,
  Product,
  RoadMap,
  Team,
} from "./components";

export const PendingApplication = () => {
  const tabItems = [
    "Pitch Deck",
    "Team",
    "Product",
    "Business Canvas",
    "Milestone/Timeline",
    "Future Road Map",
  ];

  const pitchData = [
    { file: "file", filename: "Pitch Deck Document", size: "4mb" },
    { file: "video", filename: "Pitch Video", size: "24mb" },
  ];

  const teamData = [
    { name: "Winner", position: "Founder and CEO" },
    { name: "Eric", position: "Founder and CEO" },
    { name: "Isaac", position: "Founder and CEO" },
    { name: "Ify", position: "" },
    { name: "Promise", position: "" },
    { name: "Jamil", position: "" },
  ];

  const productData = {
    productDes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies placerat elit. Aliquam ac hendrerit ante, et rhoncus metus. Aenean tempor orci vel urna feugiat, et ultricies orci dictum. Cras consectetur euismod nulla id cursus. Etiam sodales, tortor at varius fermentum, augue arcu tristique libero, a vehicula odio diam non ligula. Aenean vulputate enim dolor, vel finibus odio pharetra eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam dignissim at nulla et consequat. Maecenas egestas mi ut mauris bibendum, ut tempus arcu aliquam. Praesent tempor purus in turpis tempus sollicitudin. Aliquam erat volutpat. Aenean aliquam velit felis.",
    founderProfile: { name: "Arthur Chief", position: "Founder and CEO" },
    investor: [{ name: "Winner" }, { name: "Eric" }, { name: "Isaac" }],
  };

  const busyData = {
    problem:
      "In hac habitasse platea dictumst. Nam velit dui, vestibulum eu massa in, viverra feugiat ante. Nam et urna mi. Integer imperdiet est in hendrerit fermentum. Ut pretium ante quis dolor interdum, a commodo enim sodales. Fusce porttitor tristique dapibus. Nullam sit amet turpis id purus lobortis lobortis",
    solution:
      "In hac habitasse platea dictumst. Nam velit dui, vestibulum eu massa in, viverra feugiat ante. Nam et urna mi. Integer imperdiet est in hendrerit fermentum. Ut pretium ante quis dolor interdum, a commodo enim sodales.",
    goToMarket:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies placerat elit. Aliquam ac hendrerit ante, et rhoncus metus. Aenean tempor orci vel urna feugiat, et ultricies orci dictum.",
    marketSize:
      "Cras consectetur euismod nulla id cursus. Etiam sodales, tortor at varius fermentum, augue arcu tristique libero, a vehicula odio diam non ligula.",
    competitors: [
      "Cras consectetur",
      "euismod nulla id cursus.",
      "laoreet dolor eu, ullamcorper odio.",
      "habitasse platea dictumst",
    ],
    competitiveAdvantage:
      "Cras consectetur euismod nulla id cursus. Etiam sodales, tortor at varius fermentum, augue arcu tristique libero, a vehicula odio diam non ligula.",
    valueProposition:
      "Curabitur ac neque sagittis, laoreet dolor eu, ullamcorper odio. Nam id leo imperdiet, eleifend ex eget, laoreet velit. Quisque vel enim sed leo dapibus tempor.",
    targetMarket:
      "Curabitur ac neque sagittis, laoreet dolor eu, ullamcorper odio. Nam id leo imperdiet, eleifend ex eget, laoreet velit. Quisque vel enim sed leo dapibus tempor.",
    marketAlliance:
      "Nulla ut massa tincidunt, sagittis sapien quis, aliquam neque. Sed eget varius libero. Quisque tincidunt dui eu ipsum mollis pretium.",
  };

  const roadMapData = [
    {
      dueDate: new Date(2021, 8, 23),
      tabName: "Work",
      contributors: [contributor, contributor],
      progress: 70,
    },
    {
      dueDate: new Date(2021, 8, 23),
      tabName: "Work",
      contributors: [contributor, contributor],
      progress: 30,
    },
    {
      dueDate: new Date(2021, 8, 23),
      tabName: "Work",
      contributors: [contributor, contributor],
      progress: 50,
    },
    {
      dueDate: new Date(2021, 8, 23),
      tabName: "Work",
      contributors: [contributor, contributor],
      progress: 20,
    },
    {
      dueDate: new Date(2021, 8, 23),
      tabName: "Work",
      contributors: [contributor, contributor],
      progress: 70,
    },
    {
      dueDate: new Date(2021, 8, 23),
      tabName: "Work",
      contributors: [contributor, contributor],
      progress: 70,
    },
  ];

  const mileData = [{}, {}, {}];
  const {
    location: { hash },
    goBack,
  } = useHistory();

  const renderComponent = () => {
    switch (hash) {
      case `#${tabItems[0]}`:
        return <PitchDeck data={pitchData} />;
      case `#${tabItems[1]}`:
        return <Team data={teamData} />;
      case `#${tabItems[2]}`:
        return <Product data={productData} />;
      case `#${tabItems[3]}`:
        return <BusinessCanvas data={busyData} />;
      case `#${tabItems[4]}`:
        return <Milestone data={mileData} />;
      case `#${tabItems[5]}`:
        return <RoadMap data={roadMapData} />;
      default:
        return <PitchDeck data={pitchData} />;
    }
  };
  return (
    <div className="p-5 bg-white" style={{ minHeight: "100vh" }}>
      <section
        className="d-flex align-items-center mb-3"
        onClick={() => goBack()}
        role="button"
        style={{ width: "fit-content" }}
      >
        <img
          src={left}
          alt="left"
          className="mr-2"
          style={{ transform: "rotate(180deg)" }}
        />
        <p className="bread-start" role="button">
          Go back
        </p>
      </section>
      <section className={styles.card}>
        <div className="row mx-0">
          <section className="col-lg-7">
            <img src={apple} alt="startup logo" className="mb-2" />
            <h3>Gecko Inc.</h3>
            <p className="mb-4">Tech Industry</p>

            <article className="d-flex align-items-center mb-45">
              <p className={`${styles.statusHeader} mr-3`}>
                Program Admission Status
              </p>
              <Tag name="Pending" color="#2E3192" />
            </article>

            <article className="d-flex align-items-center space-out">
              <Button label="Approve to evaluate" />
              <Button label="Schedule call" variant="secondary" />
              <Button label="Decline" variant="danger" />
            </article>
          </section>

          <section
            className={`${styles.stageIndustry} col-lg-5 d-flex flex-column justify-content-center`}
          >
            <article className="d-flex align-items-center mb-3">
              <p className="mr-1">Stage</p>
              <Tag name="Proof of Concept" color="#40439A" />
            </article>

            <article className="d-flex align-items-center mb-3">
              <p className="mr-1">Industry</p>
              <div
                className="d-flex align-items-center space-out"
                style={{ columnGap: 3 }}
              >
                <Tag name="Tech" color="#058DC1" />
                <Tag name="Engineering" color="#40439A" />
                <Tag name="Career" color="#E31937" />
              </div>
            </article>

            <article className="d-flex align-items-center ">
              <p className="mr-1">Funding Round</p>
              <Tag name="Series A" />
            </article>
          </section>
        </div>
      </section>

      <section className="mb-4">
        <Tabs tabItems={tabItems} />
      </section>

      <section>{renderComponent()}</section>
    </div>
  );
};
