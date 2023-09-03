import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-royal w-screen rounded-t-[3.125rem] pb-10">
			<div className="flex justify-between px-40 py-28">
				<Image
					src="/logo-name-white.svg"
					alt="logo"
					width="360"
					height="53"
				/>
				<div className="text-white items-center flex flex-col">
					<button>
						<Image
							src="/arrow.svg"
							alt="arrow"
							width="20"
							height="20"
							className="rotate-180"
						/>
					</button>
					<p>Top</p>
				</div>
			</div>
			<div className="grid grid-cols-4 px-40">
				<div className="text-white text-sm">
					<h3 className="text-xl font-semibold mb-8">About us</h3>
					<p className="pb-3">About</p>
					<p className="pb-3">Roles</p>
					<p className="pb-3">Members</p>
					<p className="pb-3">Blog</p>
					<p className="pb-3">Boot Camp</p>
				</div>
				<div className="text-white text-sm">
					<h3 className="text-xl font-semibold mb-8">Projects</h3>
					<p className="pb-3">Planner</p>
					<p className="pb-3">Sk.edge</p>
					<p className="pb-3">Jupiter</p>
					<p className="pb-3">Survival Guide</p>
					<p className="pb-3">API & Trends</p>
				</div>
				<div className="text-white text-sm">
					<h3 className="text-xl font-semibold mb-8">Resources</h3>
					<p className="pb-3">Roles</p>
					<p className="pb-3">Project Governance</p>
					<p className="pb-3">Meetings</p>
					<p className="pb-3">Design Guide</p>
				</div>
				<div className="text-white text-sm">
					<h3 className="text-xl font-semibold mb-8">
						Let&#39;s Keep In Touch
					</h3>
					<Image
						src="/join-discord.svg"
						alt="discord"
						width="200"
						height="60"
						className="mb-8"
					/>
					<div className="flex">
						<div className="flex items-center mr-5">
							<Image
								src="/twitter.svg"
								alt="twitter"
								width="30"
								height="30"
								className="mr-2"
							/>
							<p>Twitter</p>
						</div>
						<div className="flex items-center">
							<Image
								src="/youtube.svg"
								alt="youtube"
								width="30"
								height="30"
								className="mr-2"
							/>
							<p>Youtube</p>
						</div>
					</div>
				</div>
			</div>
			<div className="px-40 pt-40">
				<div className="border-t-2 border-white px-40" />
				<div className="flex justify-between pt-8">
					<div className="flex text-white text-sm">
						<p className="mr-8">Terms of Service</p>
						<p className="mr-8">Privacy Policy</p>
						<p className="mr-8">Security</p>
						<p className="mr-8">Sitemap</p>
					</div>
					<div>
						<p className="text-white text-sm">
							© 2023 Nebula Labs Maintainers. All rights{" "}
							reserved.
						</p>
						<p className="text-white text-sm text-right">
							Site design by{" "}
							<b className="underline">Hilary Nguyen</b>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
