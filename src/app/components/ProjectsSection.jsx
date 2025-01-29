"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Room Hero",
    description: "Study Spot Finder",
    image: "/images/mapbox.jpg",
    tag: ["All", "Entrepreneurship"],
    gitUrl: "/roomhero",
  },
  {
    id: 2,
    title: "Makeshift Maps",
    description: "Shortest Path Finder for Glacier National Park",
    image: "/images/gnp.jpg",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/rkukian2/MakeshiftMaps",
  },
  {
    id: 3,
    title: "React from Scratch",
    description: "React Engine Mimic",
    image: "/images/rfs.jpg",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/rkukian2/ReactFromScratch",
  },
  {
    id: 4,
    title: "Xperience",
    description: "Project 4 description",
    image: "/images/XP2.jpg",
    tag: ["All", "Entrepreneurship"],
    gitUrl: "/xperience",
  },
  {
    id: 5,
    title: "Web Dev Projects",
    description: "Simple Projects using React",
    image: "/images/projects/5.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/rkukian2/React",
  },
  {
    id: 6,
    title: "My Travel Agent",
    description: "Kayak Scraper",
    image: "/images/kayak.jpg",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/rkukian2/KayakScraper",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal"
          isSelected={tag === "Personal"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Entrepreneurship"
          isSelected={tag === "Entrepreneurship"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
