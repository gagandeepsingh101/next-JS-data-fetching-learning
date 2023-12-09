import { getSingleUser } from "@/utils/features";
import React, { Suspense } from "react";
import Posts from "./posts";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
	return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }];
};

export const generateMetadata = async ({ params }) => {
	const user = await getSingleUser(params.id);
	return {
		title: `${user?.name}'s profile`,
	};
};

const page = async ({ params }) => {
	const user = await getSingleUser(params.id);

	return (
		<div>
        {!user.id && notFound()}
			<div>
				<h1>{user?.name}</h1>
				<h3>{user?.email}</h3>
			</div>
			<Suspense fallback={<p>Loading...</p>}>
				<Posts userID={params.id}></Posts>
			</Suspense>
		</div>
	);
};
export default page;
