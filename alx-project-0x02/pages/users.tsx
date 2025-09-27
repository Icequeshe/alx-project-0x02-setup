import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { GetStaticProps } from "next";
import { type UserProps } from "@/interfaces";

interface ApiUser {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}

interface UsersPageProps {
  users: ApiUser[];
}

const UsersPage = ({ users }: UsersPageProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Users</h1>

        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: ApiUser[] = await res.json();

  return {
    props: {
      users: data,
    },
  };
};

export default UsersPage;
