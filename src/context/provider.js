import React from 'react';
import { AuthProvider } from './auth/provider';
import { BusinessProvider} from './business/provider';

export const Providers = ({children}) =>{

    return (
        <AuthProvider >

         <BusinessProvider>
            { children}
       </BusinessProvider>

        </AuthProvider>
    )
}
