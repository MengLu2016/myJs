/**
 * Created by xiaolulu on 2016/12/27.
 */
var textArea=document.getElementById("textArea");
var insert=document.getElementById("insert");
var input=document.getElementById("input");
var search=document.getElementById("search");
var display=document.getElementById("display");
var span=document.getElementsByTagName("span");
var textValue=null;
var arr=[];
var value=[];
var inputValue=null;
function gettextValue(textValue){
    var re=/^[a-zA-Z0-9\u4e00-\u9fa5/\n|\s+|\,|\，|\、|\;|\；]+$/;
    if(re.test(textValue)) {
        value=textValue.split(/\n|\s+|\,|\，|\、|\;|\；/);
        arr.push(value);
        // return arr;
    }
}
function render(){
    for(var i=0;i<value.length;i++) {
        display.innerHTML += "<span class='show'>" + value[i] + "</span>";
    }
}
insert.addEventListener("click",function(){
    textValue=textArea.value;
    // var i=arr.length;
    gettextValue(textValue);
    render()
});
function sear(){
    inputValue=input.value;
    arr.forEach(function(item){
        item.forEach(function(value,i){
            if(value===inputValue) {
                span[i].style.backgroundColor = "yellow"
            }
        })
    })
}
search.addEventListener("click",function () {
    sear();
});
