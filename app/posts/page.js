import { getAllPost } from "@/utils/features";
import React from "react";

const AllPost = async () => {
	const allPost = await getAllPost();
	return (
		<div>
            {allPost?.map((post) => (
                <div className="my-5" key={post?.id}>
                    <h1>{post?.title}</h1>
                    <p>{post?.body}</p>
                </div>
            ))}
		</div>
	);
};

export default AllPost;
