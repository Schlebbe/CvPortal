/*****************************Navbar************************************/
// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

/*****************************Navbar************************************/

/*****************************Modals************************************/
document.querySelectorAll('[data-modal]').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.dataset.modal;
        document.getElementById(modalId).classList.remove('hidden');
    });
});

document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('div[id^="modal"]').classList.add('hidden');
    });
});

document.querySelectorAll('div[id^="modal"]').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelectorAll('div[id^="modal"]').forEach(modal => modal.classList.add('hidden'));
    }
});
/*****************************Modals************************************/

/*****************************Easter Egg************************************/
// Select the astronaut image and body
const colors = ['#1e3a8a', '#4c1d95', '#0f172a', '#0ea5e9', '#7c3aed']; // cosmic theme colors
let colorIndex = 0;

// astronaut.addEventListener('click', () => {
//     // Change the body background to next color
//     document.body.style.backgroundColor = colors[colorIndex];
//     colorIndex = (colorIndex + 1) % colors.length; // cycle through colors
// });

// Function to change background
function changeBackground() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

const astronaut = document.querySelector('img[alt="Astronaut portrait"]');
if (astronaut) astronaut.addEventListener('click', changeBackground);

const cosmicH2 = document.querySelector('h2.text-indigo-900');
if (cosmicH2) cosmicH2.addEventListener('click', changeBackground);

const leetModal = document.getElementById('leetEgg');
const leetClose = document.getElementById('leetClose');
let leetBuffer = ""; // buffer to store typed keys
const leetCode = "1337";

// Detect keypresses
document.addEventListener('keydown', (e) => {
    leetBuffer += e.key;
    if (leetBuffer.endsWith(leetCode)) {
        leetModal.classList.remove('hidden');
        leetBuffer = ""; // reset buffer
    }
    // Optional: keep buffer at max length of leetCode
    if (leetBuffer.length > leetCode.length) {
        leetBuffer = leetBuffer.slice(-leetCode.length);
    }
});

// Close button
leetClose.addEventListener('click', () => {
    leetModal.classList.add('hidden');
});

// Click outside to close
leetModal.addEventListener('click', (e) => {
    if (e.target === leetModal) leetModal.classList.add('hidden');
});

// Close on ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") leetModal.classList.add('hidden');
});
/*****************************Easter Egg************************************/
