const scroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true
});


var elemc = document.querySelector("#elems-container");
var fixed = document.querySelector("#whole-img")
elemc.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})

elemc.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem");
elems.forEach(function(e){
e.addEventListener("mouseenter",function(){
var img = e.getAttribute("data-image")
       fixed.style.backgroundImage = `url(${img})`
})
});


const design = document.querySelector(".design")
const project = document.querySelector(".project")
const education = document.querySelector(".education");
const para = document.querySelector("#page4-left .page4-para");

const image = document.querySelector(".page4-img");
const src = image.getAttribute("src");


function page4(){
    design.addEventListener("click", function(){
        design.style.borderLeft = '3px solid #FF4500';
        project.style.borderLeft = '3px solid #504A45'
        education.style.borderLeft = '3px solid #504A45'
        design.style.color = "#ffff"
        project.style.color = "#504A45"
        education.style.color = "#504A45"
        para.innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
        image.src = `${"https://diy.sndimg.com/content/dam/images/diy/fullset/2016/Mar/21/1/CI-Bethany-Nauert_Studio-Makeover-sitting-area-after2.jpg.rend.hgtvcom.1280.960.suffix/1458591141404.jpeg"}`
        
    })
    
    project.addEventListener("click", function(){
        design.style.borderLeft = '3px solid #504A45';
        project.style.borderLeft = '3px solid #FF4500'
        education.style.borderLeft = '3px solid #504A45'
        project.style.color = "#ffff"
         design.style.color = "#504A45"
         education.style.color = "#504A45"
         para.innerHTML = "We recently spend $500M in our latest projects some of them are AI ,AR,VR and Automation projects. Collabration with the different organization to enhace the projects quality and for better serving oppurtunities"
         image.src = `${"https://pc-tablet.co.in/wp-content/uploads/2024/03/LTTS-Cybersecurity-Lab-1280x960.jpg"}`
    })
    
    education.addEventListener("click", function(){
        design.style.borderLeft = '3px solid #504A45';
        project.style.borderLeft = '3px solid #504A45'
        education.style.borderLeft = '3px solid #FF4500'
        project.style.color = "#504A45"
         design.style.color = "#504A45"
         education.style.color = "#ffff"
         para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis eveniet sint a libero nam temporibus, pariatur reiciendis in. Modi quos reiciendis debitis ea recusandae quidem earum soluta"
         image.src = `${"https://web.whoi.edu/obslab/wp-content/uploads/sites/98/2017/08/DSC_0433edit.jpg"}`
    })
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
page4()