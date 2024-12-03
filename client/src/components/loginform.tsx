'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authcontext";
import { accountdata } from "@/data/accountdata";

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Both fields are required.');
      return;
    }

    login(email, password);

    const user = fetchUserByEmail(email);

    if (user) {
      if (user.password === password) {
        login(email,password)

      if (user.role === "User") {
        router.push("/user");
      } else if (user.role === "Admin") {
        router.push("/admin");
      } else if (user.role === "Technician"){
        router.push("/technician")
      } else {
        return <>Not valid role.</>
      }
    }
  } else {
      setErrorMessage("Invalid credentials.");
    }
  };

  const fetchUserByEmail = (email: string) => {

    return accountdata.find(user => user.email === email);
  };

  return (
    <div className="w-1/4">
      <form onSubmit={handleLogin} className="flex flex-col w-full">
        <div className="flex flex-col w-full mb-3">
          <label htmlFor="email" className="font-semibold">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#333] p-2 rounded-xl"
          />
        </div>

        <div className="flex flex-col w-full mb-3">
          <label htmlFor="Password" className="font-semibold">Password</label>
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
          className="bg-blue-700 text-white mt-2 py-3 rounded-full font-semibold w-full active:scale-95 hover:bg-blue-900"
        >
          LOG IN
        </button>
      </form>
      {errorMessage && <p className="text-red-600 text-sm mt-2">{errorMessage}</p>}

      <p className="text-center mt-2">
        Don't have an account yet? <a href="/register" className="font-semibold">Register</a>.
      </p>
    </div>
  );
}
