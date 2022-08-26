import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);

  const handleAdmin = (id) => {
    const role = "Admin";
    const user = { role };

    console.log("clicked");

    const url = `http://localhost:5000/users/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("make admin sucessfull");
      });
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
              {users.map((user, i) => (
                <tr key={i+1} className="border-2 rounded-md bg-red-400">
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  {user.role !== "admin" && (
                    <td>
                      <button
                        onClick={() => handleAdmin(user._id)}
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
