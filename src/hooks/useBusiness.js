 
import { useSelector, useDispatch } from 'react-redux';
import { changeDPath, showDEventAction } from '../store/actions/business';
import {useAuth } from './useAuth';

export const useActivity = () => {
    const { 
        stateAuth   
    } = useAuth();
    const dispatch = useDispatch();
	const state = useSelector((state) => state.business);
    //const authSte = useSelector((state) => state);
    console.log(state);

    const changePath = () =>{

        dispatch(changeDPath());
    }

    const showEventAction = () =>{
        dispatch(showDEventAction())
    }


    return {
        state,
        changePath,
        showEventAction
    };
}
