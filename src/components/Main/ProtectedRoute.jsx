import { Navigate, Outlet } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const ProtectedRoute = ({ auth }) => {
    return <div>{auth ? <Outlet /> : <Navigate to='/create-account' />}</div>;
};

ProtectedRoute.propTypes = {
    auth: PropTypes.bool,
};

export default ProtectedRoute;
