import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h2 className="text-5xl text-[#333] font-semibold">
        INCIDENT MANAGEMENT SYSTEM
      </h2>
      <p className="text-center w-1/2 mt-3">
        The Incident Management System (IMS) is a platform designed to
        streamline the process of logging, tracking, and resolving IT-related
        incidents within an organization. It ensures that issues are documented,
        prioritized, and addressed efficiently, reducing downtime and improving
        service reliability.
      </p>
      <div className="flex gap-5 mt-5 w-1/6">
        <Link href="/login" legacyBehavior>
          <button className="bg-blue-700 text-white py-3 rounded-full font-semibold w-full active:scale-95 hover:bg-blue-900">
            LOG IN
          </button>
        </Link>
        <Link href="/register" legacyBehavior>
          <button className="bg-green-700 text-white py-3 rounded-full font-semibold w-full active:scale-95 hover:bg-green-900">
            REGISTER
          </button>
        </Link>
      </div>
    </div>
  );
}
