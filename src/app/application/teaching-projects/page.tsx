import PagesHeading from "@/components/layout/PagesHeading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <PagesHeading
        title="Teaching Projects"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, necessitatibus."
      />
      <div className="flex gap-5">
        <Link href="/application/research-projects">
          <div className="border bg-accent p-2 rounded-md">
            <Image
              alt="research dummy image"
              src="/images/research-dummy.webp"
              width={250}
              height={50}
              className="rounded-md"
            />
            <h5 className=" text-white pt-2">Lorem ipsum dolor sit amet.</h5>
          </div>
        </Link>
        <Link href="/application/teaching-projects">
          <div className="border bg-accent p-2 rounded-md">
            <Image
              alt="research dummy image"
              src="/images/research-dummy.webp"
              width={250}
              height={50}
              className="rounded-md"
            />
            <h5 className=" text-white pt-2">Lorem ipsum dolor sit amet.</h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
