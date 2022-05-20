import React, { useEffect, useState } from "react";
import "../scss/Home.css";

const Home = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phoneNum: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if ((Object.keys(formErrors).length === 0) & isSubmit) {
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required!";
    } else if (values.password === values.confirmPassword) {
      errors.confirmPassword = "";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password doesn't match";
    }
    if (!values.fullName) {
      errors.fullName = "Full Name is required!";
    }
    if (!values.phoneNum) {
      errors.phoneNum = "Phone Number is required!";
    } else if (values.phoneNum.length < 10) {
      errors.phoneNum = "This is not a valid phone number";
    } else if (values.phoneNum.length > 10) {
      errors.phoneNum = "This is not a valid phone number";
    }
    console.log("Errors");
    return errors;
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__left">
            <img src="image/image1.png" alt="background" />
            <div className="header__text">
              <h3>Choose a data range</h3>
              <p>
                Lorem ipsum, dolor sit amet, consectetur <br /> adipisicing
                elit. Mauris imperdiet bibendum.
              </p>
            </div>
          </div>
          <div className="header__right">
            <form onSubmit={handleSubmit}>
              <div className="header__form">
                <h3>Create an account</h3>
                <div>
                  <label>Your email address</label>
                  <input
                    type="text"
                    name="email"
                    autoComplete="off"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <p>{formErrors.email}</p>
                </div>
                <div>
                  <label>Your password</label>
                  <input
                    type="password"
                    name="password"
                    autoComplete="off"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <p>{formErrors.password}</p>
                </div>
                <div>
                  <label>Confirm your password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    autoComplete="off"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                  />
                  <p>{formErrors.confirmPassword}</p>
                </div>
                <div>
                  <label>Your full name</label>
                  <input
                    type="text"
                    name="fullName"
                    autoComplete="off"
                    value={formValues.fullName}
                    onChange={handleChange}
                  />
                  <p>{formErrors.fullName}</p>
                </div>
                <div>
                  <label>Your phone number</label>
                  <input
                    className="header__phone"
                    type="tel"
                    name="phoneNum"
                    autoComplete="off"
                    value={formValues.phoneNum}
                    onChange={handleChange}
                  />
                  <p>{formErrors.phoneNum}</p>
                </div>
                <div className="header__checkbox">
                  <input
                    type="checkbox"
                    name="checkbox"
                    defaultChecked={true}
                  />
                  <label>I read and agree Terms and Conditions</label>
                </div>
                <div>
                  <button>Create account</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
