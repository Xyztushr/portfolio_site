
const time = gsap.timeline()


time.from("nav a,#logo",{
    y:-20,
    
    opacity:0
})
time.from("#hleft,#hright",{
    opacity:0,
    duration:1
})
time.from("#hright #image",{
    rotate:10,
})
time.to("#linx",{
    opacity:100,
    rotate: 360,
    duration:1,
    width:"140%"
})
time.to("#liny",{
    opacity:100,
    rotate: -270,
    duration:1,
    width:"140%"
})
const secondtl = gsap.timeline()
secondtl.from(".container .skill-box",{
    opacity:0,
    x:50,
    stagger:1,
    markers:true,
    duration:2,
    scrollTrigger:true
})
