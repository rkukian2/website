"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Xperience = () => {
  return (
    <section className="min-h-screen bg-[#121212] text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Xperience: Learning Meets Real-World Impact
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed text-center mb-10">
          <strong>Xperience Coding and Consulting LLC</strong> is a passion-driven initiative that transforms
          <strong> technical learning</strong> into real-world applications and business solutions.
          Whether mentoring students, building scalable web solutions, or developing automation systems, 
          Xperience is a bridge between learning and impactful innovation.
        </p>

        {/* Section Divider */}
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-12"></div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <Image
              src="/images/XP3.jpg"
              alt="Students working on projects"
              width={500}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-400">STEM Education & Mentorship</h2>
            
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
              <ul className="space-y-6 text-gray-300 text-lg">
                <li>
                  <span className="font-semibold text-white">Interactive Coding Camps: </span>  
                  We have conducted multiple sessions focusing on  
                  <span className="text-blue-300 font-semibold"> game development</span> using  
                  <span className="text-blue-300 font-semibold"> Scratch</span> and  
                  <span className="text-blue-300 font-semibold"> web development</span> with  
                  <span className="text-blue-300 font-semibold"> HTML/CSS</span>.  
                  These hands-on experiences allow students to build and deploy their first real-world projects.
                </li>

                <li>
                  <span className="font-semibold text-white">STEM-Focused Engineering Challenges: </span>  
                  Beyond software, we introduced hardware-focused learning by hosting  
                  <span className="text-blue-300 font-semibold"> BattleBots Competitions</span> using  
                  <span className="text-blue-300 font-semibold"> Micro:Bits</span>.  
                  Students engage in robotics, coding, and hands-on engineering in a fun, competitive setting.
                </li>

                <li>
                  <span className="font-semibold text-white">High Student Engagement & Impact: </span>  
                  Our programs boast an <span className="text-blue-300 font-semibold"> 80% student retention rate</span>,  
                  demonstrating their effectiveness. Through these camps, we have built  
                  <span className="text-blue-300 font-semibold"> meaningful connections</span> with students,  
                  ensuring they continue their learning journey beyond the classroom.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full my-12"></div>

        {/* Business Consulting Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-semibold text-blue-400 mb-4">
      Business & Consulting
    </h2>
    <p className="text-gray-300">
      Xperience is not just about education; it extends to helping businesses 
      grow through technology. By integrating modern web solutions and automation, 
      we provide tools that help businesses scale and operate efficiently.
    </p>

          <ul className="space-y-6 text-gray-300 text-lg mt-4">
            <li>
              <span className="font-semibold text-white">Custom Business Solutions: </span>  
              Built full-stack applications that enhance business operations,  
              allowing seamless management of resources and data.
            </li>

            <li>
              <span className="font-semibold text-white">Scalable Web Development: </span>  
              Designed responsive websites and platforms that provide businesses with  
              a strong online presence and improved customer engagement.
            </li>

            <li>
              <span className="font-semibold text-white">Automation & Optimization: </span>  
              Implemented tools that streamline repetitive tasks, improve efficiency,  
              and enable data-driven decision-making.
            </li>
          </ul>
        </div>

          {/* Image Section */}
          <div className="relative">
            <Image
              src="/images/XP2.jpg"
              alt="Business Solutions"
              width={500}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Section Divider */}
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full my-12"></div>

        

        {/* Why Xperience Matters */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Why Xperience Matters</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
          I never had easy access to the incredible world of computers, but Xperience changes that. 
          It is dedicated to inspiring the next generation of passionate computer scientists by making 
          technology education accessible, engaging, and impactful. In fact, that's how it got its name:
          </p>
          <ul className="list-disc list-inside text-gray-400 max-w-xl mx-auto mt-4 text-center">
            <li>Xperience for high schoolers - an opportunity to gain real-world experience and leadership through hands-on learning and teaching.</li>
            <li>Xperience for younger students - a chance to learn and create real hobbies with innovative technologies.</li>
          </ul>
        </div>

        {/* Section Divider */}
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full my-12"></div>

        {/* Back to Projects */}
        <div className="text-center">
          <Link href="/#projects" className="text-blue-400 hover:underline text-lg">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Xperience;