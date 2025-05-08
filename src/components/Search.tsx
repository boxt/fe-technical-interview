interface Props {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ searchTerm, setSearchTerm }: Props) => {
  const handleSearch = (value: string) => setSearchTerm(value);

  return (
    <div className="w-full flex flex-col">
      <input
        type="text"
        placeholder="Filter by title"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="px-4 py-2.5 border border-[#ccc] rounded-sm w-full"
      />
    </div>
  );
};

export default Search;
