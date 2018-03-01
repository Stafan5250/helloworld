'UTF-8';
// 打印换行
function printBr(value) {
    document.write(value + "<br/>")
}

// 获取随机数
function randomNum(min, max) {
    var mi = min || 0;
    var ma = max || 1;
    return parseInt(Math.random() * (ma - mi + 1)) + mi;
}

// 获取随机验证码
function randomCode(n) {
    var str = "";
    for (var i = 0; i < n; i++) {
        var num = parseInt(Math.random() * 100);
        num = num >= 65 && num <= 90 ? String.fromCharCode(num) : parseInt(num / 10);
        str += num;
    }
    return str;
}

// 中文大写数字
function bigChinese() {
    return ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖", "拾"];
}

// 获取随机验证码
function randomCodes(n) {
    var str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var arr = "";
    for (var i = 0; i < n; i++) {
        var b = parseInt(Math.random() * str.length);
        arr += str[b];
    }
    return arr;
}

// 获取随机颜色
function randomColor() {
    var str = "0123456789abcdef";
    var arr = "#";
    for (var i = 0; i < 6; i++) {
        arr += str[b];
    }
    return arr;
}

// 监听事件兼容写法，捕获/冒泡；
function addEvent(ele, type, fn, blooer) {
    //支持addEventListener的浏览器
    if (ele.addEventListener) {
        ele.addEventListener(type, fn, blooer);
        //支持IE8-
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + type, fn);
    } else {
        ele["on" + type] = fn;
    }
}

// 累加
function cumsum(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}

// 阶乘
function factorial(num) {
    sum = 1;
    for (var i = 1; i <= num; i++) {
        sum = sum * i;
    }
    return sum;
}

// 时间转换
function formatDate(time) {
    var m = parseInt(time / 60);
    var s = time % 60;
    var min = m < 10 ? "0" + m : m;
    var sec = s < 10 ? "0" + s : s;
    var times = min + ":" + sec;
    return times;
}

// 判断闰年 
Date.prototype.isLeapYear = function() {
    return (0 == this.getYear() % 4 && ((this.getYear() % 100 != 0) || (this.getYear() % 400 == 0)));
}

// 日期格式化  
// 格式 YYYY/yyyy/YY/yy 表示年份  
// MM/M 月份  
// W/w 星期  
// dd/DD/d/D 日期  
// hh/HH/h/H 时间  
// mm/m 分钟  
// ss/SS/s/S 秒  
Date.prototype.Format = function(formatStr) {
    var str = formatStr;
    var Week = ['日', '一', '二', '三', '四', '五', '六'];

    str = str.replace(/yyyy|YYYY/, this.getFullYear());
    str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));

    str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
    str = str.replace(/M/g, this.getMonth() + 1);

    str = str.replace(/w|W/g, Week[this.getDay()]);

    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
    str = str.replace(/d|D/g, this.getDate());

    str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
    str = str.replace(/h|H/g, this.getHours());
    str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
    str = str.replace(/m/g, this.getMinutes());

    str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
    str = str.replace(/s|S/g, this.getSeconds());

    return str;
}

// 求两个时间的天数差 日期格式为 YYYY-MM-dd
function daysBetween(DateOne, DateTwo) {
    var OneMonth = DateOne.substring(5, DateOne.lastIndexOf('-'));
    var OneDay = DateOne.substring(DateOne.length, DateOne.lastIndexOf('-') + 1);
    var OneYear = DateOne.substring(0, DateOne.indexOf('-'));

    var TwoMonth = DateTwo.substring(5, DateTwo.lastIndexOf('-'));
    var TwoDay = DateTwo.substring(DateTwo.length, DateTwo.lastIndexOf('-') + 1);
    var TwoYear = DateTwo.substring(0, DateTwo.indexOf('-'));

    var cha = ((Date.parse(OneMonth + '/' + OneDay + '/' + OneYear) - Date.parse(TwoMonth + '/' + TwoDay + '/' + TwoYear)) / 86400000);
    return Math.abs(cha);
}

