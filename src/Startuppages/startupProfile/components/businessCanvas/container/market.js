import "./style.css";
import { TextareaCustom } from "../../../../../components/textArea/cutstomTextarea";
import { useAuth } from "../../../../../hooks";
import { letterOnly } from "../../../../../utils/helpers";

export const Market = ({ data, handleChange = () => {} }) => {
    const { updateProfile, stateAuth, updateStartupInfo } = useAuth();

    return (
        <div className="my-5">
            <div className="form-group mb-3">
                <TextareaCustom
                    name={"problemStatement"}
                    label={"Problem Statement"}
                    value={data?.problemStatement}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            market: {
                                ...data,
                                problemStatement: e.target.value,
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
                    name={"product"}
                    label={"Product/Solution"}
                    value={data?.product}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            market: {
                                ...data,
                                product: e.target.value,
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
                    name={"targetMarket"}
                    label={"Target Customer Market"}
                    value={data?.targetMarket}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            market: {
                                ...data,
                                targetMarket: e.target.value,
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
                    name={"marketSize"}
                    label={"Market Size"}
                    value={data?.marketSize}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            market: {
                                ...data,
                                marketSize: e.target.value,
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
                    name={"keyCompetitors"}
                    label={"Key competitor"}
                    value={data?.keyCompetitors}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            market: {
                                ...data,
                                keyCompetitors: e.target.value,
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
