


function hower_work(obj,tochange){
    obj.addEventListener('mouseover',()=>{
        tochange.classList.remove('none');
    })
    obj.addEventListener('mouseout',()=>{
        tochange.classList.add('none');
    })
}


// side nav bar tags 

var community = document.querySelector('#comm');
var chat = document.querySelector('#cha');
var jigsawhub = document.querySelector('#jiha');
var fileacc = document.querySelector('#filac');
var serverhost = document.querySelector('#serhos');

var communitylab = document.querySelector('#community');
var chatlab = document.querySelector('#chat');
var jihublab = document.querySelector('#jighub');
var filelab = document.querySelector('#fileaccess');
var serverlab = document.querySelector('#server');

// 
hower_work(community,communitylab);

hower_work(chat,chatlab);

hower_work(jigsawhub,jihublab);

hower_work(fileacc,filelab);

hower_work(serverhost,serverlab);