// 日期计算  
Date.prototype.DateAdd = function(strInterval, Number) {
    var dtTmp = this;
    switch (strInterval) {
        case 's':
            return new Date(Date.parse(dtTmp) + (1000 * Number));
        case 'n':
            return new Date(Date.parse(dtTmp) + (60000 * Number));
        case 'h':
            return new Date(Date.parse(dtTmp) + (3600000 * Number));
        case 'd':
            return new Date(Date.parse(dtTmp) + (86400000 * Number));
        case 'w':
            return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));
        case 'q':
            return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number * 3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
        case 'm':
            return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
        case 'y':
            return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
    }
}

// 比较日期差 dtEnd 格式为日期型或者 有效日期格式字符串  
Date.prototype.DateDiff = function(strInterval, dtEnd) {
    var dtStart = this;
    if (typeof dtEnd == 'string') //如果是字符串转换为日期型  
    {
        dtEnd = StringToDate(dtEnd);
    }
    switch (strInterval) {
        case 's':
            return parseInt((dtEnd - dtStart) / 1000);
        case 'n':
            return parseInt((dtEnd - dtStart) / 60000);
        case 'h':
            return parseInt((dtEnd - dtStart) / 3600000);
        case 'd':
            return parseInt((dtEnd - dtStart) / 86400000);
        case 'w':
            return parseInt((dtEnd - dtStart) / (86400000 * 7));
        case 'm':
            return (dtEnd.getMonth() + 1) + ((dtEnd.getFullYear() - dtStart.getFullYear()) * 12) - (dtStart.getMonth() + 1);
        case 'y':
            return dtEnd.getFullYear() - dtStart.getFullYear();
    }
}

// 日期输出字符串，重载了系统的toString方法  
Date.prototype.toString = function(showWeek) {
    var myDate = this;
    var str = myDate.toLocaleDateString();
    if (showWeek) {
        var Week = ['日', '一', '二', '三', '四', '五', '六'];
        str += ' 星期' + Week[myDate.getDay()];
    }
    return str;
}

// 日期合法性验证  
// 格式为：YYYY-MM-DD或YYYY/MM/DD  
function IsValidDate(DateStr) {
    var sDate = DateStr.replace(/(^\s+|\s+$)/g, ''); //去两边空格;   
    if (sDate == '') return true;
    //如果格式满足YYYY-(/)MM-(/)DD或YYYY-(/)M-(/)DD或YYYY-(/)M-(/)D或YYYY-(/)MM-(/)D就替换为''   
    //数据库中，合法日期可以是:YYYY-MM/DD(2003-3/21),数据库会自动转换为YYYY-MM-DD格式   
    var s = sDate.replace(/[\d]{ 4,4 }[\-/]{ 1 }[\d]{ 1,2 }[\-/]{ 1 }[\d]{ 1,2 }/g, '');
    if (s == '') //说明格式满足YYYY-MM-DD或YYYY-M-DD或YYYY-M-D或YYYY-MM-D   
    {
        var t = new Date(sDate.replace(/\-/g, '/'));
        var ar = sDate.split(/[-/:]/);
        if (ar[0] != t.getYear() || ar[1] != t.getMonth() + 1 || ar[2] != t.getDate()) {
            //alert('错误的日期格式！格式为：YYYY-MM-DD或YYYY/MM/DD。注意闰年。');   
            return false;
        }
    } else {
        //alert('错误的日期格式！格式为：YYYY-MM-DD或YYYY/MM/DD。注意闰年。');   
        return false;
    }
    return true;
}

