import filter from "../../assets/icons/filterFunnel.svg";
import down from "../../assets/icons/chevronDown.svg";

export const Filter = ({ list }) => {
    return (
        <div className="dropdown">
            <button
                className="d-flex align-items-center filter-btn"
                style={{
                    columnGap: 7,
                    boxShadow: "none",
                    border: "1px solid #F2F2F2",
                }}
                data-toggle="dropdown"
            >
                <img src={filter} alt="filter" />
                <p>Filter</p>
                <img src={down} alt="down" />
            </button>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {list?.map((item, ind) => (
                    <a
                        class="dropdown-item"
                        href={`#${item}`}
                        key={`dropdown-item${ind}`}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </div>
    );
};
