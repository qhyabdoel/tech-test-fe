// app/login/page.tsx

"use client";

import Image from "next/image";
import logoImage from "@/assets/logo/logoipsum.svg";
import suburbBg from "@/assets/backgrounds/suburb-bg.webp";

const LoginInput: React.FC<{ label: string; type: string; name: string }> = ({
  label,
  type,
  name,
}) => {
  return (
    <div className="mb-4">
      <div className="text-md font-semibold mb-1 text-gray-700">{label}</div>
      <input
        type={type}
        name={name}
        className="w-full px-4 py-2 border border-gray-300 rounded-md outline-indigo-400"
        required
        placeholder={label}
      />
    </div>
  );
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Login form */}
      <div className="px-32 py-32 bg-white w-1/2">
        {/* App Logo */}
        <div className="w-full mb-16">
          <Image
            src={logoImage} // Path to your logo
            alt="App Logo"
            width={150}
            height={50}
            className="mx-auto"
          />
        </div>

        {/* Login Form */}
        <form className="w-full">
          <LoginInput name="username" type="text" label="Username" />

          <LoginInput name="password" type="password" label="Password" />

          <button
            type="submit"
            className="px-4 py-2 text-white text-xl font-bold bg-blue-800 rounded-md hover:bg-blue-700 focus:outline-none float-end w-32 my-4"
          >
            Login
          </button>
        </form>
      </div>

      {/* Right side - App Illustration/Background */}
      <div className="flex items-center justify-center w-1/2 bg-gray-200 relative">
        <Image
          src={suburbBg} // Path to your background image
          alt="App Illustration/Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>
    </div>
  );
}
