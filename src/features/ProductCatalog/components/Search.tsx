import { useState } from 'react';

type Props = {
  onSearch: (term: string) => void;
};
const Search = ({ onSearch }: Props) => {
  const [term, setTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={term}
          placeholder="Search ..."
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-600"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-3 flex items-center text-primary-600"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
