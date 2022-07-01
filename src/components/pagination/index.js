import React, { useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

export const PaginationData = ({
    currentPage,
    data,
    setCurrentPage,
    limit,
}) => {
    useEffect(() => {
        console.log(data);
    }, []);

    let total;
    if (data.length < limit) total = 1;
    else {
        total = Math.ceil(data.length / limit);
    }

    const nextPage = () => {
        if (currentPage < total) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const movePage = (id) => {
        setCurrentPage(id);
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
                        <Pagination.Item className="mx-1">{`${currentPage} of  ${
                            !isNaN(total) ? total : 1
                        }`}</Pagination.Item>
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
