var s = document.getElementById('box');

// contain images in an array
var image = ['slide1', 'slide2', 'slide3', 'slide4'];

var i = image.lengh;


// function for next slide

function nextImage(){
    if(i<image.length){
        i = i + 1;
    }else{
        i = 1;
    }
    document.getElementById('box').innerHTML = "<img src='../images/"+image[i-1]+".png'>";
}

function prevImage(){
   if(i<image.length+1 && i>1){
        i = i - 1;
    }else{
        i = image.length;
    }
    document.getElementById('box').innerHTML = "<img src='../images/"+image[i-1]+".png'>";
}