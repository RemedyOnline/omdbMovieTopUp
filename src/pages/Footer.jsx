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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-netflix transition-all duration-100 ease-in hover:text-white group-hover:scale-110"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 3l10 18h-4l-10 -18z" />
                    <path d="M5 3v18h4v-10.5" />
                    <path d="M19 21v-18h-4v10.5" />
                  </svg>
                </span>
                <span className="group flex h-12 w-12 items-center justify-center rounded-lg bg-textColor hover:cursor-pointer hover:bg-themeColor">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube transition-all duration-100 ease-in hover:text-white group-hover:scale-110"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                    <path d="M10 9l5 3l-5 3z" />
                  </svg>
                </span>
                <span className="group flex h-12 w-12 items-center justify-center rounded-lg bg-textColor hover:cursor-pointer hover:bg-themeColor">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-disney transition-all duration-100 ease-in hover:text-white group-hover:scale-110"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3.22 5.838c-1.307 -.15 -1.22 -.578 -1.22 -.794c0 -.216 .424 -1.044 4.34 -1.044c4.694 0 14.66 3.645 14.66 10.042s-8.71 4.931 -10.435 4.52c-1.724 -.412 -5.565 -2.256 -5.565 -4.174c0 -1.395 3.08 -2.388 6.715 -2.388c3.634 0 5.285 1.041 5.285 2c0 .5 -.074 1.229 -1 1.5" />
                    <path d="M10.02 8a505.153 505.153 0 0 0 0 13" />
                  </svg>
                </span>
                <span className="group flex h-12 w-12 items-center justify-center rounded-lg bg-textColor hover:cursor-pointer hover:bg-themeColor">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok transition-all duration-100 ease-in hover:text-white group-hover:scale-110"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
                  </svg>
                </span>
                <span className="group flex h-12 w-12 items-center justify-center rounded-lg bg-textColor hover:cursor-pointer hover:bg-themeColor">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x transition-all duration-100 ease-in hover:text-white group-hover:scale-110"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </span>
                <span className="group flex h-12 w-12 items-center justify-center rounded-lg bg-textColor hover:cursor-pointer hover:bg-themeColor">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram transition-all duration-100 ease-in hover:text-white group-hover:scale-110"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M16.5 7.5v.01" />
                  </svg>
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
                  <span className="font-mono font-semibold">© 2024</span>{" "}
                  <span className="font-semibold text-inputBG">
                    The African Wave.
                  </span>{" "}
                  All Rights Reserved.
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
