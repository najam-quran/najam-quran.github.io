var tl2 = gsap.timeline({
    defaults: {
        ease: Power2.inOut
    }
});

function toggler() {
    var e = document.getElementById("menu");
    document.getElementById("cbtn"), document.getElementById("t-menu"), document.body;
    e.style.opacity = "0", tl2.play()
}

function closeNav() {
    var e = document.getElementById("menu"),
        t = document.getElementById("t-menu");
    document.getElementById("cbtn");
    e.style.opacity = "1", e.classList.remove("opened"), t.classList.remove("toggle-nav"), tl2.reverse()
}
tl2.to(".t-side", {
    width:"320px",
  	right:"0%",
}), tl2.to(".closebtn", {
    visibility: "visible"
}), tl2.pause();
var tl = gsap.timeline({
    defaults: {
        ease: Power2.inOut
    }
});
tl.to(".prel", {
    y: "-100%",
    delay: 2
}), tl.to("body", {
    overflow: "visible"
}), tl.from(".clippy-anim", {
    "clip-path": "inset(0 0 100% 0)",
    stagger: .5
}), tl.to(".anim", {
    opacity: 1,
    stagger: .3
}), tl.play();
$(window).scroll(function() {
    $(this).scrollTop() > 100 ? $(".social-links").addClass("showmelink") : $(".social-links").removeClass("showmelink"), $(this).scrollTop() < 200 && $(".social-links").removeClass("showmelink")
});
var i, coll = document.getElementsByClassName("collapsible");
for (i = 0; i < coll.length; i++) coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var l = this.nextElementSibling;
    l.style.maxHeight ? l.style.maxHeight = null : l.style.maxHeight = l.scrollHeight + "px"
});
