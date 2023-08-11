var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  });

  let forhovereffect = document.querySelector("#forhovereffect");
  let part2Hover = document.querySelector(".part2-img")
  let part2Content = document.querySelector(".part2-text")
  forhovereffect.addEventListener("mousemove",function(){
    part2Hover.style.borderRadius =  "110px"
    part2Content.style.borderRadius =  "110px"
  })
  forhovereffect.addEventListener("mouseleave",function(){
    part2Hover.style.borderRadius =  "1vw"
    part2Content.style.borderRadius =  "1vw"
  })
  // part3
  let borderfolding = document.querySelector("#part3-img1");
  let topimg = document.querySelector("#top-img ");
  let btmtext = document.querySelector("#btm-text");
  borderfolding.addEventListener("mousemove",function(){
    topimg.style.borderRadius = "70px"
    btmtext.style.borderRadius = "70px"
  })
  borderfolding.addEventListener("mouseleave",function(){
    topimg.style.borderRadius = "40px 40px 0 0"
    btmtext.style.borderRadius = "0 0 40px 40px"
  })

//
  let borderfolding1 = document.querySelector("#part3-img2");
  let topimg1 = document.querySelector("#top-img1");
  let btmtext1 = document.querySelector("#btm-text1");
  borderfolding1.addEventListener("mousemove",function(){
    topimg1.style.borderRadius = "70px"
    btmtext1.style.borderRadius = "70px"
  })
  borderfolding1.addEventListener("mouseleave",function(){
    topimg1.style.borderRadius = "40px 40px 0 0"
    btmtext1.style.borderRadius = "0 0 40px 40px"
  })
//
let borderfolding2 = document.querySelector("#part3-img3");
  let topimg2 = document.querySelector("#top-img2");
  let btmtext2 = document.querySelector("#btm-text2");
  borderfolding2.addEventListener("mousemove",function(){
    topimg2.style.borderRadius = "70px"
    btmtext2.style.borderRadius = "70px"
  })
  borderfolding2.addEventListener("mouseleave",function(){
    topimg2.style.borderRadius = "40px 40px 0 0"
    btmtext2.style.borderRadius = "0 0 40px 40px"
  })

//a tag targeting
  let d1 = document.querySelector("#d1")
  let d2 = document.querySelector("#d2")
  let d3 = document.querySelector("#d3")
  let d4 = document.querySelector("#d4")
  let d5 = document.querySelector("#d5")
  let d6 = document.querySelector("#d6")
  let d7 = document.querySelector("#d7")
  let d8 = document.querySelector("#d8")
  let d9 = document.querySelector("#d9")
  let d10 = document.querySelector("#d10")
//d1
  d1.addEventListener("mousemove",function(){
    d1.style.fontWait = "600"
    d2.style.opacity = ".4"
    d3.style.opacity = ".4"
    d4.style.opacity = ".4"
    d5.style.opacity = ".4"
    d6.style.opacity = ".4"
    d7.style.opacity = ".4"
    d8.style.opacity = ".4"
    d9.style.opacity = ".4"
    d10.style.opacity = ".4"
  })
  d1.addEventListener("mouseleave",function(){
    d1.style.fontWait = "500"
    d2.style.opacity = ".7"
    d3.style.opacity = ".7"
    d4.style.opacity = ".7"
    d5.style.opacity = ".7"
    d6.style.opacity = ".7"
    d7.style.opacity = ".7"
    d8.style.opacity = ".7"
    d9.style.opacity = ".7"
    d10.style.opacity = ".7"
  })
