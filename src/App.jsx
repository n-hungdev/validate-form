import React from 'react';
import FormikForm from './components/FormikForm';
import ReactHookForm from './components/ReactHookForm';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="formik" element={<FormikForm />} />
        <Route path="react-hook-form" element={<ReactHookForm />} />
      </Routes>
    </>
  );
}

export default App;
