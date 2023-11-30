import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './app.routes';
import { AppAuthenRoutes } from './app.authen.routes';

export function Routes(){
  return(
    <BrowserRouter>
      <AppAuthenRoutes/>
    </BrowserRouter>
  )
}