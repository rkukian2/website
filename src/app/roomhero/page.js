"use client";
import React from "react";
import Link from "next/link";

const RoomHero = () => {
  return (
    <section className="min-h-screen bg-[#121212] text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
          Room Hero
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Room Hero is an innovative tool designed to help students find the best study spots on campus.
          By leveraging <strong>Mapbox for a 3D interactive map</strong> and <strong>AI models</strong> for personalized recommendations,
          Room Hero aims to make study space discovery seamless and efficient.
        </p>

        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg text-gray-300">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">
            Under Development
          </h2>
          <p>
            The full details of this project are currently hidden as it is being scaled
            and taken to a startup incubator. Stay tuned for updates as Room Hero evolves
            into a fully functional platform.
          </p>
        </div>

        <div className="mt-8">
          <Link href="/#projects" className="text-blue-400 hover:underline text-lg">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoomHero;