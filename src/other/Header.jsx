import React, { useContext } from "react";
import { PersonContext } from "../components/context/PersonContext";

function Header() {
  const { person, setPerson } = useContext(PersonContext);

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("person"); // Clear only the person information
    setPerson(null); // Clear the person context on logout
  };

  return (
    <div className="w-full h-20 flex justify-between items-center px-10 py-14 text-white bg-gray-900 shadow-lg">
      <h1 className="text-2xl">
        Hello <br /> <strong className="text-4xl text-blue-400">{person?.name || "Guest"} 👋</strong>
      </h1>
      <button
        onClick={handleLogOut}
        className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
      >
        Log out
      </button>
    </div>
  );
}

export default Header;
