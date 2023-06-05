import React, { useEffect, useState } from "react";
import style from "../styles/Products.module.css";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

//components
import ProductList from "./ProductList";

const typeList = ["All", "PC", "Clothes", "Jewelry", "Phones"];
const itemsPerPage = 10;

export default function Products() {
  const data = useSelector((state) => state.cart.data);
  const [type, setType] = useState(typeList[0]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(itemsPerPage);
  const [newData, setNewData] = useState(data);

  const [totalPages, setTotalPages] = useState(
    Math.ceil(data.length / itemsPerPage)
  );

  useEffect(() => {
    setCount(page * 10);
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [type]);

  const handlePageChange = (selectedItem) => {
    setPage(selectedItem.selected + 1);
    const element = document.getElementById("products");
    const y = element.offsetTop;
    window.scrollTo({ top: y, behavior: "instant" });
  };

  useEffect(() => {
    if (type !== "All") {
      const currentData = data.filter((item) => item.type === type);
      setTotalPages(Math.ceil(currentData.length / itemsPerPage));
      setNewData(currentData.slice(count - itemsPerPage, count));
    } else {
      setNewData(data.slice(count - itemsPerPage, count));
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    }
  }, [count, data, type]);
  return (
    <div className={style.products} id="products">
      <div className={style.types}>
        {typeList.map((item) => (
          <button
            onClick={() => setType(item)}
            style={{
              backgroundColor: type === item ? "#00ffc2" : "white",
              boxShadow: type === item ? "0 1px 2px 0 black" : "none",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <ProductList type={type} data={newData} />

      {totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName={style.pagination}
          activeClassName={style.currentPage}
          previousLinkClassName={style.prev}
          nextLinkClassName={style.next}
          pageLinkClassName={style.pageLink}
          forcePage={page - 1}
          pageClassName={style.page}
          previousLabel={
            <>
              <FaChevronLeft /> Previous
            </>
          }
          nextLabel={
            <>
              Next <FaChevronRight />
            </>
          }
        />
      )}
    </div>
  );
}
