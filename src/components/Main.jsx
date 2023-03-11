import React from 'react'
import Feed from './Feed'
import LeftNav from './LeftNav'

const Main = () => {
  return (
    <div className='flex flex-row bg-black'>
        <LeftNav />
        <Feed />
    </div>
  )
}

export default Main