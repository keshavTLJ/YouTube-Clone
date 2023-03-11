import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Main from "./components/Main"
import Header from "./components/Header"
import SearchResult from "./components/SearchResult"
import VideoDetails from "./components/VideoDetails"
import { AppContext } from "./context/contextApi"

function App() {

  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col bg-black">
          <Header />
          <Routes>
            <Route path='/' exact element={<Main />} />
            <Route path='/searchResults/:searchQuery' element={<SearchResult />} />
            <Route path='/video/:id' element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App
