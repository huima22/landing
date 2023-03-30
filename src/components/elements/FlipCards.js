import React from 'react';
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
 const propTypes = {
   isFlipped: false,
 }
function FlipCards() {
 const [isFlipped, setIsFlipped] = useState(false);

 const CardStyle = {
   border: "1px solid black",
   padding: "20px",
   margin: "20px",
   width: "160px",
   height: "250px"
 };
  return (
    <div>
         <ReactCardFlip
              className="characterCard"
              isFlipped={isFlipped}
              flipDirection="horizontal"
            >
              <div
                style={CardStyle}
                onClick={() => setIsFlipped((prev) => !prev)}
                className="CardFront"
              >
                Test1

              </div>
              <div
                style={CardStyle}
                onClick={() => setIsFlipped((prev) => !prev)}
                className="CardBack"
              >
                {/* This is the back of the card. */}

                test2
              </div>
            </ReactCardFlip>
            </div>
  );
}

FlipCards.props = propTypes;
export default FlipCards;
