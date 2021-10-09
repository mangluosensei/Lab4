// 封装函数，便于通过id获取元素
function $(id) {
    return document.getElementById(id);
   }
   
   // 生成随机数
   function rand(min,max){
    if (min>max) {
    var mid = min;
    min = max;
    max = mid;
    }
    //65<=Math.random()*26+65<26+65
    return parseInt(Math.random()*(max-min+1)+min);
   }
   
   //创建一个开关，默认为true(打开状态)
   var oPlay = true;
   
   //点击事件
   function shake() {
    if(oPlay){ //判断开关的状态，若为true，执行下边的内容
    oPlay = false; //开始执行后，关闭开关
    $("dice").src = "骰子.gif"; //将静态图替换为动图
    
    //随机时间后，将动态图替换为随机点数的图片
    var timer = setTimeout(function(){ 
     $("dice").src = rand(1,6) + ".png";
     oPlay = true; //执行完毕后，再打开开关
    },rand(500,3000));
    }
   }