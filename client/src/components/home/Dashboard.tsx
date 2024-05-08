import Nav from "@/components/home/Nav";
import PostAndChat from "./PostAndChat";

const Dashboard = () => {
	return (
		<div className="h-screen border-2 border-red-900 flex">
			<Nav />
			<PostAndChat />
		</div>
	);
};

export default Dashboard;
