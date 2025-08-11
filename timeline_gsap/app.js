let tl = gsap.timeline();

tl.from('h2', {
    opacity: 0,
    x: -30,
    duration: 0.3,
    delay: .7
})

tl.from('h4', {
    opacity: 0,
    x: 30,
    duration: 0.5,
    stagger: 0.3

})

tl.from('h1', {
    opacity: 0,
    x: -60,
    y: 60,
    duration: 0.5,


})