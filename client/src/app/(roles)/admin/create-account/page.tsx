"use client";
import { useAuth } from "@/context/authcontext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [firstName, setFirstName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<"Technician" | "User">("User");

  // const { isAuthenticated, loading, isLogout }: any = useAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!isAuthenticated && !loading) {
  //     return router.push("/login");
  //   }
  // }, [isAuthenticated, loading, router]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!isAuthenticated && !isLogout) {
  //   return <div>Youre not allowed to access this page.</div>;
  // }
  return (
    <div className="flex flex-col mt-5 ml-5">
      <h2 className="font-semibold text-2xl">CREATE ACCOUNT</h2>
      <div className="w-1/4">
        <form>
          <div className="flex flex-col w-full mb-3">
            <label htmlFor="FirstName" className="font-semibold">
              First Name
            </label>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-[#333] p-2 rounded-xl"
            />
          </div>
          <div className="flex flex-col w-full mb-3">
            <label htmlFor="MiddleName" className="font-semibold">
              Middle Name
            </label>
            <input
              type="text"
              name="MiddleName"
              id="MiddleName"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              className="border border-[#333] p-2 rounded-xl"
            />
          </div>
          <div className="flex flex-col w-full mb-3">
            <label htmlFor="MiddleName" className="font-semibold">
              Last Name
            </label>
            <input
              type="text"
              name="LastName"
              id="LastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border border-[#333] p-2 rounded-xl"
            />
          </div>
          <div className="flex flex-col w-full mb-3">
            <label htmlFor="Email" className="font-semibold">
              Email
            </label>
            <input
              type="text"
              name="Email"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-[#333] p-2 rounded-xl"
            />
          </div>
          <div className="flex flex-col w-full mb-3">
            <label htmlFor="PhoneNumber" className="font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              name="PhoneNumber"
              id="PhoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border border-[#333] p-2 rounded-xl"
            />
          </div>
          <div className="flex flex-col w-full mb-3">
            <label htmlFor="Address" className="font-semibold">
              Address
            </label>
            <input
              type="text"
              name="Address"
              id="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border border-[#333] p-2 rounded-xl"
            />
          </div>
          <div className="flex flex-col w-full mb-3">
            <label htmlFor="role" className="font-semibold">Select Role:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value as "Technician" | "User")}
              className="border border-[#333] p-2 rounded-xl"
            >
              <option value="Technician">Technician</option>
              <option value="User">User</option>
            </select>
          </div>
          <div className="flex flex-col w-full mb-3">
            <label htmlFor="Password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              name="Password"
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-[#333] p-2 rounded-xl"
            />
          </div>
          <button
            type="submit"
            className="bg-green-700 text-white mt-2 py-3 rounded-full font-semibold w-full active:scale-95 hover:bg-green-900"
          >
            CREATE ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
}
