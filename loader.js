document.addEventListener("DOMContentLoaded", () => {
    //.Materialize component functions
    M.AutoInit(); //!All other components are handled by this code 
    
    var elem = document.querySelector(".fixed-action-btn");
    var instance = M.FloatingActionButton.init(elem, {
       toolbarEnabled: true,
    });

    var w=window.innerWidth;
    //console.log(w);
    const pulseBtn = document.getElementById('pulse');
    const hello = document.getElementsByClassName('key');
    const toLeft = document.getElementsByClassName('toLeft');
    let i = 0;

    if (w < 1000) {
        console.log(hello.length);
        pulseBtn.style.display = "none";
        for (i = 0; i < hello.length; i++) {
            hello[i].style.fontSize = "30vw";
            console.log(hello[i]);
        }
        for (i = 0; i < toLeft.length; i++) {
            toLeft[i].style.textAlign = "left";
        }
        
    }
    

    window.addEventListener("resize", () => {
        w = window.innerWidth;
        if (w < 1000) {
            //console.log(w);
            pulseBtn.style.display = "none";
            for (let i = 0; i < hello.length; i++) {
            hello[i].style.fontSize = "30vw";
            }
            for (i = 0; i < toLeft.length; i++) {
                toLeft[i].style.textAlign = "left";
            }
            
        }
        else {
            pulseBtn.style.display = "inline-block";
            for (i = 0; i < hello.length; i++) {
                hello[i].style.fontSize = "15vw";
            }
            for (i = 0; i < toLeft.length; i++) {
                toLeft[i].style.textAlign = "inherit";
            }
        }

    });
 });

 
 function fnCloseSidenav() {
    let elem = document.querySelector(".sidenav");
    let instanceSidenav = M.Sidenav.init(elem);
    instanceSidenav.close();
 }
 
 function fnSlider() {
    //.Slider code
    let elem = document.querySelector(".slider");
    let instanceSlider = M.Slider.init(elem, {
       full_width: true,
       indicators: true,
    });
    //.Getting the slider going
    instanceSlider.next();
 }
 
 function fnCoffeeModeForMobile() {
    fnCloseSidenav();
    fnChangeTheme();
 }
 
 function fnChangeTheme() {
    //.html elements
    let modeIcon = document.querySelectorAll(".modeIcon");
    //.the header elements
    let headers = document.querySelectorAll(".header");
    let introtext = document.querySelector(".move");
    //.css var
    let root = document.querySelector(":root");
    let rootStyle = getComputedStyle(root);
    //.Using number CSS var as a boolean
    if (rootStyle.getPropertyValue("--number") == 0) {
       //.changing the headers color to white
       for (let i = 0; i < headers.length; i++) {
          headers[i].style.color = "white";
       }
       introtext.style.color = "white";
       //.Changing background_color to coffeeMode
       root.style.setProperty("--default", "#183D3D");
       root.style.setProperty("--number", 1);
       //.Icon for desktop
       modeIcon[0].innerHTML = "<i class='material-icons medium'>adjust</i>";
       //.Icon for mobile
       modeIcon[1].innerHTML =
          "<i class='material-icons small'  style='transform: translateY(25%);color: #5c352d;'>adjust</i>";
 
       modeIcon[2].innerHTML = "<i class='material-icons small'>adjust</i>";
    } else if (rootStyle.getPropertyValue("--number") == 1) {
       //.changing the headers color to black
       for (let i = 0; i < headers.length; i++) {
          headers[i].style.color = "black";
       }introtext.style.color = "black";
       //.changing background_color to default(white)
       root.style.setProperty("--default", "white");
       root.style.setProperty("--number", 0);
       //.Icon for desktop
       modeIcon[0].innerHTML =
          "<i class='material-icons medium'>panorama_fish_eye</i>";
       //.Icon for mobile
       modeIcon[1].innerHTML =
          "<i class='material-icons small' style='transform: translateY(25%);color: rgb(104, 104, 104);'>panorama_fish_eye</i>";
 
       modeIcon[2].innerHTML =
          "<i class='material-icons small' >panorama_fish_eye</i>";
    }
 }
 
 //Everything related to read more in about section
 let btn = document.querySelector(".readMoreBtn");
 btn.innerHTML = "Read more";
 let readMoreText = document.querySelector(".readMoreText");
 
 function fnReadMore() {
    if (btn.textContent == "Read more") {
       //.adding text to About
       readMoreText.innerHTML +=
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maxime nisi tempora reprehenderit provident sequi deserunt consequatur enim cumque soluta iure numquam amet saepe temporibus, aliquam et voluptatem esse quae quos corporis sapiente? Veniam, rerum minima ullam quos recusandae numquam tempore repellendus deleniti velit voluptatum? Laborum, soluta ipsum vitae asperiores voluptate vero veritatis praesentium aperiam minus quam saepe, reiciendis omnis quisquam aut vel quia porro quis modi iste rem enim, explicabo delectus nihil. Vitae excepturi nesciunt alias sit. Dolorum repellendus numquam aliquid in maxime porro quasi deleniti eum. Vitae deserunt optio nulla voluptates dolorem corporis adipisci eos sapiente aspernatur aliquam!";
       //.Changing btn text
       btn.innerHTML = "Read less";
    } else if (btn.textContent == "Read less") {
       //.removing extra text from about
       readMoreText.innerHTML =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium consequatur quisquam, illum autem harum nulla?     Nesciunt pariatur laudantium rerum mollitia quisquam. Delectus repellendus tempora enim. Itaque molestiae facere accusamus,    alias laudantium consequuntur vero cum odio officia veniam dolorum dignissimos aut mollitia suscipit labore minima possimus sed perferendis, est optio.";
       //.Changing btn text
       btn.innerHTML = "Read more";
    }
 }
 