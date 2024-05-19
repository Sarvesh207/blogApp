import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  const addHighlightClass = (content) => {
    return content.replace(
      /<code>/g,
      '<code class="bg-[#171717] p-1 rounded text-red-500 font-mono">'
    );
  };

  return post ? (
    <div className="lg:w-[960px] w-full mx-auto px-4">
      <div className=" text-center mb-6 ">
        <h1 className="sm:text-[16px] sm:font-[300] lg:text-[32px] lg:font-[700] leading-[40px]">
          {" "}
          {post.title}
        </h1>
      </div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="w-full flex justify-center mb-4 relative  rounded-xl ">
        <img
          src={appwriteService.getFilePreview(post.featuredImage)}
          alt={post.title}
          className="rounded-xl sm:w-[300px] sm:h-[200px] lg:w-[960px] lg:h-[548px]"
        />

        {isAuthor && (
          <div className="absolute right-6 top-6">
            <Link to={`/edit-post/${post.$id}`}>
              <Button bgColor="bg-green-500" className="mr-3">
                Edit
              </Button>
            </Link>
            <Button bgColor="bg-red-500" onClick={deletePost}>
              Delete
            </Button>
          </div>
        )}
      </div>

      <div className="browser-css ">{parse(post.content)}</div>

      <div className="browser-css">
        {parse(addHighlightClass(post.content))}
      </div>
    </div>
  ) : null;
}
