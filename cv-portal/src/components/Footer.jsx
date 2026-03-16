function Footer() {
    return (
        /* <!-- Footer / Social Links --> */
        <footer className="py-6 bg-indigo-100 text-center" >
            <p className="text-indigo-900 mb-4">Connect with me across the cosmos:</p>
            <div className="flex justify-center space-x-6">
                <a href="http://github.com/Schlebbe"
                    className="text-indigo-600 hover:text-indigo-800 font-semibold">GitHub</a>
                <a href="https://www.linkedin.com"
                    className="text-indigo-600 hover:text-indigo-800 font-semibold">LinkedIn</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">Email</a>
            </div>
        </footer >
    );
}

export default Footer