import React, { useState,useEffect,createContext } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState();
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
            setSearchResults(contents);
            setLoading(false);
        })
    }

    return (
        <Context.Provider value={{
            loading,setLoading,searchResults,setSearchResults,selectedCategory, setSelectedCategory,mobileMenu, setMobileMenu, searchQuery, setSearchQuery}}>
            {children}
        </Context.Provider>
    )
}