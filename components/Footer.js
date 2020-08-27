import React from "react";

const Footer = () => (
  <footer id="footer" className="container bg-grey">
    <div className="row">
      <div className="col-sm-12">
        <p>
          Made by <a href="http://khyrulkabir.tk">Khyrul Kabir</a>.
        </p>

        <p>
          Based on{" "}
          <a href="https://nextjs.org/" rel="nofollow">
            Next.js
          </a>
          ,{" "}
          <a href="https://getbootstrap.com" rel="nofollow">
            Bootstrap
          </a>
          . Icons from{" "}
          <a href="https://fontawesome.com/" rel="nofollow">
            Font Awesome
          </a>
          . Web fonts from{" "}
          <a href="https://fonts.google.com/" rel="nofollow">
            Google
          </a>
          . API from{" "}
          <a href="https://restcountries.eu" rel="nofollow">
            Rest Countries
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
