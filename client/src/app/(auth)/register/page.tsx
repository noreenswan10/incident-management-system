import dynamic from 'next/dynamic';

const RegistrationForm = dynamic(() => import('@/components/registrationform'))

export default function Register() {

  return (
    <div className="flex justify-center min-h-screen w-full items-center">
      <RegistrationForm/>
    </div>
  );
}