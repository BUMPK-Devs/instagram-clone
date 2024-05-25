export default function Home() {
	return (
		<div className="border border-2 h-full w-full border-purple-500 flex">
			<div className="border border-4 border-yellow-400 h-full w-8/12">
				<div className="border border-4 border-red-500 mx-auto w-4/5 h-full flex flex-col">
					<div className="border border-4 border-white h-28"></div>
					<div className="border border-4 border-pink-500 grow"></div>
				</div>
			</div>
			<div className="border border-4 border-white h-full w-4/12"></div>
		</div>
	);
}
