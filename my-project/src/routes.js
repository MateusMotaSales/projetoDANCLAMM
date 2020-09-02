import React, {Component} from 'react';

import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
 const Routes = () =>(

    <BrowserRouter>
     <Switch>
      <Route exact path="/" component={()=><h1>Olá, mundo!</h1>} />
     </Switch>
    </BrowserRouter>
 );

  export default Routes;