 
import { useSelector, useDispatch } from 'react-redux';
import { changeDPath, showDEventAction , addwork } from '../store/actions/business';
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

    const addWork = (values) =>{
      
        dispatch(addwork(values))
    }

    return {
        state,
        changePath,
        showEventAction,
        addWork
    };
}
