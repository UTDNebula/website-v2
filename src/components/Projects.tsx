import { useState } from "react";

const PROJECTS = ["Planner", "Sk.edge", "Trends & API", "Jupiter", "Guides"];

export default function Projects() {
	const [selected, setSelected] = useState(0);
	return (
		<div className="h-[1623px] shrink-0 flex flex-col justify-center">
			<div className="text-center">
				<h3 className="text-4xl">Checkout Out Our </h3>
				<h1 className="font-kallisto text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#6166FA] via-[#C2C9FF] to-[#FE8164]">
					Projects
				</h1>
			</div>
			<div className="pt-10 text-center">
				<p>
					Check out what we have been creating in our lab up in the
					galaxy
				</p>
			</div>
			<div className="grid gap-16 grid-cols-5 pt-10 m-auto">
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
			<div>
				<ProjectCard index={selected} />
			</div>
		</div>
	);
}

const PROJECTS_INFO = [
	{
		title: "Planner",
		description:
			"Planner is a tool designed to help students with their degree plans. With a user-friendly interface, students can easily map out their course requirements, track their progress, and make adjustments as needed.",
	},
];

function ProjectCard(props: { index: number }) {
	const currentProj = PROJECTS_INFO[props.index];
	return (
		<div className="w-[1172px] h-[531px] shrink-0 rounded-3x border border-white">
			<h1>{currentProj.title}</h1>
			<p>{currentProj.description}</p>
		</div>
	);
}
