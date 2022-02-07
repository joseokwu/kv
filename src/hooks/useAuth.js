import { useSelector, useDispatch } from 'react-redux';


export const useAuth = () => {

const dispatch = useDispatch();

const stateAuth = useSelector((state) => state );

console.log(stateAuth);

    return {
        stateAuth   
    };
}
