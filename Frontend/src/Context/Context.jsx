// Context.jsx
import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]); // Renamed to camelCase
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState(null); // Initial state as null

  const onSent = async (prompt) => {
    setInput(prompt); // Set the input state before calling the run function
    setLoading(true); // Set loading state to true
    setResultData(null); // Reset resultData to null before fetching
    setShowResult(true); // Ensure that showResult is true
  
    try {
      const response = await run(prompt); // Pass the prompt to the run function
      console.log("API Response:", response); // Log the response to ensure it's correct
      setResultData(response); // Set the result data from the API response
      setRecentPrompt(prompt); // Update the recent prompt
      setPrevPrompts((prev) => [...prev, { prompt, response }]); // Add to prevPrompts
    } catch (error) {
      console.error("Error fetching result:", error);
      setResultData(null); // Optional: Handle errors differently
    } finally {
      setLoading(false); // Set loading to false after the API call completes
    }
  };
  

  const contextValue = {
    prevPrompts, // Renamed to camelCase
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput
  };

  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
