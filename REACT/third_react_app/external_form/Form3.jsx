import React from "react";
import { useForm } from "react-hook-form";

const Form3 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues
  } = useForm();

  const onSubmit = data => {
    alert("Registration Successful!\n" + JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400,  padding: 20 }}>
      <div>
        <label>Name:</label><br />
        <input {...register("name", { required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters" } })} />
        {errors.name && <div style={{ color: "red" }}>{errors.name.message}</div>}
      </div>

      <div>
        <label>Email:</label><br />
        <input type="email" {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email"
          }
        })} />
        {errors.email && <div style={{ color: "red" }}>{errors.email.message}</div>}
      </div>

      <div>
        <label>Password:</label><br />
        <input type="password" {...register("password", {
          required: "Password is required",
          minLength: { value: 7, message: "Password must be at least 7 characters" }
        })} />
        {errors.password && <div style={{ color: "red" }}>{errors.password.message}</div>}
      </div>

      <div>
        <label>Confirm Password:</label><br />
        <input type="password" {...register("confirmPassword", {
          required: "Confirm Password is required",
          validate: value => value === getValues("password") || "Passwords must match"
        })} />
        {errors.confirmPassword && <div style={{ color: "red" }}>{errors.confirmPassword.message}</div>}
      </div>

      <div>
        <label>Gender:</label><br />
        <label><input type="radio" value="male" {...register("gender", { required: "Gender is required" })} /> Male</label>
        <label style={{ marginLeft: 10 }}><input type="radio" value="female" {...register("gender", { required: "Gender is required" })} /> Female</label>
        {errors.gender && <div style={{ color: "red" }}>{errors.gender.message}</div>}
      </div>

      <div>
        <label>City:</label><br />
        <select {...register("cities", { required: "City is required" })}>
          <option value="">Select a city</option>
          <option value="Mangaluru">Mangaluru</option>
          <option value="Mysore">Mysore</option>
          <option value="Bengaluru">Bengaluru</option>
        </select>
        {errors.cities && <div style={{ color: "red" }}>{errors.cities.message}</div>}
      </div>

      <div>
        <label>
          <input type="checkbox" {...register("terms", { required: "Please accept the terms and conditions" })} /> I agree to the terms and conditions
        </label>
        {errors.terms && <div style={{ color: "red" }}>{errors.terms.message}</div>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form3;
