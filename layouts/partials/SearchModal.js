"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const SearchModal = ({ searchModal, setSearchModal }) => {
  const router = useRouter();
  const [input, setInput] = useState("");

  useEffect(() => {
    if (searchModal) {
      document.getElementById("searchModal")?.focus();

      const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          router.push(`/search?key=${encodeURIComponent(input)}`);
          setSearchModal(false);
        }
        if (e.key === "Escape") {
          setSearchModal(false);
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [searchModal, input, router, setSearchModal]);

  return (
    <div className={`search-modal ${searchModal ? "open" : ""}`}>
      <button onClick={() => setSearchModal(false)} className="search-close">
        <IoCloseCircleOutline />
      </button>
      <input
        type="text"
        className="form-input"
        id="searchModal"
        placeholder="Type and hit enter..."
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default SearchModal;
