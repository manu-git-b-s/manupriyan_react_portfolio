import { Link } from "react-scroll";
import HeroImage from "../assets/heroImage.png";
import { MdDownload, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black text-white"
      name="home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I&apos;m a Full Stack developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Bootstrap, Next JS and MERN stack.
          </p>
          <div className="flex gap- 2">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500  to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a
              className="d-inline group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500  to-blue-500 cursor-pointer"
              download
              target="_blank"
              rel="noreferrer"
              href="/resume.pdf"
            >
              Resume
              <span>
                <MdDownload size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
