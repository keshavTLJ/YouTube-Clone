import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionVideoCard";
import CommentCard from "./CommentCard";

const VideoDetails = () => {

    const [video, setVideo] = useState();
    const [relatedVideos, setRelatedVideos] = useState();
    const [comments, setComments] = useState();
    const [totalComments, setTotalComments] = useState();

    const {loading, setLoading } = useContext(Context);
    const { id } = useParams();


    useEffect(() => {
      window.scrollTo(0, 0);
      fetchVideoDetails();
      fetchRelatedVideos();
      fetchComments();
    }, [id]);

    const fetchVideoDetails = () => {
      setLoading(true);

      fetchDataFromApi(`video/details/?id=${id}`)
      .then(data => {
        setVideo(data);
      })
      .catch((error) => {
        console.log(error);
      });

      setLoading(false);
    }

    const fetchRelatedVideos = () => {
      setLoading(true);

      fetchDataFromApi(`video/related-contents/?id=${id}`)
      .then(({contents}) => {
        setRelatedVideos(contents);
      })
      .catch((error) => {
        console.log(error);
      });

      setLoading(false);
    }

    const fetchComments = () => {
      fetchDataFromApi(`video/comments/?id=${id}`)
      .then(({comments, totalCommentsCount}) => {
        setTotalComments(totalCommentsCount);
        setComments(comments);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 bg-black">

            {/* video section */}
          <div className="md:col-span-2 flex flex-col p-5 pl-4 xl:pl-20 bg-black">
                {/* video player */}
                <div className="h-60 md:h-[70vh]">
                    <ReactPlayer 
                    url={`https://www.youtube.com/watch?v=${id}`} controls width="100%" height="100%" 
                    playing={true} 
                    style={{ backgroundColor: "#000000" }} 
                    preload="true"
                    fluid="true" />
                </div>

                {/* video Details(details + description + comments) */}
                <div className="bg-black">
                    {/* Details */}
                    <p className="text-[25px] text-white font-AwanZaman mt-3">{video?.title}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            {video?.author?.avatar[0]?.url && <div className="flex h-11 w-11 rounded-full overflow-hidden">
                                <img className="h-full w-full object-cover" src={video?.author?.avatar[0]?.url} />
                            </div>}
                            <div className="flex flex-col ml-3">
                                <div className="text-white text-md font-semibold flex items-center">
                                    {video?.author?.title}
                                    {video?.author?.badges[0]?.type ===
                                        "VERIFIED_CHANNEL" && (
                                        <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                                    )}
                                </div>
                                <div className="text-white/[0.7] text-xs">
                                    {video?.author?.stats?.subscribersText}
                                </div>
                            </div>
                        </div>
                        <div className="flex text-white mt-4 md:mt-0">
                              <div className="flex items-center justify-center h-10 px-4 rounded-3xl bg-white/[0.15]">
                                  
                                  {video?.stats?.likes && <span className="flex"><AiOutlineLike className="text-xl text-white mr-2" />
                                  {`${abbreviateNumber(video.stats.likes, 2)} Likes`}</span>}

                              </div>
                              <div className="flex items-center justify-center h-10 px-4 rounded-3xl bg-white/[0.15] ml-2">
                                  
                                {video?.stats?.views && <span>{`${abbreviateNumber(video.stats.views, 2)} Views`}</span>}
                                  
                              </div>
                        </div>
                    </div>
                    {/* video description */}
                    <div className="flex flex-col text-white bg-white/[0.15] mt-3 pt-2 px-3 line-clamp-4 rounded-xl text-sm font-semibold hover:bg-white/[0.25]">
                      {video?.description}
                    </div>
                    {/* relatedVideos on bottom for small screen */}
                    <div className="md:hidden mt-10">
                        <ul className="w-4/5">
                          {relatedVideos?.map((item, index) => {
                              if (item?.type !== "video") return false;
                              return <SuggestionVideoCard key={index} video={item?.video} />
                          })}
                        </ul>
                    </div>
                    {/* comments   */}
                    <div className="">
                        <div className="text-white mt-5 font-semibold pl-4">
                          {totalComments} Comments
                        </div>
                        <ul className="px-4 py-3">
                            {comments?.map((item) => {
                                return <CommentCard key={item.commentId} comment={item} />
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            {/* relatedVideos on side for large screens */}
            <div className="hidden md:block md:mt-[19px]">
                <ul className="w-4/5">
                  {relatedVideos?.map((item, index) => {
                      if (item?.type !== "video") return false;
                      return <SuggestionVideoCard key={index} video={item?.video} />
                  })}
                </ul>
            </div>
        </div>
    );
};

export default VideoDetails;