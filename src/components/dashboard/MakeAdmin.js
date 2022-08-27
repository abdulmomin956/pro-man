import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loading from "../shared/Loading";

const MakeAdmin = () => {

  const users = useQuery(["users"], () => fetch("https://morning-coast-54182.herokuapp.com/users").then(res => res.json()))

  if (users.isLoading) {
    return <Loading />
  }
  console.log(users);

  const handleAdmin = async (id) => {
    const role = "Admin";
    const user = { role };

    const res = await axios.put(`https://morning-coast-54182.herokuapp.com/users/${id}`, user)
    if (res.status === 200) {
      users.refetch()
    }

  };
  return (
    <div>
      {
        <div className="overflow-x-auto ">
          <table className="table w-full ">
            <thead>
              <tr className="text-black ">
                <th>No.</th>
                <th>name</th>
                <th>email</th>
                <th>Role</th>
                <th>Make Admin</th>
              </tr>
            </thead>
            <tbody>
              {users?.data?.map((user, i) => (
                <tr key={i + 1} className="border-2 rounded-md bg-red-400">
                  <th>{i + 1}</th>
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
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default MakeAdmin;
