
const pic_src = ["筆.JPG","辞典.JPG","作品一覧.JPG","筆と墨.JPG"]
let num = -1;

function slideshow_timer(){
    if (num===3){
        num = 0;
    }else{
        num++
    }

    document.getElementById("mypic").src = pic_src[num];

}

setInterval(slideshow_timer,1500);
