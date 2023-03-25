import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import VideoCard from "./VideoCard";

const Feed = () => {
    const { loading, searchResults, setSearchQuery } = useContext(Context);

   useEffect(() => {
        setSearchQuery('');
   }, [])

    return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 p-4 md:p-5 w-[calc(100%-224px) md:ml-[224px] bg-black mx-auto">
                {!loading && searchResults?.map((item, index) => {
                          if (item.type !== "video") return false;
                          return ( <VideoCard key={index} video={item?.video} />);
                })}
            </div>
    );
};

export default Feed;