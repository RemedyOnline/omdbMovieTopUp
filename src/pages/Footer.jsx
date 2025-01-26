import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandNetflix,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import logoW from "/images/movieverseWhite.png";

const Footer = () => {
  return (
    <footer className="bg-footerBg bg-cover bg-center text-gray-300">
      <div className="bg-gradient-to-b from-bgColor to-black py-12 opacity-95">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-8">
            {/* Company Info */}
            <div className="space-y-4 md:col-span-4">
              <img src={logoW} alt="logo" className="md:w-48" />
              <div className="">
                <p className="">
                  Movieverse is an online platform that allows users to explore,
                  discover, and keep track of their favorite movies. It features
                  sections for trending films, top-rated picks, and personalized
                  watchlists. Users can browse by genre, release year, or
                  popularity, and add movies to their favorites for easy access.
                  The platform aims to create a personalized movie discovery
                  experience, similar to streaming platforms like Netflix, but
                  focused more on curation and exploration.
                </p>
              </div>
            </div>
            <div className="col-span-1 flex gap-12 space-x-8 lg:col-span-2 lg:gap-0">
              <div className="space-y-5">
                <h2 className="text-lg font-bold text-white">BROWSE</h2>
                <div>
                  <ul className="space-y-2 text-nowrap">
                    <li className="transition-all duration-100 ease-in hover:cursor-pointer hover:text-white hover:underline">
                      Home
                    </li>
                    <li className="transition-all duration-100 ease-in hover:cursor-pointer hover:text-white hover:underline">
                      Trending Movies
                    </li>
                    <li className="transition-all duration-100 ease-in hover:cursor-pointer hover:text-white hover:underline">
                      Top Rated
                    </li>
                    <li className="transition-all duration-100 ease-in hover:cursor-pointer hover:text-white hover:underline">
                      Genres
                    </li>
                    <li className="transition-all duration-100 ease-in hover:cursor-pointer hover:text-white hover:underline">
                      New Releases
                    </li>
                    <li className="transition-all duration-100 ease-in hover:cursor-pointer hover:text-white hover:underline">
                      World
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-5">
                <h2 className="text-lg font-bold text-white">GENRES</h2>
                <div>
                  <ul className="space-y-2">
                    <li className="transition-all duration-100 ease-in hover:cursor-pointer hover:text-white hover:underline">
                      Action
                    </li>
                    <li className="transition-all duration-100 ease-in hover:cursor-pointer hover:text-white hover:underline">
                      Drama
                    </li>
                    <li className="transition-all duration-100 ease-in hover:cursor-pointer hover:text-white hover:underline">
                      Comedy
                    </li>
                    <li className="transition-all duration-100 ease-in hover:cursor-pointer hover:text-white hover:underline">
                      Cartoon
                    </li>
                    <li className="transition-all duration-100 ease-in hover:cursor-pointer hover:text-white hover:underline">
                      K-Series
                    </li>
                    <li className="transition-all duration-100 ease-in hover:cursor-pointer hover:text-white hover:underline">
                      Anime
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-5 md:col-span-2">
              <h2 className="text-lg font-bold text-white">SUBSCRIBE</h2>
              <p>
                Subscribe to our newsletter for updates on new movies, special
                deals, and more...
              </p>
              <form
                action="#"
                method="post"
                className="flex flex-col items-end space-y-3"
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="sborder-textColor2 w-full rounded-lg border bg-inputBG bg-opacity-15 p-2 text-lg text-white outline-none placeholder:text-gray-400 focus:ring focus:ring-textColor"
                />
                <button
                  type="submit"
                  className="rounded-lg border border-bgColor bg-bgColor p-2 font-medium text-white shadow-lg drop-shadow-lg hover:bg-themeColor"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 border-t border-white border-opacity-40 pt-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div className="flex space-x-4">
                <span className="group flex h-12 w-12 items-center justify-center rounded-lg bg-textColor hover:cursor-pointer hover:bg-themeColor">
                  <IconBrandNetflix
                    size={32}
                    className="transition-all duration-100 ease-in hover:text-white group-hover:scale-110"
                  />
                </span>
                <span className="group flex h-12 w-12 items-center justify-center rounded-lg bg-textColor hover:cursor-pointer hover:bg-themeColor">
                  <IconBrandYoutube
                    size={32}
                    className="transition-all duration-100 ease-in hover:text-white group-hover:scale-110"
                  />
                </span>
                <span className="group flex h-12 w-12 items-center justify-center rounded-lg bg-textColor hover:cursor-pointer hover:bg-themeColor">
                  <IconBrandFacebook
                    size={32}
                    className="transition-all duration-100 ease-in hover:text-white group-hover:scale-110"
                  />
                </span>
                <span className="group flex h-12 w-12 items-center justify-center rounded-lg bg-textColor hover:cursor-pointer hover:bg-themeColor">
                  <IconBrandX
                    size={32}
                    className="transition-all duration-100 ease-in hover:text-white group-hover:scale-110"
                  />
                </span>
                <span className="group flex h-12 w-12 items-center justify-center rounded-lg bg-textColor hover:cursor-pointer hover:bg-themeColor">
                  <IconBrandInstagram
                    size={32}
                    className="transition-all duration-100 ease-in hover:text-white group-hover:scale-110"
                  />
                </span>
              </div>
              <div className="mx-auto flex flex-col gap-3 sm:gap-1 md:mx-0 md:items-end">
                <ul className="flex space-x-4 sm:space-x-6 lg:space-x-12">
                  <li className="text-sm transition-all duration-100 ease-in hover:cursor-pointer hover:text-white hover:underline md:text-base">
                    Privacy Policy
                  </li>
                  <li className="text-sm transition-all duration-100 ease-in hover:cursor-pointer hover:text-white hover:underline md:text-base">
                    Terms of Service
                  </li>
                  <li className="text-sm transition-all duration-100 ease-in hover:cursor-pointer hover:text-white hover:underline md:text-base">
                    Cookie Policy
                  </li>
                  <li className="text-sm transition-all duration-100 ease-in hover:cursor-pointer hover:text-white hover:underline md:text-base">
                    FAQs
                  </li>
                </ul>
                <p className="text-center text-sm md:text-base">
                  © 2024 The African Wave. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
