import { useEffect, useState } from "react";
import { getAddress } from "helpers/api/address";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

export const useAddress = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(statuslist.idle);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const fetchDataAddress = useCallback(async () => {
    setStatus(statuslist.process);

    // request data delivery address dari api
    let {
      data: { data, count, error },
    } = await getAddress({ page, limit });

    // cek jika ada error dari server
    if (error) {
      setStatus(statuslist.error);
      return;
    }

    // berhasil dapat data
    setStatus(statuslist.success);
    setData(data);
    setCount(count);
  }, [page, limit]);

  useEffect(() => {
    fetchDataAddress();
  }, [fetchDataAddress]);

  return { data, count, status, page, limit, setPage, setLimit };
};