// 日期时间检查  
// 格式为：YYYY-MM-DD HH:MM:SS 
function CheckDateTime(str) {
    var reg = /^(\d+)-(\d{ 1,2 })-(\d{ 1,2 }) (\d{ 1,2 }):(\d{ 1,2 }):(\d{ 1,2 })$/;
    var r = str.match(reg);
    if (r == null) return false;
    r[2] = r[2] - 1;
    var d = new Date(r[1], r[2], r[3], r[4], r[5], r[6]);
    if (d.getFullYear() != r[1]) return false;
    if (d.getMonth() != r[2]) return false;
    if (d.getDate() != r[3]) return false;
    if (d.getHours() != r[4]) return false;
    if (d.getMinutes() != r[5]) return false;
    if (d.getSeconds() != r[6]) return false;
    return true;
}

// 把日期分割成数组  
Date.prototype.toArray = function() {
    var myDate = this;
    var myArray = Array();
    myArray[0] = myDate.getFullYear();
    myArray[1] = myDate.getMonth();
    myArray[2] = myDate.getDate();
    myArray[3] = myDate.getHours();
    myArray[4] = myDate.getMinutes();
    myArray[5] = myDate.getSeconds();
    return myArray;
}

// 取得日期数据信息  
// 参数 interval 表示数据类型  
// y 年 m月 d日 w星期 ww周 h时 n分 s秒  
Date.prototype.DatePart = function(interval) {
    var myDate = this;
    var partStr = '';
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    switch (interval) {
        case 'y':
            partStr = myDate.getFullYear();
            break;
        case 'm':
            partStr = myDate.getMonth() + 1;
            break;
        case 'd':
            partStr = myDate.getDate();
            break;
        case 'w':
            partStr = Week[myDate.getDay()];
            break;
        case 'ww':
            partStr = myDate.WeekNumOfYear();
            break;
        case 'h':
            partStr = myDate.getHours();
            break;
        case 'n':
            partStr = myDate.getMinutes();
            break;
        case 's':
            partStr = myDate.getSeconds();
            break;
    }
    return partStr;
}

// 取得当前日期所在月的最大天数  
Date.prototype.MaxDayOfDate = function() {
    var myDate = this;
    var ary = myDate.toArray();
    var date1 = (new Date(ary[0], ary[1] + 1, 1));
    var date2 = date1.dateAdd(1, 'm', 1);
    var result = dateDiff(date1.Format('yyyy-MM-dd'), date2.Format('yyyy-MM-dd'));
    return result;
}

// 取得当前日期所在周是一年中的第几周  
Date.prototype.WeekNumOfYear = function() {
    // var myDate = this;
    // var ary = myDate.toArray();
    // var year = ary[0];
    // var month = ary[1] + 1;
    // var day = ary[2];
    // document.write('< script language=VBScript\> \n');
    // document.write('myDate = DateValue('
    //     '+month+' - '+day+' - '+year+'
    //     ') \n');
    // document.write('result = DatePart('
    //     ww ', myDate) \n');
    // document.write(' \n');
    // return result;

}

// 字符串转成日期类型   
// 格式 MM/dd/YYYY MM-dd-YYYY YYYY/MM/dd YYYY-MM-dd  
function StringToDate(DateStr) {

    var converted = Date.parse(DateStr);
    var myDate = new Date(converted);
    if (isNaN(myDate)) {
        //var delimCahar = DateStr.indexOf('/')!=-1?'/':'-';  
        var arys = DateStr.split('-');
        myDate = new Date(arys[0], --arys[1], arys[2]);
    }
    return myDate;
}

