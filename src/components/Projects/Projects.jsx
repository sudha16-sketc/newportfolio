import "../../styles/global.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      title: "BuildVerse",
      description:
        "Gamified Web3 builder platform with wallet authentication, reputation system, community posts, bounty management and blockchain rewards.",
      video: "/videos/blockVerse.mp4",
    },
    {
      title: "FinWise AI",
      description:
        "AI-powered financial advisor integrating Gemini AI and Stellar blockchain reward mechanisms for budgeting and savings.",
      video: "/videos/finwise.mp4",
    },
    {
      title: "CodeCraft",
      description:
        "Gamified blockchain learning platform using Ethereum, Solidity, ERC-20 rewards and NFT achievement certificates.",
      video: "/videos/codecarft.mp4",
    },
    {
      title: "Shadow AI",
      description:
        "AI security assistant that prevents accidental sharing of credentials, API keys and confidential information with public AI tools.",
      video: "/videos/shadow.mp4",
    },
    {
      title: "PlantCare AI",
      description:
        "AI-powered smart gardening assistant providing personalized plant care recommendations using Gemini AI and intelligent visual guides.",
      video: "/videos/plantcare.mp4",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(titleRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      // Cards animation
      cardsRef.current.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          x: 500,
          scale: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="info-section" id="projects">
      <div ref={titleRef} className="autoBlur">
        <h3>FEATURED PROJECTS</h3>
      </div>

      <p>
        Some of the projects that showcase my experience in Full Stack,
        Blockchain, AI and modern web development.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              video={project.video}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;