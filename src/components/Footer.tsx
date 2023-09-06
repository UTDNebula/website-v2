import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-royal w-screen rounded-t-[3.125rem] pb-10 md:px-40 px-8 text-white text-sm">
			<div className="flex justify-between py-16 sm:py-28 flex-wrap gap-8">
				<Image
					src="/logo-name-white.svg"
					alt="logo"
					width="360"
					height="53"
				/>
				<a href="#" className="order-first sm:order-1">
					<div className="text-white items-center flex flex-col rounded-full border border-white border-opacity-0 hover:border-opacity-100 p-2 transition">
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
				</a>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
				<div className="flex flex-col gap-3">
					<h3 className="text-xl font-semibold mb-4">About us</h3>
					<p className="">About</p>
					<p className="">Roles</p>
					<p className="">Members</p>
					<p className="">Blog</p>
					<p className="">Boot Camp</p>
				</div>
				<div className="flex flex-col gap-3">
					<h3 className="text-xl font-semibold mb-4">Projects</h3>
					<p className="">Planner</p>
					<p className="">Sk.edge</p>
					<p className="">Jupiter</p>
					<p className="">Survival Guide</p>
					<p className="">API & Trends</p>
				</div>
				<div className="flex flex-col gap-3">
					<h3 className="text-xl font-semibold mb-4">Resources</h3>
					<p className="">Roles</p>
					<p className="">Project Governance</p>
					<p className="">Meetings</p>
					<p className="">Design Guide</p>
				</div>
				<div className="flex flex-col gap-4 lg:ml-auto">
					<Image
						src="/join-discord.svg"
						alt="discord"
						width="200"
						height="60"
						className="mb-6"
					/>
					<a className="flex items-center gap-2 " href="https://instagram.com/utdnebula">
						<Image
							src="/instagram.svg"
							alt="Instagram logo"
							width="30"
							height="30"
						/>
						<p>Instagram</p>
					</a>
					<a className="flex items-center gap-2 " href="https://linkedin.com/company/utdnebula">
						<Image
							src="/linkedin.svg"
							alt="LinkedIn logo"
							width="30"
							height="30"
						/>
						<p>LinkedIn</p>
					</a>
					<a className="flex items-center gap-2 " href="https://github.com/utdnebula">
						<Image
							src="/github.svg"
							alt="GitHub logo"
							width="30"
							height="30"
						/>
						<p>GitHub</p>
					</a>
				</div>
			</div>
			<div className="md:pt-40 pt-10">
				<div className="border-t-2 border-white" />
				<div className="flex md:flex-row flex-col justify-between gap-8 pt-8">
					<div className="flex gap-x-8 gap-y-1 justify-around md:justify-normal flex-wrap">
						<p className="">Terms of Service</p>
						<p className="">Privacy Policy</p>
						<p className="">Security</p>
						<p className="">Sitemap</p>
					</div>
					<div className="md:text-right text-center text-xs">
						<p className="">
							© 2023 Nebula Labs Maintainers. All rights{" "}
							reserved.
						</p>
						<p className="">
							Site design by{" "}
							<a href="https://hilary-nguyen.com/" className="font-bold underline">Hilary Nguyen</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
