import { ErrorMessage, Field, Form, Formik } from 'formik';
import { formValidationSchema } from '../utils/validateForm';
import { useEffect } from 'react';
import { useState } from 'react';

const FormikForm = () => {
  const initValue = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    phone: '',
    gender: '',
  };
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('https://provinces.open-api.vn/api/')
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className="container">
      <Formik
        initialValues={initValue}
        validationSchema={formValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <h1 className="form-title">Formik + Yub </h1>
            <div className="row">
              <div className="col-6">
                <label htmlFor="firstName">First Name</label>
                <Field
                  name="firstName"
                  placeholder="Enter First Name"
                  className={
                    errors.firstName && touched.firstName
                      ? 'input-error'
                      : 'input-success'
                  }
                />
                <ErrorMessage
                  name="lastName"
                  render={(msg) => <p className="error">{msg}</p>}
                />
              </div>
              <div className="col-6">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  name="lastName"
                  placeholder="Enter Last Name"
                  className={
                    errors.lastName && touched.lastName
                      ? 'input-error'
                      : 'input-success'
                  }
                />
                <ErrorMessage
                  name="lastName"
                  render={(msg) => <p className="error">{msg}</p>}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                className={
                  errors.email && touched.email
                    ? 'input-error'
                    : 'input-success'
                }
              />
              <ErrorMessage
                name="email"
                render={(msg) => <p className="error">{msg}</p>}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                className={
                  errors.password && touched.password
                    ? 'input-error'
                    : 'input-success'
                }
              />
              <ErrorMessage
                name="password"
                render={(msg) => <p className="error">{msg}</p>}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Re-Password </label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? 'input-error'
                    : 'input-success'
                }
              />
              <ErrorMessage
                name="confirmPassword"
                render={(msg) => <p className="error">{msg}</p>}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <label htmlFor="lastName">Selected City</label>
                <Field
                  name="city"
                  as="select"
                  className={
                    errors.city && touched.city
                      ? 'input-error'
                      : 'input-success'
                  }
                >
                  <option value="" key="-1">
                    Select City
                  </option>
                  {cities &&
                    cities.map((city) => (
                      <option key={city.code} value={city.code}>
                        {city.name}
                      </option>
                    ))}
                </Field>
                <ErrorMessage
                  name="city"
                  render={(msg) => <p className="error">{msg}</p>}
                />
              </div>
              <div className="col-6">
                <label htmlFor="phone">Phone </label>
                <Field
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Enter phone"
                  className={
                    errors.phone && touched.phone
                      ? 'input-error'
                      : 'input-success'
                  }
                />
                <ErrorMessage
                  name="phone"
                  render={(msg) => <p className="error">{msg}</p>}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <div className="row-gender">
                <label className="gender">
                  <Field name="gender" type="radio" value="Male" />
                  <span> Male</span>
                </label>
                <label className="gender">
                  <Field name="gender" type="radio" value="Female " />{' '}
                  <span>Female</span>
                </label>
              </div>
            </div>
            <ErrorMessage
              name="gender"
              render={(msg) => <p className="error">{msg}</p>}
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
