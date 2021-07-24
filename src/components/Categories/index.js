import React, { useEffect, useState } from "react";
import axios from "helpers/axios";
import SyncLoader from "react-spinners/SyncLoader";

import Button from "components/Button";

import "./categories.scss";

export default function Categories({ onChange, isActive }) {
  const [ctg, setCtg] = useState([]);
  const [, setLoading] = useState(true);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await axios.get("/api/categories");

        const { status, data } = res;

        if (status !== 200) {
          setLoading(true);
        } else {
          setLoading(false);
          setCtg(data);
        }
      } catch (error) {
        error();
      }
    };

    getCategory();
  }, []);

  return (
    <section className="categories">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1 className="fw-bold">Product Selection</h1>
          </div>
          <div className="col-auto col-md-7">
            <div className="categories-select text-center">
              {!ctg.length ? (
                <div className="mt-2 mx-auto">
                  <SyncLoader color="#d8d8d8" />
                </div>
              ) : (
                ctg.map((item) => {
                  return (
                    <Button
                      key={item._id}
                      className="btn p-0"
                      onChange={onChange}
                      isActive={isActive}
                    >
                      <div>
                        <p className="paragraph fw-light">{item.name}</p>
                      </div>
                    </Button>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
