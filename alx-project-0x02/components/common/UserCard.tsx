import { type UserProps } from "@/interfaces";

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="border rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-700 mt-1">{email}</p>
      <p className="text-gray-600 mt-2">
        {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