//d2
d2.addEventListener("mousemove",function(){
  d2.style.fontWait = "600"
  d1.style.opacity = ".4"
  d3.style.opacity = ".4"
  d4.style.opacity = ".4"
  d5.style.opacity = ".4"
  d6.style.opacity = ".4"
  d7.style.opacity = ".4"
  d8.style.opacity = ".4"
  d9.style.opacity = ".4"
  d10.style.opacity = ".4"
})
d2.addEventListener("mouseleave",function(){
  d2.style.fontWait = "500"
  d1.style.opacity = ".7"
  d3.style.opacity = ".7"
  d4.style.opacity = ".7"
  d5.style.opacity = ".7"
  d6.style.opacity = ".7"
  d7.style.opacity = ".7"
  d8.style.opacity = ".7"
  d9.style.opacity = ".7"
  d10.style.opacity = ".7"
})
//d3
d3.addEventListener("mousemove",function(){
  d3.style.fontWait = "600"
  d1.style.opacity = ".4"
  d2.style.opacity = ".4"
  d4.style.opacity = ".4"
  d5.style.opacity = ".4"
  d6.style.opacity = ".4"
  d7.style.opacity = ".4"
  d8.style.opacity = ".4"
  d9.style.opacity = ".4"
  d10.style.opacity = ".4"
})
d3.addEventListener("mouseleave",function(){
  d3.style.fontWait = "500"
  d1.style.opacity = ".7"
  d2.style.opacity = ".7"
  d3.style.opacity = ".7"
  d4.style.opacity = ".7"
  d5.style.opacity = ".7"
  d6.style.opacity = ".7"
  d7.style.opacity = ".7"
  d8.style.opacity = ".7"
  d9.style.opacity = ".7"
  d10.style.opacity = ".7"
})
//d4
d4.addEventListener("mousemove",function(){
  d4.style.fontWait = "600"
  d1.style.opacity = ".4"
  d2.style.opacity = ".4"
  d3.style.opacity = ".4"
  d5.style.opacity = ".4"
  d6.style.opacity = ".4"
  d7.style.opacity = ".4"
  d8.style.opacity = ".4"
  d9.style.opacity = ".4"
  d10.style.opacity = ".4"
})
d4.addEventListener("mouseleave",function(){
  d3.style.fontWait = "500"
  d1.style.opacity = ".7"
  d2.style.opacity = ".7"
  d3.style.opacity = ".7"
  d4.style.opacity = ".7"
  d5.style.opacity = ".7"
  d6.style.opacity = ".7"
  d7.style.opacity = ".7"
  d8.style.opacity = ".7"
  d9.style.opacity = ".7"
  d10.style.opacity = ".7"
})
//d5
d5.addEventListener("mousemove",function(){
  d5.style.fontWait = "600"
  d1.style.opacity = ".4"
  d2.style.opacity = ".4"
  d3.style.opacity = ".4"
  d4.style.opacity = ".4"
  // d5.style.opacity = ".4"
  d6.style.opacity = ".4"
  d7.style.opacity = ".4"
  d8.style.opacity = ".4"
  d9.style.opacity = ".4"
  d10.style.opacity = ".4"
})
d5.addEventListener("mouseleave",function(){
  d5.style.fontWait = "500"
  d1.style.opacity = ".7"
  d2.style.opacity = ".7"
  d3.style.opacity = ".7"
  d4.style.opacity = ".7"
  d5.style.opacity = ".7"
  d6.style.opacity = ".7"
  d7.style.opacity = ".7"
  d8.style.opacity = ".7"
  d9.style.opacity = ".7"
  d10.style.opacity = ".7"
})

