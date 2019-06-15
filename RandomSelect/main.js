$(document).ready(function(){
    $("input").click(function(){
        //alert("Hi");    
        //$("h1").text("Hello");

        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);

        $("H1").text($("#choices li").eq(randomChildNumber).text());
        if(randomChildNumber==0){
            $("#my").attr("src","images/Chi-Fang Lin.jpg");
             $("H2").text("頭髮已白，教線性代數");
             $("H3").text("106年接系主任，專攻影像、圖學領域");
             $("font").text("很常尬聊、聊掉一節課，線代PPT計算過程是錯的");
        }
        else if(randomChildNumber==1){
             $("#my").attr("src","images/ji.JPG");
             $("H2").text("基哥，教程一、程二");
             $("H3").text("離散、資結、演算法(隔年)");
             $("font").text("偶像，很帥，課程紮實，口頭禪:Hey?");
        }
        else if(randomChildNumber==2){
             $("#my").attr("src","images/liu.JPG");
             $("H2").text("教程一、開放");
             $("H3").text("不是學霸不要當他的專題生");
             $("font").text("實驗室幾乎都女生，必選修開放很硬，真的很硬");
        }
        else if(randomChildNumber==3){
             $("#my").attr("src","images/Bin.JPG");
             $("H2").text("教積體電路設計自動化，專攻硬體");
             $("H3").text("為了去接資英而卸下系主任，研究生要待3年");
             $("font").text("頭髮Q毛很長，很像舞棍阿北，早上八點前會快走校園及操場");
        }
        else if(randomChildNumber==4){
             $("#my").attr("src","images/HWAU.JPG");
             $("H2").text("前資訊學院院長，教資概、人工智慧");
             $("H3").text("建了六樓創意工坊、最敢嗆校董的人");
             $("font").text("常常戰管院，上課很G8，坐走道小心點");
        }
    });
});