import Link from "next/link";

export default function NoAccess(){
    return(
        <div className="w-full flex flex-col min-h-screen items-center justify-center">
            <h1 className="text-4xl font-semibold text-[#333]">You are not allowed to access this page.</h1>
            <Link href='/login' legacyBehavior>
            <button className="bg-[#333] py-3 px-7 font-semibold text-xl text-white mt-5 rounded-full active:scale-95">GO BACK TO LOGIN</button>
            </Link>
        </div>
    )
}