import NotFound from 'components/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddEditPage from './pages/AddEdit';
import MainPage from './pages/Main';

function Photo(props) {
  return (
    <div>
      <Routes>
        <Route exact path="" element={<MainPage />} />

        <Route path="add" element={<AddEditPage />} />
        <Route path=":photoId" element={<AddEditPage />} />

        <Route element={<NotFound />} />
      </Routes>
    </div>
  );
}

Photo.propTypes = {};

export default Photo;
