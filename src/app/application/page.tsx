import PagesHeading from "@/components/layout/PagesHeading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <PagesHeading
        title="Application"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, necessitatibus."
      />

      <div className="flex gap-5">
        <Link href="/application/research-projects">
          <div className="border bg-accent p-2 rounded-md">
            <h3 className="text-lg text-white pb-2">Research Projects</h3>
            <Image
              alt="research dummy image"
              src="/images/research-dummy.webp"
              width={50}
              height={50}
              layout="responsive"
              className="rounded-md"
            />
          </div>
        </Link>
        <Link href="/application/teaching-projects">
          <div className="border bg-accent p-2 rounded-md">
            <h3 className="text-lg text-white pb-2">Teaching Projects</h3>
            <Image
              alt="research dummy image"
              src="/images/research-dummy.webp"
              width={50}
              height={50}
              layout="responsive"
              className="rounded-md"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
