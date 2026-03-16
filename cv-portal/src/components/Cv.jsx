
function Cv() {
    return (
        <div className="pt-20">
            <h1 className="text-4xl font-bold mb-4">Curriculum Vitae</h1>
            <p className="text-lg text-gray-700">Here is a summary of my education, work experience, and skills:</p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Education</h2>
            <ul className="list-disc list-inside text-gray-700">
                <li><strong>University A:</strong> Bachelor of Science in Computer Science (2015-2019)</li>
                <li><strong>University B:</strong> Master of Science in Software Engineering (2019-2021)</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Work Experience</h2>
            <ul className="list-disc list-inside text-gray-700">
                <li><strong>Company X:</strong> Software Developer (2021-Present)</li>
                <li><strong>Company Y:</strong> Intern (2020-2021)</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Skills</h2>
            <ul className="list-disc list-inside text-gray-700">
                <li>Programming Languages: JavaScript, Python, Java</li>
                <li>Frameworks: React, Node.js, Django</li>
                <li>Tools: Git, Docker, AWS</li>
            </ul>
        </div>
    )
}

export default Cv