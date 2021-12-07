import { useContext } from 'react';
import { BusinessContext } from '../context/business/provider';

export const useActivity = () => {

    return useContext(BusinessContext);
}
