import { Link } from "react-router-dom";

function Home({ handleAstronautClick, bgColor }) {
    return (
        <main style={{ backgroundColor: bgColor }} className="page-content">
            {/* <!-- Hero Section --> */}
            <section className="min-h-screen bg-gradient-to-b from-indigo-50 flex items-center">
                <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">

                    {/* <!-- Text --> */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
                            Greetings, I'm Sebastian Enerstrand
                        </h1>
                        <p className="text-indigo-800 mb-6 text-lg">
                            Fullstack developer, cosmic explorer, and architect of digital galaxies.
                            I craft interfaces and code that feel like portals to other dimensions.
                        </p>
                        <Link to="/portfolio" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition">
                            <span>Explore My Universe</span>
                        </Link>
                    </div>

                    {/* <!-- Hero Image --> */}
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <img src="https://images.pexels.com/photos/7170706/pexels-photo-7170706.jpeg"
                            alt="Astronaut portrait" className="rounded-full shadow-2xl w-64 md:w-80 lg:w-96"
                            onClick={handleAstronautClick} />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-indigo-50">
                <div className="container mx-auto px-6 md:px-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-12">
                        Cosmic Creations – A Glimpse
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* <!-- Teaser Project 1 --> */}
                        <div
                            className="bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer">
                            <img src="https://placeholdpicsum.dev/photo/seed/nebula1/600/400" alt="Project 1"
                                className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-indigo-800 mb-2">Star Map Visualizer</h3>
                                <p className="text-gray-700 mb-4">Explore star systems and nebulae with interactive visuals.</p>
                            </div>
                        </div>

                        {/* <!-- Teaser Project 2 --> */}
                        <div
                            className="bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer">
                            <img src="https://placeholdpicsum.dev/photo/seed/spacecraft/600/400" alt="Project 2"
                                className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-indigo-800 mb-2">Spacecraft Dashboard</h3>
                                <p className="text-gray-700 mb-4">Simulated spacecraft control interface with futuristic UI.</p>
                            </div>
                        </div>

                        {/* <!-- Teaser Project 3 --> */}
                        <div
                            className="bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer">
                            <img src="https://placeholdpicsum.dev/photo/seed/galaxy/600/400" alt="Project 3"
                                className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-indigo-800 mb-2">Galaxy Explorer App</h3>
                                <p className="text-gray-700 mb-4">Traverse virtual galaxies and discover interactive cosmic
                                    stories.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home