// Home.jsx
import React, { useContext, useState, useEffect } from "react";
import "../assets/css/Home.css";
import sendicon from "../../public/send.png";
import user from "../../public/user.png";
import star from "../../public/gemini_star.svg";
import { Context } from "../Context/Context";

const Home = () => {
  // State to control the input field value
  const [inputText, setInputText] = useState("");

  // Handle input change and set state accordingly
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const {
    prevPrompts,
    setPrevPrompts,
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
  } = useContext(Context);

  // Function to handle the send button click
  const handleSendClick = () => {
    if (inputText.trim()) {
      onSent(inputText); // Pass inputText to onSent when the send icon is clicked
      setInputText(""); // Clear input field after sending (optional: can be delayed until response)
    }
  };

  useEffect(() => {
    if (resultData) {
      console.log("Formatted Result Data:", resultData); // Check the result data
    }
  }, [resultData]);

  console.log("Show result:", showResult);

  return (
    <div className="home_section mx-auto mt-10 w-[970px] flex flex-col justify-between p-10 xl:p-0">
      {!showResult ? (
        <>
          <div className="top_section">
            <h1 className="title text-[30px] md:text-5xl lg:text-6xl">
              Hello, there
            </h1>
            <p className="subtitle text-[20px] md:text-5xl lg:text-6xl">
              How can I help you today?
            </p>
            <ul className="suggestion-list mt-5 md:mt-[9.5vh]">
              <li className="suggestion w-[100%] md:w-[222px]">
                <h4 className="text">
                  Help me plan a game night with my 5 best friends for under
                  $100.
                </h4>
                <span className="icon material-symbols-rounded">draw</span>
              </li>
              <li className="suggestion w-[100%] md:w-[222px]">
                <h4 className="text">
                  What are the best tips to improve my public speaking skills?
                </h4>
                <span className="icon material-symbols-rounded">lightbulb</span>
              </li>
              <li className="suggestion w-[100%] md:w-[222px]">
                <h4 className="text">
                  Can you help me find the latest news on web development?
                </h4>
                <span className="icon material-symbols-rounded">explore</span>
              </li>
              <li className="suggestion w-[100%] md:w-[222px]">
                <h4 className="text">
                  Write JavaScript code to sum all elements in an array.
                </h4>
                <span className="icon material-symbols-rounded">code</span>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div className="result">
          <div className="result_title">
            <img src={user} alt="User avatar" />
            <p>{recentPrompt}</p> {/* Show the recent prompt */}
          </div>
          <div className="result_data">
            <img src={star} alt="Gemini Star" />
            {loading ? (
              <div className="loader">
                 <hr />
                 <hr />
                 <hr />
              </div>
            ) : (
              <p dangerouslySetInnerHTML={{ __html: resultData }} />
            )}
          </div>
        </div>
      )}
      <div className="bottom_section">
        <div className="typing-area w-[100%] md:w-[948px] mt-32 lg:mt-0 mx-auto">
          <form action="#" className="typing-form">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Enter a prompt here"
                className="typing-input"
                required
                value={inputText}
                onChange={handleInputChange} // Update state on input change
              />
              {/* Conditionally render the send icon based on inputText */}
              {inputText && (
                <button
                  type="button"
                  className="set_send duration-500 transition-opacity opacity-100"
                  onClick={handleSendClick} // Trigger the send function
                >
                  <img
                    className="transition-opacity opacity-100"
                    src={sendicon}
                    alt="Send icon"
                  />
                </button>
              )}
            </div>
            <div className="action-buttons">
              <span
                id="theme-toggle-button"
                className="icon material-symbols-rounded"
              >
                light_mode
              </span>
              <span
                id="delete-chat-button"
                className="icon material-symbols-rounded"
                // Add functionality to delete chat
              >
                delete
              </span>
            </div>
          </form>
          <p className="disclaimer-text">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
