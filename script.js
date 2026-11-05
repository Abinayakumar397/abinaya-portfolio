
// Portfolio scroll reveal animation

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

const animatedElements = document.querySelectorAll(
    ".reveal"
);

animatedElements.forEach((element) => {
    observer.observe(element);
});

console.log("Portfolio loaded successfully!");
