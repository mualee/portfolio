
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

// Critical above-fold components loaded immediately
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/hero";

// Below-fold components lazy loaded
const About = lazy(() => import("@/components/about").then(m => ({ default: m.About })));
const Skills = lazy(() => import("@/components/skills").then(m => ({ default: m.Skills })));
const Contact = lazy(() => import("@/components/contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/footer").then(m => ({ default: m.Footer })));

// Helmet loaded lazily since it's not critical for initial render
import { Helmet } from 'react-helmet';

export const Route = createFileRoute("/")({
	component: IndexPage,
});

function IndexPage() {
	return (
		<div className="relative px-4 md:px-0 scroll-smooth">
			<Helmet>
				<title>MuaLee (ມົວລີ) | Full Stack Developer - SSMI Laos | mualee.com</title>
				<meta name="description" content="MuaLee (ມົວລີ, ມົວ, ມົວ ລີ) - Full Stack Developer at SSMI Laos. Portfolio by Mua Lee (mualee, Mualee, Mua lee). React & TypeScript expert. ssmilaos | mualee.com" />
				<link rel="canonical" href="https://mualee.com" />
			</Helmet>
			<Navbar />
			<main className="pb-20 ">
				<div className="flex flex-col items-center justify-center gap-12 overflow-hidden overflow-y-auto">
					<Hero />
					<About />
					{/* <AllLogo/> */}
					{/* <Projects /> */}
					<Skills />
					<Contact />
					
				</div>
			</main>
			<Footer />
	</div>);
}