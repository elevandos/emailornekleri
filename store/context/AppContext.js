import React, { useState, useEffect } from "react";
import { fetchResult } from "../api/fetchResult";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppContext = React.createContext({});

export const AppContextProvider = (props) => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [resultText, setResultText] = useState("");
  const [resultTextCopy, setResultTextCopy] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const toastConfig = {theme: (isDarkMode ? "dark" : "light")}

  useEffect(() => {
    const darkModeActive = JSON.parse(localStorage.getItem('darkModeActive'))
    if(darkModeActive) {
      setIsDarkMode(darkModeActive)
      document.body.classList.toggle("dark-mode")
    }
  }, [])
  
  useEffect(() => {
    if (resultText) {
      let i = 0;
      const interval = setInterval(() => {
        setResultTextCopy(resultText.slice(0, i));
        i++;
        if (i > resultText.length) {
          clearInterval(interval);
        }
      }, 20);
      return () => clearInterval(interval);
    }
  }, [resultText]);

  /**
   * Set selected language of response
   * @param {event} event 
   */
  const languageChangeHandler = (event) => {
     setSelectedLanguage(event.target.value)
  }
  
  /**
   * Toggles Dark/Light Theme Mode
   */
  const themeModeChangeHandler = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode")
    localStorage.setItem("darkModeActive", !isDarkMode)
  };

  /**
   * Triggers when a search form is submitted
   */
  const searchFormSubmitHandler = async (event, inputVal) => {
    const query = `Generate an email for: ${inputVal} | language code: ${selectedLanguage}`
    const serverErrMsg = "OpenAI Sunucusu, yoğun trafik veya bakım nedeniyle geçici olarak kullanılamıyor. Daha sonra tekrar deneyin!";
    event.preventDefault();
    if (!inputVal.trim().length) return;
    setIsLoaderVisible(true);
    const response = await fetchResult(query)
    if (response.result) {
      const cleanedText = response.result.replace(/^\n+/, '');
      setResultText(cleanedText);
      setIsLoaderVisible(false);
    } else if (response.error) {
      console.log(response.error.message)
      toast.error(serverErrMsg, toastConfig);
      setIsLoaderVisible(false);
    } else {
      toast.error(serverErrMsg, toastConfig);
      setIsLoaderVisible(false);
    }
  }

  /**
   * Copy to clipboard
   */
  const copyBtnClickHandler = () => {
    navigator.clipboard.writeText(resultText);
    toast.success("Copied to Clipboard!", toastConfig);
  };

  /**
   * Clears the search input
   */
  const clearSearchInputHandler = () => {
    setResultText("")
    setResultTextCopy("")
  }


  return (
    <AppContext.Provider
      value={{
        onThemeModeChange: themeModeChangeHandler,
        onCopy: copyBtnClickHandler,
        onClearSearch : clearSearchInputHandler,
        onSearchFormSubmit: searchFormSubmitHandler,
        onLanguageChange: languageChangeHandler,
        isLoaderVisible: isLoaderVisible,
        resultText: resultText,
        resultTextCopy: resultTextCopy,
        isDarkMode: isDarkMode,
        selectedLanguage: selectedLanguage
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
