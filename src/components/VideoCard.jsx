import React from "react";
import moment from "moment";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

// import VideoLength from "../shared/videoLength";

const VideoCard = ({ video }) => {

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
            <div className="flex flex-col mb-8 mx-auto md:max-w-full">
                <div className="relative h-48 md:h-44 rounded-xl overflow-hidden">
                    <img
                        className="h-full w-full object-cover"
                        src={video?.thumbnails[0]?.url}
                    />
                    {video?.lengthSeconds && VideoLength(video?.lengthSeconds)}
                </div>
                <div className="flex text-white mt-3">
                    <div className="flex items-start">
                        <div className="flex h-9 w-9 rounded-full overflow-hidden">
                            <img
                                className="h-full w-full object-cover"
                                src={video?.author?.avatar[0]?.url}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col ml-3 overflow-hidden">
                        <span className="text-sm font-semibold line-clamp-2">
                            {video?.title}
                        </span>
                        <span className="text-[12px] mt-2 text-white/[0.7] flex items-center">
                            {video?.author?.title}
                            {video?.author?.badges[0]?.type ===
                                "VERIFIED_CHANNEL" && (
                                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                            )}
                        </span>
                        <div className="flex text-[12px] text-white/[0.7] truncate overflow-hidden">
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
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;