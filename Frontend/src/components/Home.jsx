import React from "react";
import "../assets/css/Home.css";

const Home = () => {
  return (
    <>
      <div className="home_section mx-auto  mt-10 w-[970px] flex flex-col justify-between p-10 xl:p-0">
        <div className="top_section">
          <h1 class="title text-[30px] md:text-5xl lg:text-6xl">Hello, there</h1>
          <p class="subtitle text-[20px] md:text-5xl lg:text-6xl">How can I help you today?</p>
          <ul class="suggestion-list mt-5 md:mt-[9.5vh]">
            <li class="suggestion w-[100%] md:w-[222px]">
              <h4 class="text">
                Help me plan a game night with my 5 best friends for under $100.
              </h4>
              <span class="icon material-symbols-rounded">draw</span>
            </li>
            <li class="suggestion w-[100%] md:w-[222px]">
              <h4 class="text">
                What are the best tips to improve my public speaking skills?
              </h4>
              <span class="icon material-symbols-rounded">lightbulb</span>
            </li>
            <li class="suggestion w-[100%] md:w-[222px]">
              <h4 class="text">
                Can you help me find the latest news on web development?
              </h4>
              <span class="icon material-symbols-rounded">explore</span>
            </li>
            <li class="suggestion w-[100%] md:w-[222px]">
              <h4 class="text">
                Write JavaScript code to sum all elements in an array.
              </h4>
              <span class="icon material-symbols-rounded">code</span>
            </li>
          </ul>
          
        </div>
        <div className="bottom_section">
            <div class="typing-area w-[100%] md-w-[948px] mt-32 lg:mt-0 mx-auto">
              <form action="#" class="typing-form">
                <div class="input-wrapper">
                  <input
                    type="text"
                    placeholder="Enter a prompt here"
                    class="typing-input"
                    required=""
                  />
                  <button
                    id="send-message-button"
                    class="icon material-symbols-rounded"
                  >
                    send
                  </button>
                </div>
                <div class="action-buttons">
                  <span
                    id="theme-toggle-button"
                    class="icon material-symbols-rounded"
                  >
                    light_mode
                  </span>
                  <span
                    id="delete-chat-button"
                    class="icon material-symbols-rounded"
                  >
                    delete
                  </span>
                </div>
              </form>
              <p class="disclaimer-text">
                Gemini may display inaccurate info, including about people, so
                double-check its responses.
              </p>
            </div>
          </div>
      </div>
    </>
  );
};

export default Home;
