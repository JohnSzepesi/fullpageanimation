new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector("h1");
        const tl = new TimelineMax({ delay: 0.3 });
        tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });

        if (destination.index === 1) {
            const pics = document.querySelectorAll(".pics");
            const description = document.querySelector(".description");

            tl.fromTo(pics, 0.7, { x: "100%" }, { x: "-35%" })
                .fromTo(
                    description,
                    0.5,
                    { y: "50", opacity: 0 },
                    { y: 0, opacity: 1 }
                )
                .fromTo(pics[0], 1, { opacity: 1 }, { opacity: 1 })
                .fromTo(pics[1], 1, { opacity: 0 }, { opacity: 1 })
                .fromTo(pics[2], 1, { opacity: 0 }, { opacity: 1 });
        }
    },
});
