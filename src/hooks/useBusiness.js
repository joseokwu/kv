 
import { useSelector, useDispatch } from 'react-redux';
import { changeDPath, showDEventAction, addEducation } from '../store/actions/business';
import {useAuth } from './useAuth';

export const useActivity = () => {
    const { 
        stateAuth   
    } = useAuth();
    const dispatch = useDispatch();
	const state = useSelector((state) => state.business);
    //const authSte = useSelector((state) => state);

    const changePath = (value) =>{

        dispatch(changeDPath(value));
    }

    const showEventAction = () =>{
        dispatch(showDEventAction())
    }

    const addEdu = (value) => {
        dispatch(addEducation (value))
    }


    return {
        state,
        changePath,
        showEventAction,
        addEdu
    };
}
