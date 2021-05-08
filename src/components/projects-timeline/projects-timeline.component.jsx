import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_SEARCH_BOX_FOCUS from "../../assets/img/projects/search-box-focus.png";
import L_LANGUAGE_ENCODING from "../../assets/img/projects/detect-file-encoding-and-language.png";
import L_MOVIE_SUBTITLES from "../../assets/img/projects/load-subtitles.png";

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Search Box Focus */}
          <ImageEvent
            date="25/01/2021"
            className="text-center"
            text="Search Box Focus"
            src={L_SEARCH_BOX_FOCUS}
            alt="Search Box Focus"
          >
            <UrlButton
              href="https://github.com/gignupg/Search-Box-Focus#search-box-focus"
              target="_blank"
            >
              GitHub
            </UrlButton>
            <UrlButton
              href="https://chrome.google.com/webstore/detail/search-box-focus/amgmdnojamodmpfjaokfgpijhpcednjm"
              target="_blank"
            >
              Web Store
            </UrlButton>
          </ImageEvent>

          {/* Project: Language Encoding */}
          <ImageEvent
            date="13/03/2021"
            className="text-center"
            text="Detect File Encoding and Language"
            src={L_LANGUAGE_ENCODING}
            alt="Detect File Encoding and Language"
          >
            <UrlButton
              href="https://github.com/gignupg/Detect-File-Encoding-and-Language#detect-file-encoding-and-language"
              target="_blank"
            >
              GitHub
            </UrlButton>
            <UrlButton
              href="https://www.npmjs.com/package/detect-file-encoding-and-language"
              target="_blank"
            >
              NPM
            </UrlButton>
          </ImageEvent>

          {/* Project: Movie Subtitles */}
          <ImageEvent
            date="07/05/2021"
            className="text-center"
            text="Movie Subtitles"
            src={L_MOVIE_SUBTITLES}
            alt="Movie Subtitles"
          >
            <UrlButton
              href="https://github.com/gignupg/Movie-Subtitles#movie-subtitles"
              target="_blank"
            >
              GitHub
            </UrlButton>
            <UrlButton
              href="https://chrome.google.com/webstore/detail/movie-subtitles/ifimcneililngppkpddcliecbpcgdjag/related?hl=en&authuser=1"
              target="_blank"
            >
              Web Store
            </UrlButton>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
