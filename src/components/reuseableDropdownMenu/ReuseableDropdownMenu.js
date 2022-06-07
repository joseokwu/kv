import { useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export const ReuseableDropdownMenu = ({ value, list, valueList, onChange }) => {
    useEffect(() => {
        if (!valueList) valueList = list;
        // console.log(valueList);
        // console.log(value);
        // console.log(list);
    }, []);
    return (
        <div
            onClick={(ev) => {
                ev.stopPropagation();
            }}
        >
            <Dropdown>
                <Dropdown.Toggle variant="success">
                    {list[valueList.findIndex((val) => val === value)]}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {list.map((val, ind) => (
                        <Dropdown.Item
                            href="#"
                            onClick={() => {
                                onChange(valueList[ind]);
                            }}
                            key={ind}
                        >
                            {val}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};
