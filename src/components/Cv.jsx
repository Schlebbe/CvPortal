import cvData from "../assets/cvData.json";
import { useState } from "react";
import "../assets/print.css";

function Cv({ handleAstronautClick, bgColor }) {
    return (
        <main style={{ backgroundColor: bgColor }} className="page-content bg-indigo-50 pt-16">
            {/* Header */}
            <section className="min-h-screen bg-gradient-to-b from-indigo-50 flex flex-col items-center justify-center text-center py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">{cvData.header.name}</h1>
                <p className="text-indigo-800 text-lg mb-6">{cvData.header.title}</p>
                <img
                    src={cvData.header.photo}
                    alt={`${cvData.header.name} portrait`}
                    className="rounded-full shadow-2xl w-64 md:w-80 lg:w-96 mb-6"
                    onClick={handleAstronautClick} />
            </section>

            {/* Education */}
            <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-indigo-900 mb-8">Education</h2>
                <ul className="space-y-6">
                    {cvData.education.map((edu, index) => (
                        <li key={index}>
                            <h3 className="text-xl font-semibold text-indigo-800">{edu.degree} - {edu.school}</h3>
                            <p className="text-gray-700">{edu.years} | {edu.description}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Experience */}
            <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto bg-indigo-50">
                <h2 className="text-3xl font-bold text-indigo-900 mb-8">Experience</h2>
                <ul className="space-y-6">
                    {cvData.experience.map((exp, index) => (
                        <li key={index}>
                            <h3 className="text-xl font-semibold text-indigo-800">{exp.position} - {exp.company}</h3>
                            <p className="text-gray-700">{exp.years} | {exp.description}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Skills */}
            <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-indigo-900 mb-8">Skills</h2>
                <div className="flex flex-wrap gap-4">
                    {cvData.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-indigo-100 text-indigo-800 font-semibold px-4 py-2 rounded-full">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Cv