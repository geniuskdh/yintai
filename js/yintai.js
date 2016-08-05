window.onload=function() {

    /*头部鼠标移入效果*/
    var weixin = $(".weixin")[0];
    var weixintu = $(".weixintu")[0];
    weixin.onmouseover = function () {
        weixintu.style.display = "block";
    }
    weixin.onmouseout = function () {
        weixintu.style.display = "none";
    }

    var shouji = $(".shouji")[0];
    var shoujitu = $(".shoujitu")[0];
    shouji.onmouseover = function () {
        shoujitu.style.display = "block";

    }
    shouji.onmouseout = function () {
        shoujitu.style.display = "none";
    }
    var wodeyt = $(".wodeyt")[0];
    var yincang = $(".yincangbox")[0];
    wodeyt.onmouseover = function () {
        yincang.style.display = "block";
    }
    wodeyt.onmouseout = function () {
        yincang.style.display = "none";
    }


    /*banner轮播*/
    var bb = $(".bannertu")[0];
    var kz = $(".kz");
    var dian = $("div", $(".lunbobox")[0]);
    var tt = 0;
    var btnl = $(".btnL")[0];
    var btnr = $(".btnR")[0];
    var qiehuan=$(".qiehuanbox")[0];
    function move() {
        tt++
        if (tt == kz.length) {
            tt = 0
        }
        for (var i = 0; i < kz.length; i++) {
            animate(kz[i], {opacity: 0}, 800);
            dian[i].className = "";
        }

        animate(kz[tt], {opacity: 1}, 800, function () {
            flag = true;
        })
        dian[tt].className = "dian";

    }

    function moveL() {
        tt--;
        if (tt < 0) {
            tt = kz.length - 1;
        }
        for (var i = 0; i < kz.length; i++) {

            animate(kz[i], {opacity: 0});
            dian[i].className = "";
        }
        animate(kz[tt], {opacity: 1}, 800, function () {
            flag = true;
        })
        dian[tt].className = "dian";

    }


    var t = setInterval(move, 2000);
    bb.onmouseover = function () {
        clearInterval(t);
        qiehuan.style.display="block"
    }
    bb.onmouseout = function () {
        t = setInterval(move, 2000);
        qiehuan.style.display="none"
    }

    var flag=true;
    btnr.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }
    btnl.onclick=function(){
        if(flag){
            flag=false;
            moveL();
        }

    }

    for (var i = 0; i < dian.length; i++) {
        dian[i].index = i;
        dian[i].onclick = function () {
            for (var j = 0; j < kz.length; j++) {
                animate(kz[j], {opacity: 0});
                dian[j].className = "";
            }
            dian[this.index].className = "dian";
            animate(kz[this.index], {opacity: 1});
           tt = this.index;
        }
    }



    /*侧导选项卡*/
    var hua = $(".hua");
    var chu = $(".cedaoyin");
    for(var i=0;i<hua.length;i++){
         hua[i].index=i;
         hua[i].onmouseover=function(){
            chu[this.index].style.display="block"
        }
        hua[i].onmouseout=function(){
            chu[this.index].style.display="none"
        }
    }

    /*超值特卖*/

    var cz3=$(".chaozhi3");
    var situ=$(".situ");
    var di=$(".chaozhidi");

    for(var i=0;i<cz3.length;i++){

        cz3[i].index=i;
        cz3[i].onmouseover=function(){
            for(var j=0;j<situ.length;j++){
                situ[j].style.display="none"
                cz3[j].style.borderBottom="5px solid #333333"
            }
            situ[this.index].style.display="block"
            cz3[this.index].style.borderBottom="5px solid #E5004F"
        }

    }

