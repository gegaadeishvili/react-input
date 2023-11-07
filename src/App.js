import React from "react";
import { Formik } from "formik";
import './App.css';

const Basic = () => {
  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.text) {
      errors.text = "Required";
    }
    if (!values.text2) {
      errors.text2 = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  return (
    <div className="fullSet">
      <div className="texts">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="inputs">
        <Formik
          initialValues={{ email: "", password: "", text: "", text2: "" }}
          validate={validateForm}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
              className="firstText"
                type="text"
                name="text"
                placeholder="FirstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
              />
              {errors.text && touched.text && errors.text}
              <input
              className="secondText"
                type="text"
                name="text2"
                placeholder="LastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text2}
              />
              {errors.text2 && touched.text2 && errors.text2}
              <input
              className="passwordIput"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <input
              className="emailInput"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <button type="submit" className="triaBtn" disabled={isSubmitting}>
                CLAIM YOUR FREE TRIAL
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Basic;
