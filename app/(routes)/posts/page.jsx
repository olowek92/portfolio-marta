import { getData } from "@/app/actions/get-data";

export default async function Posts() {
  const data = await getData();
  console.log("data", data);
  return (
    <section id="news-page" className="h-screen text-center flex">
      <ul className="m-auto font-waterfall text-6xl text-white-600 font-bold">
        {data.map((post) => (
          <li key={post.fields.slug}>{post.fields.title}</li>
        ))}
      </ul>
    </section>
  );
}
