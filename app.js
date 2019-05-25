function openMenu(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
} 

document.getElementById("defaultOpen").click();

const list = ['cust1', 'cust2', 'cust3', 'cust4', 'cust5' ];

document.getElementById(list[1]).style.display = "none";
document.getElementById(list[2]).style.display = "none";
document.getElementById(list[3]).style.display = "none";
document.getElementById(list[4]).style.display = "none";
var i = 0;
showSlides();

function showSlides() {
    
    document.getElementById(list[i%5]).style.display = "none";
    i = i+1;
    document.getElementById(list[i%5]).style.display = "block";
    console.log(i);
    if(i==100)
        i=0;
    setTimeout(showSlides, 3000);
    
}


// Foodie animation

let spans = document.querySelectorAll('.word span');
spans.forEach((span, idx) => {
//	span.addEventListener('hover', (e) => {
    span.addEventListener('mouseover', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});


// Select food animation
var $window = $(window);
var $elem = $(".my-card")

function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        $elem.addClass("scale-up-center")
    }
});




