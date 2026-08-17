/* =========================================================
   DAR PANGASINAN
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const mobileMenu = document.getElementById("mobileMenu");
const mainNav = document.getElementById("mainNav");

if (mobileMenu) {

    mobileMenu.addEventListener("click", () => {

        mainNav.classList.toggle("active");

        const icon = mobileMenu.querySelector("i");

        if (mainNav.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =========================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================================= */

document.querySelectorAll("#mainNav a").forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("active");

        const icon = mobileMenu.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#mainNav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   DARK MODE
========================================================= */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    themeToggle.querySelector("i");

const savedTheme =
    localStorage.getItem("dar-theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const dark =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "dar-theme",
        dark ? "dark" : "light"
    );

    if (dark) {

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    } else {

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

    }

});


/* =========================================================
   ANIMATED STATISTICS
========================================================= */

const counters =
    document.querySelectorAll("[data-count]");

let countersStarted = false;

function animateCounters() {

    if (countersStarted) return;

    const statsSection =
        document.querySelector(".stats-section");

    if (!statsSection) return;

    const sectionPosition =
        statsSection.getBoundingClientRect().top;

    const screenPosition =
        window.innerHeight * 0.85;

    if (sectionPosition < screenPosition) {

        countersStarted = true;

        counters.forEach(counter => {

            const target =
                parseInt(counter.dataset.count);

            let current = 0;

            const duration = 1600;

            const increment =
                target / (duration / 16);

            function updateCounter() {

                current += increment;

                if (current < target) {

                    counter.textContent =
                        Math.floor(current).toLocaleString();

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.textContent =
                        target.toLocaleString();

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener(
    "scroll",
    animateCounters
);

animateCounters();


/* =========================================================
   DIVISION MODAL
========================================================= */

const modal =
    document.getElementById("divisionModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalClose =
    document.getElementById("modalClose");

const modalContact =
    document.getElementById("modalContact");


document.querySelectorAll(".learn-more")
    .forEach(button => {

        button.addEventListener("click", () => {

            const title =
                button.dataset.title;

            const description =
                button.dataset.description;

            modalTitle.textContent =
                title;

            modalDescription.textContent =
                description;

            modal.classList.add("active");

            document.body.style.overflow =
                "hidden";

        });

    });


function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeModal();

        }

    }
);


modalContact.addEventListener(
    "click",
    () => {

        closeModal();

        document.querySelector("#contact")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =========================================================
   FAQ ACCORDION
========================================================= */

const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    const answer =
        item.querySelector(".faq-answer");

    question.addEventListener(
        "click",
        () => {

            const isActive =
                item.classList.contains("active");

            faqItems.forEach(otherItem => {

                otherItem.classList.remove(
                    "active"
                );

                const otherAnswer =
                    otherItem.querySelector(
                        ".faq-answer"
                    );

                otherAnswer.style.maxHeight =
                    null;

            });

            if (!isActive) {

                item.classList.add("active");

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        }
    );

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        alert(
            `Thank you, ${name}!\n\n` +
            "Your inquiry has been prepared. " +
            "Please connect this form to an email " +
            "or backend service before deploying it " +
            "for official submissions."
        );

        contactForm.reset();

    }
);


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   CURRENT YEAR
========================================================= */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".division-card, .service-card, .news-card, .program"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%cDAR Pangasinan Website",
    "font-size:20px;font-weight:bold;color:#176b3a;"
);

console.log(
    "Department of Agrarian Reform - Pangasinan Provincial Office"
);