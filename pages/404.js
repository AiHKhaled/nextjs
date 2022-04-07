import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Notfound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <p>page does not exist </p>
      <p>
        go back to <Link href={"/"}>Home</Link>{" "}
      </p>
    </div>
  );
};

export default Notfound;
