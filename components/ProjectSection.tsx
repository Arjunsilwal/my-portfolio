import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
	{
		name: "Review Me",
		description:
			"Review me is a web app which shows the review of different people, with the magic of react and js you can view random review as well as next and previous review",
		image: "/review-me.png",
		github: "https://github.com/Arjunsilwal/review-me",
		link: "https://review-me-two.vercel.app/",
	},
	{
		name: "Tour Destination",
		description:
			"Tour destination is a we app which shows the list of top tour destination places",
		image: "/tour-destination.png",
		github: "https://github.com/Arjunsilwal/tour-destination",
		link: "https://tour-destination.vercel.app/",
	},
	{
		name: "Reminder",
		description:
			"Reminder is a web app which will remind you the birthday of people and employee showing the list of people that have birthdays.",
		image: "/birthday-reminder.png",
		github: "https://github.com/Arjunsilwal/birthday-reminder",
		link: "https://birthday-reminder-nu-one.vercel.app/",
	},
];

function ProjectSection() {
	return (
		<section id="projects">
			<h1 className="my-10 text-center font-bold text-4xl">
				Projects
				<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
			</h1>
			<div className="flex flex-col space-y-28">
				{projects.map((project, index) => {
					return (
						<div key={index}>
							<SlideUp offset="-300px 0px -300px 0px">
								<div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
									<div className=" md:w-1/2">
										<Link href={project.link}>
											<Image
												src={project.image}
												alt={project.name}
												width={1000}
												height={1000}
												className="rounded-xl shadow-xl hover:opacity-70"
											/>
										</Link>
									</div>
									<div className="mt-8 md:w-1/2">
										<h1 className="text-4xl font-bold mb-6">{project.name}</h1>
										<p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
											{project.description}
										</p>
										<div className="flex flex-row align-bottom space-x-4">
											<Link href={project.github} target="_blank">
												<BsGithub
													size={30}
													className="hover:-translate-y-1 transition-transform cursor-pointer"
												/>
											</Link>
											<Link href={project.link} target="_blank">
												<BsArrowUpRightSquare
													size={30}
													className="hover:-translate-y-1 transition-transform cursor-pointer"
												/>
											</Link>
										</div>
									</div>
								</div>
							</SlideUp>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default ProjectSection;
