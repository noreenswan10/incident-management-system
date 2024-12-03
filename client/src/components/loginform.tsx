'use client'
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authcontext";

export default function LoginForm() {
  const [usernameOrEmail, setUsernameOrEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();
  const [errors, setErrors] = useState<any>({});
  const { login, isAuthenticated }: any = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(()=> {
  //   if (isAuthenticated){
  //     return router.push('/user');
  //   }
  // }, [isAuthenticated, router]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!usernameOrEmail || !password) {
      setErrors({ server: 'Please fill in both username/email and password.' });
      return;
    }
  
    try {
      const response = await fetch('http://136.239.196.178:5004/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usernameOrEmail,
          password,
        }),
        mode: 'cors',
        credentials: 'same-origin',
      });
  
      const responseBody = await response.json();
      login(responseBody.accessToken, responseBody.rememberToken)
  
      console.log('Login Response:', responseBody);
      console.log('Login successful', responseBody);
      setErrors({});
  
      if (!response.ok) {
        setErrors({ server: responseBody.message || 'Login failed. Please check your credentials and try again.' });
        throw new Error(responseBody.message || 'Login failed. Please try again.');
      }
  
    } catch (error:any) {
      console.error('Error logging in:', error);
      setErrors({ server: error.message || 'An unexpected error occurred. Please try again.' });
    } finally{
      setLoading(false);
    }
  };

  return (
    <div className="w-1/4">
      <form onSubmit={handleLogin} className="flex flex-col w-full">
        <div className="flex flex-col w-full mb-3">
          <label htmlFor="usernameOrEmail" className="font-semibold">Username Or Email</label>
          <input
            type="text"
            name="usernameOrEmail"
            id="usernameOrEmail"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
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
          {loading ? 'LOGGING IN' : 'LOG IN'}
        </button>
      </form>
      {errorMessage && <p className="text-red-600 text-sm mt-2">{errorMessage}</p>}

      <p className="text-center mt-2">
        Don't have an account yet? <a href="/register" className="font-semibold">Register</a>.
      </p>
    </div>
  );
}
