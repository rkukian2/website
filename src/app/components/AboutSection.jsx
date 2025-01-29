"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 list-none">
  <li>Node.js</li>
  <li>Express.js</li>
  <li>PostgreSQL</li>
  <li>MongoDB</li>
  <li>Sequelize</li>
  <li>React.js</li>
  <li>Redux</li>
  <li>Vue.js</li>
  <li>Three.js</li>
  <li>JavaScript</li>
  <li>Python</li>
  <li>C++</li>
  <li>Java</li>
  <li>Swift</li>
  <li>Dart</li>
  <li>AWS</li>
  <li>Docker</li>
  <li>Flask</li>
  <li>REST API</li>
  <li>Mapbox</li>
</ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Illinois Urbana Champaign</li>
        <li>Illinois Institute of Technology</li>
        <li>College of Lake County</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Images Column */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="/images/nature.jpg"
              alt="Main profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Two Smaller Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40 md:h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/XP1.jpg"
                alt="Teaching session"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-40 md:h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/siebel.jpg"
                alt="Coding work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a student and entrepreneur driven by a dual passion for technology and community impact. 
            My journey includes co-founding a coding consultancy to teach STEM skills to students and mentoring 
            peers as a CS128 Course Assistant at UIUC. I am also a member of Alpha Kappa Psi, where I thrive 
            in team-driven environments, blending technical expertise with leadership to solve real-world 
            challenges. Beyond code, I channel my entrepreneurial spirit into fostering accessibility—whether 
            streamlining workflows for local businesses, advocating for tech education, or organizing community 
            initiatives. I believe innovation thrives when paired with purpose, and I strive to meaningfully 
            imprint through teaching, collaboration, and a lifelong curiosity for learning.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
