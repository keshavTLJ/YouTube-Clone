import React from 'react'
// import { AiOutlineLike } from "react-icons/ai";
// import { BiDislike } from "react-icons/bi";

const CommentCard = ({ comment }) => {
  return (
            <div className="flex text-white mt-2 mb-8">
                    <div className="flex items-start">
                        <div className="flex h-10 w-10 rounded-full overflow-hidden">
                            <img
                                className="h-full w-full object-cover"
                                src={comment?.author?.avatar[0]?.url}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 ml-3 overflow-hidden">
                        <div className='flex gap-1 items-center'>
                            <span className='text-[13px] font-semibold'>{comment?.author?.title}</span>
                            <span className='text-white/[0.7] text-[12px]'>{comment.publishedTimeText}</span>
                        </div>
                        <div className="text-sm">
                            {comment?.content}
                        </div>
                    </div>
            </div>
  )
}

export default CommentCard