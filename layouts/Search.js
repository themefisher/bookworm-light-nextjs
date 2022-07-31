import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Search = ({ modal, setModal }) => {
  const router = useRouter();
  const [input, setInput] = useState("");

  useEffect(() => {
    if (modal) {
      document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          router.push({ pathname: "/search", query: { key: input } });
          setModal(false);
        }
      });
    }
  });
  return (
    <div
      className={` ${
        modal ? "block" : "hidden"
      } fixed top-0  z-50 h-full w-full bg-white`}
    >
      <button
        onClick={() => setModal(false)}
        className="absolute top-5 right-0"
      >
        <IoCloseSharp />
      </button>
      <input
        type="text"
        className="m-20"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Search;