// 获取某年某月/当月的最后一天
// DateNum 时间戳/yyyy-mm/yyyy/mm/yyyy/mm/dd/yyyy-mm-dd 不传参表示为当月 ""表示0
function thisMouthLastDay(DateNum) {
    var timer, mon, day, type = typeof DateNum;
    if (DateNum != undefined) {
        if (type === "number") {
            timer = nextMonth(DateNum);
        } else if (type === "string") {
            if (!isNaN(Number(DateNum))) {
                if (Number(DateNum == 0)) {
                    DateNum = 0;
                }
                timer = nextMonth(DateNum);
            } else {
                if (DateNum.indexOf('/') != -1) {
                    if (Number(DateNum.split('/')[1]) > 12) {
                        return "输入参数有误";
                    }
                    timer = nextMonth(new Date(DateNum).getTime());
                } else if (DateNum.indexOf('-') != -1) {
                    if (Number(DateNum.split('-')[1]) > 12) {
                        return "输入参数有误";
                    }
                    timer = nextMonth(new Date(DateNum).getTime());
                } else {
                    return "输入参数格式应为yyyy-mm、yyyy/mm、yyyy-mmm-dd、yyyy/mm/dd、时间戳";
                }
            }
        } else {
            return "输入参数格式应为字符串或数字(yyyy-mm、yyyy/mm、yyyy-mmm-dd、yyyy/mm/dd、时间戳)";
        }
    } else {
        timer = nextMonth(new Date());
    }
    mon = (new Date(timer).getMonth() + 1) > 9 ? "" + (new Date(timer).getMonth() + 1) : "0" + (new Date(timer).getMonth() + 1);
    day = new Date(timer).getDate() > 9 ? "" + new Date(timer).getDate() : "0" + new Date(timer).getDate();
    return new Date(timer).getFullYear() + "-" + mon + "-" + day;
}

function nextMonth(DateNum) {
    var mon, timer;
    mon = new Date(DateNum).getMonth() + 2;
    timer = mon > 12 ? new Date((new Date(DateNum).getFullYear() + 1) + "-01-01") : new Date(new Date(DateNum).getFullYear() + "-" + mon + "-01");
    return timer - 24 * 60 * 60 * 1000;
}

// 获取cookie
function setCookie(cookiename, cookieval, expires, path) {
    var cookieStr = cookiename + "=" + cookieval;
    //过期时间
    if (expires) {
        cookieStr += ";expires" + expires;
    }
    //路径
    if (path) {
        cookieStr += ";src=" + path;
    }
    document.cookie = cookieStr;
}

// 设置cookie
function getCookie(cname) {
    var cookie = document.cookie;
    var res = '';
    // 有cookie时才执行以下代码
    if (cookie) {
        var cookieList = cookie.split('; ');
        for (var i = 0; i < cookieList.length; i++) {
            var temp = cookieList[i].split('=');
            if (temp[0] === cname) {
                res = temp[1];
            }
        }
    }
    return res;
}

// 清除cookie
function delCookie(cookieName) {
    var now = new Date();
    now.setDate(now.getDate() - 10);
    document.cookie = cookieName + '=null;expires=' + now;
}

// 获取外联样式表的兼容函数封装
function getCsStyle(ele, attr) {
    var result = null;
    //浏览器支持getComputedStyle
    if (window.getComputedStyle) {
        result = getComputedStyle(ele)[attr];
    }
    //IE8-支持ele.currentStyle
    else if (ele.currentStyle) {
        result = ele.currentStyle[attr];
    } else
    //返回内联样式
    {
        result = ele.style[attr];
    }
    return result;
}

// 运动函数封装
function startMove(obj, attr, iTarget) {
    var timerName = attr + "timer";
    var unit = "px";
    //设置定时器之前先清掉定时器
    clearInterval(obj[timerName]);
    //设置定时器
    obj[timerName] = setInterval(function() {
        //定义参数
        var current = parseFloat(getCsStyle(obj, attr));
        var speed = (iTarget - current) / 10;
        //兼容透明度
        if (attr == "opacity") {
            speed = speed > 0 ? 0.1 : -0.1;
            unit = "";
        } else {
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        }
        //判断，给定终止条件
        if (current == iTarget) {
            clearInterval(obj[timerName]);
        } else {
            obj.style[attr] = current + speed + unit;
        }
    }, 30)
}

