window.addEventListener('scroll', scrollNav);
function scrollNav () {
    if (window.scrollY >= window.innerHeight - 75){
        document.getElementById('header-sticky').style.transform = 'translateY(0px)';
    } else if (window.scrollY < window.innerHeight){
        document.getElementById('header-sticky').style.transform = 'translateY(-135px)';        
    }
}

function showNav () {
    document.getElementById('menu-container').style.transform = 'translateX(0px)';
}

function hideNav () {
    document.getElementById('menu-container').style.transform = 'translateX(601px)';    
}