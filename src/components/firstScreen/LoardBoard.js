import React from "react";
import Loading from "../shared/Loading";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoardBoard = ({ props, workspaceID }) => {
  const navigate = useNavigate();
  // console.log(props);
  const shortname = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  // console.log(data)

  // const data1 = useSelector(state => state.workspace)
  // if (data1 && shortname) {
  //     data1?.map((item1) => {
  //         const itemId = item1._id === shortname
  //         const itemName = item1.sortname
  //         console.log(itemName)
  //     })
  // }
  // console.log(shortname)

  useEffect(() => {
    setLoading(true);
    fetch(`https://morning-coast-54182.herokuapp.com/board/w/${workspaceID}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
        // console.log(result);
      })
      .catch((err) => {
        // console.log(err)
        setLoading(false);
      });
  }, [workspaceID]);

  if (loading) {
    <Loading></Loading>;
  }

  // console.log(data);
  // onClick={() => navigate(`/${shortname}/${item._id}`)}
  return (
    <>
      {data?.map((item) => (
        <div
          key={item._id}
          onClick={() => navigate(`/${shortname}/${item._id}`)}
          className="bg-base-100 shadow rounded-lg"
        >
          <label
            style={{
              backgroundColor: "#00000026",
              background: `url(${item.boardBg})`,

              webkitFilter: "grayscale(20%)",
              backgroundSize: "cover",
            }}
            className="py-12 hover:cursor-pointer text-white hover:shadow-xl hover:font-bold flex justify-center items-center flex-row gap-2 rounded-lg"
            //   onClick={() => {
            //     dispatch(setWorkspaceID(item._id))
            //   }}
          >
            <p className="text-lg text-center">
              {item.title.length > 14
                ? item.title.slice(0, 12) + "..."
                : item.title}
            </p>
            {/* <FaRegPlusSquare className="mr-1 text-sm"></FaRegPlusSquare> */}
          </label>
        </div>
      ))}
    </>
  );
};

export default LoardBoard;
