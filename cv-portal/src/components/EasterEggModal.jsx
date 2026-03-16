import { useEffect, useState } from "react";

function EasterEggModal() {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        let leetBuffer = ""; // buffer to store typed keys
        const leetCode = "1337";

        const handleKeyDown = (e) => {
            leetBuffer += e.key;
            if (leetBuffer.endsWith(leetCode)) {
                setModalOpen(true);
                leetBuffer = ""; // reset buffer
            }
            // Optional: keep buffer at max length of leetCode
            if (leetBuffer.length > leetCode.length) {
                leetBuffer = leetBuffer.slice(-leetCode.length);
            }

            if (e.key === "Escape") {
                setModalOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []); // empty dependency array to run once on mount

    return (
        // 1337 Easter Egg Modal 
        <div
            className={`${modalOpen ? "fixed" : "hidden"} inset-0 flex items-center justify-center z-50 bg-white/20 backdrop-blur-sm`}
            onClick={() => setModalOpen(false)}>
            <div className="bg-indigo-50 rounded-xl max-w-md w-full p-6 relative shadow-xl text-center"
                onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setModalOpen(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold">&times;</button>
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">🎉 1337 Alert!</h3>
                <p className="text-indigo-800 mb-4">
                    You typed "1337"! Sebastian's spaghetti code has fully awakened.
                    The cosmos bows to your elite skills.
                </p>
                <img src="https://placeholdpicsum.dev/photo/seed/alien/150/150" alt="Alien" className="mx-auto" />
            </div>
        </div>
    );
}

export default EasterEggModal;