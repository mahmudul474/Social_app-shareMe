import React from "react";

const Leftsitenav = () => {
  return (
    <div className="sticky top-11 ">
      <ul className="p-9">
        <li>
          <h1 className="text-lg font-semibold mt-5 mb-3">
            {" "}
            <i className="fa-solid fa-user-group"></i> Friends
          </h1>
        </li>

        <li>
          <h1 className="text-lg font-semibold mt-5 mb-3">
            {" "}
            <i className="fa-solid fa-calendar-minus"></i> Most Resent{" "}
          </h1>
        </li>

        <li>
          <h1 className="text-lg font-semibold mt-5 mb-3">
            {" "}
            <i className="fa-solid fa-flag-checkered"></i> Pages{" "}
          </h1>
        </li>

        <li>
          <h1 className="text-lg font-semibold mt-5 mb-3">
            {" "}
            <i className="fa-solid fa-users-rectangle"></i> Groups
          </h1>
        </li>
      </ul>
    </div>
  );
};

export default Leftsitenav;
