import { useState } from "react";
import Image from "next/image";

const PROJECTS = ["Planner", "Sk.edge", "Trends & API", "Jupiter", "Guide"];

export default function Projects() {
	const [selected, setSelected] = useState(0);
	return (
		<div className="h-[1623px] shrink-0 flex flex-col justify-center">
			<div className="text-center">
				<h3 className="text-4xl">Check Out Our </h3>
				<h1 className="font-kallisto text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#6166FA] via-[#C2C9FF] to-[#FE8164]">
					Projects
				</h1>
			</div>
			<div className="text-center">
				<p>
					Check out what we have been creating in our lab up in the
					galaxy
				</p>
			</div>
			<div className="grid gap-16 grid-cols-5 mx-auto pt-6">
				{PROJECTS.map((project, index) => (
					<div
						key={index}
						className={`flex h-16 px-12 justify-center items-center rounded-full cursor-pointer ${
							selected === index
								? "bg-[#6166FA] border-transparent"
								: "border-white"
						} transition-colors duration-300 ease-in-out border-2`}
						onClick={() => setSelected(index)}
					>
						{project}
					</div>
				))}
			</div>
			<div className="mx-auto pt-6">
				<ProjectCard index={selected} />
			</div>
		</div>
	);
}

const PROJECTS_INFO: { title: string; description: string }[] = [
	{
		title: "Planner",
		description:
			"Planner is a tool designed to help students with their degree plans. With a user-friendly interface, students can easily map out their course requirements, track their progress, and make adjustments as needed.",
	},
	{
		title: "Sk.edge",
		description:
			"Sk.edge is a browser extension designed to simplify the process of selecting classes by providing students with valuable information all in one place.",
	},
	{
		title: "Nebule Trends & API",
		description:
			"Nebula API is a public API containing resources for UTD student data, including grade distribution information, and more. Trend is data visualization tool to inform student about import info at UTD.",
	},
	{
		title: "Jupiter",
		description:
			"Student organization portal to connect organizations on campus with interested students at UTD.",
	},
	{
		title: "Guide",
		description:
			"Guide allows the students at UTD to search for popular and niche questions they might have, allowing for a one-stop shop for all their UTD queries.",
	},
];

function ProjectCard(props: { index: number }) {
	const currentProj = PROJECTS_INFO[props.index];
	return (
		<div className="w-[1172px] h-[531px] shrink-0 rounded-3x border border-white">
			<div className="flex w-80 h-96 flex-col items-start gap-11 flex-shrink-0">
				<h1 className="font-kallisto text-3xl">{currentProj.title}</h1>
				<p className="w-80 h-40 flex-shrink-0 font-inter text-lg">
					{currentProj.description}
				</p>
				<div className="flex justify-between">
					<a className="text-lg font-bold underline" href="#">
						More Information{" "}
					</a>
					<a className="text-lg" href="#">
						&gt;
					</a>
				</div>
				<div className="flex p-3 justify-center items-center gap-10">
					<button className="flex p-3 items-start gap-3 rounded-full bg-white">
						<Image
							src="/arrow.svg"
							alt="arrow"
							width={20}
							height={20}
							className="transform rotate-90"
						/>
					</button>
					<p className="text-lg font-semibold">
						{props.index + 1} / 6{" "}
					</p>
					<button className="flex p-3 items-start gap-3 rounded-full bg-white">
						<Image
							src="/arrow.svg"
							alt="arrow"
							width={20}
							height={20}
							className="transform -rotate-90"
						/>
					</button>
				</div>
			</div>
		</div>
	);
}
