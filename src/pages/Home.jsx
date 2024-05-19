import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

const Home = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">

      <div className="lg:w-[960px] w-full mx-auto px-4">
        <div className="flex flex-col flex-wrap mt-5">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 ">
              <PostCard
                id={post.$id}
                title={post.title}
                featuredImage={post.featuredImage}
                content={post.keyword}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
