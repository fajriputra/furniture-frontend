import React from "react";

import Button from "components/Button";
import InputText from "components/Form/InputText";

import "./subscribe.scss";
import useForm from "hooks/useForm";

export default function Subscribe(props) {
  const { form, handleChange } = useForm({
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email.length === 0) {
      alert("form tidak boleh kosong");
    } else {
      alert(`${form.email} tapi belum berfungsi sepenuhnya`);

      window.location.reload();
    }
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
              <form onSubmit={handleSubmit}>
                <InputText
                  name="email"
                  type="email"
                  value={form.email}
                  placeholder="Your email address"
                  onChange={handleChange}
                />
                <Button className="btn btn-send">Send</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
