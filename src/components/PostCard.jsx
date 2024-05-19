import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const PostCard = ({ title, id, featuredImage, content }) => {
  return (
    <Link to={`/post/${id}`}>
      <div className=" bg-[#000000] border border-slate-900 rounded-xl flex justify-center gap-3">
        <div className="rounded-xl  w-full  ">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-lg w-[423.4px] h-[358.4px] object-fill"
          />
        </div>
        <div className="flex justify-center mx-auto overflow-hidden  items-center flex-col w-[#479.2] ">
          <h2 className="text-xl font-bold mb-5 text-center">{title}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            enim perferendis ut necessitatibus libero! Ratione perferendis quod,
            corporis, 
          </p>

          <button className="mx-auto w-fit w-48 rounded-lg bg-white hover:bg-[#48937E] hover:text-black px-3 py-3 font-bold  text-black text-center">
            {" "}
            Read More
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
