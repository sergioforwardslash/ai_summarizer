import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-[175px] object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://sergioo.xyz")}
          className="black_btn"
        >
          Developer
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="purple_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Link Digest, an open-source article summarizer
        that transforms lengthty articles into clear and concise summaries (Try it with links other than articles)
      </h2>
    </header>
  );
};

export default Hero;
