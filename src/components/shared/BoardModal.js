import React from "react";
import { FaTimes } from "react-icons/fa";
import "./BordModal.css";
import { useForm } from "react-hook-form";

const BoardModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { boardTitle, visibility } = data;

    const newBoard = {
      title: boardTitle,
      visibility: visibility,
    };
    console.log(newBoard);

    reset()
  };

  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-top sm:modal-middle">
        <div className="workspace-modal lg:w-1/3">
          <div className="flex flex-row-reverse w-full">
            <button className="fixed">
              <label for="my-modal-6" class="">
                <FaTimes className="text-xl hover:cursor-pointer"></FaTimes>
              </label>
            </button>{" "}
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="wordspace-form-card mt-20"
          >
            <h3 class="font-bold text-lg board-modal-title text-center">
              Create Board
            </h3>
            <div class="form-control w-full max-w-xs mb-4">
              <label class="label">
                <span class="text-sm font-bold board-modal-title">
                  Board Title
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
                {...register("boardTitle", {
                  required: {
                    value: true,
                    message: "Board Title is Required",
                  },
                })}
              />
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
                class="select select-bordered select-sm w-full max-w-xs mt-2"
                {...register("visibility")}
              >
                <option>Privete</option>
                <option selected>
                  <h4>Workspace</h4>
                </option>
                <option>Public</option>
              </select>
            </div>

            <div class="modal-action my-6">
              <button type="submit" class="btn bg-black text-white w-full">
                create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BoardModal;
