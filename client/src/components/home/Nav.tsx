import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "../common/Button";

export default function Nav() {
	return (
		<div className="w-48 border-r-4 p-4 border-purple-700 h-full">
			<div className="logo">
				<Image
					src="/instagram_logo.svg"
					alt="Instagramlogo"
					width={120}
					height={120}
				/>
			</div>
			<div className="border border-4 border-yellow-400">
				<div className="main__nav border border-4 border-blue-400">
					<Button>
						<HomeIcon />
						<span>Home</span>
					</Button>
					<Button>
						<SearchIcon />
						<span>Search</span>
					</Button>
					<Button>
						<ExploreIcon />
						<span>Explore</span>
					</Button>
					<Button>
						<SlideshowIcon />
						<span>Reels</span>
					</Button>
					<Button>
						<ChatIcon />
						<span>Messages</span>
					</Button>
					<Button>
						<FavoriteBorderIcon />
						<span>Notifications</span>
					</Button>
					<Button>
						<AddBoxIcon />
						<span>Create</span>
					</Button>
					<Button>
						<AddBoxIcon />
						<span>Profile</span>
					</Button>
				</div>
				<div className="menu__nav fixed bottom-5">
					<ul>
						<Button>
							<MenuIcon />
							<span>Menu</span>
						</Button>
					</ul>
				</div>
			</div>
		</div>
	);
}
