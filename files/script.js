function openNav(){
    document.getElementById("mySidebar").style.width = "300px";
}
function closeNav(){
    document.getElementById("mySidebar").style.width = "0";
}

// Botton to Top
var btn = $('#button-top');
$(window).scroll(function() {
    if($(window).scrollTop() > 400){
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});