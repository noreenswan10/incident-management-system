'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import fetchAPI from "@/api/fetch";

export default function Login() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState('');
    const router = useRouter();
    
    return(
        <div className="flex justify-center min-h-screen w-full items-center">
          <div className="w-1/4">
            <div className="flex flex-col w-full mb-3">
              <label htmlFor="Username" className="font-semibold">
                Username
              </label>
              <input
                type="text"
                name="Username"
                id="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border border-[#333] p-2 rounded-xl"
              />
            </div>
            <div className="flex flex-col w-full mb-3">
              <label htmlFor="password" className="font-semibold">
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
            <button className="bg-blue-700 text-white mt-2 py-3 rounded-full font-semibold w-full active:scale-95 hover:bg-blue-900">LOG IN</button>
          <p className="text-center mt-2">Don't have an account yet? <a href="/register" className="font-semibold">Register</a>.</p>
          </div>
        </div>
    );
}