import React from "react";
import PagesHeading from "@/components/layout/PagesHeading";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const page = () => {
  return (
    <div>
      <PagesHeading
        title="Contact"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, necessitatibus."
      />
      <div className="flex gap-5">
        <div className="bg-accent p-4 rounded-md text-white shadow-md">
          <h2 className="text-xl mb-1">Prof. Dr. Astrid Schwarz</h2>
          <p className="text-sm">FG Allgemeine Technikwissenschaft</p>
          <p className="text-sm">BTU Cottbus - Senftenberg</p>
          <p className="text-sm">D-03046 Cottbus</p>
          <div className="flex gap-3 items-center mt-4 ">
            <FaPhoneAlt />
            <p>+49 (0)355 69-3162</p>
          </div>
          <div className="flex gap-3 items-center">
            <MdEmail />
            <p>schwarza@b-tu.de</p>
          </div>
          <div className="flex gap-3 items-center">
            <TbWorld />
            <p>Website</p>
          </div>
        </div>
        <div className="bg-accent p-4 rounded-md text-white shadow-md">
          <h2 className="text-xl mb-1">Prof. Dr. Angela Krewani</h2>
          <p className="text-sm">Institut für Medienwissenschaft</p>
          <p className="text-sm">Philipps-Universität Marburg</p>
          <p className="text-sm">Wilhelm-Röpke-Str. 6a</p>
          <div className="flex gap-3 items-center mt-4">
            <FaPhoneAlt />
            <p>+49 (0)6421 28-24691</p>
          </div>
          <div className="flex gap-3 items-center">
            <MdEmail />
            <p>schwarza@b-tu.de</p>
          </div>
          <div className="flex gap-3 items-center">
            <TbWorld />
            <p>Website</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
