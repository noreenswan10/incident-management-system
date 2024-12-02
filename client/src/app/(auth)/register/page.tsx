"use client";
import { useState } from "react";

export default function Register() {
  const [firstName, setFirstName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCpassword] = useState<string>("");

  return (
    <div className="flex justify-center min-h-screen w-full items-center">
      <div className="w-1/4">
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
          <label htmlFor="Password" className="font-semibold">
            Password
          </label>
          <input
            type="text"
            name="Password"
            id="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#333] p-2 rounded-xl"
          />
        </div>
        <div className="flex flex-col w-full mb-3">
          <label htmlFor="Cpassword" className="font-semibold">
            Confirm Password
          </label>
          <input
            type="text"
            name="Cpassword"
            id="Cpassword"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            className="border border-[#333] p-2 rounded-xl"
          />
        </div>
        <button className="bg-green-700 text-white mt-2 py-3 rounded-full font-semibold w-full active:scale-95 hover:bg-green-900">REGISTER</button>
      <p className="text-center mt-2">Already have an account? <a href="/login" className="font-semibold">Log In</a>.</p>
      </div>
    </div>
  );
}
