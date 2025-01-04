import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { User } from "../types/User";
import {
  User as UserIcon,
  Mail,
  AtSign,
  Phone,
  ExternalLink,
} from "lucide-react";

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-lg p-8">
          {/* Header Section */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <UserIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Personal Info */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Personal Information
              </h2>
              <p className="flex items-center text-gray-600 mb-2">
                <AtSign className="h-5 w-5 mr-2 text-purple-500" />{" "}
                <strong>Username:</strong> {user.username}
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <Mail className="h-5 w-5 mr-2 text-blue-500" />{" "}
                <strong>Email:</strong> {user.email}
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <Phone className="h-5 w-5 mr-2 text-green-500" />{" "}
                <strong>Phone:</strong> {user.phone}
              </p>
              <p className="flex items-center text-gray-600">
                <ExternalLink className="h-5 w-5 mr-2 text-purple-500" />{" "}
                <strong>Website:</strong>{" "}
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {user.website}
                </a>
              </p>
            </div>

            {/* Address Info */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Address
              </h2>
              <p className="text-gray-600 mb-2">
                <strong>Street:</strong> {user.address.street}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Suite:</strong> {user.address.suite}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>City:</strong> {user.address.city}
              </p>
              <p className="text-gray-600">
                <strong>Zipcode:</strong> {user.address.zipcode}
              </p>
            </div>
          </div>

          {/* Company Info */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Company Information
            </h2>
            <p className="text-gray-600 mb-2">
              <strong>Name:</strong> {user.company.name}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Catchphrase:</strong> {user.company.catchPhrase}
            </p>
            <p className="text-gray-600">
              <strong>Business:</strong> {user.company.bs}
            </p>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors duration-300"
            >
              Back to Users
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
