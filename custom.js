var preloader = document.getElementsByClassName('pre')[0]
var website = document.getElementsByClassName('website_page')[0]

setTimeout(function (){
    preloader.classList.add('hide')
    website.classList.add('show')

}, 5000)