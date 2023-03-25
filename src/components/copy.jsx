<Link to={`/video/${video?.videoId}`}>
        <div className="md:flex mb-4">
                <div className="relative flex shrink-0 max-h-64 md:h-32 lg:h-40 xl:h-52 w-full md:w-60 lg:w-64 xl:w-[22rem] md:rounded-xl bg-slate-800 overflow-hidden">
                    <img
                        className="h-full w-full object-cover"
                        src={video?.thumbnails[0]?.url}
                    />
                    {video?.lengthSeconds && VideoLength(video?.lengthSeconds)}
                </div>
                <div className='flex mt-2 md:mt-0'>
                    <div className="flex md:hidden items-start ml-2 mt-2 md:mr-1 md:ml-0 md:mt-0">
                        <div className="flex h-8 w-8 rounded-full overflow-hidden">
                            <img
                                    className="h-full w-full object-cover"
                                    src={video?.author?.avatar[0]?.url}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col ml-3 overflow-hidden md:w-[23%] xl:w-full">
                        <span className="text-md md:text-xl md:line-clamp-2 text-white overflow-hidden">
                            {video?.title}
                        </span>
                        <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] text-white/[0.7] truncate overflow-hidden">
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
                        <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
                            <div className="hidden md:flex items-start mr-1">
                                <div className="flex h-8 w-8 md:h-4 md:w-4 rounded-full overflow-hidden">
                                    <img
                                        className="h-full w-full object-cover"
                                        src={video?.author?.avatar[0]?.url}
                                    />
                                </div>
                            </div>
                            <span className='hidden md:inline'>{video?.author?.title}</span>
                            {video?.author?.badges[0]?.type ===
                                "VERIFIED_CHANNEL" && (
                                <span className='hidden md:inline'>
                                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
                                </span>
                            )}
                        </span>
                        <div className="empty:hidden hidden md:flex text-[12px] lg:text-[10px] xl:text-[12px] text-white/[0.7] truncate overflow-hidden mt-4">
                                {video?.descriptionSnippet}
                        </div>
                    </div>
                </div>
            </div>
    </Link> 
