const animationInit = () => {
    const outerCircle = document.querySelector('#circle');
    const outerWords = document.querySelector('#outer-words');

    gsap.to([outerCircle, outerWords], {
        duration: 250,
        rotation: 360,
        ease: Linear.easeNone,
        transformOrigin: 'center center',
        repeat: -1
    })
}

animationInit();