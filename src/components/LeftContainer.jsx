import React from "react";

function LeftContainer({ cardNumber, userName, m, y, cvc }) {
  let cardNoArr = cardNumber.split("");
  let arr = [];
  return (
    <div className="left_container">
      <div className="back-card">
        <div className="cvc">
          <p>{cvc}</p>
        </div>
      </div>
      <div className="front-card">
        <div className="front-content-container">
          <div className="icons-group">
            <div className="avatar"></div>
            <div className="mini-avatar"></div>
          </div>
          <div className="card-front-info">
            <div style={{ display: "flex", flexDirection: "row" }}>
              {cardNoArr.map((el,ind) => {
                if (arr.length === 3) {
                  arr.push(el);
                  let str = arr.join("");
                  arr = [];
                  return <h2 key={ind} style={{padding:"0",margin:"0 0.5rem 0 0"}} className="card-number">{str}</h2>;
                } else {
                  arr.push(el);
                }
              })}
            </div>
            <div className="userName-date">
              <p> {userName}</p>
              <p>
                {m}/{y}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftContainer;
