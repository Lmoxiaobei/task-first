var nav = document.getElementById('nav');
document.querySelector(".top-6-1").onclick = function (event) {
  // event.stopPropagation()
  var val = nav.style.display;
  if (val == 'block') {
    nav.style.display = 'none'; //隐藏
  } else {
    nav.style.display = 'block'; //显示
  }
}

let Del = document.querySelectorAll('.Del')
let num = document.querySelectorAll('.num')
let jia = document.querySelectorAll('.jia')
let jian = document.querySelectorAll('.jian')
let zongJia1 = document.querySelectorAll('.zongjia1')
let inputZ = document.querySelectorAll('input[type = checkbox]')
let dianP1 = document.querySelectorAll('.dp1')
let dianP2 = document.querySelectorAll('.dp2')
let goods1 = document.querySelectorAll('.goods1')
let goods2 = document.querySelectorAll('.goods2')
let bbzj = document.querySelectorAll('.bbzj')
let all = document.querySelectorAll('.all')
let dianPu = document.querySelectorAll('.dianpu')
let inputAll = document.querySelectorAll('.inputA')

for (let i = 0; i < inputZ.length; i++) {
  inputZ[i].checked = true
}

function dianTotal() {
  let dianP1 = document.querySelectorAll('.dp1')
  let dianP2 = document.querySelectorAll('.dp2')
  let bbzj = document.querySelectorAll('.bbzj')
  let goods1 = document.querySelectorAll('.goods1')
  let goods2 = document.querySelectorAll('.goods2')
  let zongJia1 = document.querySelectorAll('.zongjia1')
  let dpzj = 0
  let dpzj1 = 0
  for (let j = 0; j <
    dianP1.length; j++) {
    if (document.querySelector('.dianPu1').checked) {
      if (goods1[j].checked) {
        dpzj = dpzj + Number(dianP1[j].innerText)
      }
    }
    document.querySelector('.DP1').innerText = dpzj.toFixed(2)
  }
  for (let j = 0; j < dianP2.length; j++) {
    if (document.querySelector('.dianPu2').checked) {
      if (goods2[j].checked) {
        dpzj1 = dpzj1 + Number(dianP2[j].innerText)
      }
    }
    document.querySelector('.DP2').innerText = dpzj1.toFixed(2)
  }
  for (let j =
    0; j < bbzj.length; j++) {
    bbzj[j].innerText = (dpzj + dpzj1).toFixed(2)
  }
  for (let i = 0; i < inputAll.length; i++) {
    if (inputAll[i].checked ===
      false) {
      for (let j = 0; j < all.length; j++) {
        all[j].checked = false
      }
      break
    } else {
      for (let j = 0; j < all.length; j++) { all[j].checked = true }
    }
  }
}


function fun() {
  for (let i = 0; i < zongJia1.length; i++) {
    zongJia1[i].innerText = (Number(zongJia1[i].parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.lastElementChild.innerText) * Number(zongJia1[i].parentNode.parentNode.previousElementSibling.previousElementSibling.lastElementChild.previousElementSibling.value)).toFixed(2)
  }
}

dianTotal()
for (let i = 0; i < all.length; i++) {
  all[i].onclick = function () {
    if (all[i].checked === false) {
      for (let j = 0; j < inputZ.length; j++) {
        inputZ[j].checked = false
      }
    } else {
      for (let j = 0; j < inputZ.length; j++) {
        inputZ[j].checked = true
      }
    }
    dianTotal()
  }
}


for (let i = 0; i < goods1.length; i++) {
  goods1[i].onclick = function () {
    for (let j = 0; j < goods1.length; j++) {
      if (goods1[j].checked) {
        document.querySelector('.dianPu1').checked = true
        break
      } else {
        document.querySelector('.dianPu1').checked = false
      }
    }
    dianTotal()
  }
}
for (let i = 0; i < goods2.length; i++) {
  goods2[i].onclick = function () {
    for (let j = 0; j < goods2.length; j++) {
      if (goods2[j].checked) {
        document.querySelector('.dianPu2').checked = true
      } else {
        document.querySelector('.dianPu2').checked = false
      }
    }
    dianTotal()
  }
}

document.querySelector('.dianPu1').onclick = function () {
  if (this.checked) {
    for (let i = 0; i < goods1.length; i++) {
      goods1[i].checked = true
    }
  } else {
    for (let i = 0; i < goods1.length; i++) {
      goods1[i].checked = false
    }
  }
  dianTotal()
}
document.querySelector('.dianPu2').onclick = function () {
  if (this.checked) {
    for (let i = 0; i < goods2.length; i++) {
      goods2[i].checked = true
    }
  } else {
    for (let i = 0; i < goods2.length; i++) {
      goods2[i].checked = false
    }
  }
  dianTotal()
}

for (let i = 0; i < Del.length; i++) {
  document.querySelector('.main').onclick = function (event) {
    event.target
    if (event.target.className === 'Del') {
      event.target.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode)
      let one = document.querySelectorAll(".spxx1").length
      let two = document.querySelectorAll(".spxx2").length
      let main = document.querySelector('.main')
      let kong = document.querySelector('.kong')
      if (one === 0 && two === 0) {
        main.style.display = "none"
        kong.style.display = "block"
      } else {
        if (one === 0) {
          main.removeChild(main.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling)
        }
        if (two === 0) {
          main.removeChild(main.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling)
        }
      }
    }
    dianTotal()
    fun()
  }
}
for (let i = 0; i < jia.length; i++) {
  jia[i].onclick = function () {
    let val = Number(this.previousElementSibling.value)
    val++
    this.previousElementSibling.value = val
    fun()
    dianTotal()
  }
}
for (let i = 0; i < jian.length; i++) {
  jian[i].onclick = function () {
    let val = Number(this.nextElementSibling.value)
    if (val > 1) {
      val--
    }
    this.nextElementSibling.value = val
    fun()
    dianTotal()
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