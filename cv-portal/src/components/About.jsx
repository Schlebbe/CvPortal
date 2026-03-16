
function About() {
    return (
        <main className="page-content">
            {/* <!-- About Page Section --> */}
            <section className="min-h-screen bg-gradient-to-b from-indigo-50 flex items-center py-20">
                <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">

                    {/* <!-- Text content --> */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
                            About Me
                        </h1>
                        <p className="text-indigo-800 mb-6">
                            Greetings! I'm Sebastian Enerstrand, a fullstack developer and cosmic adventurer.
                            I traverse the universe of code, exploring galaxies of frameworks, planets of APIs, and nebulae
                            of ideas.
                        </p>
                        <p className="text-indigo-800 mb-6">
                            My mission is to craft websites and apps that feel like portals to other dimensions — intuitive,
                            magical, and slightly unpredictable.
                            When not coding, I chart stars, sketch alien worlds, or imagine interstellar civilizations
                            waiting to be discovered.
                        </p>
                        <p className="text-indigo-800 mb-6">
                            Whether building scalable backends or enchanting frontends, I approach each project with
                            curiosity, creativity, and a dash of cosmic mischief.
                            Let's explore the universe of possibilities together! 🚀✨
                        </p>
                    </div>

                    {/* <!-- Image --> */}
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <img src="https://images.pexels.com/photos/7170706/pexels-photo-7170706.jpeg"
                            alt="Astronaut portrait" className="rounded-full shadow-2xl w-64 md:w-80 lg:w-96" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About