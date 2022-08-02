import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./BordModal.css";
import { useForm } from "react-hook-form";
import img from "./../../assest/image/abstract-board.png";
import bg1 from "../../assest/image/bg1.jpg";
import bg2 from "../../assest/image/bg2.jpg";
import bg3 from "../../assest/image/bg3.jpg";
import bg4 from "../../assest/image/bg4.jpg";
import bg5 from "../../assest/image/bg5.jpg";
import { convertToHsl } from "daisyui/src/colors/functions";
import { useNavigate } from "react-router-dom";

const BoardModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [background, setBackground] = useState("");

  const navigate = useNavigate()

  const onSubmit = (data) => {
    const { boardTitle, visibility } = data;

    const newBoard = {
      title: boardTitle,
      visibility: visibility,
    };
    console.log(newBoard);
    
    navigate('/board-details')

    reset();
  };

  return (
    <div className="w-[80%] md:w-1/2">
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-top sm:modal-middle">
        <div className="workspace-modal lg:w-1/3">
          <div className="flex flex-row-reverse w-full">
            <button className="fixed">
              <label htmlFor="my-modal-6" className="">
                <FaTimes className="text-xl hover:cursor-pointer"></FaTimes>
              </label>
            </button>{" "}
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="wordspace-form-card mt-20"
          >
            <h3 className="font-bold text-lg board-modal-title text-center">
              Create Board
            </h3>
            <hr className="h-[2px] bg-gray-300" />
            <div
              style={{ background: `url(${bg1})`, objectFit: "cover" }}
              className="flex bg-green-800 bg-contain  items-center bm-logo"
            >
              <img src={img} className="" alt="" />
            </div>
            <div className="grid grid-cols-4 gap-2 justify-center items-center overflow-hidden p-3 bg-orange-300">
              <img
                src={bg1}
                className="h-24 w-24 rounded-xl bg-clip-padding"
                alt=""
              />
              <img
                src={bg2}
                className="h-24 w-24 rounded-xl bg-clip-padding"
                alt=""
              />
              <img
                src={bg3}
                className="h-24 w-24 rounded-xl bg-clip-padding"
                alt=""
              />
              <img
                src={bg4}
                className="h-24 w-24 rounded-xl bg-clip-padding"
                alt=""
              />
            </div>
            <div className="form-control w-full max-w-xs mb-4">
              <label className="label">
                <span className="text-sm font-bold board-modal-title">
                  Board Title
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register("boardTitle", {
                  required: {
                    value: true,
                    message: "Board Title is Required",
                  },
                })}
              />
              <label className="label">Board title is required </label>
              <label className="label">
                {errors.boardTitle?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.boardTitle.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <p className="text-sm font-bold board-modal-title">Visibility</p>
              <select
                defaultValue={"DEFAULT"}
                className="select select-bordered select-sm w-full max-w-xs mt-2"
                {...register("visibility")}
              >
                <option>Private</option>
                <option value="DEFAULT">Workspace</option>
                <option>Public</option>
              </select>
            </div>

            <div className="modal-action my-6">
                <button type="submit" className="btn w-full text-white bg-black" >
                  Create
                </button>
           </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default BoardModal;
