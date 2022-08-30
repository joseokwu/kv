import React, { useState } from "react";
import "./phoneInput.css";
import codes from "country-calling-code";
import down from "../../assets/icons/down.svg";

export const PhoneInput = ({
    id = "",
    label = "",
    value,
    name,
    disabled = false,
    required = false,
    onChange = () => {},
}) => {
    const [prefix, setPrefix] = useState("+234");
    const [countryAbv, setCountryAbv] = useState("NG");

    const onNumberOnlyChange = (e) => {
        const keyCode = e.keyCode || e.which;
        const keyValue = String.fromCharCode(keyCode);
        const isValid = new RegExp("[0-9]").test(keyValue);
        if (!isValid) {
            e.preventDefault();
            return;
        }
    };

    const getFlag = (abv) => {
        return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${abv}.svg`;
    };

    const handleChange = (e) => {
        onChange({ id: `${prefix}${e.target.value}` });
    };
    return (
        <div className="phone_Number">
            <label htmlFor={id}>{label}</label>
            <section className="phone-input">
                <div
                    className="country-codes"
                    style={{ flexBasis: prefix.length > 4 && "100%" }}
                >
                    <img
                        src={getFlag(countryAbv)}
                        width="29"
                        height="13"
                        alt="flag"
                    />

                    <div className="dropdown">
                        <section data-toggle="dropdown">
                            <span className="d-flex align-items-center">
                                <span className="phone-text">{prefix}</span>
                                <img src={down} alt="down" className="ml-2" />
                            </span>
                        </section>
                        <section className="dropdown-menu phone-dropdown">
                            {codes.map((c, i) => {
                                return (
                                    <button
                                        className="dropdown-item"
                                        type="button"
                                        key={`phone-${i}`}
                                        onClick={() => {
                                            setCountryAbv(c.isoCode2);
                                            setPrefix(`+${c.countryCodes[0]}`);
                                        }}
                                    >
                                        <img
                                            src={getFlag(c.isoCode2)}
                                            width="29"
                                            height="13"
                                            alt="flag"
                                        />{" "}
                                        +{c.countryCodes[0]}
                                    </button>
                                );
                            })}
                        </section>
                    </div>
                </div>
                <div className="w-100">
                    <input
                        type="text"
                        id={id}
                        defaultValue={value}
                        name={name}
                        className="input-phone phone-text"
                        onChange={handleChange}
                        onKeyPress={onNumberOnlyChange}
                        maxLength={10}
                        placeholder="000 000 0000"
                    />
                </div>
            </section>
        </div>
    );
};
