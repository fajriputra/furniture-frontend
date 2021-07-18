import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { showSuccess } from "helpers/notif";
import { registerUser } from "helpers/api/auth";

import InputText from "components/Form/InputText";
import Button from "components/Button";
import useTogglePassword from "hooks/useTogglePassword";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

export default function Register(props) {
  const [status, setStatus] = useState(statuslist.idle);
  const [typePassword, Toggle] = useTogglePassword();
  const [alert, setAlert] = useState({
    error: "",
    success: "",
  });
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    trigger,
  } = useForm();

  const onSubmit = async (formData) => {
    setStatus(statuslist.process);

    const { data } = await registerUser(formData);

    const { password, password_confirmation } = formData;

    // cek password & password_confirmation sama atau tidak
    if (password !== password_confirmation) {
      return setError(
        "password_confirmation",
        {
          type: "equality",
          message: "Password Confirmation doesn't match",
        },
        setStatus(statuslist.idle)
      );
    }

    // cek masing2 error pada fields
    if (data.error) {
      // dapatkan field terkait jika ada errors
      const fields = Object.keys(data.fields);

      // looping masing2 field lalu beri pesan error
      fields.forEach((field) => {
        setError(field, {
          type: "server",
          message: data.fields[field]?.properties?.message,
        });
      });

      setStatus(statuslist.error);
      return;
    }

    // menampilkan alert jika register success
    setAlert({ error: "", success: data.message });

    setStatus(statuslist.success);

    setTimeout(() => {
      history.push("/login");
    }, 4000);
  };

  return (
    <section className="mb-0">
      <div className="row m-0">
        <div className="d-none d-md-block col-md-6" style={{ paddingLeft: 0 }}>
          <div className="card card-other register">
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
              Sign up to create an account
            </h1>

            <form className="form-class" onSubmit={handleSubmit(onSubmit)}>
              <div className="alert-wrapper" style={{ width: "100%" }}>
                {alert.success && showSuccess(alert.success)}
              </div>

              <div className="form-group position-relative">
                <label htmlFor="name" className="pb-2">
                  Name
                </label>

                <InputText
                  inputClassName={errors?.name && " invalid"}
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                    maxLength: {
                      value: 32,
                      message: "Name already exceeds 32 characters",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("name");
                  }}
                />
                {errors?.name && (
                  <p className="error-helpers">{errors?.name?.message}</p>
                )}
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
              <div className="form-group position-relative">
                <label htmlFor="password_confirmation" className="pb-2">
                  Password Confirmation
                </label>
                <InputText
                  inputClassName={errors?.password_confirmation && " invalid"}
                  name="password_confirmation"
                  type={typePassword}
                  placeholder="Confirmation Password"
                  {...register("password_confirmation", {
                    required: "Password Confirmation is required",
                  })}
                  onKeyUp={() => {
                    trigger("password_confirmation");
                  }}
                />
                {errors?.password_confirmation && (
                  <p className="error-helpers">
                    {errors?.password_confirmation?.message}
                  </p>
                )}
              </div>

              <Button
                className="btn btn-login btn-loading w-100 mt-4"
                style={{ height: 60 }}
                isLoading={status === statuslist.process}
              >
                Sign up to create an account
              </Button>
              <Button
                className="btn p-0 d-flex justify-content-center mt-3"
                type="link"
                href="/login"
              >
                <p className="link mt-2">
                  Already have an account ? Sign in now
                </p>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
