import React from "react";

export const Footer = (): JSX.Element => (
  <footer className="page-footer font-small blue pt-4 bg-dark">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase text-white">Ecommerce App</h5>
          <p className="text-secondary">An elegant web experience.</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-6 mb-md-0 mt-0">
          <h5 className="text-uppercase text-white">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a
                target="_blank"
                href="https://github.com/Ayeman-B-Salauddin/Ecommerce"
                className="text-secondary text-decoration-none"
              >
                Github Source Code
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ayeman-bin-salauddin/"
                className="text-secondary text-decoration-none"
              >
                Connect with me: LinkedIn
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://ayeman-b-salauddin.vercel.app/"
                className="text-secondary text-decoration-none"
              >
                Checkout my Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      <p className="text-white">© 2022 Copyright:</p>
      <a
        target="_blank"
        href="https://ayeman-b-salauddin.vercel.app/"
        className="text-secondary text-decoration-none"
      >
        {" "}
        https://ayeman-b-salauddin.vercel.app/
      </a>
    </div>
  </footer>
);
