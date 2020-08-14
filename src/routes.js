import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={props =>
//             isAuthenticated() ? (
//                 <Component {...props} />
//         ) : (
//             <Redirect to={{ pathname: "/autenticado", state: { from: props.location} }} />
//             )
//         }
//     />
// );

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                {/* <PrivateRoute path="/autenticado" component={() => Autenticado} /> */}
            </Switch>
        </BrowserRouter>
    );
}