import AboutSection from "@/components/AboutSection";
import HomeSection from "@/components/HomeSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
	return (
		<main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
			{/* className="flex min-h-screen flex-col items-center justify-between p-24" */}
			<HomeSection />
			<AboutSection />
			<ProjectSection />
		</main>
	);
}
