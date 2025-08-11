gsap.to('.box', {
    x: 500,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "pink",
    borderRadius: "50%",
    scale: 0.5,
    yoyo: true,
    repeat: -1
})

gsap.from('.box2', {
    x: 500,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "pink",
    borderRadius: "50%",
    scale: 0.5,
    yoyo: true,
    repeat: -1
})

gsap.from('h1', {
    opacity: 0,
    duration: 1,
    y: 30,
    delay: 1,
    stagger: -1

})

