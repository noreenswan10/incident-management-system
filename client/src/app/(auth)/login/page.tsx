import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('@/components/loginform'))

export default function Login() {
  return (
    <div className="flex justify-center min-h-screen w-full items-center">
      <LoginForm/>
    </div>
  );
}