'use client'
import fetchAPI from "@/api/fetch";
import { registrationSchema } from "@/validations/registrationschema";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function RegistrationForm() {
    const [firstName, setfirstName] = useState<string>("");
    const [middleName, setmiddleName] = useState<string>("");
    const [lastName, setlastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [errors, setErrors] = useState<any>({});
    const router = useRouter();

    const handleRegister = async (e: FormEvent) => {
      e.preventDefault();
    
      const result = registrationSchema.safeParse({
        firstName,
        middleName,
        lastName,
        email,
        username,
        phoneNumber,
        address,
        password,
        confirmPassword,
      });
    
      if (!result.success) {
        const errorMessages: Record<string, string> = {};
        result.error.errors.forEach((err) => {
          errorMessages[err.path[0]] = err.message;
        });
        setErrors(errorMessages);
        return;
      }
    
      try {
        const response = await fetch('http://136.239.196.178:5004/api/v1/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            middleName,
            lastName,
            email,
            username,
            phoneNumber,
            address,
            password,
            confirmPassword,
          }),
          mode: 'cors', // Ensure the correct CORS policy is applied
          credentials: 'same-origin', // or 'include' for cross-origin cookies
        });
    
        const responseBody = await response.json(); // Parse the response body
    
        // Log the response for debugging
        console.log('Response Body:', responseBody);
    
        if (!response.ok) {
          setErrors({ server: responseBody.message || 'Registration failed. Please try again.' });
          throw new Error(responseBody.message || 'Registration failed. Please try again.');
        }
    
        router.push('/login');
        console.log('Registration successful', responseBody);
        setErrors({});
      } catch (error:any) {
        console.error('Error registering:', error);
        setErrors({ server: error.message || 'Registration failed. Please try again.' });
      }
    };
    
    
    

    return(
        <div className="w-1/4">
      <form onSubmit={handleRegister}>
        <div className="flex flex-col w-full mb-3">
          <label htmlFor="firstName" className="font-semibold">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            className="border border-[#333] p-2 rounded-xl"
          />
          {errors.firstName && (
            <p className="text-red-600 text-sm">{errors.firstName}</p>
          )}
        </div>
        <div className="flex flex-col w-full mb-3">
          <label htmlFor="middleName" className="font-semibold">
            Middle Name
          </label>
          <input
            type="text"
            name="middleName"
            id="middleName"
            value={middleName}
            onChange={(e) => setmiddleName(e.target.value)}
            className="border border-[#333] p-2 rounded-xl"
          />
          {errors.middleName && (
            <p className="text-red-600 text-sm">{errors.middleName}</p>
          )}
        </div>
        <div className="flex flex-col w-full mb-3">
          <label htmlFor="middleName" className="font-semibold">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            className="border border-[#333] p-2 rounded-xl"
          />
          {errors.lastName && (
            <p className="text-red-600 text-sm">{errors.lastName}</p>
          )}
        </div>
        <div className="flex flex-col w-full mb-3">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#333] p-2 rounded-xl"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col w-full mb-3">
          <label htmlFor="username" className="font-semibold">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-[#333] p-2 rounded-xl"
          />
          {errors.username && (
            <p className="text-red-600 text-sm">{errors.username}</p>
          )}
        </div>
        <div className="flex flex-col w-full mb-3">
          <label htmlFor="phoneNumber" className="font-semibold">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border border-[#333] p-2 rounded-xl"
          />
          {errors.phoneNumber && (
            <p className="text-red-600 text-sm">{errors.phoneNumber}</p>
          )}
        </div>
        <div className="flex flex-col w-full mb-3">
          <label htmlFor="address" className="font-semibold">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-[#333] p-2 rounded-xl"
          />
          {errors.address && (
            <p className="text-red-600 text-sm">{errors.address}</p>
          )}
        </div>
        <div className="flex flex-col w-full mb-3">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            name="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#333] p-2 rounded-xl"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password}</p>
          )}
        </div>
        <div className="flex flex-col w-full mb-3">
          <label htmlFor="confirmPassword" className="font-semibold">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-[#333] p-2 rounded-xl"
          />
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm">{errors.confirmPassword}</p>
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