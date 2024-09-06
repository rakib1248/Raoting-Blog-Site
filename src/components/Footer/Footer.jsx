import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="py-5 bg-cover bg-center bg-no-repeat bg-footer-image">
        <div className="container mx-auto">
          <div className="menu py-24">
            <ul className="flex justify-between">
              <li>
                <Link
                  className="font-semibold text-2xl px-3 py-5 hover:underline transition"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold text-2xl px-3 py-5 hover:underline transition"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold text-2xl px-3 py-5 hover:underline transition"
                  to="/team"
                >
                  Teams
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold text-2xl px-3 py-5 hover:underline transition"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold text-2xl px-3 py-5 hover:underline transition"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      <footer className="bg-slate-900 py-2 text-white  ">
      <div className="flex justify-between items-center container mx-auto">

        <Link to="">


            <img
              src="https://devzone.com.bd/wp-content/uploads/2024/08/office-devzone-logo2.png"
              alt=""
            />
        </Link>
            <p>©2005-2024 Ministry of Rakibul, All rights reserved.</p>
          </div>
          
      </footer>
    </>
  );
};

export default Footer;
