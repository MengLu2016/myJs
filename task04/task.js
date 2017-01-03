// (function () {
//     var city_input = document.getElementById("aqi-city-input");
//     var value_input = document.getElementById("aqi-value-input");
//     var table = document.getElementById("aqi-table");
//     var pre_city = city_input.value;
//     var pre_value = value_input.value;
//
//     function city() {
//         var city_info = document.getElementById("city_info");
//         var reg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
//         if (!reg.test(pre_city)) {
//             alert("城市名输入不正确")
//         }
//     }
//
//     function value() {
//         var value_info = document.getElementById("value_info");
//         var reg = /^[1-9]d*$/;
//         if (!reg.test(pre_value)) {
//             alert("输入的不正确")
//         }
//     }
//
//     function createTable() {
//         var btn = document.getElementById("add-btn");
//         btn.onclick = function () {
//             table.innerHTML = "<tr> <th>城市</th><th>空气质量</th><th>操作</th> </tr>";
//             table.innerHTML += "<tr> <td>" + pre_city + "</td><td>" + pre_value + "</td><td>" +
//                 "<span id='delate'>删除</button></td> </tr>"
//         }
//     }
//
//     createTable();
// })();
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var cityInput= document.getElementById("aqi-city-input");
var aqiInput= document.getElementById("aqi-value-input");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city=cityInput.value.trim();
    var aqi=aqiInput.value.trim();
    if(!city.match(/^[a-zA-Z\u4e00-\u9fa5]+$/)){
        alert("城市名必须为中英文字符");
        return;
    }
    if (!aqi.match(/^\d+$/)){
        alert("空气质量指数必须为整数");
        return;
    }
    aqiData[city]=aqi;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var table = document.getElementById("aqi-table");
    var item="<tr> <td>城市</td><td>空气质量</td><td>操作</td> </tr>";
    for (var city in aqiData) {
        item += "<tr> <td>" + city + "</td><td>" + aqiData[city] + "</td><td>" +
            "<span data-city='"+city+"'>删除</span></td> </tr>"
    }
    table.innerHTML=item;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
    cityInput.value="";
    aqiInput.value="";
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    // do sth.
    delete aqiData[city];
    renderAqiList();
}

function init() {
    document.getElementById("add-btn").onclick=addBtnHandle;
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById("aqi-table").addEventListener("click", function(event){
        if(event.target.nodeName.toLowerCase() === 'span') {
            delBtnHandle.call(null, event.target.dataset.city);
            }
    });
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
}

init();
