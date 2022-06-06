import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/react-hook-form">
        <button>React Hook Form</button>
      </Link>
      <Link to="/formik">
        <button>Formik</button>
      </Link>
    </div>
  );
};

export default Navbar;
