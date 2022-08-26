import { TextareaCustom } from "../../../../../components/textArea/cutstomTextarea";
import { useAuth } from "../../../../../hooks";
import { letterOnly } from "../../../../../utils/helpers";
import "./style.css";

export const BrandModeling = ({ data, handleChange = () => {} }) => {
    const { updateProfile, stateAuth, updateStartupInfo } = useAuth();

    return (
        <div className="my-5">
            <div className="form-group mb-3">
                <TextareaCustom
                    name={"channels"}
                    label={"Channels"}
                    value={data?.channels}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            businessModel: {
                                ...data,
                                channels: e.target.value,
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
                    name={"customerRelationship"}
                    label={"Customer Relationship"}
                    value={data?.customerRelationship}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            businessModel: {
                                ...data,
                                customerRelationship: e.target.value,
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
                    name={"revenueStreams"}
                    label={"Revenue Streams"}
                    value={data?.revenueStreams}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            businessModel: {
                                ...data,
                                revenueStreams: e.target.value,
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
                    name={"keyActivities"}
                    label={"Key Activities"}
                    value={data?.keyActivities}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            businessModel: {
                                ...data,
                                keyActivities: e.target.value,
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
                    name={"keyResource"}
                    label={"Key Resources"}
                    value={data?.keyResource}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            businessModel: {
                                ...data,
                                keyResource: e.target.value,
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
                    name={"keyPartners"}
                    label={"Key Partners"}
                    value={data?.keyPartners}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            businessModel: {
                                ...data,
                                keyPartners: e.target.value,
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
