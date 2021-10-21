function myname(id){
    var value=document.querySelector(id);
    console.log("entered");
    value.innerHTML = "kumari";
}
function removeprofile(id1,id2,id3){
    var element1=document.querySelector(id1);
    var count = parseInt(element1.innerHTML);
    element1.innerHTML = count -1;
    var element2=document.querySelector(id2);
    var count = parseInt(element2.innerHTML);
    element2.innerHTML = count -1;
    var pics=document.querySelector(id3);
    pics.remove();
}

function addprofile(id1,id2,id3){
    var element1 = document.querySelector(id1);
    var count = parseInt(element1.innerHTML);
    element1.innerHTML = count + 1;
    var element2 = document.querySelector(id2);
    var count = parseInt(element2.innerHTML);
    element2.innerHTML = count + 1;
    var pics=document.querySelector(id3);
    pics.remove();
 
}
function removeprofile1(id1,id2,id3){
    var element1=document.querySelector(id1);
    var count = parseInt(element1.innerHTML);
    element1.innerHTML = count -1;
    var element2=document.querySelector(id2);
    var count = parseInt(element2.innerHTML);
    element2.innerHTML = count -1;
    var pics=document.querySelector(id3);
    pics.remove();
}

function addprofile1(id1,id2,id3){
    var element1 = document.querySelector(id1);
    var count = parseInt(element1.innerHTML);
    element1.innerHTML = count + 1;
    var element2 = document.querySelector(id2);
    var count = parseInt(element2.innerHTML);
    element2.innerHTML = count + 1;
    var pics=document.querySelector(id3);
    pics.remove();
}
