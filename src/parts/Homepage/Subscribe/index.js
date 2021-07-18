import React from "react";

import { useForm } from "react-hook-form";

import Button from "components/Button";
import InputText from "components/Form/InputText";

import "./subscribe.scss";

export default function Subscribe(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = () => {
    alert("belum sempurna");

    window.location.reload();
  };

  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe-wrapper text-center">
          <div className="subscribe-wrapper-title mb-5">
            <h1 className="fw-bold">
              Subscribe to get the latest <br />
              <span className="span-text">news</span> about us
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group position-relative w-100">
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
                <Button className="btn btn-send">Send</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
