import Card from "@/components/common/Card";

const HomePage = () => {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome to the Home Page</h1>

      <Card
        title="Card 1"
        content="This is the content for the first card."
      />

      <Card
        title="Card 2"
        content="Another card with different content."
      />

      <Card
        title="Card 3"
        content="You can reuse this component anywhere!"
      />
    </div>
  );
};

export default HomePage;
