import { TextareaCustom } from "../../../../../components/textArea/cutstomTextarea";
import { useAuth } from "../../../../../hooks";
import { letterOnly } from "../../../../../utils/helpers";
import "./style.css";

export const Brand = ({ data, handleChange = () => {} }) => {
    const { updateProfile, stateAuth, updateStartupInfo } = useAuth();

    return (
        <div className="my-5">
            <div className="form-group mb-3">
                <TextareaCustom
                    name={"valueProposition"}
                    label={"Value Proposition"}
                    value={data?.valueProposition}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            brand: {
                                ...data,
                                valueProposition: e.target.value,
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
                    name={"competitiveAdvantage"}
                    label={"Competitive Advantage"}
                    value={data?.competitiveAdvantage}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            brand: {
                                ...data,
                                competitiveAdvantage: e.target.value,
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
                    name={"productRoadMap"}
                    label={"Product Road Map"}
                    value={data?.productRoadMap}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            brand: {
                                ...data,
                                productRoadMap: e.target.value,
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
                    name={"brandBuilding"}
                    label={"Brand Building"}
                    value={data?.brandBuilding}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            brand: {
                                ...data,
                                brandBuilding: e.target.value,
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
                    name={"brandValue"}
                    label={"Brand Value"}
                    value={data?.brandValue}
                    onChange={(e) =>
                        updateProfile("businessCanvas", {
                            brand: {
                                ...data,
                                brandValue: e.target.value,
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