//d6
d6.addEventListener("mousemove",function(){
  d6.style.fontWait = "600"
  d1.style.opacity = ".4"
  d2.style.opacity = ".4"
  d3.style.opacity = ".4"
  d4.style.opacity = ".4"
  d5.style.opacity = ".4"
  d7.style.opacity = ".4"
  d8.style.opacity = ".4"
  d9.style.opacity = ".4"
  d10.style.opacity = ".4"
})
d6.addEventListener("mouseleave",function(){
  d6.style.fontWait = "500"
  d1.style.opacity = ".7"
  d2.style.opacity = ".7"
  d3.style.opacity = ".7"
  d4.style.opacity = ".7"
  d5.style.opacity = ".7"
  d6.style.opacity = ".7"
  d7.style.opacity = ".7"
  d8.style.opacity = ".7"
  d9.style.opacity = ".7"
  d10.style.opacity = ".7"
})
//d7
d7.addEventListener("mousemove",function(){
  d7.style.fontWait = "600"
  d1.style.opacity = ".4"
  d2.style.opacity = ".4"
  d3.style.opacity = ".4"
  d4.style.opacity = ".4"
  d5.style.opacity = ".4"
  d6.style.opacity = ".4"
  d8.style.opacity = ".4"
  d9.style.opacity = ".4"
  d10.style.opacity = ".4"
})
d7.addEventListener("mouseleave",function(){
  d7.style.fontWait = "500"
  d1.style.opacity = ".7"
  d2.style.opacity = ".7"
  d3.style.opacity = ".7"
  d4.style.opacity = ".7"
  d5.style.opacity = ".7"
  d6.style.opacity = ".7"
  d7.style.opacity = ".7"
  d8.style.opacity = ".7"
  d9.style.opacity = ".7"
  d10.style.opacity = ".7"
})
//d8
d8.addEventListener("mousemove",function(){
  d8.style.fontWait = "600"
  d1.style.opacity = ".4"
  d2.style.opacity = ".4"
  d3.style.opacity = ".4"
  d4.style.opacity = ".4"
  d5.style.opacity = ".4"
  d6.style.opacity = ".4"
  d7.style.opacity = ".4"
  d9.style.opacity = ".4"
  d10.style.opacity = ".4"
})
d8.addEventListener("mouseleave",function(){
  d8.style.fontWait = "500"
  d1.style.opacity = ".7"
  d2.style.opacity = ".7"
  d3.style.opacity = ".7"
  d4.style.opacity = ".7"
  d5.style.opacity = ".7"
  d6.style.opacity = ".7"
  d7.style.opacity = ".7"
  d8.style.opacity = ".7"
  d9.style.opacity = ".7"
  d10.style.opacity = ".7"
})
//d9
d9.addEventListener("mousemove",function(){
  d9.style.fontWait = "600"
  d1.style.opacity = ".4"
  d2.style.opacity = ".4"
  d3.style.opacity = ".4"
  d4.style.opacity = ".4"
  d5.style.opacity = ".4"
  d6.style.opacity = ".4"
  d8.style.opacity = ".4"
  d7.style.opacity = ".4"
  d10.style.opacity = ".4"
})
d9.addEventListener("mouseleave",function(){
  d9.style.fontWait = "500"
  d1.style.opacity = ".7"
  d2.style.opacity = ".7"
  d3.style.opacity = ".7"
  d4.style.opacity = ".7"
  d5.style.opacity = ".7"
  d6.style.opacity = ".7"
  d7.style.opacity = ".7"
  d8.style.opacity = ".7"
  d9.style.opacity = ".7"
  d10.style.opacity = ".7"
})
//d10
d10.addEventListener("mousemove",function(){
  d10.style.fontWait = "600"
  d1.style.opacity = ".4"
  d2.style.opacity = ".4"
  d3.style.opacity = ".4"
  d4.style.opacity = ".4"
  d5.style.opacity = ".4"
  d6.style.opacity = ".4"
  d8.style.opacity = ".4"
  d7.style.opacity = ".4"
  d9.style.opacity = ".4"
})
d10.addEventListener("mouseleave",function(){
  d10.style.fontWait = "500"
  d1.style.opacity = ".7"
  d2.style.opacity = ".7"
  d3.style.opacity = ".7"
  d4.style.opacity = ".7"
  d5.style.opacity = ".7"
  d6.style.opacity = ".7"
  d7.style.opacity = ".7"
  d8.style.opacity = ".7"
  d9.style.opacity = ".7"
  d10.style.opacity = ".7"
})
let part6img = document.querySelector("#part-6-img");
let part6content = document.querySelector("#part-6-content");
let part6main = document.querySelector(".part-6-main");
part6main.addEventListener("mousemove", function(){
    part6img.style.borderRadius = "110px"
    part6content.style.borderRadius = "110px"
})
part6main.addEventListener("mouseleave", function(){
  part6img.style.borderRadius = "50px 50px 0 0"
  part6content.style.borderRadius = "0 0 50px 50px"
})
// .....................
//part and more
//float-1
document.querySelector(".float-1").addEventListener("mousemove", function(){
  document.querySelector(".float-1-img").style.borderRadius = "65px"
  document.querySelector(".float-1-text").style.borderRadius = "85px"
  document.querySelector(".float-1-text").style.top = "100%"
  document.querySelector(".float-1").style.zIndex = "99"
})
document.querySelector(".float-1").addEventListener("mouseleave", function(){
  document.querySelector(".float-1-img").style.borderRadius = "30px"
  document.querySelector(".float-1-text").style.borderRadius = "initial"
  document.querySelector(".float-1-text").style.top = "50%"
  document.querySelector(".float-1").style.zIndex = "9"
})
//float-2
document.querySelector(".float-2").addEventListener("mousemove", function(){
  document.querySelector(".float-2 .float-1-img").style.borderRadius = "65px"
  document.querySelector(".float-2 .float-1-text").style.borderRadius = "85px"
  document.querySelector(".float-2 .float-1-text").style.top = "100%"
  document.querySelector(".float-2").style.zIndex = "99"
  // document.querySelector(".float-1").style.zIndex = "1"
})
document.querySelector(".float-2").addEventListener("mouseleave", function(){
  document.querySelector(".float-2 .float-1-img").style.borderRadius = "30px"
  document.querySelector(".float-2 .float-1-text").style.borderRadius = "initial"
  document.querySelector(".float-2 .float-1-text").style.top = "50%"
  document.querySelector(".float-2").style.zIndex = "initial"
})
//float-3

