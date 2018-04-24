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
// banner
document.querySelector('.banner').onmouseenter = function () {
	aAll = document.querySelectorAll('.anniu>a')
	for (let i = 0; i < aAll.length; i++) {
		aAll[i].style.display = 'block'
	}
	clearInterval(t)
}
document.querySelector('.banner').onmouseleave = function () {
	aAll = document.querySelectorAll('.anniu>a')
	for (let i = 0; i < aAll.length; i++) {
		aAll[i].style.display = 'none'
	}
	t = setInterval(lunbo, 1000)
}
let a = 0
let imgArr = document.querySelectorAll('.banner>img')
document.querySelectorAll('.anniu>a')[1].onclick = function () {
	a++
	if (a > imgArr.length - 1) {
		a = 0
	}
	for (let i = 0; i < imgArr.length; i++) {
		imgArr[i].style.opacity = '0'
		aArr[i].style.backgroundColor = '#999'
	}
	imgArr[a].style.opacity = '1'
	aArr[a].style.backgroundColor = '#1cbdc5'
}
document.querySelectorAll('.anniu>a')[0].onclick = function () {
	a--
	if (a < 0) {
		a = 5
	}
	for (let i = 0; i < imgArr.length; i++) {
		imgArr[i].style.opacity = '0'
		aArr[i].style.backgroundColor = '#999'
	}
	imgArr[a].style.opacity = '1'
	aArr[a].style.backgroundColor = '#1cbdc5'
}
aArr = document.querySelectorAll('.dj>a')
for (let i = 0; i < aArr.length; i++)
	aArr[i].onclick = function () {
		a = i
		for (let j = 0; j < aArr.length; j++) {
			imgArr[j].style.opacity = '0'
			aArr[j].style.backgroundColor = '#999'
		}
		imgArr[i].style.opacity = '1'
		aArr[i].style.backgroundColor = '#1cbdc5'
	}
var lunbo = function () {
	a++
	if (a > imgArr.length - 1) {
		a = 0
	}
	for (let i = 0; i < imgArr.length; i++) {
		imgArr[i].style.opacity = '0'
		aArr[i].style.backgroundColor = '#999'
	}
	imgArr[a].style.opacity = '1'
	aArr[a].style.backgroundColor = '#1cbdc5'
}
let t = setInterval(lunbo, 1000)
window.onscroll = function () {
	let sortop = document.querySelector("html").scrollTop
	if (sortop >= 2000) {
		document.querySelector(".right").style.display = "block"
	} 
}