// 高级运动函数封装
function animate(ele, opt, callback) {
    //attr = {left:500,top:200,width:320,height:320}
    ele.timerLen = 0;
    // 遍历对象
    for (var attr in opt) {
        setTimer(attr);
    }

    function setTimer(attr) {
        // 定时器数量每没执行一次setTimer，timerLen++
        ele.timerLen++;
        var timerName = attr + 'timer'; //lefttimer,toptimer
        var target = opt[attr]; //opt['left']==>500,opt['top']==>200
        // 设置定时器前先清除之前的定时器
        clearInterval(ele[timerName]);
        // 设置定时器
        ele[timerName] = setInterval(function() {
            // 单位
            var unit = 'px';
            // 获取当前值
            var current = parseFloat(getCsStyle(ele, attr));
            // 计算速度
            var speed = (target - current) / 6;
            // 取整：正负数的取整
            // 0.0001 =>1
            // -0.0001 => -1
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            // 为透明度属性设置单独的速度
            if (attr === 'opacity') {
                speed = speed > 0 ? 0.1 : -0.1;
                unit = '';
            }
            // 判断清除定时器的条件
            if (current == target) {
                clearInterval(ele[timerName]);
                // 每完成一个动画，定时器数量减1
                ele.timerLen--;
                // 在运动完成后执行回调函数
                // 判断callback是否为函数，如果是则执行
                // 确定所有动画完成后才执行
                if (ele.timerLen === 0 && typeof callback === 'function') {
                    callback();
                    console.log(6666)
                }
                return;
            }
            ele.style[attr] = current + speed + unit;
            if (attr === 'opacity') {
                ele.style.filter = 'alpha(opacity=' + parseInt((current + speed) * 100) + ')';
            }
        }, 30);
    }
}

/*14.封装ajax请求
    1）简化ajax请求操作
    2）解决兼容性问题
    3）支持跨域JSONP请求*/
