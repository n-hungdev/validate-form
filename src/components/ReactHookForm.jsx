import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formValidationSchema } from '../utils/validateForm';
import { useEffect, useState } from 'react';

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidationSchema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('https://provinces.open-api.vn/api/')
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h1 className="form-title">React Hook Form + Yup</h1>
      <div className="row">
        <div className="col-6">
          <label htmlFor="firstName">First Name</label>
          <input
            {...register('firstName')}
            id="firstName"
            placeholder="First name"
          />
          {errors.firstName && (
            <span className="error">{errors.firstName.message}</span>
          )}
        </div>
        <div className="col-6">
          <label htmlFor="lastName">Last Name</label>
          <input
            {...register('lastName')}
            id="lastName"
            placeholder="Last name"
          />
          {errors.lastName && (
            <span className="error">{errors.lastName.message}</span>
          )}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input {...register('email')} id="email" placeholder="Email" />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          {...register('password')}
          id="password"
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          {...register('confirmPassword')}
          id="confirmPassword"
          type="password"
          placeholder="Confirm password"
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword.message}</span>
        )}
      </div>
      <div className="row">
        <div className="col-6">
          <label htmlFor="phone">Phone</label>
          <input {...register('phone')} id="phone" placeholder="Phone" />
          {errors.phone && (
            <span className="error">{errors.phone.message}</span>
          )}
        </div>
        <div className="col-6">
          <label htmlFor="city">City</label>
          <select {...register('city')}>
            <option value="">Select city</option>
            {cities.map((city) => (
              <option key={city.code} value={city.code}>
                {city.name}
              </option>
            ))}
          </select>
          {errors.city && <span className="error">{errors.city.message}</span>}
        </div>
      </div>
      <div className="form-group">
        <label>Gender</label>
        <div className="row-gender">
          <label className="gender">
            <input {...register('gender')} type="radio" value="Male" />
            <span> Male</span>
          </label>
          <label className="gender">
            <input {...register('gender')} type="radio" value="Female" />
            <span>Female</span>
          </label>
        </div>
        {errors.gender && (
          <span className="error">{errors.gender.message}</span>
        )}
      </div>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default ReactHookForm;
