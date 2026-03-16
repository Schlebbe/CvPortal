import { useState } from "react"

function Portfolio() {
    const [modalOpen, setModalOpen] = useState(null);

    const projects = [
        {
            id: "modal1",
            title: "Star Map Visualizer",
            desc: "Fullstack project with React and D3.js visualizing star systems, constellations, and nebulae colors dynamically.",
            img: "https://placeholdpicsum.dev/photo/seed/nebula1/600/400",
            link: "#",
        },
        {
            id: "modal2",
            title: "Spacecraft Dashboard",
            desc: "Vue.js + Node.js dashboard simulating spacecraft operations: fuel monitoring, navigation, and trajectory plotting.",
            img: "https://placeholdpicsum.dev/photo/seed/spacecraft/600/400",
            link: "#",
        },
        {
            id: "modal3",
            title: "Galaxy Explorer App",
            desc: "Mobile-first app built with React Native for exploring galaxies interactively, with planet details and starfield animations.",
            img: "https://placeholdpicsum.dev/photo/seed/galaxy/600/400",
            link: "#",
        },
        {
            id: "modal4",
            title: "Asteroid Logger",
            desc: "Real-time tracking of asteroid positions and cosmic events. Built with Node.js and MongoDB for live updates.",
            img: "https://placeholdpicsum.dev/photo/seed/asteroid/600/400",
            link: "#",
        },
        {
            id: "modal5",
            title: "Cosmic Data API",
            desc: "REST API serving astrological and cosmic metrics. Fullstack built with Express.js and MongoDB.",
            img: "https://placeholdpicsum.dev/photo/seed/cosmos/600/400",
            link: "#",
        },
        {
            id: "modal6",
            title: "Planet Synth",
            desc: "Fullstack synth inspired by planetary sounds, built with Node.js backend and Web Audio API frontend.",
            img: "https://placeholdpicsum.dev/photo/seed/planet/600/400",
            link: "#",
        },
    ];

    return (
        <main class="page-content">
            <section class="py-20 from-indigo-50">
                <div class="container mx-auto px-6 md:px-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-12">
                        Cosmic Creations
                    </h2>

                    {/* <!-- Projects Grid --> */}
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((proj) => (
                            <div
                                key={proj.id}
                                className="bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer"
                                onClick={() => setModalOpen(proj.id)}>
                                <img
                                    src={proj.img}
                                    alt={proj.title}
                                    className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-indigo-800 mb-2">{proj.title}</h3>
                                    <p className="text-gray-700 mb-4">{proj.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* <!-- Modals --> */}
            {projects.map((proj) => (
                <div
                    key={proj.id}
                    className={`fixed inset-0 flex items-center justify-center z-50 ${modalOpen === proj.id ? "flex" : "hidden"
                        } bg-white/20 backdrop-blur-sm`}
                    onClick={() => setModalOpen(null)}>
                    <div
                        className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-xl"
                        onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
                            onClick={() => setModalOpen(null)}>
                            &times;
                        </button>
                        <h3 className="text-2xl font-bold text-indigo-900 mb-4">{proj.title}</h3>
                        <p className="text-gray-700 mb-4">{proj.desc}</p>
                        <a href={proj.link} className="text-indigo-600 hover:text-indigo-800 font-medium">
                            Live Demo →
                        </a>
                    </div>
                </div>
            ))}
        </main>
    )
}

export default Portfolio