function ajax(type, url, callback) {
    if (type == 'jsonp') {
        // 1)预设一个函数(全局函数)
        window.getData = function(data) {
            // 回调函数
            if (typeof callback === 'function') callback(data);
        };
        var script = document.createElement('script');
        // 判断url内有没有?
        var wenhao = '?';
        if (url.indexOf('?') != -1) {
            wenhao = '&';
        }
        script.src = url + wenhao + 'callback=getData';
        document.head.appendChild(script);
    } else {
        // 1）创建xhr对象
        var req = null;
        try {
            req = new XMLHttpRequest();
        } catch (err) {
            // ie低版本浏览有多种异步请求的实现
            try {
                req = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (err) {
                try {
                    req = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (err) {
                    alert('你的浏览器太low了，这个世界不适合你');
                    return;
                }
            }
        }
        // 4）处理数据
        req.onreadystatechange = function() {
            if (req.readyState == 4 && (req.status == 200 || req.status == 304)) {
                var res = req.responseText;
                // 回调函数
                if (typeof callback === 'function') callback(res);
            }
        }
        // 2)建立与服务器的连接
        req.open(type, url, true);
        // 3)发送请求
        req.send(null);
    }
}
// ajax('get','region.json',function(data){console.log(data)})

//互换
function changeStr(arr, a, b) {
    var c = arr[a];
    arr[a] = arr[b];
    arr[b] = c;
}

//轮播图 
function carousel() {
    //定义全局变量
    var i = 0;
    var imgWid = parseInt($("#div li img").css("width"));
    //
    $("#list1 li").eq(0).clone().appendTo($("#list1"));
    var size = $("#list1 li").size();
    //自动轮播
    var timer = setInterval(function() {
        //自动轮播              
        i++;
        justGo();
    }, 2000)
    //点击按钮切换时
    $("#list2 li").click(function() {
        $(this).removeClass().addClass("active").siblings().removeClass("active");
        i = $(this).index();
        justGo();
    })

    //封装justGo函数
    function justGo() {
        //最开始一张时
        if (i == -1) {
            i = size - 2;
            $("#list1").css("left", -(size - 1) * imgWid);
        }
        //最后一张时
        if (i == size) {
            i = 1;
            $("#list1").css("left", 0)
        }
        $("#list1").stop().animate({ "left": -(i * imgWid) }, 500);
        //改变按钮状态
        $("#list2 li").eq(i).removeClass().addClass("active").siblings().removeClass("active");
        if (i == size - 1) {
            $("#list2 li").eq(0).removeClass().addClass("active").siblings().removeClass("active");
        }
    }
    //上一页
    $("#left").click(function() {
        i--;
        justGo();
    })
    //下一页
    $("#right").click(function() {
        i++;
        justGo();
    })
    //点击切换时关闭定时器
    $("#div").hover(function() {
            clearInterval(timer);
        },
        function() {
            timer = setInterval(function() {
                //自动轮播              
                i++;
                justGo();
            }, 2000)
        })
}

//放大镜 单张图放大镜
function magnifier(smaArea, bigArea, smaPic, bigPic) {
    //绑定鼠标事件
    smaPic.on({
        "mouseenter": function() {
            //启动放大镜功能
            bigArea.css("display", "block");
            //放大系数
            var coef = bigPic.width() / smaPic.width();
            //设置小区域的宽高
            smaArea.width(bigArea.width() / coef); //放大后的显示区域宽度
            smaArea.height(bigArea.height() / coef); //放大后的显示区域高度
            //设置鼠标移动事件
            $(document).mousemove(function(e) {
                //小图边界
                var sImgL = smaPic.offset().left; //左边界
                var sImgR = sImgL + smaPic.width(); //右边界
                var sImgT = smaPic.offset().top; //上边界
                var sImgB = sImgT + smaPic.height(); //下边界                                  
                //如果鼠标指针在区域内
                if ((e.pageX >= sImgL && e.pageX <= sImgR) && (e.pageY >= sImgT && e.pageY <= sImgB)) {
                    smaArea.css("display", "block");
                    //设置小区域跟随指针
                    var x = e.pageX - sImgL - smaArea.width() / 2;
                    var y = e.pageY - sImgT - smaArea.height() / 2;
                    //限定鼠标指针左右范围
                    if (x < 0) {
                        x = 0;
                    } else if (x > smaPic.width() - smaArea.width()) {
                        x = smaPic.width() - smaArea.width();
                    }
                    //限定鼠标指针上下范围
                    if (y < 0) {
                        y = 0;
                    } else if (y > smaPic.height() - smaArea.height()) {
                        y = smaPic.height() - smaArea.height();
                    }
                    smaArea.css({ left: x, top: y });
                    //放大图的移动距离
                    bigPic.css({ left: -x * coef, top: -y * coef });
                } else {
                    smaArea.css("display", "none");
                }
            })
        },
        //关闭放大镜功能
        "mouseleave": function() {
            bigArea.css("display", "none");
        }
    })
}

// 冒泡排序
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) { //相邻元素两两对比
                var temp = arr[j + 1]; //元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// 选择排序
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) { //寻找最小的数
                minIndex = j; //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// 插入排序
function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}

// 希尔排序
function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while (gap < len / 3) { //动态定义间隔序列
        gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i - gap; j > 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}

// 归并排序
function mergeSort(arr) { //采用自上而下的递归方法
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

// 快速排序
function quickSort(arr) {
    if (arr.length <= 1) { return arr; }
    var left = [],
        right = [],
        mid = arr.splice(Math.floor(arr.length / 2), 1)[0];
    for (var i = 0; i < arr.length; i++) {
        arr[i] < mid ? left.push(arr[i]) : right.push(arr[i]);
    }
    return quickSort2(left).concat([mid], quickSort2(right));
}

// 堆排序
var len; //因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

function buildMaxHeap(arr) { //建立大顶堆
    len = arr.length;
    for (var i = Math.floor(len / 2); i >= 0; i--) {
        heapify(arr, i);
    }
}

function heapify(arr, i) { //堆调整
    var left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapSort(arr) {
    buildMaxHeap(arr);

    for (var i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);
    }
    return arr;
}

// 计数排序
function countingSort(arr, maxValue) {
    var bucket = new Array(maxValue + 1),
        sortedIndex = 0;
    arrLen = arr.length,
        bucketLen = maxValue + 1;

    for (var i = 0; i < arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }

    for (var j = 0; j < bucketLen; j++) {
        while (bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }

    return arr;
}

// 桶排序
function bucketSort(arr, bucketSize) {
    if (arr.length === 0) {
        return arr;
    }

    var i;
    var minValue = arr[0];
    var maxValue = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]; //输入数据的最小值
        } else if (arr[i] > maxValue) {
            maxValue = arr[i]; //输入数据的最大值
        }
    }

    //桶的初始化
    var DEFAULT_BUCKET_SIZE = 5; //设置桶的默认数量为5
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    //利用映射函数将数据分配到各个桶中
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]); //对每个桶进行排序，这里使用了插入排序
        for (var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }

    return arr;
}

