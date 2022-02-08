import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


//export const PrivateRoute = ({ isLoggedIn, children }) => {
//    const state = useSelector(state => state);
//    console.log('UIDD', state);
//    if (!isLoggedIn) {
//        return <Redirect to='/auth/login' />
//    }
//
//    return children;
//}

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/auth/login" /> )
            )}
        
        />
    )
}