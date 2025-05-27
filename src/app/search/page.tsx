import PagesHeading from "@/components/layout/PagesHeading";
import React from "react";
const page = () => {
  return (
    <div>
      <PagesHeading
        title="Overview"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, necessitatibus."
      />
      <div>
        <ul className="list-disc pl-5">
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
            nam similique? Culpa enim eligendi quasi.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
            nam similique? Culpa enim eligendi quasi.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
            nam similique? Culpa enim eligendi quasi.
            <ul className="list-disc pl-5 mt-2">
              <li>Subpoint one</li>
              <li>Subpoint two</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
