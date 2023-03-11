import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom'

import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

const SearchResultVideoCard = ({video}) => {

    const VideoLength = (time) => {
        const videoLengthInSeconds = moment()
            ?.startOf("day")
            ?.seconds(time)
            ?.format("H:mm:ss");
        return (
            <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs font-semibold rounded-md">
                {videoLengthInSeconds}
            </span>
        );
    };

  return (
    <Link to={`/video/${video?.videoId}`}>
        <div className="flex mb-4">
                <div className="relative flex shrink-0 h-32 md:h-32 lg:h-40 xl:h-52 w-56 md:w-60 lg:w-64 xl:w-[22rem] rounded-xl bg-slate-800 overflow-hidden">
                    <img
                        className="h-full w-full object-cover"
                        src={video?.thumbnails[0]?.url}
                    />
                    {video?.lengthSeconds && VideoLength(video?.lengthSeconds)}
                </div>
                <div className="flex flex-col ml-3 overflow-hidden w-[23%] md:w-[550px] xl:w-full">
                    <span className="text-lg md:text-xl line-clamp-2 text-white overflow-hidden">
                        {video?.title}
                    </span>
                    <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] text-white/[0.7] truncate overflow-hidden">
                        <span>{`${abbreviateNumber(
                            video?.stats?.views,
                            2
                        )} views`}</span>
                        <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                            .
                        </span>
                        <span className="truncate">
                            {video?.publishedTimeText}
                        </span>
                    </div>
                    <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
                        <div className="flex items-start mr-1">
                            <div className="flex h-4 w-4 rounded-full overflow-hidden">
                                <img
                                    className="h-full w-full object-cover"
                                    src={video?.author?.avatar[0]?.url}
                                />
                            </div>
                        </div>
                        {video?.author?.title}
                        {video?.author?.badges[0]?.type ===
                            "VERIFIED_CHANNEL" && (
                            <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
                        )}
                    </span>
                    <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] text-white/[0.7] truncate overflow-hidden mt-4">
                            {video?.descriptionSnippet}
                    </div>
                </div>
            </div>
    </Link> 
  )
}

export default SearchResultVideoCard