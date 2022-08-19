import { TextareaCustom } from "../../../../../components/textArea/cutstomTextarea";
import { useAuth } from "../../../../../hooks";
import { letterOnly } from "../../../../../utils/helpers";
import "./style.css";

export const Plan = ({ data, handleChange = () => {} }) => {
    const { updateProfile, stateAuth, updateStartupInfo } = useAuth();

    return (
        <div className="my-5">
            <div className="form-group mb-3">
                <TextareaCustom
                    name={"marketStrategy"}
                    label={"Market Strategy"}
                    value={data?.marketStrategy}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            plan: {
                                ...data,
                                marketStrategy: e.target.value,
                            },
                        })
                    }
                    min={1}
                    maxLength={150}
                    onKeyPress={letterOnly}
                    placeholder="One line statement 150 words maximum"
                />
            </div>
            <div className="form-group mb-3">
                <TextareaCustom
                    name={"salesStrategy"}
                    label={"Sales Strategy"}
                    value={data?.salesStrategy}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            plan: {
                                ...data,
                                salesStrategy: e.target.value,
                            },
                        })
                    }
                    min={1}
                    maxLength={150}
                    onKeyPress={letterOnly}
                    placeholder="One line statement 150 words maximum"
                />
            </div>
        </div>
    );
};
