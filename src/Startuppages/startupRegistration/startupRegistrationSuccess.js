import { useEffect } from "react";
import { Router } from "react-router-dom/cjs/react-router-dom.min";
import { css } from "styled-components/macro";
import purpleTick from "../../assets/icons/purple-tick.svg";

export const StartupRegistrationSuccess = () => {
    useEffect(() => {
        setTimeout(() => {
            window.location.replace("/startup/dashboard");
        }, 5000);
    }, []);

    return (
        <div
            css={css`
                width: 100%;
                max-width: 678px;
                text-align: center;
                height: 100%;
                justify-content: center;
                margin: 0 auto;
                padding: 1.5rem;

                hr {
                    width: 457px;
                    height: 1px;
                    background: #e0e0e0;
                }
            `}
            className="d-flex flex-column align-items-center"
        >
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                    padding-bottom: 56px;
                    color: #000000;

                    h6 {
                        font-weight: 700;
                        font-size: 24px;
                        line-height: 31px;
                    }

                    p {
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 25px;
                        color: #828282;
                    }
                `}
            >
                <img src={purpleTick} />
                <h6>Congratulations!</h6>
                <p>
                    Your startup is approved in the final screening of our
                    fundraising process. Our team will be in constant touch with
                    you during this process. Please keep us posted on the
                    progress and updates from your end so that we can work
                    together in closing the round quickly.
                </p>
            </div>
            <hr />
            <p
                css={css`
                    padding: 56px 0;
                `}
            >
                Forgot something?{" "}
                <a href="/startup/registration">Edit Profile</a>
            </p>
        </div>
    );
};
