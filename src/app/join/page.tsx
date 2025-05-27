import React from "react";
import PagesHeading from "@/components/layout/PagesHeading";
// import Image from "next/image";
// import Link from "next/link";

const page = () => {
  return (
    <div>
      <PagesHeading
        title="Join Our Team"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, necessitatibus."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="bg-accent p-2 rounded-md ">
          <div className="bg-[url('/images/Biologisches.jpg')] bg-cover bg-center h-32 w-full rounded-md"></div>
          <div className="flex items-center justify-between pt-2">
            <p className="text-sm text-white">Biologisches Labor</p>
            <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center text-sm text-accent">
              <p>1</p>
            </div>
          </div>
        </div>
        <div className="bg-accent p-2 rounded-md">
          <div className="bg-[url('/images/Beobachtung.jpg')] bg-cover bg-center h-32 w-full rounded-md"></div>
          <div className="flex items-center justify-between pt-2">
            <p className="text-sm text-white">Beobachtung von Plankton</p>
            <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center text-sm text-accent">
              <p>2</p>
            </div>
          </div>
        </div>
        <div className="bg-accent p-2 rounded-md">
          <div className="bg-[url('/images/Exkursion.jpg')] bg-cover bg-center h-32 w-full rounded-md"></div>
          <div className="flex items-center justify-between pt-2">
            <p className="text-sm text-white">Exkursion</p>
            <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center text-sm text-accent">
              <p>3</p>
            </div>
          </div>
        </div>
        <div className="bg-accent p-2 rounded-md">
          <div className="bg-[url('/images/Hutchinson.jpg')] bg-cover bg-center h-32 w-full rounded-md"></div>
          <div className="flex items-center justify-between pt-2">
            <p className="text-sm text-white">Hutchinson</p>
            <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center text-sm text-accent">
              <p>4</p>
            </div>
          </div>
        </div>
        <div className="bg-accent p-2 rounded-md">
          <div className="bg-[url('/images/ETH_Chemie.jpg')] bg-cover bg-center h-32 w-full rounded-md"></div>
          <div className="flex items-center justify-between pt-2">
            <p className="text-sm text-white">Biologisches Labor</p>
            <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center text-sm text-accent">
              <p>5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
