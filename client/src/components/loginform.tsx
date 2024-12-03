'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/validations/loginschema";
import fetchAPI from "@/api/fetch";

export default function LoginForm(){
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<{ username?: string; password?: string }>({}); 
    const router = useRouter();
    
//     const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const result = loginSchema.safeParse({ username, password });

//     if (!result.success) {
//       const errorMessages: any = {};
//       result.error.errors.forEach((err) => {
//         errorMessages[err.path[0]] = err.message;
//       });
//       setError(errorMessages);
//     } else {
//       console.log("Login successful:", result.data);
      
//       router.push("/dashboard");
//     }
//   };
const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = loginSchema.safeParse({ username, password });

    if (!result.success) {
      const errorMessages: { username?: string; password?: string } = {};
      result.error.errors.forEach((err) => {
        errorMessages[err.path[0] as keyof typeof errorMessages] = err.message;
      });
      setError(errorMessages);
    } else {
      try {
        const response = await fetchAPI("/login", {
          method: "POST",
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          const userData = await response.json();

          switch (userData.role) {
            case "Technician":
              router.push("/technician");
              break;
            case "User":
              router.push("/user");
              break;
            case "Admin":
              router.push("/admin");
              break;
            default:
              setError({ username: "Unknown role, please contact support." });
              break;
          }
        } else {
          setError({ username: "Invalid username or password" });
        }
      } catch (error) {
        setError({ username: "An error occurred. Please try again later." });
      }
    }
  };

    return(
        
      <div className="w-1/4">
      <form onSubmit={handleLogin} className="flex flex-col w-full">
        <div className="flex flex-col w-full mb-3">
          <label htmlFor="Username" className="font-semibold">Username</label>
          <input
            type="text"
            name="Username"
            id="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-[#333] p-2 rounded-xl"
          />
          {error.username && <p className="text-red-600 text-sm">{error.username}</p>}
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
          {error.password && <p className="text-red-600 text-sm">{error.password}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white mt-2 py-3 rounded-full font-semibold w-full active:scale-95 hover:bg-blue-900"
        >
          LOG IN
        </button>
      </form>

      <p className="text-center mt-2">
        Don't have an account yet? <a href="/register" className="font-semibold">Register</a>.
      </p>
    </div>
    )
}