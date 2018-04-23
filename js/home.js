var nav = document.getElementById('nav');
document.querySelector(".top-6-1").onclick = function(event){
		// event.stopPropagation()
    var val = nav.style.display;
    if(val == 'block'){
        nav.style.display = 'none'; //隐藏
    }else{
        nav.style.display = 'block'; //显示
    }
}
// 
 document.querySelector('.march-10').onmouseenter = function(){
	document.querySelector('.march-9').style.display = 'block'
}
document.querySelector('.march-10').onmouseleave = function(){
	document.querySelector('.march-9').style.display = 'none'
}
 document.querySelector('.march-11').onmouseenter = function(){
	document.querySelector('.march-12').style.display = 'block'
}
document.querySelector('.march-11').onmouseleave = function(){
	document.querySelector('.march-12').style.display = 'none'
}
// 
    let jArr = document.querySelectorAll('.jian')
    let jiaArr = document.querySelectorAll('.jia')
    for(let i = 0; i < jArr.length; i++){
        jArr[i].onclick = function(){
            let num1 = Number(this.nextElementSibling.innerText)
            if(num1 > 1){
                num1--
                let xj = this.parentNode.previousElementSibling.lastElementChild.innerText * num1
                this.nextElementSibling.innerText = num1
            }
        }
    }
    for(let i = 0; i < jiaArr.length; i++){
        jiaArr[i].onclick = function(){
            let num1 = Number(this.previousElementSibling.innerText)
            num1++
            this.previousElementSibling.innerText = num1
            let xj = this.parentNode.previousElementSibling.lastElementChild.innerText * num1
        }
    }
// 
// guild
document.querySelector('.void-10').onmouseenter = function () {
    document.querySelector('.void-9').style.display = 'block'
}
document.querySelector('.void-10').onmouseleave = function () {
    document.querySelector('.void-9').style.display = 'none'
}
// 定位
document.querySelector('.ding1').onmouseenter = function () {
    document.querySelector('.ding3').style.display = 'block'
    document.querySelector('.ding1').setAttribute('src', 'images/erweima_01.png')
}
document.querySelector('.ding1').onmouseleave = function () {
    document.querySelector('.ding3').style.display = 'none'
    document.querySelector('.ding1').setAttribute('src', 'images/erweima_02.png')
}
// 回到顶部
window.onload = function () {
    var oTop = document.getElementById("to_top");
    var screenw = document.documentElement.clientWidth || document.body.clientWidth;
    var screenh = document.documentElement.clientHeight || document.body.clientHeight;
    // oTop.style.left = screenw - oTop.offsetWidth +"px";
    // oTop.style.top = screenh - oTop.offsetHeight + "px";
    window.onscroll = function () {
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        // oTop.style.top = screenh - oTop.offsetHeight + scrolltop +"px";
    }
    oTop.onclick = function () {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
} 
// 添加
function add(ele, str) {
    let old = ele.className
    let arr = old.split(/\s+/)
    let ind = arr.indexOf(str)
    if (ind === -1) {
        ele.className = old.trim() + ' ' + str
    }
}
// 删除
function remove(ele, str) {
    let old = ele.className
    let arr = old.split(/\s+/)
    let ind = arr.indexOf(str)
    if (ind !== -1) {
        arr.splice(ind, 1)
        ele.className = arr.join(' ')
    }
}
// add(document.querySelector('div'), 'august-8')
var liArr = document.querySelectorAll('.august-4')
var Augus = document.querySelectorAll('.august-6')
for(let i = 0; i<liArr.length;i++){
    liArr[i].onclick = function(event){
        event.preventDefault()
        for(let p = 0;p<liArr.length;p++){
            remove(liArr[p],'august-12')
            remove(Augus[p],'august-8')
        }
        add(this,'august-12')
        add(Augus[i],'august-8')
    }
}
// 
document.querySelector('.zero-10').onmouseenter = function () {
    document.querySelector('.zero-5').style.display = 'block'
}
document.querySelector('.zero-10').onmouseleave = function () {
    document.querySelector('.zero-5').style.display = 'none'
}