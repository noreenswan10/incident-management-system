'use client'
import fetchAPI from "@/api/fetch";
import { createAccountSchema } from "@/validations/createaccountschema";
import { useState } from "react";

export default function CreateAccountAdmin (){
    const [firstName, setFirstName] = useState<string>("");
    const [middleName, setMiddleName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [role, setRole] = useState<"Technician" | "User">("User");
    const [technicianTeam, setTechnicianTeam] = useState<"Hardware" | "Networking" | "Technical" | "Software">("Hardware");
    const [errors, setErrors] = useState<any>({});

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const result = createAccountSchema.safeParse({
          firstName,
          middleName,
          lastName,
          email,
          phoneNumber,
          address,
          password,
          role,
          technicianTeam: role === "Technician" ? technicianTeam : null,
        });
    
        if (!result.success) {
          const errorMessages: any = {};
          result.error.errors.forEach((err) => {
            errorMessages[err.path[0]] = err.message;
          });
          setErrors(errorMessages);
          return;
        }
    
        setErrors({});
    
        try {
          const data = {
            firstName,
            middleName,
            lastName,
            email,
            phoneNumber,
            address,
            password,
            role,
          };
    
          const response = await fetchAPI('/create-account', {
            method: 'POST',
            body: JSON.stringify(data),
          });
    
          if (response.success) {
            console.log("Account created successfully:", response);
          } else {
            console.error("Account creation failed:", response);
          }
    
        } catch (error) {
          console.error('Error during account creation:', error);
        }
      };

    return(<div className="w-1/4">
        <form onSubmit={handleCreate}>
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
            <label htmlFor="LastName" className="font-semibold">
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
            <label htmlFor="role" className="font-semibold">
              Select Role:
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value as "Technician" | "User")}
              className="border border-[#333] p-2 rounded-xl"
              required
            >
              <option value="Technician">Technician</option>
              <option value="User">User</option>
            </select>
            {errors.role && (
              <p className="text-red-600 text-sm">{errors.role}</p>
            )}
          </div>

          {role === "Technician" && (
          <div className="flex flex-col w-full mb-3">
            <label htmlFor="TechnicianTeam" className="font-semibold">
              Teachnician Team:
            </label>
            <select
              id="TechnicianTeam"
              value={technicianTeam}
              onChange={(e) => setTechnicianTeam(e.target.value as "Hardware" | "Networking" | "Technical" | "Software")}
              className="border border-[#333] p-2 rounded-xl"
            >
              <option value="Hardware">Hardware</option>
              <option value="Networking">Networking</option>
              <option value="Technical">Technical</option>
              <option value="Software">Software</option>
            </select>
          </div>
        )}

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
          <button
            type="submit"
            className="bg-green-700 text-white mt-2 py-3 rounded-full font-semibold w-full active:scale-95 hover:bg-green-900"
          >
            CREATE ACCOUNT
          </button>
        </form>
      </div>
    )
}