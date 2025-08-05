import { useState } from "react";

function FourthForm() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validate = () => {
    let errorlist = {};

    if (!formData.email.trim()) {
      errorlist.email = "Email is needed";
    } else if (!/^[^\s@]+@[^\s@]+\.com$/.test(formData.email)) {
      errorlist.email = "Email is invalid";
    }

    if (!formData.password.trim()) {
      errorlist.password = "Password is needed";
    } else if (formData.password.length <3) {
      errorlist.password = "length should be 3";
    }

    if (!formData.confirmPassword.trim()) {
      errorlist.confirmPassword = "Confirm password is needed";
    } else if (formData.confirmPassword !== formData.password) {
      errorlist.confirmPassword = "Password not match";
    }

    return errorlist;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validateErrors = validate();
    setErrors(validateErrors);
    if (Object.keys(validateErrors).length === 0) {
      alert(
        `Email: ${formData.email}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="email"
            type="email"
            placeholder="enter email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

          <input
            name="password"
            type="password"
            placeholder="enter password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

          <input
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <br />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword}</p>
          )}

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FourthForm;
