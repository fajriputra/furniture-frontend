import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import axios from "helpers/axios";
import { apiHost } from "config";
import InputSelect from "components/Form/InputSelect";

export default function SelectWilayah({ tingkat, kodeInduk, onChange, value }) {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    axios
      .get(`${apiHost}/api/wilayah/${tingkat}`)
      .then(({ data }) => setData(data))
      .finally((_) => setFetching(false));
  }, [kodeInduk, tingkat]);

  return (
    <InputSelect
      options={data.map((wilayah) => ({
        label: wilayah.nama,
        value: wilayah.kode,
      }))}
      onChange={onChange}
      isDisabled={fetching || !data.length}
      value={value}
    />
  );
}

SelectWilayah.defaultProps = {
  tingkat: "provinsi",
};

SelectWilayah.propTypes = {
  tingkat: propTypes.oneOf(["provinsi", "kabupaten", "kecamatan", "desa"]),
  onChange: propTypes.func,
  value: propTypes.shape({
    label: propTypes.string,
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  }),

  kodeInduk: propTypes.oneOfType([propTypes.number, propTypes.string]),
};
