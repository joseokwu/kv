import React, { useState, useEffect } from "react";
import { WelcomeMessage, RegCard } from "./startup.styled";
import { ProgressBar } from "../../Startupcomponents";
import { StartupProfile } from "./components/startupProfile";
import { useActivity } from "../../hooks/useBusiness";
import { PitchDeck } from "./components/pitchdeck/Pitchdeck";
import { TeamProfile } from "./components/teams";
import { Product } from "./components/product";
import { FundRaising } from "./components/fundraising";
import { useAuth } from "../../hooks/useAuth";

export const StartUpRegistration = () => {
  const {
    state: { path },
  } = useActivity();
  const { stateAuth } = useAuth();
  const [progressStat, setProgressStat] = useState();

 // console.log(stateAuth)

  useEffect(() => {
    switch (path) {
      case 1:
        return setProgressStat(0);
      case 2:
        return setProgressStat(20);
      case 3:
        return setProgressStat(40);
      case 4:
        return setProgressStat(60);
      case 5:
        return setProgressStat(100);
      default:
        return progressStat;
    }
  }, [path, progressStat]);

  return (
    <>
      <div className="mx-1">
        <div className="">
          <div
            className="px-3"
            style={{ zIndex: "", background: "#FFFFFF", width: "100%" }}
          >
            <WelcomeMessage>
              <h5>
                Hi {stateAuth?.user?.businessname}
                <span style={{ color: "rgb(199, 249, 15)", marginLeft: "9px" }}>
                  {" "}
                  &#128075;
                </span>{" "}
              </h5>
              <p>Let's customize your experience</p>
            </WelcomeMessage>
            <div style={{ width: "100%" }}>
              <ProgressBar progress={progressStat} />
            </div>
          </div>

          <RegCard className="mx-2">
            <div className="reg-card">
              {path === 1 && <StartupProfile />}
              {path === 2 && <PitchDeck />}

              {path === 3 && <TeamProfile />}

              {path === 4 && <Product />}
              {path === 5 && <FundRaising />}
            </div>
          </RegCard>
        </div>
      </div>
    </>
  );
};