/*专柜同款*/
    var pp=$(".pp");
    var xiabox=$(".xiabox");
    var jiao=$(".jiao");
   for(var i=0;i<pp.length;i++){

     pp[i].index=i;
       pp[i].onmouseover=function(){
       for(var j=0;j<xiabox.length;j++){
           xiabox[j].style.display="none"
           pp[j].style.borderBottom="3px solid #333333"
           jiao[j].style.display="none"

       }
        xiabox[this.index].style.display="block"
           pp[this.index].style.borderBottom="3px solid #E70050"
         jiao[this.index].style.display="block"
       }
   }



    var ssmbox=$(".ssmpdi-s")[0];
    var ssmxie=$(".ssmpdi-xie")[0];
    var ssmbao=$(".ssmpdi-bao")[0];
    var ssmmr=$(".ssmpdi-mr")[0];
    var ssmhw=$(".ssmpdi-huwai")[0];
    var ssmny=$(".ssmpdi-ny")[0];
    lunbotu(ssmbox);
    lunbotu(ssmxie);
    lunbotu(ssmbao);
    lunbotu(ssmmr);
    lunbotu(ssmhw);
    lunbotu(ssmny);
    function  lunbotu(obj){
        var win=$(".win",obj)[0];
        var as=$(".as",obj);
        var num=0;
        var next=0;
        var widths=parseInt(getStyle(as[0],"width"));
        var liadian=$(".liadian",obj)[0];
        var lis=$("div",liadian);
        var zj=$(".zj",obj)[0];
        var yj=$(".yj",obj)[0];
        var jianhe=$(".qiehuanbox1",obj)[0];

        for(var i=0;i<as.length;i++){
            if(i==0){
                continue;
            }
            as[i].style.left=widths+"px";
        }
        //时间间隔函数
        var jd=setInterval(moveLjd,2000);

        yj.onclick=function(){
            if(flag){
                flag=false;
                moveLjd();
            }
        }
        zj.onclick=function(){
            if(flag){
                flag=false;
                moveRjd();
            }
        }
        for(var i=0;i<lis.length;i++){
            lis[i].index=i;
            lis[i].onclick=function(){
                if(num==this.index){
                    return;
                }

                as[this.index].style.left=widths+"px";
                lis[num].className="";
                lis[this.index].className="point_hot";
                animate(as[num],{left:-widths});
                animate(as[this.index],{left:0});

                next=this.index;
                num=this.index;

            }
        }

        function moveLjd(){
            next++;
            if(next==as.length){
                next=0;
            }
            as[next].style.left=widths+"px";

            lis[num].className="";
            lis[next].className="point_hot";
            animate(as[num],{left:-widths});
            animate(as[next],{left:0},function(){
                flag=true;
            })
            num=next;
        }

        function moveRjd(){
            next--;

            if(next<0){
                next=as.length-1;
            }

            as[next].style.left=-widths+"px";

            lis[num].className="";
            lis[next].className="point_hot";

            animate(as[num],{left:widths});

            animate(as[next],{left:0},function(){
                flag=true;
            })

            num=next;
        }
        win.onmouseover=function(){
            clearInterval(jd);
            jianhe.style.display="block"
            console.log(jianhe)
        }
        win.onmouseout=function(){
            jd=setInterval(moveLjd,2000);
            jianhe.style.display="none"
        }
    }

/*小轮播*/
     var leftxia=$(".leftxia")[0];
     var leftxia2=$(".leftxia2")[0];
     var leftxia3=$(".leftxia3")[0];
     var leftxia4=$(".leftxia4")[0];
     var leftxia5=$(".leftxia5")[0];
     var leftxia6=$(".leftxia6")[0];
     var leftxia7=$(".leftxia7")[0];
     var leftxia8=$(".leftxia8")[0];
     var leftxia9=$(".leftxia9")[0];


     lunbos(leftxia);
     lunbos(leftxia2);
    lunbos(leftxia3);
    lunbos(leftxia4);
    lunbos(leftxia5);
    lunbos(leftxia6);
    lunbos(leftxia7);
    lunbos(leftxia8);
    lunbos(leftxia9);
     var flags=true;
     function lunbos(obj1){

        var smalunbo=$(".smalunbo",obj1)[0];
        var as1=$(".xiaowin",obj1);
        var xiaqiel=$(".xiaqiel",obj1)[0];
        var xiaqier=$(".xiaqier",obj1)[0];
        var num1=0;
        var next1=0;
        var widths1=parseInt(getStyle(smalunbo,"width"));
        xiaqier.onclick=function(){
            if(flags){
                flags=false;
                moveLjd1();
            }
        }
       xiaqiel.onclick=function(){
            if(flags){
                flags=false;
                moveRjd1();
            }
        }
        function moveLjd1(){
            next1++;
            if(next1==as1.length){
                next1=0;
            }
            as1[next1].style.left=widths1+"px"
            animate(as1[num1],{left:-widths1});
            animate(as1[next1],{left:0},function(){
                flags=true;
            })
            num1=next1;
        }

        function moveRjd1(){
            next1--;
            if(next1<0){
                next=as1.length-1;
            }

            as1[next1].style.left=-widths1+"px";

            animate(as1[num1],{left:widths1});

            animate(as1[next1],{left:0},function(){
                flags=true;
            })

            num1=next1;
        }

     }


}