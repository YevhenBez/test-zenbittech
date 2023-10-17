import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../components/layout';
const Home = lazy(() => import('../pages/home'));
const Catalog = lazy(() => import('../pages/catalog'));
const RegisterForm = lazy(() => import('../pages/registerForm'));
const Login = lazy(() => import('../pages/login'));

export const App = () => {
  return (
    <div    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<Login />} />
          <Route path="catalog" element={<Catalog />} />
        </Route>
      </Routes>
    </div>
  );
};
