function likes(element)
{
    console.log("button clicked");
    var changevalue = document.querySelector("#likecounter");
    var likesstr =changevalue.innerHTML;
    const words =likesstr.split(' ');
    var num = parseInt(words[0]);
    num++;
    likesstr = num+""+words[1];
    changevalue.innerHTML = likesstr;
}

