import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Auth } from "./features/auth/auth.component";
import { Login } from "./features/auth/login/login.component";
import { Registration } from "./features/auth/registration/registration.component";
import AuthorizedRoute from "./components/authorized-route";
import Dashboard from "./features/dashboard/dashboard.component";
import Profile from "./features/dashboard/profile/profile.component";
import Products from "./features/dashboard/products/products.component";

export function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<p>There's nothing here!</p>} />
                <Route path='/' element={<Navigate to='/auth/login' />} />
                <Route path='auth' element={<Auth/>}>
                    <Route path='' element={<Navigate to='/auth/login' />} />
                    <Route path='login' element={<Login/>} />
                    <Route path='registration' element={<Registration />} />
                </Route>
                <Route element={<AuthorizedRoute />}>
                    <Route path='dashboard' element={<Dashboard />}>
                        <Route path='profile' element={<Profile />}></Route>
                        <Route path='products' element={<Products />}></Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};