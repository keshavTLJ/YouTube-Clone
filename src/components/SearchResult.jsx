import React, { useState, useEffect, useContext } from "react";
import LeftNav from "./LeftNav";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {

  const [results, setResults] = useState();

  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`)
    .then(({contents}) => {
      setResults(contents);
      console.log(contents);
    })
    .catch((error) => {
      console.log(error);
    });

    setLoading(false);
  }

  return (
    <div className='flex bg-black'>
        <LeftNav />
        <div className="bg-black md:p-5 md:ml-[224px] flex justify-center">
            <div className="w-[90%] bg-black">
            <hr className="mt-2 mb-8 border-white/[0.2]" />
                  {results?.map((item, index) => {
                    if (item?.type !== "video") return false;
                    return <SearchResultVideoCard key={index} video={item?.video} />
                  })}
            </div>
        </div>
    </div>
  )
}

export default SearchResult