// 基数排序
var counter = [];

function radixSort(arr, maxDigit) {
    var mod = 10;
    var dev = 1;
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for (var j = 0; j < arr.length; j++) {
            var bucket = parseInt((arr[j] % mod) / dev);
            if (counter[bucket] == null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        var pos = 0;
        for (var j = 0; j < counter.length; j++) {
            var value = null;
            if (counter[j] != null) {
                while ((value = counter[j].shift()) != null) {
                    arr[pos++] = value;
                }
            }
        }
    }
    return arr;
}

// 获取光标位置
function getCursortPosition(ele) {
    var CaretPos = 0; // IE Support
    if (document.selection) {
        ele.focus();
        var Sel = document.selection.createRange();
        Sel.moveStart('character', -ele.value.length);
        CaretPos = Sel.text.length;
    }
    // Firefox support
    else if (ele.selectionStart || ele.selectionStart == '0')
        CaretPos = ele.selectionStart;
    return (CaretPos);
}

// 设置光标位置
function setCaretPosition(ele, pos) {
    if (ele.setSelectionRange) {
        ele.focus();
        ele.setSelectionRange(pos, pos);
    } else if (ele.createTextRange) {
        var range = ele.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}


/*RGB颜色转换为16进制*/
function colorHex(rgb) {
    //十六进制颜色值的正则表达式
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(rgb)) {
        var aColor = rgb.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        var strHex = "#";
        for (var i = 0; i < aColor.length; i++) {
            var hex = Number(aColor[i]).toString(16);
            if (hex === "0") {
                hex += hex;
            }
            strHex += hex;
        }
        if (strHex.length !== 7) {
            strHex = rgb;
        }
        return strHex;
    } else if (reg.test(rgb)) {
        var aNum = rgb.replace(/#/, "").split("");
        if (aNum.length === 6) {
            return rgb;
        } else if (aNum.length === 3) {
            var numHex = "#";
            for (var i = 0; i < aNum.length; i += 1) {
                numHex += (aNum[i] + aNum[i]);
            }
            return numHex;
        }
    } else {
        return rgb;
    }
}


/*16进制颜色转为RGB格式*/
function colorRgb(hex) {
    //十六进制颜色值的正则表达式
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var sColor = hex.toLowerCase();
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return "RGB(" + sColorChange.join(",") + ")";
    } else {
        return sColor;
    }
}

// 继承
function extend1(Child, Parent) {
    var F = function() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}

// 拷贝继承
function extend2(Child, Parent) {
    var c = Child.prototype;
    var p = Parent.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    Child.uber = p;
}

// 非构造函数拷贝继承
function deepCopy(parent, child) {
    var child = child || {};
    for (var i in parent) {
        if (typeof parent[i] === 'object') {
            child[i] = parent[i].constructor === 'Array' ? [] : {};
            deepCopy(parent[i], child[i]);
        } else {
            child[i] = parent[i];
        }
    }
    return child;
}