document.querySelector(".float-3").addEventListener("mousemove", function(){
  document.querySelector(".float-3 .float-1-img").style.borderRadius = "65px"
  document.querySelector(".float-3 .float-1-text").style.borderRadius = "85px"
  document.querySelector(".float-3 .float-1-text").style.top = "100%"
  document.querySelector(".float-3").style.zIndex = "99"
})
document.querySelector(".float-3").addEventListener("mouseleave", function(){
  document.querySelector(".float-3 .float-1-img").style.borderRadius = "30px"
  document.querySelector(".float-3 .float-1-text").style.borderRadius = "initial"
  document.querySelector(".float-3 .float-1-text").style.top = "50%"
  document.querySelector(".float-3").style.zIndex = "initial"
})
//float-4
document.querySelector(".float-4").addEventListener("mousemove", function(){
  document.querySelector(".float-4 .float-1-img").style.borderRadius = "65px"
  document.querySelector(".float-4 .float-1-text").style.borderRadius = "85px"
  document.querySelector(".float-4 .float-1-text").style.top = "100%"
  document.querySelector(".float-4").style.zIndex = "11"
})
document.querySelector(".float-4").addEventListener("mouseleave", function(){
  document.querySelector(".float-4 .float-1-img").style.borderRadius = "40px"
  document.querySelector(".float-4 .float-1-text").style.borderRadius = "initial"
  document.querySelector(".float-4 .float-1-text").style.top = "50%"
  document.querySelector(".float-4").style.zIndex = "1"
})
//float-5
document.querySelector(".float-5").addEventListener("mousemove", function(){
  document.querySelector(".float-5 .float-1-img").style.borderRadius = "65px"
  document.querySelector(".float-5 .float-1-text").style.borderRadius = "85px"
  document.querySelector(".float-5 .float-1-text").style.top = "100%"
  document.querySelector(".float-5").style.zIndex = "999"
})
document.querySelector(".float-5").addEventListener("mouseleave", function(){
  document.querySelector(".float-5 .float-1-img").style.borderRadius = "50px"
  document.querySelector(".float-5 .float-1-text").style.borderRadius = "initial"
  document.querySelector(".float-5 .float-1-text").style.top = "50%"
  document.querySelector(".float-5").style.zIndex = "1"
})
//float-6
document.querySelector(".float-6").addEventListener("mousemove", function(){
  document.querySelector(".float-6 .float-1-img").style.borderRadius = "65px"
  document.querySelector(".float-6 .float-1-text").style.borderRadius = "85px"
  document.querySelector(".float-6 .float-1-text").style.top = "100%"
  document.querySelector(".float-6").style.zIndex = "999"
})
document.querySelector(".float-6").addEventListener("mouseleave", function(){
  document.querySelector(".float-6 .float-1-img").style.borderRadius = "50px"
  document.querySelector(".float-6 .float-1-text").style.borderRadius = "initial"
  document.querySelector(".float-6 .float-1-text").style.top = "50%"
  document.querySelector(".float-6").style.zIndex = "1"
})
//float-7
document.querySelector(".float-7").addEventListener("mousemove", function(){
  document.querySelector(".float-7 .float-1-img").style.borderRadius = "65px"
  document.querySelector(".float-7 .float-1-text").style.borderRadius = "85px"
  document.querySelector(".float-7 .float-1-text").style.top = "100%"
  document.querySelector(".float-7").style.zIndex = "999"
})
document.querySelector(".float-7").addEventListener("mouseleave", function(){
  document.querySelector(".float-7 .float-1-img").style.borderRadius = "50px"
  document.querySelector(".float-7 .float-1-text").style.borderRadius = "initial"
  document.querySelector(".float-7 .float-1-text").style.top = "50%"
  document.querySelector(".float-7").style.zIndex = "1"
})
//float-8
document.querySelector(".float-8").addEventListener("mousemove", function(){
  document.querySelector(".float-8 .float-1-img").style.borderRadius = "65px"
  document.querySelector(".float-8 .float-1-text").style.borderRadius = "85px"
  document.querySelector(".float-8 .float-1-text").style.top = "100%"
  document.querySelector(".float-8").style.zIndex = "999"
})
document.querySelector(".float-8").addEventListener("mouseleave", function(){
  document.querySelector(".float-8 .float-1-img").style.borderRadius = "50px"
  document.querySelector(".float-8 .float-1-text").style.borderRadius = "initial"
  document.querySelector(".float-8 .float-1-text").style.top = "50%"
  document.querySelector(".float-8").style.zIndex = "1"
})
//float-9
document.querySelector(".float-9").addEventListener("mousemove", function(){
  document.querySelector(".float-9 .float-1-img").style.borderRadius = "65px"
  document.querySelector(".float-9 .float-1-text").style.borderRadius = "85px"
  document.querySelector(".float-9 .float-1-text").style.top = "100%"
  document.querySelector(".float-9").style.zIndex = "999"
})
document.querySelector(".float-9").addEventListener("mouseleave", function(){
  document.querySelector(".float-9 .float-1-img").style.borderRadius = "50px"
  document.querySelector(".float-9 .float-1-text").style.borderRadius = "initial"
  document.querySelector(".float-9 .float-1-text").style.top = "50%"
  document.querySelector(".float-9").style.zIndex = "1"
})
//float-10
document.querySelector(".float-10").addEventListener("mousemove", function(){
  document.querySelector(".float-10 .float-1-img").style.borderRadius = "65px"
  document.querySelector(".float-10 .float-1-text").style.borderRadius = "85px"
  document.querySelector(".float-10 .float-1-text").style.top = "100%"
  document.querySelector(".float-10").style.zIndex = "999"
})
document.querySelector(".float-10").addEventListener("mouseleave", function(){
  document.querySelector(".float-10 .float-1-img").style.borderRadius = "50px"
  document.querySelector(".float-10 .float-1-text").style.borderRadius = "initial"
  document.querySelector(".float-10 .float-1-text").style.top = "50%"
  document.querySelector(".float-10").style.zIndex = "1"
})
//float-11
document.querySelector(".float-11").addEventListener("mousemove", function(){
  document.querySelector(".float-11 .float-1-img").style.borderRadius = "65px"
  document.querySelector(".float-11 .float-1-text").style.borderRadius = "85px"
  document.querySelector(".float-11 .float-1-text").style.top = "100%"
  document.querySelector(".float-11").style.zIndex = "999"
})
document.querySelector(".float-11").addEventListener("mouseleave", function(){
  document.querySelector(".float-11 .float-1-img").style.borderRadius = "50px"
  document.querySelector(".float-11 .float-1-text").style.borderRadius = "initial"
  document.querySelector(".float-11 .float-1-text").style.top = "50%"
  document.querySelector(".float-11").style.zIndex = "1"
})
//float-12
document.querySelector(".float-12").addEventListener("mousemove", function(){
  document.querySelector(".float-12 .float-1-img").style.borderRadius = "65px"
  document.querySelector(".float-12 .float-1-text").style.borderRadius = "85px"
  document.querySelector(".float-12 .float-1-text").style.top = "100%"
  document.querySelector(".float-12").style.zIndex = "999"
})
document.querySelector(".float-12").addEventListener("mouseleave", function(){
  document.querySelector(".float-12 .float-1-img").style.borderRadius = "50px"
  document.querySelector(".float-12 .float-1-text").style.borderRadius = "initial"
  document.querySelector(".float-12 .float-1-text").style.top = "50%"
  document.querySelector(".float-12").style.zIndex = "1"
})
//float-13
document.querySelector(".float-13").addEventListener("mousemove", function(){
  document.querySelector(".float-13 .float-1-img").style.borderRadius = "65px"
  document.querySelector(".float-13 .float-1-text").style.borderRadius = "85px"
  document.querySelector(".float-13 .float-1-text").style.top = "100%"
  document.querySelector(".float-13").style.zIndex = "999"
})
document.querySelector(".float-13").addEventListener("mouseleave", function(){
  document.querySelector(".float-13 .float-1-img").style.borderRadius = "50px"
  document.querySelector(".float-13 .float-1-text").style.borderRadius = "initial"
  document.querySelector(".float-13 .float-1-text").style.top = "50%"
  document.querySelector(".float-13").style.zIndex = "1"
})


