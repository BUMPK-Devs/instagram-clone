import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
	return (
		<nav className="border border-4 border-red-700 flex flex-col align-middle justify-between h-full w-2/12">
			<div className="flex justify-center p-2">
				<Image
					src="/instagram_logo.svg"
					alt="Instagramlogo"
					width={120}
					height={120}
				/>
			</div>
			<ul className="flex-1 border border-4 border-blue-500">
				<li>
					<HomeIcon />
					<span>Home</span>
				</li>
				<li>
					<SearchIcon />
					<span>Search</span>
				</li>
				<li>
					<ExploreIcon />
					<span>Explore</span>
				</li>
				<li>
					<SlideshowIcon />
					<span>Reels</span>
				</li>
				<li>
					<ChatIcon />
					<span>Messages</span>
				</li>
				<li>
					<FavoriteBorderIcon />
					<span>Notifications</span>
				</li>
				<li>
					<AddBoxIcon />
					<span>Create</span>
				</li>
				<li>
					<AddBoxIcon />
					<span>Profile</span>
				</li>
			</ul>
			<div className="">
				<ul>
					<li>
						<MenuIcon />
						<span>Menu</span>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
