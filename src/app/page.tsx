"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("auth-token"); // Replace 'auth-token' with your actual key

    if (token) {
      router.push("/dashboard"); // Redirect to dashboard if token exists
    } else {
      router.push("/login"); // Redirect to login if no token is found
    }
  }, [router]);

  // Optional loading message while redirecting
  return <p>Loading...</p>;
}
