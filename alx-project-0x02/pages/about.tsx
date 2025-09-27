import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">About Us</h1>

        <div className="flex gap-4">
          <Button size="small" shape="rounded-sm" label="Small Button" />
          <Button size="medium" shape="rounded-md" label="Medium Button" />
          <Button size="large" shape="rounded-full" label="Large Button" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
