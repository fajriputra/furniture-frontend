import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { showSuccess } from "helpers/notif";
import { login } from "helpers/api/auth";
import { userLogin } from "store/Auth/actions";
import InputText from "components/Form/InputText";
import Button from "components/Button";
import useTogglePassword from "hooks/useTogglePassword";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

export default function Login(props) {
  const [status, setStatus] = useState(statuslist.idle);
  const [typePassword, Toggle] = useTogglePassword();
  const [alert, setAlert] = useState({
    error: "",
    success: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    trigger,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    setStatus(statuslist.process);

    // kirim data ke Web API menggunakan helper `login`
    const { data } = await login(email, password);

    console.log(data);

    // cek apakah ada error
    if (data.error) {
      // tangani error
      setError("password", {
        type: "invalidCredentials",
        message: data.message,
      });
      setStatus(statuslist.error);
    } else {
      // berhasil login, ambil data user & token
      const { user, token } = data;
      // kirim data ke redux store dengan data yang didapat
      dispatch(userLogin(user, token));

      setAlert({ error: "", success: data.message });

      setTimeout(() => {
        history.push("/");
      }, 4000);
    }
    setStatus(statuslist.success);
  };

  return (
    <section className="mb-0">
      <div className="row m-0">
        <div
          className="d-none d-md-block col-md-6"
          style={{ paddingLeft: 0, height: "100vh" }}
        >
          <div className="card card-other">
            <figure className="img-wrapper m-0">
              <img
                src="http://api.elements.buildwithangga.com/storage/files/2/assets/Empty%20State/EmptyState3/Empty-3-5.png"
                alt="gambar"
                className="img-contain pt-5 px-4"
              />
            </figure>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row justify-content-center">
            <h1 className="text-center" style={{ padding: "50px 0" }}>
              Sign in to your account
            </h1>

            <form className="form-class" onSubmit={handleSubmit(onSubmit)}>
              <div className="alert-wrapper" style={{ width: "100%" }}>
                {alert.success && showSuccess(alert.success)}
              </div>

              <div className="form-group position-relative">
                <label htmlFor="email" className="pb-2">
                  Email Address
                </label>
                <InputText
                  inputClassName={errors?.email && " invalid"}
                  name="email"
                  type="email"
                  placeholder="Your Email Address"
                  {...register("email", {
                    required: "Email is required",
                    minLength: {
                      value: 3,
                      message: "Email must be at least 3 characters",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Must be a valid email address",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                />
                {errors?.email && (
                  <p className="error-helpers">{errors?.email?.message}</p>
                )}
              </div>
              <div className="form-group position-relative">
                <label htmlFor="password" className="pb-2">
                  Your Password
                </label>
                <InputText
                  inputClassName={errors?.password && " invalid"}
                  name="password"
                  type={typePassword}
                  placeholder="Your Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 16,
                      message: "Password already exceeds 16 characters",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("password");
                  }}
                />
                {errors?.password && (
                  <p className="error-helpers">{errors?.password?.message}</p>
                )}
                <span className="password-toggle-icon">{Toggle}</span>
              </div>
              <Button
                className="btn p-0 d-flex justify-content-end"
                type="link"
                href="/forgot-password"
              >
                <p className="link pe-2">Forgot your password ?</p>
              </Button>
              <Button
                className="btn btn-login btn-loading w-100 mt-4"
                style={{ height: 60 }}
                isLoading={status === statuslist.process}
              >
                Sign in to My Account
              </Button>
              <Button
                className="btn p-0 d-flex justify-content-center mt-3"
                type="link"
                href="/register"
              >
                <p className="link mt-2">
                  Don't have an account yet ? Sign up now
                </p>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
