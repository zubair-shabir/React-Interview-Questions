import React, { useEffect, useState } from "react";

import "./pagination.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=12&skip=${page * 12}`
    );
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(Math.floor(data.total / 12));
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [page]);

  const selectPagehandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };
  return (
    <>
      {products.length > 0 && (
        <div className="products">
          {products.map((item) => {
            return (
              <div key={item.id} className="products__single">
                <img src={item.thumbnail} alt={item.title} />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      )}

      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPagehandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}
          >
            ◀
          </span>
          {[...Array(totalPages)].map((_, index) => {
            return (
              <span
                key={index}
                className={page === index + 1 ? "pagination__selected" : ""}
                onClick={() => selectPagehandler(index + 1)}
              >
                {index + 1}
              </span>
            );
          })}

          <span
            onClick={() => selectPagehandler(page + 1)}
            className={page < totalPages ? "" : "pagination__disable"}
          >
            ▶
          </span>
        </div>
      )}
    </>
  );
};

export default Pagination;
