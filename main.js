
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signIn').addEventListener("click", gotoPage);
    document.getElementById('start1').addEventListener("click",gotoPage);
    document.getElementById('start2').addEventListener("click", gotoPage);
    document.getElementById('rent').addEventListener("click", gotoPage);
    document.getElementById('lion').addEventListener("click",gotoPage);
    document.getElementById('disc').addEventListener("click", gotoPage);
    document.getElementById('bbc').addEventListener("click", gotoPage);
    document.getElementById('man').addEventListener("click", gotoPage);
    document.getElementById('hoi').addEventListener("click", gotoPage);
    document.getElementById('chau').addEventListener("click", gotoPage);
    document.getElementById('amc').addEventListener("click", gotoPage);
    document.getElementById('eros').addEventListener("click", gotoPage);
    document.getElementById('mubi').addEventListener("click",gotoPage); 
    document.getElementById('vf').addEventListener("click", gotoPage);
    document.getElementById('stin').addEventListener("click", gotoPage);
    document.getElementById('doc').addEventListener("click",gotoPage); 

    document.getElementById('h-all').addEventListener("click",stayPage); 
    document.getElementById('h-mov').addEventListener("click",gotoPage); 
    document.getElementById('h-tv').addEventListener("click",gotoPage); 

    document.getElementById('prime').addEventListener("click",stayPage); 
   
    document.getElementById('s-all').addEventListener("click",gotoPage); 
    document.getElementById('s-rent').addEventListener("click",gotoPage); 
    document.getElementById('s-chan').addEventListener("click",gotoPage); 

    document.getElementById('liv').addEventListener("click",gotoPage); 

    document.getElementById('free').addEventListener("click",gotoPage); 

    document.getElementById('ser-but').addEventListener("click",visible);

    document.getElementById('ser-text').addEventListener('blur',exitFrom);

    // const myCollection = document.getElementsByClassName("menu-but");
    // const buttn = Array.from(document.getElementsByClassName('menubut'));
    //     buttn.forEach(menubut => {
    //     menubut.addEventListener('click', function(){
    //     window.location.href="second.html";
    //     console.log('but clicked'); 
    //     });
    // });
    

});

function gotoPage(){
    window.location.href="second.html";
}

function stayPage(){
    window.location.href="index.html";
}
function  visible(){
    document.getElementById("ser").style.visibility='visible';
}
function  exitFrom(){
    document.getElementById("ser").style.visibility='hidden';
}