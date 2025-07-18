import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-start">
        {/* Left Text Column */}
        <div className="col-md-5 mb-4 mb-md-0">
          <h2 style={{ fontSize: "28px", fontWeight: "600", marginBottom: "16px" }}>
            Unbeatable pricing
          </h2>
          <p style={{ fontSize: "18px", color: "#4f4f4f", lineHeight: "1.6" }}>
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            style={{
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "17px",
              color: "#1a73e8",
              display: "inline-block",
              marginTop: "12px",
            }}
          >
            See pricing <span style={{ fontSize: "16px" }}>→</span>
          </a>
        </div>

        {/* Right Pricing Boxes */}
        <div className="col-md-7 d-flex flex-wrap justify-content-start align-items-start mt-4 mt-md-0">
          {/* Box 1 */}
          <div className="d-flex align-items-center mb-4 me-5" style={{ minWidth: "200px" }}>
            <img
              src="img/Pricing0.svg"
              alt="₹0"
              style={{ width: "60px", height: "60px", marginRight: "10px" }}
            />
            <p style={{ margin: 0, fontSize: "12px", color: "#2f2f2f", lineHeight: "1.4" }}>
              Free account<br />opening
            </p>
          </div>

          {/* Box 2 */}
          <div className="d-flex align-items-center mb-4 me-5" style={{ minWidth: "250px" }}>
            <img
              src="img/Pricing0.svg"
              alt="₹0"
              style={{ width: "60px", height: "60px", marginRight: "10px" }}
            />
            <p style={{ margin: 0, fontSize: "12px", color: "#2f2f2f", lineHeight: "1.4" }}>
              Free equity delivery<br />and direct mutual funds
            </p>
          </div>

          {/* Box 3 */}
          <div className="d-flex align-items-center mb-4" style={{ minWidth: "200px" }}>
            <img
              src="img/intradayTrades.svg"
              alt="₹20"
              style={{ width: "60px", height: "60px", marginRight: "10px" }}
            />
            <p style={{ margin: 0, fontSize: "12px", color: "#2f2f2f", lineHeight: "1.4" }}>
              Intraday and<br />F&amp;O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
