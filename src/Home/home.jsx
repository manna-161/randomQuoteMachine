// import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./home.css";
import { useState } from "react";

export function Home() {
  const quotesArray = [
    {
      title: "Whether you think you can or you think you can’t, you’re right.",
      author: "Henry Ford",
      color: "rgb(119, 177, 169)",
    },
    {
      title:
        "You may be disappointed if you fail, but you are doomed if you don’t try.",
      author: "Beverly Sills",
      color: "rgb(189, 187, 153)",
    },
    {
      title: "You become what you believe.",
      author: "Oprah Winfrey",
      color: "rgb(52, 34, 36)",
    },
    {
      title: "A person who never made a mistake never tried anything new.",
      author: "Albert Einstein",
      color: "rgb(189, 187, 153)",
    },
  ];
  const getRandomElem = () => {
    return Math.floor(Math.random() * quotesArray.length);
  };
  let [currentQuote, setCurrentQuote] = useState(quotesArray[getRandomElem()]);

  const changeQuote = () => {
    const newQuote = quotesArray[getRandomElem()];
    if (newQuote.title === currentQuote.title) {
      changeQuote();
    } else {
      currentQuote = newQuote;
      setCurrentQuote(newQuote);
    }
  };

  return (
    <div className="wrapper" style={{ backgroundColor: currentQuote.color }}>
      <div id="quote-box" className="card">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className="quote"
          style={{ color: currentQuote.color }}
        />
        <span id="text" className="text" style={{ color: currentQuote.color }}>
          {currentQuote.title}
        </span>
        <div
          id="author"
          className="author"
          style={{ color: currentQuote.color }}
        >
          - {currentQuote.author}
        </div>
        <div className="btns">
          <div className="btns-1">
            <a id="tweet-quote" href="https://twitter.com/intent/tweet">
              <button style={{ backgroundColor: currentQuote.color }}>
                <FontAwesomeIcon icon={faTwitter} />
              </button>
            </a>
            <a id="tumblr-quote" href="https://https://www.tumblr.com/login">
              <button style={{ backgroundColor: currentQuote.color }}>
                <FontAwesomeIcon icon={faTumblr} />
              </button>
            </a>
          </div>
          <div className="btns-2">
            <button
              id="new-quote"
              onClick={changeQuote}
              style={{ backgroundColor: currentQuote.color }}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
