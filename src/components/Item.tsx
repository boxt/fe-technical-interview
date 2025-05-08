/** ⚠️ Do not remove!*/
// @ts-nocheck

import { useMemo } from "react";

type Props = {
  data: {
    id: string;
    title: string;
    description: string;
    isApproved: boolean;
  };
};

const Item = ({ data }: Props) => {
  const { title, description, isApproved } = data;

  const formattedDescription = useMemo(() => {
    return description.length > 100
      ? `${description.slice(0, 100)}...`
      : description;
  });

  return (
    <div className="p-4 border border-[#ccc] rounded-sm w-full">
      <div className="flex flex-col justify-between items-start h-full">
        <div>
          <h3 className="text-md font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed">{formattedDescription}</p>
        </div>
        <div className={`mt-4 tag ${isApproved ? "approved" : "declined"}`}>
          {isApproved ? "Approved" : "Declined"}
        </div>
      </div>
    </div>
  );
};

export default Item;
