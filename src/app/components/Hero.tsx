"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <header className="text-center">
      <Image
        src="/public/Images/Profile.jpg"
        alt="Your photo"
        width={120}
        height={120}
        className="rounded-full border border-gray-300 dark:border-gray-700 shadow-lg"
      />
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">Daniel Vargas</h1>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
        Robotics, Computer Vision, & Control Systems Researcher | PhD Student
      </p>
      <p className="mt-4 max-w-xl text-gray-700 dark:text-gray-300 mx-auto">
        Hi! I’m Daniel, a PhD candidate specializing in search & rescue robotics,
        multi-agent control systems, and autonomous UAV-UGV platforms. I specialize in blending
        real-time control systems with machine learning to solve tough real-world problems.
      </p>
    </header>
  );
}
