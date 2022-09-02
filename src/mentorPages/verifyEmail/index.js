import React, { useState, useEffect } from "react";
import { verifyEmail } from "../../services/user";
import toast from "react-hot-toast";
import { useHistory, useParams, Redirect } from "react-router-dom";

export const VerifyUserEmail = () => {
    const history = useHistory();
    const { token } = useParams();

    console.log(token);

    const sendVerify = async () => {
        try {
            const res = await verifyEmail(token);
            if (res?.success) {
                toast.success(res?.message);
                history.push("/");
            }
        } catch (err) {
            console.log("error");
            history.push("/confirm/email");
        }
    };

    useEffect(() => {
        sendVerify();
    }, []);

    return (
        <div>
            <></>
        </div>
    );
};
