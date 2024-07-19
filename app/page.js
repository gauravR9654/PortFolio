// Import statements using ES6 module syntax
'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to "/dashboard" route when component mounts
    router.push("/dashboard");
  }, []); // Empty dependency array means this effect runs only once after mount

  return (
    <>
    </>
  );
};

export default Home; // Corrected export statement with parentheses
