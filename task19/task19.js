var arr = [];
var arra=[];
var inputValue = null;
var input = document.getElementById("Input");
var display = document.getElementById("display");
var inputLeft = document.getElementById("inputLeft");
var inputRight = document.getElementById("inputRight");
var outputLeft = document.getElementById("outputLeft");
var outputRight = document.getElementById("outputRight");
var oshow=document.getElementsByClassName("show");


function addLeft(num) {
    arr.unshift(num);
}

function addRight(num) {
    arr.push(num);
}

function reduceLeft() {
    arr.shift();
}

function reduceRight() {
    arr.pop();
}

function rederEle() {
    display.innerHTML = arr.join(' ');

}
// function sortArr(){
//     var temp=oshow[0].offsetHeight;
//     for(var i=0;i<arr.length;i++){
//         for(var j=1;j<arr.length-i-1;j++){
//            if(oshow[j-1].offsetHeight>oshow[j].offsetHeight){
//                temp=arr[j-1];
//                arr[j-1]=arr[j];
//                arr[j]=temp;
//            }
//         }
//     }
// }
// function getLeft(i){
//     var getLeft=0;
//     if(oshow[i-1].clientHeight>oshow[i].clientHeight){
//         getLeft=30*(i-1)+10;
//     }else{
//         getLeft=30*i+10;
//     }
//     return getLeft
// }
// function getHeight(){
//     inputValue = input.value;
//     arra.push(inputValue)
// }

inputLeft.addEventListener('click', function () {
    inputValue = input.value;
    var i=arr.length;
    var num = "<div class='show' style='height: "+inputValue+"px;left:"+(30*i+10)+"px;'></div>";
    addLeft(num);
    // sortArr();
    rederEle();
});

inputRight.addEventListener('click', function () {
    inputValue = input.value;
    var i=arr.length;
    var num = "<div class='show' style='height: "+inputValue+"px;left:"+(30*i+10)+"px;'></div>";
    addRight(num);
    // sortArr();
    rederEle();
});

outputLeft.addEventListener('click', function () {
    reduceLeft();
    rederEle();
});

outputRight.addEventListener('click', function () {
    reduceRight();
    rederEle();
});
