new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = new TimelineMax({ delay: 0.65 });
        tl.fromTo(title, 1, { y: "10", opacity: 0 }, { y: 0, opacity: 1 });

        if (destination.index === 1) {
            const chair = document.querySelectorAll('.chair');
            const description = document.querySelector('.description');
            const tl = new TimelineMax({ delay: 1 });
            tl.fromTo(description, 0.5, { x: "0", opacity: 0 }, { x: "40", opacity: 1 });
            tl.fromTo(chair, 1, { x: "-80%", opacity: 0 }, { x: "-85%", opacity: 1 });

        }
    }
});