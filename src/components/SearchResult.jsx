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
        <div className="grow md:ml-[224px] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 gap-2 p-3 md:p-5 md:ml-14 md:w-[87%]">
                    <hr className="my-2 border-white/[0.2]" />
                    {results?.map((item, index) => {
                        if (item?.type !== "video") return false;
                        let video = item.video;
                        return (
                            <SearchResultVideoCard
                                key={index}
                                video={video}
                            />
                        );
                    })}
                </div>
            </div>
    </div>
  )
}

export default SearchResult


{/* <div className="bg-black md:p-5 md:ml-[224px] flex justify-center">
            <div className="p-5 md:p-0 md:w-[90%] bg-black">
                  <hr className="my-2 border-white/[0.2]" />
                  {results?.map((item, index) => {
                    if (item?.type !== "video") return false;
                    return <SearchResultVideoCard key={index} video={item?.video} />
                  })}
            </div>
      </div> */}