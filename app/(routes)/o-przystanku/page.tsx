import React from "react";
import ReactMarkdown from "react-markdown";

import getPosts from "@/actions/getPosts";

const AboutPage: React.FC = async () => {
	const posts = await getPosts();

	return (
		<section id="about-page">
			<div className="mt-32  p-4">
				{posts?.map((post) => (
					<main key={post.id}>
						Title:
						<h1>{post.attributes.title}</h1>
						Description:
						<ReactMarkdown>{post.attributes.content}</ReactMarkdown>
					</main>
				))}
			</div>
		</section>
	);
};

export default AboutPage;
