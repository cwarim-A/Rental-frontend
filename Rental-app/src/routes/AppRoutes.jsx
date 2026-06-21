
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import Home from "../pages/Home";

const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const Overview = lazy(() => import("../pages/dashboard/Overview"));
const Properties = lazy(() => import("../pages/dashboard/Properties"));
const Bookings = lazy(() => import("../pages/dashboard/Bookings"));
const Profile = lazy(() => import("../pages/dashboard/Profile"));
import Spinner from './../assets/Spinner';
import DashboardLayout from './../components/DashboardLayout';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="flex items-center justify-center">
                                  <Spinner size="md" color="navy" />
                                  <span className="ml-2">Refeshing...</span>
                            </div>}>
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<DashboardLayout />} />



          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="properties" element={<Properties />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="profile" element={<Profile />} />
          </Route>

            </Routes>

        
      </Suspense>
    </BrowserRouter>
  )
}