document.addEventListener("mousemove", (details) => {
  document.querySelectorAll(".mouse").forEach((element) => {
      const position = element.getAttribute("value");
      const x = (window.innerWidth - details.clientX * position) / 130;
      const y = (window.innerWidth - details.clientX * position) / 130;

      element.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
})

document.querySelector("#a1").addEventListener("mousemove", function(){
  document.querySelector("#a1").style.fontStyle = "italic"
  document.querySelector("#a1").style.opacity = "1"
})
document.querySelector("#a1").addEventListener("mouseleave", function(){
  document.querySelector("#a1").style.fontStyle = "normal"
  document.querySelector("#a1").style.opacity = ".7"
})

document.querySelector("#a2").addEventListener("mousemove", function(){
  document.querySelector("#a2").style.fontStyle = "italic"
  document.querySelector("#a2").style.opacity = "1"
})
document.querySelector("#a2").addEventListener("mouseleave", function(){
  document.querySelector("#a2").style.fontStyle = "normal"
  document.querySelector("#a2").style.opacity = ".7"
})

document.querySelector("#a3").addEventListener("mousemove", function(){
  document.querySelector("#a3").style.fontStyle = "italic"
  document.querySelector("#a3").style.opacity = "1"
})
document.querySelector("#a3").addEventListener("mouseleave", function(){
  document.querySelector("#a3").style.fontStyle = "normal"
  document.querySelector("#a3").style.opacity = ".7"
})
document.querySelector("#a4").addEventListener("mousemove", function(){
  document.querySelector("#a4").style.fontStyle = "italic"
  document.querySelector("#a4").style.opacity = "1"
})
document.querySelector("#a4").addEventListener("mouseleave", function(){
  document.querySelector("#a4").style.fontStyle = "normal"
  document.querySelector("#a4").style.opacity = ".7"
})

// part67
document.querySelector("#spart1").addEventListener("mousemove", function(){
  document.querySelector("#spt1").style.borderRadius = "5vw"
  document.querySelector("#sptext1").style.borderRadius = "5vw"
})
document.querySelector("#spart1").addEventListener("mouseleave", function(){
  document.querySelector("#spt1").style.borderRadius = "2vw 2vw 0 0 ";
  document.querySelector("#sptext1").style.borderRadius = "0 0 2vw 2vw";
})

document.querySelector("#spart2").addEventListener("mousemove", function(){
  document.querySelector("#spt2").style.borderRadius = "5vw"
  document.querySelector("#sptext2").style.borderRadius = "5vw"
})
document.querySelector("#spart2").addEventListener("mouseleave", function(){
  document.querySelector("#spt2").style.borderRadius = "2vw 2vw 0 0 ";
  document.querySelector("#sptext2").style.borderRadius = "0 0 2vw 2vw";
})

document.querySelector("#spart3").addEventListener("mousemove", function(){
  document.querySelector("#spt3").style.borderRadius = "5vw"
  document.querySelector("#sptext3").style.borderRadius = "5vw"
})
document.querySelector("#spart3").addEventListener("mouseleave", function(){
  document.querySelector("#spt3").style.borderRadius = "2vw 2vw 0 0 ";
  document.querySelector("#sptext3").style.borderRadius = "0 0 2vw 2vw";
})

document.querySelector("#spart4").addEventListener("mousemove", function(){
  document.querySelector("#spt4").style.borderRadius = "5vw"
  document.querySelector("#sptext4").style.borderRadius = "5vw"
})
document.querySelector("#spart4").addEventListener("mouseleave", function(){
  document.querySelector("#spt4").style.borderRadius = "2vw 2vw 0 0 ";
  document.querySelector("#sptext4").style.borderRadius = "0 0 2vw 2vw";
})

document.querySelector("#spart5").addEventListener("mousemove", function(){
  document.querySelector("#spt5").style.borderRadius = "5vw"
  document.querySelector("#sptext5").style.borderRadius = "5vw"
})
document.querySelector("#spart5").addEventListener("mouseleave", function(){
  document.querySelector("#spt5").style.borderRadius = "2vw 2vw 0 0 ";
  document.querySelector("#sptext5").style.borderRadius = "0 0 2vw 2vw";
})
//nav open and close
let itag = document.querySelector(".ri-menu-3-fill");
let mainnav = document.querySelector(".main-nav-resp");
itag.addEventListener("click", function(){
   mainnav.style.top = "0%";
   mainnav.style.display = "flex";
})

let cross = document.querySelector(".ri-close-fill");
let crossnav = document.querySelector(".main-nav-resp");
  cross.addEventListener("click", function(){
    crossnav.style.top = "-100%";
})
let tl = gsap.timeline();
tl.from("#nav", {
  y: "-25vh",
  opacity:0,
  duration:2.5
},"same")
tl.from("#part1 .swiper", {
  y: -200,
  duration: 2,
  ease: "power1.out",
  opacity: 0
},"same")