// section2
document.querySelector('.section-99').onmouseenter = function(){
	document.querySelector('.section-98').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-99').onmouseleave = function(){
	document.querySelector('.section-98').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.section-97').onmouseenter = function(){
	document.querySelector('.section-96').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-97').onmouseleave = function(){
	document.querySelector('.section-96').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.section-95').onmouseenter = function(){
	document.querySelector('.section-94').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-95').onmouseleave = function(){
	document.querySelector('.section-94').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.section-93').onmouseenter = function(){
	document.querySelector('.section-92').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-93').onmouseleave = function(){
	document.querySelector('.section-92').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.section-91').onmouseenter = function(){
	document.querySelector('.section-90').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-91').onmouseleave = function(){
	document.querySelector('.section-90').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.section-89').onmouseenter = function(){
	document.querySelector('.section-88').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-89').onmouseleave = function(){
	document.querySelector('.section-88').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.section-87').onmouseenter = function(){
	document.querySelector('.section-86').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-87').onmouseleave = function(){
	document.querySelector('.section-86').style.boxShadow = '10px 10px 4px #ddd'
}
// 
document.querySelector('.section-18').onmouseenter = function(){
	document.querySelector('.section-84').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-18').onmouseleave = function(){
	document.querySelector('.section-84').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.section-19').onmouseenter = function(){
	document.querySelector('.section-82').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-19').onmouseleave = function(){
	document.querySelector('.section-82').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.section-20').onmouseenter = function(){
	document.querySelector('.section-80').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-20').onmouseleave = function(){
	document.querySelector('.section-80').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.section-21').onmouseenter = function(){
	document.querySelector('.section-78').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-21').onmouseleave = function(){
	document.querySelector('.section-78').style.boxShadow = '10px 10px 4px #ddd'
}
// 
document.querySelector('.section-23').onmouseenter = function(){
	document.querySelector('.section-76').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-23').onmouseleave = function(){
	document.querySelector('.section-76').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.section-24').onmouseenter = function(){
	document.querySelector('.section-74').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-24').onmouseleave = function(){
	document.querySelector('.section-74').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.section-25').onmouseenter = function(){
	document.querySelector('.section-72').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-25').onmouseleave = function(){
	document.querySelector('.section-72').style.boxShadow = '10px 10px 4px #ddd'
}
// 
document.querySelector('.section-26').onmouseenter = function(){
	document.querySelector('.section-70').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-26').onmouseleave = function(){
	document.querySelector('.section-70').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.section-27').onmouseenter = function(){
	document.querySelector('.section-68').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-27').onmouseleave = function(){
	document.querySelector('.section-68').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.section-28').onmouseenter = function(){
	document.querySelector('.section-66').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-28').onmouseleave = function(){
	document.querySelector('.section-66').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.section-29').onmouseenter = function(){
	document.querySelector('.section-64').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-29').onmouseleave = function(){
	document.querySelector('.section-64').style.boxShadow = '10px 10px 4px #ddd'
}
// 
document.querySelector('.section-32').onmouseenter = function(){
	document.querySelector('.section-62').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-32').onmouseleave = function(){
	document.querySelector('.section-62').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.section-33').onmouseenter = function(){
	document.querySelector('.section-60').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-33').onmouseleave = function(){
	document.querySelector('.section-60').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.section-34').onmouseenter = function(){
	document.querySelector('.section-58').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.section-34').onmouseleave = function(){
	document.querySelector('.section-58').style.boxShadow = '10px 10px 4px #ddd'
}
// status
document.querySelector('.status-1').onmouseenter = function(){
	document.querySelector('.status-2').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.status-1').onmouseleave = function(){
	document.querySelector('.status-2').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.status-3').onmouseenter = function(){
	document.querySelector('.status-4').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.status-3').onmouseleave = function(){
	document.querySelector('.status-4').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.status-5').onmouseenter = function(){
	document.querySelector('.status-6').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.status-5').onmouseleave = function(){
	document.querySelector('.status-6').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.status-7').onmouseenter = function(){
	document.querySelector('.status-8').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.status-7').onmouseleave = function(){
	document.querySelector('.status-8').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.status-9').onmouseenter = function(){
	document.querySelector('.status-10').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.status-9').onmouseleave = function(){
	document.querySelector('.status-10').style.boxShadow = '10px 10px 4px #ddd'
}
// status-21
document.querySelector('.status-24').onmouseenter = function(){
	document.querySelector('.status-21').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.status-24').onmouseleave = function(){
	document.querySelector('.status-21').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.status-25').onmouseenter = function(){
	document.querySelector('.status-22').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.status-25').onmouseleave = function(){
	document.querySelector('.status-22').style.boxShadow = '10px 10px 4px #ddd'
}
document.querySelector('.status-26').onmouseenter = function(){
	document.querySelector('.status-23').style.boxShadow = '10px 10px 4px #ffa128'
}
document.querySelector('.status-26').onmouseleave = function(){
	document.querySelector('.status-23').style.boxShadow = '10px 10px 4px #ddd'
}
// guild
document.querySelector('.void-10').onmouseenter = function(){
	document.querySelector('.void-9').style.display = 'block'
}
document.querySelector('.void-10').onmouseleave = function(){
	document.querySelector('.void-9').style.display = 'none'
}
// 定位
document.querySelector('.ding1').onmouseenter = function(){
	document.querySelector('.ding3').style.display = 'block'
	document.querySelector('.ding1').setAttribute('src','images/erweima_01.png')
}
document.querySelector('.ding1').onmouseleave = function(){
	document.querySelector('.ding3').style.display = 'none'
	document.querySelector('.ding1').setAttribute('src','images/erweima_02.png')
}
// 回到顶部
window.onload = function(){
  var oTop = document.getElementById("to_top");
  var screenw = document.documentElement.clientWidth || document.body.clientWidth;
  var screenh = document.documentElement.clientHeight || document.body.clientHeight;
  // oTop.style.left = screenw - oTop.offsetWidth +"px";
  // oTop.style.top = screenh - oTop.offsetHeight + "px";
  window.onscroll = function(){
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    // oTop.style.top = screenh - oTop.offsetHeight + scrolltop +"px";
  }
  oTop.onclick = function(){
    document.documentElement.scrollTop = document.body.scrollTop =0;
  }
} 

