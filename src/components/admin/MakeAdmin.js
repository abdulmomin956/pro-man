import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../shared/Loading";

const MakeAdmin = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [canPreviousPage, setCanPreviousPage] = useState(false);
  const [canNextPage, setCanNextPage] = useState(false);
  function previousPage() {
    setPage(page - 1);

  }
  function nextPage() {
    setPage(page + 1);
  }



  const users = useQuery(["users", { page, limit }], async () => await fetch(`https://morning-coast-54182.herokuapp.com/users/pagination?page=${page}&limit=${limit}`).then(res => res.json()))


  console.log(page);



  useEffect(() => {
    if (page === 1) {
      setCanPreviousPage(false)
    }
    else {
      setCanPreviousPage(true)
    }
  }, [page])

  useEffect(() => {
    if (page === pageCount) {
      setCanNextPage(false)
    }
    else {
      setCanNextPage(true)
    }
  }, [page, pageCount])

  useEffect(() => {
    if (users?.data) {
      setPageCount(users?.data?.num_pages)
      // setData(users.data.list)
      setPage(users?.data?.page)
    }
  }, [users?.data])

  if (users.isLoading) {
    return <Loading />
  }



  // console.log(users);

  const handleAdmin = async (id) => {
    const role = "Admin";
    const user = { role };

    const res = await axios.put(`https://morning-coast-54182.herokuapp.com/users/${id}`, user)
    if (res.status === 200) {
      users.refetch()
    }

  };

  return (

    <div className="overflow-y-auto block max-h-screen w-full">
      <table className="table w-full ">
        <thead className="sticky top-0">
          <tr className="text-black ">
            <th>No</th>
            <th>name</th>
            <th>email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.data?.list?.map((user, i) => (
            <tr key={i} className="border-2 rounded-md bg-red-400">
              <td className="font-bold">{(page - 1) * limit + i + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              {user?.role !== "Admin" && (
                <td>
                  <button
                    onClick={() => handleAdmin(user?._id)}
                    className="btn btn-primary btn-sm bg-blue-50 text-black border-0 hover:bg-rose-50 shadow"
                  >
                    make admin
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center py-3">
        <span>Page {page} of {pageCount}</span>
        <select value={limit} onChange={(e) => { setLimit(Number(e.target.value)); }}>
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button className="btn" onClick={previousPage} disabled={!canPreviousPage}>
          &#x02190;
        </button>
        <button className="btn" onClick={nextPage} disabled={!canNextPage}>
          &#x02192;
        </button>
      </div>
    </div>

  );
};

export default MakeAdmin;
