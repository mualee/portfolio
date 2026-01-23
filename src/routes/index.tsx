
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

const product ={
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "mualee",
  "description": "Mualee is a performant web applications using React, TypeScript, and cutting-edge frontend technologies with a strong emphasis on user experience, animations, and accessibility.",
  "image": "https://mualee.com/images/mualee2.JPG",	
  }

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
			<Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "${product.name}",
              "description": "${product.description}",
              "image": "${product.image}"
            }
          `}
        </script>
      </Helmet>
			<Navbar />
			<main className="pb-20 ">
				<div className="flex flex-col items-center justify-center gap-12 overflow-hidden overflow-y-auto">
					{/* <Hero /> */}
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