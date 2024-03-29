import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

export const PaginationData = ({
    currentPage,
    setCurrentPage,
    limit,
    total,
}) => {
    let lastPage;
    if (total < limit) lastPage = 1;
    else {
        lastPage = Math.ceil(total / limit);
    }
    const [tempPage, setTempPage] = useState(currentPage);

    useEffect(() => {
        setTempPage(currentPage);
        sessionStorage.setItem("KV:current-page", currentPage);
    }, [currentPage]);

    const nextPage = () => {
        console.log(currentPage < lastPage);
        if (currentPage < lastPage) setCurrentPage(currentPage + 1);
        // if (currentPage < lastPage) setCurrentPage(2);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const movePage = (ev) => {
        ev.preventDefault();
        if (!isNaN(parseInt(tempPage))) {
            if (tempPage >= 1 && tempPage <= lastPage)
                setCurrentPage(parseInt(tempPage));
            else {
                setCurrentPage(1);
            }
        } else {
            console.log("gibberish");
            console.log(tempPage);
        }
    };

    // const getTotal = () => {
    //     let totalVal = total / data?.results?.limit;
    //     if (total % data?.results?.limit > 0) {
    //         totalVal += 0.5;
    //     }
    //     console.log(!isNaN(Math.round(totalVal)) ? Math.round(totalVal) : 1);
    //     return Math.round(totalVal);
    // };

    return (
        <div className="d-flex justify-content-center">
            <Pagination>
                {/* {data && data?.results?.currentPage > 1 ? ( */}
                <>
                    <Pagination.Prev onClick={prevPage} className="mx-1" />
                    {
                        <Pagination.Item className="mx-1">
                            <form
                                style={{ display: "inline" }}
                                onSubmit={movePage}
                            >
                                <input
                                    type="text"
                                    style={{
                                        maxWidth: "2rem",
                                        textAlign: "center",
                                    }}
                                    value={tempPage}
                                    onChange={(ev) =>
                                        setTempPage(ev.target.value)
                                    }
                                />
                            </form>
                            {`of  ${!isNaN(lastPage) ? lastPage : 1}`}
                        </Pagination.Item>
                    }
                    {/* {data?.results?.currentPage === data?.results?.limit ? (
                            <span />
                        ) : ( */}
                    <Pagination.Next onClick={nextPage} className="mx-1" />
                    {/* )} */}
                    {/* </> */}
                    {/* // ) : ( */}
                    {/* //     <> */}
                    {/* //         { */}
                    {/* <Pagination.Item */}
                    {/* //                 onClick={() => movePage(currentPage + 1)}
                //                 className="mx-1"
                //             >{`${currentPage} of  ${ */}
                    {/* //                 !isNaN(getTotal()) ? getTotal() : 1
                //             }`}</Pagination.Item> */}
                    {/* //         } */}

                    {/* {data &&
                        data?.results?.currentPage === data?.results?.limit ? (
                            <span />
                        ) : (
                            <Pagination.Next
                                onClick={nextPage}
                                className="mx-1"
                            />
                        )} */}
                </>
                {/* )} */}
            </Pagination>
        </div>
    );
};
