function upDate(previewPic){
   
    var pic1 = 'url(' + previewPic.src + ')';
    document.getElementById("image").style.backgroundImage = pic1;
    document.getElementById("image").innerHTML = previewPic.alt;
    
    }
    
    function unDo(){
    
    var pic1 = 'none';
    document.getElementById("image").style.backgroundImage = pic1;
    document.getElementById("image").innerHTML = 'Hover over an image below to appear here.';
    }