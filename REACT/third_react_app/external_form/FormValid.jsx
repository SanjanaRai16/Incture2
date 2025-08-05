import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useForm } from '../context/FormContext';

const PersonalDetails = () => {
  const { setFormData, nextStep } = useForm();
  const [preview, setPreview] = useState(null);

  const validationSchema = Yup.object({
    fullName: Yup.string().min(3, 'Minimum 3 characters').required('Full name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone must be 10 digits')
      .required('Phone number is required'),
    dob: Yup.date()
      .max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), 'Must be 18 or older')
      .required('Date of Birth is required'),
    profilePhoto: Yup.mixed().required('Profile photo is required'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      dob: '',
      profilePhoto: null,
    },
    validationSchema,
    onSubmit: (values) => {
      setFormData((prev) => ({ ...prev, personal: values }));
      nextStep();
    },
  });

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue('profilePhoto', file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h2>Step 1: Personal Details</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Full Name */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="fullName">Full Name:</label><br />
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter full name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div style={{ color: 'red', fontSize: '0.85rem', marginTop: '4px' }}>
              {formik.errors.fullName}
            </div>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label><br />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: 'red', fontSize: '0.85rem', marginTop: '4px' }}>
              {formik.errors.email}
            </div>
          )}
        </div>

        {/* Phone Number */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="phone">Phone Number:</label><br />
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="10-digit phone number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div style={{ color: 'red', fontSize: '0.85rem', marginTop: '4px' }}>
              {formik.errors.phone}
            </div>
          )}
        </div>

        {/* Date of Birth */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="dob">Date of Birth:</label><br />
          <input
            id="dob"
            name="dob"
            type="date"
            value={formik.values.dob}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.dob && formik.errors.dob && (
            <div style={{ color: 'red', fontSize: '0.85rem', marginTop: '4px' }}>
              {formik.errors.dob}
            </div>
          )}
        </div>

        {/* Profile Photo */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="profilePhoto">Profile Photo:</label><br />
          <input
            id="profilePhoto"
            name="profilePhoto"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
          />
          {formik.touched.profilePhoto && formik.errors.profilePhoto && (
            <div style={{ color: 'red', fontSize: '0.85rem', marginTop: '4px' }}>
              {formik.errors.profilePhoto}
            </div>
          )}
          {preview && (
            <div style={{ marginTop: '10px' }}>
              <img src={preview} alt="Preview" width="100" />
            </div>
          )}
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default PersonalDetails;

