var abe = document.querySelector("#overlay")
gsap.from("#min",{
    opacity:0,
    scrub:2,
    duration:1,
    delay:0.5,
})
gsap.from("#overlay",{
    opacity:0,
    scrub:2,
    duration:1,
    delay:1.5,
})
gsap.from("#km img",{
    opacity:0.7,
    x: -500,
    scrollTrigger :{
        scrub:0.3,
        scroll:"body",
        trigger:"#km img",
        end:"top 3%",
    }

})
gsap.from("#photo img",{
    opacity:0.7,
    x: 500,
    scrollTrigger :{
        scrub:0.3,
        scroll:"body",
        trigger:"#photo img",
        end:"top 3%",
    }

})
gsap.from("#ml img",{
    opacity:0.7,
    y: 500,
    scrollTrigger :{
        scrub:2,
        delay:1,
        scroll:"body",
        trigger:"#ml img",
        end:"top 90%",
    }

})
gsap.from("#crop img",{
    opacity:0.9,
    x: -500,
    scrollTrigger :{
        scrub:2,
        delay:3,
        scroll:"body",
        start:"top 30%",
        trigger:"#km img",
        end:"top 90%",
    }

})


gsap.from("#photo3 img",{
    opacity:0.9,
    x: 500,
    scrollTrigger :{
        scrub:2,
        delay:2,
        scroll:"body",
        trigger:"#photo3 img",
        end:"top 90%",
    }

})

gsap.from("#photo2 img",{
    opacity:0.9,
    y: -100,
    start:"top 40%",
    scrollTrigger :{
        scrub:2,
        scroll:"body",
        trigger:"#photo2 img",
        duration:4,
    }


})
gsap.from("#tw",{
    opacity:0,
    scrollTrigger :{
        trigger:"#tw",
            scrub:"5",
            scroll: "body",
            start:"top 60%",
            end:"top 30%",
        }

})
