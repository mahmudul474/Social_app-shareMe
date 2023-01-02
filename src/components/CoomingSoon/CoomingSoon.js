import React from "react";
import { Link } from "react-router-dom";

const CoomingSoon = () => {
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <img
            className="max-w-lg h-auto rounded-lg"
            src="https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg?w=2000"
            alt="image description"
          />
          <Link
            rel="noopener noreferrer"
            to="/home"
            className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            <button className="btn"> Back to homepage </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoomingSoon;
