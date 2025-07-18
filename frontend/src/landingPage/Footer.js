import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5 py-5">
        <div className="row">
          <div className="col-md-3 mb-3">
            <img src="img/logo.svg" alt="logo" style={{ width: "60%" }} />
            <p className="mt-3 text-muted">
              &copy; 2010 - 2025, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
          </div>

          <div className="col-md-2 mb-3">
            <p className="fw-bold">Company</p>
            <a href="#" className="d-block text-decoration-none text-muted">About</a>
            <a href="#" className="d-block text-decoration-none text-muted">Philosophy</a>
            <a href="#" className="d-block text-decoration-none text-muted">Press & media</a>
            <a href="#" className="d-block text-decoration-none text-muted">Careers</a>
            <a href="#" className="d-block text-decoration-none text-muted">Zerodha Cares (CSR)</a>
            <a href="#" className="d-block text-decoration-none text-muted">Zerodha.tech</a>
            <a href="#" className="d-block text-decoration-none text-muted">Open source</a>
          </div>

          <div className="col-md-2 mb-3">
            <p className="fw-bold">Account</p>
            <a href="#" className="d-block text-decoration-none text-muted">Open demat account</a>
            <a href="#" className="d-block text-decoration-none text-muted">Minor demat account</a>
            <a href="#" className="d-block text-decoration-none text-muted">NRI demat account</a>
            <a href="#" className="d-block text-decoration-none text-muted">Commodity</a>
            <a href="#" className="d-block text-decoration-none text-muted">Fund transfer</a>
            <a href="#" className="d-block text-decoration-none text-muted">MTF</a>
            <a href="#" className="d-block text-decoration-none text-muted">Referral program</a>
          </div>

          <div className="col-md-2 mb-3">
            <p className="fw-bold">Support</p>
            <a href="#" className="d-block text-decoration-none text-muted">Contact us</a>
            <a href="#" className="d-block text-decoration-none text-muted">Support portal</a>
            <a href="#" className="d-block text-decoration-none text-muted">How to file a complaint?</a>
            <a href="#" className="d-block text-decoration-none text-muted">Status of your complaints</a>
            <a href="#" className="d-block text-decoration-none text-muted">Z-Connect blog</a>
            <a href="#" className="d-block text-decoration-none text-muted">Downloads</a>
          </div>

          <div className="col-md-3 mb-3">
            <p className="fw-bold">Quick links</p>
            <a href="#" className="d-block text-decoration-none text-muted">Upcoming IPOs</a>
            <a href="#" className="d-block text-decoration-none text-muted">Brokerage charges</a>
            <a href="#" className="d-block text-decoration-none text-muted">Market holidays</a>
            <a href="#" className="d-block text-decoration-none text-muted">Economic calendar</a>
            <a href="#" className="d-block text-decoration-none text-muted">Calculators</a>
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "13px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633
            CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025;
            NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For complaints: securities broking -
            complaints@zerodha.com, DP - dp@zerodha.com. Please read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details:
            Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
            redressal of grievances.
          </p>

          <p>
            Investments in securities market are subject to market risks; read all related documents
            carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with
            your stock brokers. Receive information of your transactions directly from Exchange at the
            end of the day. KYC is one-time exercise. No need to repeat with every intermediary." Dear
            Investor, if you are subscribing to an IPO, write your Bank account number and sign the IPO
            form to authorize your bank. Funds will remain in your bank in case of non-allotment. We do
            not offer stock tips or trade on behalf of others. If someone does, create a ticket here.
          </p>

          <p className="mb-0">
            NSE BSE MCX | Terms & conditions | Policies & procedures | Privacy policy | Disclosure |
            Investor's attention | Investor charter
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
