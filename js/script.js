// Smooth Scrolling
$('a.btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});


// Navbar changes color on scroll - FIX Later
window.addEventListener('scroll', function() {
    let mainNavBar = document.getElementById("#mainNav");
    let windowPosition = window.scrollY > 0;
    mainNavBar.addclassList.toggle('scrolling-active', windowPosition)
})