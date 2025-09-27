import { type PostProps } from "@/interfaces";

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="border rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
      <p className="text-sm text-gray-500 mt-3">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
