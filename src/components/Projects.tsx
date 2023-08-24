import { useState } from "react";

const PROJECTS = ["Planner", "Sk.edge", "Trends & API", "Jupiter", "Guides"];

export default function Projects() {
	const [selected, setSelected] = useState(0);
	return (
		<div className="bg-black rounded-full w-[1668px] h-[1623px] flex flex-col justify-center items-center">
			<div className="text-white text-center">
				<h3 className="text-4xl">Checkout Out Our </h3>
				<h1 className="font-kallisto text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#6166FA] via-[#C2C9FF] to-[#FE8164]">
					Projects
				</h1>
			</div>
			<div className="text-white pt-10">
				<p>
					Check out what we have been creating in our lab up in the
					galaxy
				</p>
			</div>
			<div className="grid gap-16 grid-cols-5 pt-10">
				{PROJECTS.map((project, index) => (
					<div
						key={index}
						className={`flex text-white h-16 px-12 justify-center items-center rounded-full cursor-pointer ${
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
		</div>
	);
}
