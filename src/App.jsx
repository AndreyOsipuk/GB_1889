import React from 'react';
import './App.css';
import { Form } from './components/FormClass/Form';
// import { Form } from './components/FormFunc/Form';

export const App = () => {
  return (
    <>
      <div className="form" style={{ marginTop: '20px' }}>
        test div
      </div>
      <Form />
      {/* <Parent /> */}
    </>
  );
};
