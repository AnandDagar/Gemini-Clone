import React from "react";
import "../assets/css/Home.css";

const Home = () => {
  return (
    <>
      <div className="home_section mx-auto  mt-10 w-[1120px]">
        <div className="top_section">
          <h1 class="title">Hello, there</h1>
          <p class="subtitle">How can I help you today?</p>
        </div>
        <ul class="suggestion-list">
          <li class="suggestion">
            <h4 class="text">
              Help me plan a game night with my 5 best friends for under $100.
            </h4>
            <span class="icon material-symbols-rounded">draw</span>
          </li>
          <li class="suggestion">
            <h4 class="text">
              What are the best tips to improve my public speaking skills?
            </h4>
            <span class="icon material-symbols-rounded">lightbulb</span>
          </li>
          <li class="suggestion">
            <h4 class="text">
              Can you help me find the latest news on web development?
            </h4>
            <span class="icon material-symbols-rounded">explore</span>
          </li>
          <li class="suggestion">
            <h4 class="text">
              Write JavaScript code to sum all elements in an array.
            </h4>
            <span class="icon material-symbols-rounded">code</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
