import React, { useEffect, useMemo, useState } from "react";
import PaginationBar from "./PaginationBar";
const PerPage = 10;

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PerPage;
    const lastPageIndex = firstPageIndex + PerPage;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({ key: i, value: `Item ${i + 1}` });
    }
    setData(arr);
  }, []);

  return (
    <div>
      <div className="flex flex-col mt-8 p-8">
        {currentTableData.map((el) => (
          <div className="border border-black p-2 m-2" key={el.id}>
            {el.value}
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <PaginationBar
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PerPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default List;
