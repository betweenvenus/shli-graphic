
const animationInit = () => {
    gsap.registerPlugin(MotionPathPlugin);

    gsap.to(['#dot', '[data-name="dot"]'], {
        motionPath: {
            path: '#circle',
            align: '#circle',
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            relative: true
        },

        repeat: -1,
        duration: 1,
        ease: 'none',
        duration: 3,
    });

    gsap.set('#bubbles', {
        display: 'none'
    })

    gsap.to('#sleeves', {
        rotation: 360,
        transformOrigin: 'center center',
        repeat: -1,
        ease: 'none',
        duration: 15
    });

    gsap.to(['#icon', '#brain', '#icon-4'], {
        rotation: -360,
        transformOrigin: 'center center',
        repeat: -1,
        ease: 'none',
        duration: 15
    });

    gsap.to('#gray-circle', {
        rotation: 360,
        ease: 'none',
        transformOrigin: 'center center',
        repeat: -1,
        duration: 7
    });
}

animationInit();