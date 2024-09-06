import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <div className="py-3 bg-[#fff] w-full ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo">
            <Link to="/">


            <img
              src="https://devzone.com.bd/wp-content/uploads/2024/08/office-devzone-logo2.png"
              alt=""
            />
            </Link>
          </div>
          <div className="menu">
            <ul className="flex">
              <li>
                <Link className="font-semibold text-lg px-3 py-5 hover:underline transition" to="/">Home</Link>
              </li>
              <li>
                <Link className="font-semibold text-lg px-3 py-5 hover:underline transition" to="/about">About</Link>
              </li>
              <li>
                <Link className="font-semibold text-lg px-3 py-5 hover:underline transition" to="/team">Teams</Link>
              </li>
              <li>
                <Link className="font-semibold text-lg px-3 py-5 hover:underline transition" to="/blog">Blog</Link>
              </li>
              <li>
                <Link className="font-semibold text-lg px-3 py-5 hover:underline transition" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
