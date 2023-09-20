// to make opening page


// About section and buttons 
$( document ).ready(function() {
    
    const scroller = document.querySelector("#about_scroll_section");
    var currentPage = "about_me"; 
    $('#one_btn').css("display", "none");
    $('#two_btn').css("display", "none");
    $('#three_btn').css("display", "none");
    $('#four_btn').css("display", "none");
    $('#line').css("display", "none");
    $('#contact_section').css("display", "none");

    //about scroll function
    scroller.addEventListener("scroll", (event) => {
        var position = `${scroller.scrollTop}`;
        if(position > 115 && position < 231){
            // who am I section
            document.getElementById("personal_image").src="/images/who_picture.jpg";
            document.getElementById("background_square").style.backgroundColor = "rgba(239, 239, 208, 1)"; 
            document.getElementById("main_background").style.backgroundColor = "rgba(10, 33, 15, 1)";  
            var buttons = document.getElementsByTagName("button"); 
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.color = "white";
            }
            // buttons
            document.getElementById("one_btn").style.backgroundColor = "rgba(239, 239, 208, 1)";
            document.getElementById("one_btn").style.color = "black";
        }
        else if(position > 230 && position < 600){
            // why computer science
           document.getElementById("personal_image").src ="/images/hiking.jpg";
        }
        else if( position < 951 && position > 620){
            // what am I passionate about
            document.getElementById("personal_image").src ="/images/family.jpg";
            document.getElementById("background_square").style.backgroundColor = "rgba(239, 239, 208, 1)";  
           document.getElementById("main_background").style.backgroundColor = "rgba(10, 33, 15, 1)";  
           var buttons = document.getElementsByTagName("button");
           for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.color = "white";
            }
            // buttons
            document.getElementById("one_btn").style.backgroundColor = "rgba(239, 239, 208, 1)";
            document.getElementById("one_btn").style.color = "black";
            document.getElementById("two_btn").style.backgroundColor = "transparent";
            document.getElementById("two_btn").style.color = "white";
        }
        ////////////////////////////////////////////////////////////////////////
        else if(position < 1420 && position > 950){
            // Ktp 
            document.getElementById("personal_image").src="/images/ktp.jpg";
            document.getElementById("main_background").style.backgroundColor = "rgba(197, 224, 179, 1)"; 
            document.getElementById("background_square").style.backgroundColor = "rgba(10, 33, 15, 1)"; 
            var buttons = document.getElementsByTagName("button"); 
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.color = "black";
            }
            document.getElementById("one_btn").style.backgroundColor = "transparent";
            document.getElementById("one_btn").style.color = "black";
            document.getElementById("two_btn").style.backgroundColor = "rgba(10, 33, 15, 1)";
            document.getElementById("two_btn").style.color = "white";
        }
        else if( position > 1400 && position < 1840){
            document.getElementById("personal_image").src="/images/daily.jpg";
        }
        else if( position < 2500 && position > 1840){
            document.getElementById("personal_image").src="/images/miss.jpg";
            document.getElementById("main_background").style.backgroundColor = "rgba(197, 224, 179, 1)"; 
            document.getElementById("background_square").style.backgroundColor = "rgba(10, 33, 15, 1)"; 
            var buttons = document.getElementsByTagName("button"); 
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.color = "black";
            }
            document.getElementById("three_btn").style.backgroundColor = "transparent";
            document.getElementById("two_btn").style.backgroundColor = "rgba(10, 33, 15, 1)";
            document.getElementById("two_btn").style.color = "white";
        }
        // //////////////////////////////////////////////////////////////////////
        else if(position < 2490 && position > 2201){
            document.getElementById("personal_image").src="/images/dsg.jpeg";
            document.getElementById("main_background").style.backgroundColor = "rgba(106, 153, 78, 1)"; 
            document.getElementById("background_square").style.backgroundColor = "white"; 
            document.getElementById("three_btn").style.backgroundColor = "white";
            document.getElementById("three_btn").style.color = "black";
            document.getElementById("two_btn").style.backgroundColor = "transparent";
            document.getElementById("two_btn").style.color = "black";
        }
        // //////////////////////////////////////////////////////////////////////
        else if(position > 2500){
            document.getElementById("personal_image").src="/images/dsg.jpeg";
            document.getElementById("main_background").style.backgroundColor = "rgba(106, 153, 78, 1)"; 
            document.getElementById("background_square").style.backgroundColor = "white"; 
            document.getElementById("three_btn").style.backgroundColor = "white";
            document.getElementById("three_btn").style.color = "black";
            document.getElementById("two_btn").style.backgroundColor = "transparent";
            document.getElementById("two_btn").style.color = "black";
        }
    });


    // //////////////////////////////////////////////////////////////////////////////////
    const oneButton = document.querySelector("#one_btn");
    oneButton.addEventListener("click", (event) => {
        document.getElementById('about_section').scrollIntoView();
    });


    const twoButton = document.querySelector("#two_btn");
    twoButton.addEventListener("click", (event) => {
        document.getElementById('club_section').scrollIntoView();
    });

    const threeButton = document.querySelector("#three_btn");
    threeButton.addEventListener("click", (event) => {
        var pdfFile = './images/resume.pdf';
        window.open(pdfFile, '_blank');

    });

    const fourButton = document.querySelector("#four_btn");
    fourButton.addEventListener("click", (event) => {
        document.getElementById('contact_section').scrollIntoView();
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); 
        var position2 = `${scroll.scrollTop}`;
        console.log(position2)

    
        if(scroll >= 450){
            $('header').addClass('sticky');
            $('.titlePage').addClass('hide');
            $('body').addClass('move');
            $('#navigationBar').css("display", "block");
            $('#one_btn').css("display", "block");
            $('#two_btn').css("display", "block");
            $('#three_btn').css("display", "block");
            $('#four_btn').css("display", "block");
            $('#line').css("display", "block");
            var buttons = document.getElementsByTagName("button"); 
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.color = "white";
            }
            console.log("we got there");
           document.getElementById("main_background").style.backgroundColor = "rgba(10, 33, 15, 1)"; 
           document.getElementsByClassName("button_about_me").style.backgroundColor = "transparent";
        }
        else{
            $('header').removeClass('sticky');
            $('.titlePage').removeClass('hide');
            $('body').removeClass('move');
            $('#one_btn').css("display", "none");
            $('#two_btn').css("display", "none");
            $('#three_btn').css("display", "none");
            $('#four_btn').css("display", "none");
            $('#line').css("display", "none");
            console.log("we got here");
            document.getElementById("main_background").style.backgroundColor = "white";  
            document.getElementsByClassName("button_about_me").style.backgroundColor = "white"; 
            document.getElementById("one_btn").style.color = "black";
        }
    });

});

// Animation for Heading 
$( document).ready(function() {
    const a_letter = document.querySelector("#a_passionate");
    const b_letter = document.querySelector("#b_imaginable");
    const b2_letter = document.querySelector("#b_amiable");
    const i_letter = document.querySelector("#i_letter");
    const e_letter = document.querySelector("#e_letter");
    const titlePage = document.querySelector(".titlePage");

    function transition1(){
        a_letter.className = "transition";
    }

    function transition2(){
        b_letter.className = "transition";
    }

    function transition3(){
        b2_letter.className = "vertical_transition";
    }

    function transition4(){
        i_letter.className = "transition";
    }

    function transition5(){
        e_letter.className = "vertical_transition";
    }
    

    titlePage.addEventListener("mouseenter", (event) => {
        //add animation to box
        setTimeout(transition1, 1000); //executes once time is done
        setTimeout(transition2, 2000);
        setTimeout(transition3, 3000);
        setTimeout(transition4, 4000);
        setTimeout(transition5, 5000);
    });
});

