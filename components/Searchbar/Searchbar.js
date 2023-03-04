import React, { useState, useEffect, useRef, useContext } from "react";
import Fuse from "fuse.js";

import styles from "./Searchbar.module.css";
import SearchIcon from "../UI/Icons/SearchIcon";
import CloseIcon from "../UI/Icons/CloseIcon";

import AppContext from "../../store/context/AppContext";
import { SUGGESTION_LIST } from "../../store/data/SuggestionList";

const Searchbar = () => {
  const {onClearSearch, onSearchFormSubmit, isLoaderVisible } = useContext(AppContext);
  const [searchInputVal, setSearchInputVal] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  const ref = useRef(null);

  // Search sorting and ranking (https://fusejs.io/)
  const fuseOptions = {
    isCaseSensitive: false,
    includeScore: false,
    shouldSort: true,
    minMatchCharLength: 3,
    threshold: 0.3,
  };
  const fuse = new Fuse(SUGGESTION_LIST, fuseOptions);

  /**
   * Handle search input on text typing
   * @param {Event} e event object
   */
  const searchInputChangeHandler = (e) => {
    const keyword = e.target.value;
    setSearchInputVal(keyword);
    handleSearch(keyword);
  };

  /**
   * Search suggestions list item click handler
   * @param {Event} e event object
   */
  const listItemClickHandler = (e) => {
    setSearchInputVal(e.target.textContent);
    setSuggestionList([]);
  };

  /**
   * Display matched suggestions from SuggestionList.js on user's input
   * @param {string} keyword 
   */
  const displaySuggestions = (keyword) => {
    const matchedItems = fuse.search(keyword).map((data) => data.item);
    setSuggestionList(matchedItems);
  };

  /**
   * Searches for keyword in SuggestionList.js
   * @param {string} keyword 
   * @returns 
   */
  const handleSearch = (keyword) => {
    const cleanKeyword = keyword.trim();
    if (keyword.trim().length >= 3) {
      displaySuggestions(cleanKeyword);
    } else {
      setSuggestionList([]);
      return;
    }
  };

  /**
   *Search Input Close button Click Handler 
   */
  const closeIconClickHandler = () => {
    setSuggestionList([]);
    setSearchInputVal("");
    onClearSearch()
  };

  /**
   * Close search suggestions dropdown on outside click
   * @param {Event} event event object
   */
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSuggestionList([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  /**
   * Triggers on form submit
   * @param {Event} event event object 
   */
  const formSubmitHandler = (event)=> {
    onSearchFormSubmit(event, searchInputVal)
  }

  return (
    <>
      <form onSubmit={formSubmitHandler} className={styles.form}>
        <div ref={ref} className={`${styles["input-wrap"]} ${suggestionList.length && styles["suggestion-active"]}`}>
          <input className={styles["search-input"]} type="text" name="search" placeholder="Enter Email Subject or Topic..." onChange={searchInputChangeHandler} value={searchInputVal}
          />
          {suggestionList.length ? (
            <ul className={styles.suggestion} id="suggestionWrapper" onClick={listItemClickHandler}>
              {suggestionList.map((item) => (
                <li className={styles.item} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          <span className={styles["search-icon"]}><SearchIcon /></span>
          {searchInputVal.length ? (
            <span onClick={closeIconClickHandler} className={styles["close-icon"]} ><CloseIcon /></span>
          ) : null}
        </div>
        <button type="submit" className={styles.searchbtn} disabled={searchInputVal.length < 3 || isLoaderVisible} >
          {isLoaderVisible ? ( <span className={styles["loading-spinner"]}></span> ) : ( <span>Generate email</span> )}
        </button>
      </form>
    </>
  );
};
export default Searchbar;
