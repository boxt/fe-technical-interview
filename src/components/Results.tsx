/** ⚠️ Do not remove!*/
// @ts-nocheck

import Item from "./Item";

type Props = {
  items: any[];
  isLoading: boolean;
  hasError: boolean;
};

const Results = ({ items, isLoading, hasError }: Props) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Something went wrong</div>;
  }

  if (!items?.length) {
    return <div>No results</div>;
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 md:mt-8">
      {items?.map((item) => (
        <Item data={item} />
      ))}
    </div>
  );
};

export default Results;
