import React, { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import profile from "../../assets/profile.png";
import { FaEdit, FaSignOutAlt, FaCamera } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import toast from "react-hot-toast";
import { signInData } from "../../utilities/img";
import useRoles from "../../hooks/useRoles";
import RouteLoder from "../../Routes/RouteLoder";
import { motion, AnimatePresence } from "framer-motion";

const MyProfile = () => {
  const { setUser, user, logOut } = useAuth();
  const [role, roleLoading] = useRoles();
  const [modal, setModal] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const handleLogOut = () => {
    logOut();
  };

  const handleEdit = async (data) => {
    setIsUploading(true);
    try {
      const photoData = data.photo[0];
      const photoURL = await signInData(photoData);

      await updateProfile(auth.currentUser, {
        displayName: data.name,
        photoURL: photoURL,
      });

      const updatedUser = auth.currentUser;
      setUser({ ...updatedUser });
      toast.success("Profile Updated Successfully");
      setModal(false);
      reset();
    } catch (err) {
      toast.error("Update Failed");
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  if (roleLoading) return <RouteLoder />;

  return (
    <div className="bg-base-100 min-h-[80vh] p-6 md:p-10 flex flex-col items-center transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-base-200 dark:bg-slate-800 shadow-2xl rounded-[2.5rem] p-8 md:p-12 relative border border-base-300 dark:border-slate-700"
      >
        <button
          onClick={() => setModal(true)}
          className="absolute top-8 right-8 p-3 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full hover:scale-110 transition-transform shadow-sm"
        >
          <FaEdit size={20} />
        </button>
        <div className="flex flex-col items-center">
          <div className="relative group">
            <img
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-xl"
              src={user?.photoURL || profile}
              alt="Profile"
            />
            <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <FaCamera className="text-white text-2xl" />
            </div>
          </div>
          <div className="mt-6 text-center">
            <span className="px-4 py-1 bg-cyan-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-md">
              {role || "Member"}
            </span>
            
            <h1 className="text-3xl md:text-4xl font-black mt-4 text-cyan-900 dark:text-cyan-400 capitalize">
              {user?.displayName || "Anonymous Participant"}
            </h1>
            
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-2 font-medium">
              {user?.email}
            </p>
          </div>
          <button 
            onClick={handleLogOut} 
            className="mt-10 flex items-center gap-2 px-8 py-3 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/30 rounded-2xl font-bold hover:bg-red-600 hover:text-white transition-all shadow-lg active:scale-95"
          >
            <FaSignOutAlt /> Log Out
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {modal && (
          <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800"
            >
              <div className="bg-cyan-600 p-8 text-white text-center">
                <h3 className="text-2xl font-bold">Update Profile</h3>
                <p className="text-cyan-100 text-sm mt-1">Change your look and name</p>
              </div>

              <form onSubmit={handleSubmit(handleEdit)} className="p-8 space-y-6">
                <div>
                  <label className="label text-xs font-bold uppercase text-gray-500 dark:text-gray-400">Profile Photo</label>
                  <input
                    {...register("photo", { required: true })}
                    type="file"
                    className="file-input file-input-bordered file-input-cyan w-full dark:bg-slate-800 dark:text-white"
                  />
                  {errors.photo && <p className="text-red-500 text-xs mt-1">Photo is required</p>}
                </div>

                <div>
                  <label className="label text-xs font-bold uppercase text-gray-500 dark:text-gray-400">Display Name</label>
                  <input
                    {...register("name", { required: true })}
                    defaultValue={user?.displayName}
                    type="text"
                    className="input input-bordered w-full dark:bg-slate-800 dark:text-white focus:border-cyan-500"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
                </div>

                <div className="flex gap-4 pt-4">
                  <button 
                    type="button" 
                    disabled={isUploading}
                    className="btn btn-ghost flex-1 dark:text-gray-300" 
                    onClick={() => setModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    disabled={isUploading}
                    className="btn bg-cyan-600 hover:bg-cyan-700 text-white border-none flex-[2] rounded-xl"
                  >
                    {isUploading ? "Updating..." : "Save Changes"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyProfile;