var check = 0;
var mapArray = [ 0,0,0,0
                    ,0,0,0,0
                    ,0,0,0,0
                    ,0,0,0,0];
    
$(document).ready(function(){
    
    
    
    $("#b0").click(function()
    {
        mapArray[0] = 1;
        $("#b0").hide();
        $("#my0").attr("src","images/jin.jpg");
        sleep(1000).then(() => {         

            if(mapArray[14]==1){    
                $("#b0").show();
                $("#b0").attr("value","張經略");
                over();
            }
            else{
                    $("#b0").show();
                    $("#my0").attr("src","images/white.jpg");
                     mapArray[0] = 0;
            }
        })
       
    });
    
    $("#b1").click(function()
    {
        mapArray[1] = 1;
        $("#b1").attr("value","鐘祥仁");
         
        sleep(1000).then(() => {
            
            if(mapArray[8]==1){
                $("#my1").attr("src","images/Chung.jpg");
                over();
            }
            else{
                $("#b1").attr("value","?");
                //$("#my14").attr("src","images/white.jpg");
                mapArray[1] = 0;
            }
        })
    });
    
    $("#b2").click(function()
    {
        mapArray[2] = 1;
        $("#b2").attr("value","潘仁豪");
         
        sleep(1000).then(() => {
            
            if(mapArray[10]==1){
                $("#my2").attr("src","images/PAN.jpg");
                over();
            }
            else{
                $("#b2").attr("value","?");
                //$("#my14").attr("src","images/white.jpg");
                mapArray[2] = 0;
            }
        })
    });
    
    $("#b3").click(function()
    {
        mapArray[3] = 1;
        $("#b3").hide();
        $("#my3").attr("src","images/YON.jpg");
        sleep(1000).then(() => {         

            if(mapArray[6]==1){    
                $("#b3").show();
                $("#b3").attr("value","陳勇志");
                over();
            }
            else{
                    $("#b3").show();
                    $("#my3").attr("src","images/white.jpg");
                     mapArray[3] = 0;
            }
        })
    });
    
    $("#b4").click(function()
    {
        mapArray[4] = 1;
        $("#b4").attr("value","陳彥安");
         
        sleep(1000).then(() => {
            
            if(mapArray[13]==1){
                $("#my4").attr("src","images/AN.jpg");
                over();
            }
            else{
                $("#b4").attr("value","?");
                //$("#my14").attr("src","images/white.jpg");
                mapArray[4] = 0;
            }
        })
    });
    
    $("#b5").click(function()
    {
        mapArray[5] = 1;
        $("#b5").attr("value","葉奕成");
         
        sleep(1000).then(() => {
            
            if(mapArray[7]==1){
                $("#my5").attr("src","images/Ya.jpg");
                over();
            }
            else{
                $("#b5").attr("value","?");
                //$("#my14").attr("src","images/white.jpg");
                mapArray[5] = 0;
            }
        })
    });
    
    $("#b6").click(function()
    {
        mapArray[6] = 1;
        $("#b6").attr("value","陳勇志");
         
        sleep(1000).then(() => {
            
            if(mapArray[3]==1){
                $("#my6").attr("src","images/YON.jpg");
                over();
            }
            else{
                $("#b6").attr("value","?");
                //$("#my14").attr("src","images/white.jpg");
                mapArray[6] = 0;
            }
        })
    });
    
    $("#b7").click(function()
    {
        mapArray[7] = 1;
        $("#b7").hide();
        $("#my7").attr("src","images/Ya.jpg");
        sleep(1000).then(() => {         

            if(mapArray[5]==1){    
                $("#b7").show();
                $("#b7").attr("value","葉弈成");
                over();
            }
            else{
                    $("#b7").show();
                    $("#my7").attr("src","images/white.jpg");
                     mapArray[7] = 0;
            }
        })
    });
    
    $("#b8").click(function()
    {
        mapArray[8] = 1;
        $("#b8").hide();
        $("#my8").attr("src","images/Chung.jpg");
        sleep(1000).then(() => {         

            if(mapArray[1]==1){    
                $("#b8").show();
                $("#b8").attr("value","鐘祥仁");
                over();
            }
            else{
                    $("#b8").show();
                    $("#my8").attr("src","images/white.jpg");
                     mapArray[8] = 0;
            }
        })
    });
    
    $("#b9").click(function()
    {
        mapArray[9] = 1;
        $("#b9").attr("value","簡廷因");
         
        sleep(1000).then(() => {
            
            if(mapArray[15]==1){
                $("#my9").attr("src","images/TIN.jpg");
                over();
            }
            else{
                $("#b9").attr("value","?");
                //$("#my14").attr("src","images/white.jpg");
                mapArray[9] = 0;
            }
        })
    });
    
    $("#b10").click(function()
    {
        mapArray[10] = 1;
        $("#b10").hide();
        $("#my10").attr("src","images/PAN.jpg");
        sleep(1000).then(() => {         

            if(mapArray[2]==1){    
                $("#b10").show();
                $("#b10").attr("value","潘仁豪");
                over();
            }
            else{
                    $("#b10").show();
                    $("#my10").attr("src","images/white.jpg");
                     mapArray[10] = 0;
            }
        })
    });
    
    $("#b11").click(function()
    {
        mapArray[11] = 1;
        $("#b11").attr("value","陳聿廣");
         
        sleep(1000).then(() => {
            
            if(mapArray[12]==1){
                $("#my11").attr("src","images/CHEN.jpg");
                over();
            }
            else{
                $("#b11").attr("value","?");
                //$("#my14").attr("src","images/white.jpg");
                mapArray[11] = 0;
            }
        })
    });
    $("#b12").click(function()
    {
        mapArray[12] = 1;
        $("#b12").hide();
        $("#my12").attr("src","images/CHEN.jpg");
        sleep(1000).then(() => {         

            if(mapArray[11]==1){    
                $("#b12").show();
                $("#b12").attr("value","陳聿廣");
                over();
            }
            else{
                    $("#b12").show();
                    $("#my12").attr("src","images/white.jpg");
                     mapArray[12] = 0;
            }
        })
    });
    $("#b13").click(function()
    {
        mapArray[13] = 1;
        $("#b13").hide();
        $("#my13").attr("src","images/AN.jpg");
        sleep(1000).then(() => {         

            if(mapArray[4]==1){    
                $("#b13").show();
                $("#b13").attr("value","陳彥安");
                over();
            }
            else{
                    $("#b13").show();
                    $("#my13").attr("src","images/white.jpg");
                     mapArray[13] = 0;
            }
        })
    });
    
    $("#b14").click(function()
    {
        
        mapArray[14] = 1;
        $("#b14").attr("value","張經略");
         
        sleep(1000).then(() => {
            
            if(mapArray[0]==1){
                $("#my14").attr("src","images/jin.jpg");
                over();
            }
            else{
                $("#b14").attr("value","?");
                //$("#my14").attr("src","images/white.jpg");
                mapArray[14] = 0;
            }
        })
    });
    
     $("#b15").click(function()
    {
        mapArray[15] = 1;
        $("#b15").hide();
        $("#my15").attr("src","images/TIN.jpg");
        sleep(1000).then(() => {         

            if(mapArray[9]==1){    
                $("#b15").show();
                $("#b15").attr("value","簡廷因");
                over();
            }
            else{
                    $("#b15").show();
                    $("#my15").attr("src","images/white.jpg");
                     mapArray[15] = 0;
            }
        })
    });
    
    
    
});

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function over (){
    if(mapArray[0]==1 && mapArray[1]==1 && mapArray[2]==1 && mapArray[3]==1 && mapArray[4]==1 && mapArray[5]==1 && mapArray[6]==1 && mapArray[7]==1
      && mapArray[8]==1 && mapArray[9]==1 && mapArray[10]==1 && mapArray[11]==1 && mapArray[12]==1 && mapArray[13]==1 && mapArray[14] && mapArray[15]==1)
        check = 1;
    else check = 0;
//    for(var x = 0; x < 16; x++){
//        if(mapArray[x]==1)
//        {
//            check++;
//        }
        console.log(check);
//    }
    if(check == 1){
        $("#b6").attr("value","林啟芳");
        $("#my6").attr("src","images/Chi-Fang Lin.jpg");
        $("#b7").attr("value","林榮彬");
        $("#my7").attr("src","images/BIN.jpg");
        $("#b8").attr("value","賴國華");
        $("#my8").attr("src","images/HWAU.jpg");
        $("#b10").attr("value","林基成");
        $("#my10").attr("src","images/ji.jpg");
        $("#b12").attr("value","黃毅然");
        $("#my12").attr("src","images/ZAN.jpg");
        $("#b13").attr("value","鍾添曜");
        $("#my13").attr("src","images/TIAN.jpg");
        $("#b14").attr("value","歐昱言");
        $("#my14").attr("src","images/OH.jpg");
        $("#b15").attr("value","陳柏豪");
        $("#my15").attr("src","images/liu.jpg");
    }
}