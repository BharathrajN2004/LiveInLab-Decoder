// import { appWindow } from '@tauri-apps/api/window'
// const { invoke } = window.__TAURI__.tauri;


// main functions used

function click_work(obj, tochange) {
    obj.addEventListener('mouseover', () => {
        tochange.classList.remove('none');
    })
    tochange.addEventListener('mouseover',()=>{
        tochange.classList.remove('none');
    })
    tochange.addEventListener('mouseout',()=>{
        tochange.classList.add('none');
    })
    obj.addEventListener('mouseout',()=>{
        tochange.classList.add('none');
    })
}

function hower_work(obj,tochange){
    obj.addEventListener('mouseover',()=>{
        tochange.classList.remove('none');
    })
    obj.addEventListener('mouseout',()=>{
        tochange.classList.add('none');
    })
}


// side nav bar tags 

var project = document.querySelector('#pro');
var colla = document.querySelector('#colla');
var asset = document.querySelector('#asset');
var data = document.querySelector('#data');
var server = document.querySelector('#server');
var api = document.querySelector('#api');
var auth = document.querySelector('#auth');
var hub = document.querySelector('#hub');


var prolab = document.querySelector('#prolab');
var collab = document.querySelector('#collab');
var assetlab = document.querySelector('#assetlab');
var datalab = document.querySelector('#datalab');
var serverlab = document.querySelector('#serverlab');
var apilab = document.querySelector('#apilab');
var authlab = document.querySelector('#authlab');
var hublab = document.querySelector('#hublab');


// 
hower_work(project,prolab);

hower_work(colla,collab);

hower_work(asset,assetlab);

hower_work(data,datalab);

hower_work(server,serverlab);

hower_work(api,apilab);

hower_work(auth,authlab);

hower_work(hub,hublab);



// end of side nav bar tags


// start of top bar navigation

var fileicon = document.querySelector('#file');
var buildicon = document.querySelector("#build");
var displayicon = document.querySelector('#display');
var upladicon = document.querySelector('#upload');

var filelist = document.querySelector('#filelist');
var buildlist = document.querySelector('#buildlist');
var displaylist = document.querySelector('#displaylist');
var uploadlist = document.querySelector('#uploadlist');

click_work(fileicon, filelist);
click_work(buildicon,buildlist);
click_work(displayicon,displaylist);
click_work(upladicon,uploadlist);
