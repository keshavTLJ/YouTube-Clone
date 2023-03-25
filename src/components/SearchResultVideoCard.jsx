import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom'

import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

const SearchResultVideoCard = ({video}) => {

    const VideoLength = (time) => {
        let videoLengthInSeconds;
        if(time > 3600) {
            videoLengthInSeconds = moment()
            ?.startOf("day")
            ?.seconds(time)
            ?.format("H:mm:ss");
        }
        else {
            videoLengthInSeconds = moment()
            ?.startOf("day")
            ?.seconds(time)
            ?.format("mm:ss");
        }
        
        
        return (
            <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs font-semibold rounded-md">
                {videoLengthInSeconds}
            </span>
        );
    };

  return (
    <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col md:flex-row md:mb-3 lg:hover:bg-white/[0.1] rounded-xl md:p-4">
                {/* image */}
                <div className="relative flex shrink-0 h-48 md:h-32 lg:h-40 xl:h-52 w-full md:w-[35%] rounded-xl bg-slate-800 overflow-hidden">
                    <img
                        className="h-full w-full object-cover"
                        src={video?.thumbnails[0]?.url}
                    />
                    {video?.lengthSeconds && VideoLength(video?.lengthSeconds)}
                </div>

                {/* video details */}
                <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
                    {/* 1 */}
                    <span className="text-md md:text-lg line-clamp-2 text-white mb-1">
                        {video?.title}
                    </span>
                    {/* 2 */}
                    <div className="flex text-xs text-white/[0.7] truncate overflow-hidden mb-1">
                        <span className='inline md:hidden'>{video?.author?.title}</span>
                        <span className="flex md:hidden text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                            .
                        </span>
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
                    {/* 3 */}
                    <div className="hidden md:flex items-center">
                        <div className="flex items-center mr-3">
                            <div className="flex h-6 w-6 rounded-full overflow-hidden">
                                <img
                                    className="h-full w-full object-cover"
                                    src={video?.author?.avatar[0]?.url}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-white/[0.7] flex items-center">
                                {video?.author?.title}
                                {video?.author?.badges[0]?.type ===
                                    "VERIFIED_CHANNEL" && (
                                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
                                )}
                            </span>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="invisible md:visible text-sm line-clamp-1 md:line-clamp-1 text-white/[0.7] md:pr-24 md:my-4 text-[11px] lg:text-[10px] xl:text-[12px] overflow-hidden">
                        {video?.descriptionSnippet}
                    </div>
                </div>
            </div>
    </Link> 
  )
}

export default SearchResultVideoCard