import Header from "@/components/layout/Header";

const PostsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Posts Page</h1>
        <p className="mt-4 text-gray-700">Here is where posts will be listed.</p>
      </div>
    </div>
  );
};

export default PostsPage;
