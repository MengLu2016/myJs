/**
 * Created by xiaolulu on 2016/12/29.
 */
var btn=document.getElementsByTagName("input");
var btnPre=btn[0];
var btnIn=btn[1];
var btnNext=btn[2];
var Root=document.getElementsByClassName("root")[0];
var arr=[];//用于存储节点
var timer=null;
window.onload=function() {
    btnPre.addEventListener("click", function () {
        reset();
        prev(Root);
        render()
    });
    btnIn.onclick = function () {
        reset();
        Inorder(Root);
        render();
    };
    btnNext.onclick = function () {
        reset();
        next(Root);
        render()
    };
}
//前序
function prev(node){
    if(!(node==null)){
        arr.push(node);
        prev(node.firstElementChild);
        prev(node.lastElementChild);
    }
}
//中序
function Inorder(node){
    if(!(node==null)){
        Inorder(node.firstElementChild);
        arr.push(node);
        Inorder(node.lastElementChild)
    }
}
//后序
function next(node) {
    if(!(node==null)){
        prev(node.firstElementChild);
        prev(node.lastElementChild);
        arr.push(node);
    }
}
//渲染节点
function render(){
    var i=0;
    arr[i].style.backgroundColor="blue";
    timer=setInterval(function(argument){
        i++;
        if(i<arr.length){
            arr[i-1].style.backgroundColor="#fff";
            arr[i].style.backgroundColor="blue";
        }else{
            clearInterval(timer);
            arr[arr.length-1].style.backgroundColor="#fff"
        }
    },500)

}
function reset(){
    arr=[];
    clearInterval(timer);
    var divs=document.getElementsByTagName("div");
    for(var i=0;i<divs.length;i++){
        divs[i].style.backgroundColor="red"
    }
}