import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormValidation = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Name is required'),

    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),

    password: Yup.string()
      .min(7, 'Password must be at least 7 characters')
      .required('Password is required'),

    confirmPassword: Yup.string()
      .test('password matched', 'Passwords dont match', function(value) {
        return value === this.parent.password;
      }),

    gender: Yup.string()
      .required('Gender is required'),

    cities: Yup.string()
      .required('City is required'),

    terms: Yup.boolean()
      .test(
        'accepted the terms and conditions',
        'Please accept the terms and conditions',
        value => value === true
      )
      .required('Please accept the terms and conditions'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      cities: '',
      terms: false,
    },
    validationSchema,
    onSubmit: (values) => {
      alert('Registration successful\n' + JSON.stringify(values, null, 2));
    },
  });

  

  return (
    <div style={{ maxWidth: '500px', padding: '20px' }}>
      <h2>Register:</h2>
      <form onSubmit={formik.handleSubmit}>

        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input
            name="name"
            type="text"
            placeholder="Enter name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name && (
            <div style={{ color: 'red' }}>{formik.errors.name}</div>
          )}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          )}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label><br />
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          )}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Confirm Password:</label><br />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Re-enter password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div style={{ color: 'red' }}>{formik.errors.confirmPassword}</div>
          )}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Gender:</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={formik.handleChange}
              checked={formik.values.gender === 'male'}
            /> Male
          
          
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={formik.handleChange}
              checked={formik.values.gender === 'female'}
            /> Female
          
          {formik.touched.gender && formik.errors.gender && (
            <div style={{ color: 'red' }}>{formik.errors.gender}</div>
          )}
          </div>
        </div>
<div style={{ marginBottom: '10px' }}>
  <label>City:</label><br />
  <select
    name="cities"
    value={formik.values.cities}
    onChange={formik.handleChange}
    
  >
    <option value="" label="Select a city" />
    <option value="Mangaluru">Mangaluru</option>
    <option value="Mysore">Mysore</option>
    <option value="Bengaluru">Bengaluru</option>
  </select>
  {formik.touched.cities && formik.errors.cities && (
    <div style={{ color: 'red' }}>{formik.errors.cities}</div>
  )}
</div>


        <div style={{ marginBottom: '10px' }}>
          <input
            type="checkbox"
            name="terms"
            onChange={formik.handleChange}
            checked={formik.values.terms}
          />
          <span> I agree to the terms and conditions</span>
          {formik.touched.terms && formik.errors.terms && (
            <div style={{ color: 'red' }}>{formik.errors.terms}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
