
function likes(id)
{
    console.log("button clicked");
    var changevalue = document.querySelector(id);
    var likesstr =changevalue.innerHTML;
    const words =likesstr.split(' ');
    var num = parseInt(words[0]);
    num++;
    likesstr = num+" "+words[1];
    changevalue.innerHTML = likesstr;
}
