import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { API_URL, getAPi } from "./helpers/api";
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = React.useState(null);

  const handleSearch = (e) => {
    setSearch(e);
    onSearchChange(e);
  };

  const loadOptions = (inputvalue) => {
    return fetch(
      `${API_URL}/cities?minPopulation=1000000&namePrefix=${inputvalue}`,
      getAPi
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.country}`,
          })),
          hasMore: response.hasMore,
          additional: {
            page: response.page,
          },
        };
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <div className="flex items-center gap-4 flex-col">
        <h1 className="text-2xl mt-3">Cuaca Hari ini?</h1>
        <form action="" className="flex flex-row gap-3">
          <AsyncPaginate
            onChange={handleSearch}
            className="rounded-xl outline-none p-2 text-black font-nunito"
            type="text"
            debounceTimeout={600}
            value={search}
            loadOptions={loadOptions}
            placeholder="search city..."
          />

          <button>Search</button>
        </form>
      </div>
    </>
  );
};

export default Search;
