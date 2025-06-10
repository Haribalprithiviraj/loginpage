import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";

function MyComponent() {
  return (
    <div>
      <button>
        Next <IoIosArrowDropright />
      </button>
      <button>
        Share <IoShareSocial />
      </button>
    </div>
  );
}

export default MyComponent;
