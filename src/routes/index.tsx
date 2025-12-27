
import { createFileRoute } from "@tanstack/react-router";

// Third Party


// UI

import Navbar from "@/components/Navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
// import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Skills } from "@/components/skills";
import { Footer } from "@/components/footer";
import { AllLogo } from "@/components/allLogo";

// Magic Values



export const Route = createFileRoute("/")({
	component: IndexPage,
});

function IndexPage() {
	// Instance
	
	

	// States
	



	// Hooks
	

	// Function
	

	return (
		<div className="relative px-4 md:px-0 scroll-smooth">
			<Navbar />
			<section className="pb-20 ">
				<div className="flex flex-col items-center justify-center gap-12 overflow-hidden overflow-y-auto">
					<Hero />
					<About />
					{/* <AllLogo/> */}
					{/* <Projects /> */}
					<Skills />
					<Contact />
				</div>
			</section>
			<Footer />
			
		</div>
	);
}
