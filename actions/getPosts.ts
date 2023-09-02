const URL = `${process.env.NEXT_PUBLIC_API_URL}/posts`;

interface Post {
	id: number;
	attributes: {
		title: string;
		content: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
	};
}

const getPosts = async (): Promise<Post[]> => {
	const res = await fetch(URL, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!res.ok) {
		throw new Error(`Failed to fetch posts: ${res.statusText}`);
	}

	const { data } = await res.json();

	return data;
};

export default getPosts;
