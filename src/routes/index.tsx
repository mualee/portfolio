
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
// import { AllLogo } from "@/components/allLogo";

// Magic Values
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
