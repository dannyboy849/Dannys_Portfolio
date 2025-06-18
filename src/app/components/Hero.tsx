"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-6">
      <Image
        src="/public/Images/Profile.jpg"
        alt="Your photo"
        width={120}
        height={120}
        className="rounded-full border border-gray-300 dark:border-gray-700 shadow-lg"
      />
      <h1 className="text-4xl sm:text-6xl font-bold">Dannyboy Vargas</h1>
      <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
        Robotics & Control Systems Researcher
      </h2>
      <p className="max-w-xl text-gray-600 dark:text-gray-300">
        PhD student focusing on search & rescue robotics, UAV-UGV control systems, and real-time autonomous behaviors.
      </p>
      <a
        href="#projects"
        className="mt-4 inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
      >
        View My Work ↓
      </a>
    </section>
  );
}
