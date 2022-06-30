import { useSelector, useDispatch } from "react-redux";
import { ADD_CRITERIA } from "../store/actions/actions.types";
import {
    newCriteria,
    addCategory,
    setSelectionProgress,
} from "../store/actions/admin";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const useAdmin = () => {
    const history = useHistory();
    const adminState = useSelector((state) => state.admin);
    const dispatch = useDispatch();
    // const [loading, setLoading] = useState(false);

    const setCriteria = async (data) => {
        const res = await dispatch(newCriteria(data));
        if (!res) return;
        history.push(`/admin/selection_process/new-criteria/${res?._id}`);
    };

    const addNewCategory = (data) => {
        dispatch(addCategory(data));
    };

    const setSelectionProgressVal = (data) => {
        dispatch(setSelectionProgress(data));
    };

    return {
        adminState,
        setCriteria,
        addNewCategory,
        setSelectionProgressVal,
        // loading,
    };
};
