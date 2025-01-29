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
    image: "/images/projects/1.png",
    tag: ["All", "Entrepreneurship"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Makeshift Maps",
    description: "Shortest Path Finder for Glacier National Park",
    image: "/images/projects/2.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React from Scratch",
    description: "React Engine Mimic",
    image: "/images/projects/3.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Xperience",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Entrepreneurship"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Nasa API",
    description: "Nasa Daily Pic Displayer",
    image: "/images/projects/5.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Simple ToDo List",
    description: "React Based ToDo List",
    image: "/images/projects/6.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
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
