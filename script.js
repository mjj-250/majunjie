const signinBtn = document.getElementById("signin");
const signupBtn = document.getElementById("signup");
const fistform = document.getElementById("form1");
const secondform = document.getElementById("form2");
const container = document.querySelector(".container");

var dv = document.getElementById("dv");
var height = parseInt(dv.style.height || dv.offsetHeight);
var intervalId;
dv.onmouseover = function() {
    // 停止已经在执行的动画
    clearInterval(intervalId);
    // 得到目标高度
    var toHeight = height * 2;
    // 获得当前对象
    var that = this;
    // 开器计时器，缓慢变化
    intervalId = setInterval(function() {
        // 得到现在的高度
        var height = parseInt(dv.style.height || dv.offsetHeight);
        // 记录每次需要变化的步长
        var h = Math.ceil(Math.abs(height - toHeight) / 10);
        // 判断变化，如果步长为0就停止计时器
        if( h > 0 ) {
            // 这里为什么要用that呢？思考一下吧
            that.style.height = (height + h) + "px";
        } else {
            clearInterval(intervalId);
        }
    }, 20);
};
dv.onmouseout = function() {
    // 原理和之前一样
    clearInterval(intervalId);
    var toHeight = height;
    var that = this;
    intervalId = setInterval(function() {
        var height = parseInt(dv.style.height || dv.offsetHeight);
        var h = Math.ceil(Math.abs(height - toHeight) / 10);
        if( h > 0 ) {
            that.style.height = (height - h) + "px";
        } else {
            clearInterval(intervalId);
        }
    }, 20);
};

signinBtn.addEventListener("click",()=>{
   container.classList.remove("right-panel-active")
})

signupBtn.addEventListener("click",()=>{
   container.classList.add("right-panel-active")
})

fistform.addEventListener("submit",(e)=>e.preventDefault)
secondform.addEventListener("submit",(e)=>e.preventDefault)


