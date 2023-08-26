import Link from "next/link";
import Avatar from "../ui/Avatar";

const PostCard = ({ post }) => {
  const { title, slug, excerpt, author } = post.fields;

  return (
    <li className="rounded-md overflow-hidden shadow-md">
      <Link href={`/posts/${slug}`} aria-label={title}>
        <div className="mb-2"></div>
        <div className="p-4">
          <h3 className="text-xl mb-1 leading-snug">{title}</h3>
          <div className="text-sm mb-4 text-gray-400"></div>
          <p className="text-base mb-4">{excerpt}</p>
          <Avatar name={author.fields.name} picture={author.fields.picture} />
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
