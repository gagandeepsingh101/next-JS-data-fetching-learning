import { getUserPosts } from "@/utils/features";
import React from "react";

const Posts = async ({userID}) => {
	const userPost = await getUserPosts(userID);
	return (
		<div>
            {userPost?.map((post) => (
                <div className="my-5" key={post?.id}>
                    <h1>{post?.title}</h1>
                    <p>{post?.body}</p>
                </div>
            ))}
		</div>
	);
};
export default Posts;
