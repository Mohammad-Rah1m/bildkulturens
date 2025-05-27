import React from "react";
type Props = {
  title: string;
  description: string;
};
const PagesHeading = ({ title, description }: Props) => {
  return (
    <div className="py-7">
      <h1 className="text-3xl">{title}</h1>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default PagesHeading;
