
 

// React
import { useEffect, useState } from "react";
// Next
import Link from "next/link";
// import Image from "next/image";

export const HomeView = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1337);
  }, []);

  return (
    <div>
    </div>
  );
};