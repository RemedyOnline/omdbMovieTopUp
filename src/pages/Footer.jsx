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
		<footer className="bg-footerBg bg-cover bg-center text-gray-400">
			<div className="bg-gradient-to-b from-bgColor to-black opacity-90 py-12">
				{/* Main Footer Content */}
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8">
						{/* Company Info */}
						<div className="space-y-4 md:col-span-4">
							<img src={logoW} alt="logo" className=" md:w-48" />
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
						<div className="col-span-1 space-y-5">
							<h2 className="font-bold text-lg text-white">BROWSE</h2>
							<div>
								<ul className="space-y-2">
									<li className="hover:underline hover:cursor-pointer hover:text-white transition-all duration-100 ease-in">
										Home
									</li>
									<li className="hover:underline hover:cursor-pointer hover:text-white transition-all duration-100 ease-in">
										Trending Movies
									</li>
									<li className="hover:underline hover:cursor-pointer hover:text-white transition-all duration-100 ease-in">
										Top Rated
									</li>
									<li className="hover:underline hover:cursor-pointer hover:text-white transition-all duration-100 ease-in">
										Genres
									</li>
									<li className="hover:underline hover:cursor-pointer hover:text-white transition-all duration-100 ease-in">
										New Releases
									</li>
								</ul>
							</div>
						</div>
						<div className="col-span-1 space-y-5">
							<h2 className="font-bold text-lg text-white">GENRES</h2>
							<div>
								<ul className="space-y-2">
									<li className="hover:underline hover:cursor-pointer hover:text-white transition-all duration-100 ease-in">
										Action
									</li>
									<li className="hover:underline hover:cursor-pointer hover:text-white transition-all duration-100 ease-in">
										Drama
									</li>
									<li className="hover:underline hover:cursor-pointer hover:text-white transition-all duration-100 ease-in">
										Comedy
									</li>
									<li className="hover:underline hover:cursor-pointer hover:text-white transition-all duration-100 ease-in">
										Cartoon
									</li>
									<li className="hover:underline hover:cursor-pointer hover:text-white transition-all duration-100 ease-in">
										K-Series
									</li>
									<li className="hover:underline hover:cursor-pointer hover:text-white transition-all duration-100 ease-in">
										Anime
									</li>
								</ul>
							</div>
						</div>
						<div className="space-y-5 md:col-span-2">
							<h2 className="font-bold text-lg text-white">SUBSCRIBE</h2>
							<p>
								Subscribe to our newsletter for updates on new movies, special
								deals, and more...
							</p>
							<form
								action="#"
								method="post"
								className="space-y-2 flex flex-col items-end"
							>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Enter your email"
									className="bg-inputBG p-3 rounded-xl w-full placeholder:text-gray-200 border-textColor2 outline-none focus:ring focus:ring-textColor text-textColor text-lg"
								/>
								<button type="submit" className="p-3 bg-textColor rounded-xl">
									Subscribe
								</button>
							</form>
						</div>
					</div>

					{/* Social Links */}
					<div className="mt-8 pt-8 border-t border-white border-opacity-40">
						<div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
							<div className="flex space-x-4">
								<span className="bg-textColor w-12 h-12 rounded-lg flex items-center justify-center group hover:cursor-pointer">
									<IconBrandNetflix
										size={32}
										className="group-hover:scale-110 hover:text-white transition-all duration-100 ease-in"
									/>
								</span>
								<span className="bg-textColor w-12 h-12 rounded-lg flex items-center justify-center group hover:cursor-pointer">
									<IconBrandYoutube
										size={32}
										className="group-hover:scale-110 hover:text-white transition-all duration-100 ease-in"
									/>
								</span>
								<span className="bg-textColor w-12 h-12 rounded-lg flex items-center justify-center group hover:cursor-pointer">
									<IconBrandFacebook
										size={32}
										className="group-hover:scale-110 hover:text-white transition-all duration-100 ease-in"
									/>
								</span>
								<span className="bg-textColor w-12 h-12 rounded-lg flex items-center justify-center group hover:cursor-pointer">
									<IconBrandX
										size={32}
										className="group-hover:scale-110 hover:text-white transition-all duration-100 ease-in"
									/>
								</span>
								<span className="bg-textColor w-12 h-12 rounded-lg flex items-center justify-center group hover:cursor-pointer">
									<IconBrandInstagram
										size={32}
										className="group-hover:scale-110 hover:text-white transition-all duration-100 ease-in"
									/>
								</span>
							</div>
							<div className="flex flex-col md:items-end gap-3 sm:gap-1">
								<ul className="flex space-x-3 sm:space-x-6 lg:space-x-12">
									<li className="hover:underline hover:cursor-pointer hover:text-white transition-all duration-100 ease-in">
										Privacy Policy
									</li>
									<li className="hover:underline hover:cursor-pointer hover:text-white transition-all duration-100 ease-in">
										Terms of Service
									</li>
									<li className="hover:underline hover:cursor-pointer hover:text-white transition-all duration-100 ease-in">
										Cookie Policy
									</li>
									<li className="hover:underline hover:cursor-pointer hover:text-white transition-all duration-100 ease-in">
										FAQs
									</li>
								</ul>
								<p>© 2024 The African Wave. All Rights Reserved.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
