function domSelector (value){
    return document.querySelector(value);
}
function domSelectorAll (value){
    return document.querySelectorAll(value);
}

const allCommingMassage = domSelectorAll('.comming');
allCommingMassage.forEach((comming) => {
    comming.addEventListener('click', function () {
        document.querySelector('.menu-bar').classList.add('d-none')
        alert('Comming Soon')
    })
})

domSelector('#menuBtn').addEventListener('click', function() {
    document.querySelector('.menu-bar').classList.toggle('d-none')
})


// document.querySelector('.menu-bar').addEventListener('click', function(e){
//     if(e.target){
//         alert('Yes')
//     }
// })
document.getElementById('postEdit').addEventListener('click', () => {
   
    document.querySelector('.menu-bar').classList.add('d-none')

    document.querySelector('.edit-popup').classList.add('active');
    
    document.getElementById('editePageCode').value = document.getElementById('mainContent').textContent;


})

let globerText ;

document.getElementById('editePageCode').addEventListener('keyup',function(){
    document.getElementById('saveButton').style.background = '#1b74e4';
    document.getElementById('saveButton').style.color = 'white';
    document.getElementById('saveButton').style.pointerEvents = 'auto';
    globerText = true;
})

document.getElementById('editePageCode').addEventListener('change',function(){
    


})
document.getElementById('saveButton').addEventListener('click', function() {
    document.querySelector('.edit-popup').classList.remove('active');
    document.getElementById('mainContent').textContent = document.getElementById('editePageCode').value; 
})

document.getElementById('popupClose').addEventListener('click', function() {
    if( globerText ){
        document.querySelector('.custom-alert').classList.add('active')
    }else{
        document.querySelector('.custom-alert').classList.remove('active')
        document.querySelector('.edit-popup').classList.remove('active');
    }
})
document.getElementById('keepEdit').addEventListener('click', function() {
    document.querySelector('.custom-alert').classList.remove('active')
})
document.getElementById('discard').addEventListener('click', function() {
    document.querySelector('.custom-alert').classList.remove('active')
    document.querySelector('.edit-popup').classList.remove('active');
})



