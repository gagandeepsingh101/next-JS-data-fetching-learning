export const getAllUser = async () => {
	const userRes = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await userRes.json();
	return users;
};
export const getSingleUser = async (id) => {
	const userRes = await fetch(
		"https://jsonplaceholder.typicode.com/users/" + id
	);
	const user = await userRes.json();
	return user;
};

export const getUserPosts = async (id) => {
	const postRes = await fetch(
		"https://jsonplaceholder.typicode.com/posts?userId=" + id
	);
	const posts = await postRes.json();
	return await new Promise((resolve) => {
		setTimeout(() => {
			resolve(posts);
		}, 3000);
	});
};
export const getAllPost = async () => {
	const postRes = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = await postRes.json();
    return posts
};
