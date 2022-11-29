import axios from "axios";
import React, { useEffect, useState } from "react";

const MakeAdmin = () => {
  const [page, setPage] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [limit, setLimit] = useState(null);
  const [canPreviousPage, setCanPreviousPage] = useState(false);
  const [canNextPage, setCanNextPage] = useState(false);
  const [isAdmin, setIsAdmin] = useState(null)
  const [data, setData] = useState([])
  const [keyword, setKeyword] = useState('');
  const [needLoad, setNeedLoad] = useState(true)



  function previousPage() {
    sessionStorage.setItem("page", (page - 1))
    setPage(page - 1);
    setNeedLoad(true)
  }
  function nextPage() {
    sessionStorage.setItem("page", (page + 1))
    setPage(page + 1);
    setNeedLoad(true)
  }


  useEffect(() => {
    const pageJson = sessionStorage.getItem("page");
    const limitJson = sessionStorage.getItem("limit");
    if (pageJson) {
      setPage(parseInt(pageJson));
    } else {
      setPage(1)
    }
    if (limitJson) {
      setLimit(parseInt(limitJson))
    } else {
      setLimit(10)
    }
  }, [])

  useEffect(() => {
    const adminJson = sessionStorage.getItem("isAdmin")
    // console.log(adminJson);
    if (adminJson) {
      setIsAdmin(adminJson)
    } else {
      setIsAdmin("All Users")
    }
  }, [])



  useEffect(() => {
    const loadData = async () => {

      const reqBody = { isAdmin, keyword }
      if (page && limit && isAdmin && needLoad) {
        setNeedLoad(false)
        const res = await axios.post(`http://13.126.5.141:5000/users/pagination?page=${page}&limit=${limit}`, reqBody)
        // console.log(res);
        if (res.status === 200) {
          setPageCount(res?.data?.num_pages)
          setData(res?.data?.list)
          sessionStorage.setItem("page", (res?.data?.page))
          setPage(res?.data?.page)
          sessionStorage.setItem("isAdmin", (res?.data?.isAdmin))
        }
      }
    }

    loadData();
  }, [isAdmin, keyword, limit, needLoad, page])



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




  const handleAdmin = async (id) => {
    const role = "Admin";
    const user = { role };

    const res = await axios.put(`http://13.126.5.141:5000/users/${id}`, user)
    if (res.status === 200) {
      setNeedLoad(true)
    }

  };

  return (<div className="w-full">
    <div className="p-4 shadow flex m-4 gap-2 justify-center">
      <input onChange={(e) => { setKeyword(e.target.value); setNeedLoad(true) }} type="email" placeholder="Search by email" className="input input-bordered w-full max-w-xs" />
      <select onChange={(e) => { setIsAdmin(e.target.value); sessionStorage.setItem('isAdmin', (e.target.value)); setNeedLoad(true) }} value={isAdmin || ""} className="select select-bordered w-full max-w-xs">
        <option value="All Users">All Users</option>
        <option value="Admin">Admin</option>
      </select>
    </div>
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
          {data?.map((user, i) => (
            <tr key={i} className="border-2 rounded-md bg-red-400">
              <td className="font-bold">{(page - 1) * limit + i + 1}</td>
              <td>{user.displayName}</td>
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
      <div className="text-center py-3 flex items-center justify-center gap-3">
        <span>Page {page} of {pageCount}</span>
        <select className="select select-bordered" value={limit || 1} onChange={(e) => { setLimit(Number(e.target.value)); sessionStorage.setItem("limit", parseInt(e.target.value)); setNeedLoad(true) }}>
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button className="btn btn-secondary" onClick={previousPage} disabled={!canPreviousPage}>
          &#x02190;
        </button>
        <button className="btn btn-secondary" onClick={nextPage} disabled={!canNextPage}>
          &#x02192;
        </button>
      </div>
    </div>
  </div>

  );
};

export default MakeAdmin;
