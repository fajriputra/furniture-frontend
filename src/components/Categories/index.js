import React from "react";

import Button from "components/Button";

import "./categories.scss";

export default function Categories({ isActive, button, onTabChange }) {
  return (
    <section className="categories">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            <h1 className="fw-bold">Product Selection</h1>
          </div>
          <div className="col-12 col-md-7">
            <div className="categories-select text-center">
              {button?.map((cat, i) => {
                return (
                  <Button
                    key={i}
                    className={[
                      "btn p-0",
                      isActive ? "fw-bold" : "fw-light",
                    ].join(" ")}
                    onClick={() => onTabChange(cat)}
                  >
                    <p className="paragraph">{cat}</p>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// const [ctg, setCtg] = useState([]);
// const [, setLoading] = useState(true);

// useEffect(() => {
//   const getCategory = async () => {
//     try {
//       const res = await axios.get("/api/categories");

//       const { status, data } = res;

//       if (status !== 200) {
//         setLoading(true);
//       } else {
//         setLoading(false);
//         setCtg(data);
//       }
//     } catch (error) {
//       alert(error);
//     }
//   };

//   getCategory();
// }, []);

// {!ctg.length ? (
//               <div className="loader mt-2 mx-auto">
//                 <SyncLoader color="#d8d8d8" />
//               </div>
//             ) : (
//               ctg.map((item) => {
//                 return (
//                   <Button
//                     key={item._id}
//                     className={["btn p-0", isActive ? "fw-bold" : ""].join(
//                       " "
//                     )}
//                     onClick={() => onPageChange(item)}
//                   >
//                     <p className="paragraph">{item.name}</p>
//                   </Button>
//                 );
//               })
//             )}
