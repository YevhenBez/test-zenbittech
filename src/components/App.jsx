import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../components/layout';
// const Home = lazy(() => import('../pages/home'));
const Catalog = lazy(() => import('../pages/catalog'));

export const App = () => {
  return (
    <div    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="catalog" element={<Catalog />} />
        </Route>
      </Routes>
    </div>
  );
};
