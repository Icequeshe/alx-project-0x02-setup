import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

export default function HomePage() {
  const [posts, setPosts] = useState([
    { title: "Card 1", content: "This is the content for the first card." },
    { title: "Card 2", content: "Another card with different content." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Welcome to the Home Page</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 px-4 py-2 bg-green-500 text-white rounded"
        >
          Add New Post
        </button>

        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </div>
    </div>
  );
}
