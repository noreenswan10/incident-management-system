'use client'
import { registrationSchema } from "@/validations/registrationschema";
import { useState } from "react";

export default function RegistrationForm() {
    const [firstName, setFirstName] = useState<string>("");
    const [middleName, setMiddleName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [cpassword, setCpassword] = useState<string>("");
    const [errors, setErrors] = useState<any>({});

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const result = registrationSchema.safeParse({
          firstName,
          middleName,
          lastName,
          email,
          phoneNumber,
          address,
          password,
          cpassword,
        });
    
        if (!result.success) {
          const errorMessages: any = {};
          result.error.errors.forEach((err) => {
            errorMessages[err.path[0]] = err.message;
          });
          setErrors(errorMessages);
        } else {
          console.log("Form is valid", result.data);
          setErrors({});
        }
      };

    return(
        <div className="w-1/4">
      <form onSubmit={handleRegister}>
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
          {errors.firstName && (
            <p className="text-red-600 text-sm">{errors.firstName}</p>
          )}
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
          {errors.middleName && (
            <p className="text-red-600 text-sm">{errors.middleName}</p>
          )}
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
          {errors.lastName && (
            <p className="text-red-600 text-sm">{errors.lastName}</p>
          )}
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
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
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
          {errors.phoneNumber && (
            <p className="text-red-600 text-sm">{errors.phoneNumber}</p>
          )}
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
          {errors.address && (
            <p className="text-red-600 text-sm">{errors.address}</p>
          )}
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
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password}</p>
          )}
        </div>
        <div className="flex flex-col w-full mb-3">
          <label htmlFor="Cpassword" className="font-semibold">
            Confirm Password
          </label>
          <input
            type="password"
            name="Cpassword"
            id="Cpassword"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            className="border border-[#333] p-2 rounded-xl"
          />
          {errors.cpassword && (
            <p className="text-red-600 text-sm">{errors.password}</p>
          )}
        </div>
        <button type="submit" className="bg-green-700 text-white mt-2 py-3 rounded-full font-semibold w-full active:scale-95 hover:bg-green-900">
          REGISTER
        </button>
        <p className="text-center mt-2">
          Already have an account?{" "}
          <a href="/login" className="font-semibold">
            Log In
          </a>
          .
        </p>
        </form>
      </div>
    )
}