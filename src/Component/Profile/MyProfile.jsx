import React, { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import profile from "../../assets/profile.png";
import { FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import toast from "react-hot-toast";
import { signInData } from "../../utilities/img";

const MyProfile = () => {
  //const [name , setName ] = useState('')
  const { setUser, user, logOut } = useAuth();
  const [modal, setModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogOut = () => {
    logOut();
  };
  const handleEdit = async (data) => {
    const photoData = data.photo[0];
    const res = await signInData(photoData);
    // console.log(res)
    const photoURL = res
    updateProfile(auth.currentUser, {
      displayName: data.name,
      photoURL: photoURL,
    })
      .then(() => {
        const update = auth.currentUser;
        setUser({ ...update });
        toast.success("Profile Updated Successfully");
        setModal(false);
      })
      .catch((err) => {
        toast.error("Update Failed");
        console.log(err);
      });
  };
  return (
    <div className="bg-cyan-50 p-10 flex justify-center">
      <div>
        <div className="bg-white my-10 shadow-2xl p-10 rounded-2xl">
          <div className="flex  justify-between">
            <img
              className="w-20 h-20 rounded-full"
              src={user?.photoURL || profile}
              alt=""
            />
            <button
              onClick={() => setModal(true)}
              className="text-cyan-800 mb-10"
            >
              <FaEdit />
            </button>
          </div>
          <h1 className="text-4xl font-bold mt-3 text-cyan-800 capitalize">
            {user?.displayName || "anonymous peticipate"}
          </h1>
          <h1 className="text-xl text-cyan-400 text mt-3 ">
            Email : <span className="text-cyan-400">{user?.email}</span>
          </h1>
        </div>
        <button onClick={handleLogOut} className="btn btn-neutral mt-2">
          {" "}
          <Link to="/">Log-Out</Link>
        </button>
      </div>

      {modal && (
        <dialog
          open
          id="my_modal_5"
          className=" modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box bg-white text-cyan-700">
            <h3 className="font-bold text-2xl "> Edit Profile</h3>

            <div>
              <form onSubmit={handleSubmit(handleEdit)}>
                <div className=" text-2xl w-[400px] px-4">
                  <label className="label text-sm font-bold mt-1">
                    Your photo
                  </label>
                  <input
                    {...register("photo", { required: true })}
                    type="file"
                    className="file-input"
                    placeholder="Enter your photo"
                  />

                  <label className="label text-sm font-bold mt-1">
                    Your Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="input "
                    placeholder="Enter Your Updated Name"
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-red-600 text-xs">
                      Enter Your Updated Name
                    </p>
                  )}
                </div>
                <div className="modal-action">
                  <button
                    type="button"
                    className="btn  rounded-2xl mt-3"
                    onClick={() => setModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-white text-cyan-700 rounded-2xl mt-3"
                  >
                    Edit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyProfile;
