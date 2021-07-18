import React, { useEffect, useState } from "react";
import axios from "helpers/axios";
import SyncLoader from "react-spinners/SyncLoader";

import Button from "components/Button";

import "./tags.scss";

export default function Tags({ onClick, isActive }) {
  const [tag, setTag] = useState([]);
  const [, setLoading] = useState(true);

  useEffect(() => {
    const getTag = async () => {
      try {
        const res = await axios.get("/api/tag");

        const { status, data } = res;

        if (status !== 200) {
          setLoading(true);
        } else {
          setLoading(false);
          setTag(data);
        }
      } catch (error) {
        error();
      }
    };
    getTag();
  }, []);

  return (
    <section className="tags">
      <div className="container">
        <div className="row justify-content-center">
          {!tag.length ? (
            <div className="row" style={{ width: "auto" }}>
              <SyncLoader color="#d8d8d8" />
            </div>
          ) : (
            tag?.map((item) => {
              return (
                <div className="col-auto mb-4" key={item._id}>
                  <Button
                    className="btn btn-tags rounded-pill"
                    onClick={onClick}
                    isActive={isActive}
                  >
                    {item.name}
                  </Button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
