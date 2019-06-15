$(document).ready(function(){
    
    
    var mapArray = [ 0,0,0,0
                    ,0,0,0,0
                    ,0,0,0,0
                    ,0,0,0,0];
    
    $("#b0").click(function()
    {
        mapArray[0] = 1;
        $("#b0").hide();
        $("#my0").attr("src","images/jin.JPG");
        sleep(1000).then(() => {         

            if(mapArray[14]==1){    
                $("#b0").show();
                $("#b0").attr("value","張經略");
            }
            else{
                    $("#b0").show();
                    $("#my0").attr("src","images/white.JPG");
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
                $("#my1").attr("src","images/chung.JPG");
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
                $("#my2").attr("src","images/PAN.JPG");
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
        $("#my3").attr("src","images/YON.JPG");
        sleep(1000).then(() => {         

            if(mapArray[6]==1){    
                $("#b3").show();
                $("#b3").attr("value","陳勇志");
            }
            else{
                    $("#b3").show();
                    $("#my3").attr("src","images/white.JPG");
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
                $("#my4").attr("src","images/AN.JPG");
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
                $("#my5").attr("src","images/Ya.JPG");
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
                $("#my6").attr("src","images/YON.JPG");
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
        $("#my7").attr("src","images/Ya.JPG");
        sleep(1000).then(() => {         

            if(mapArray[5]==1){    
                $("#b7").show();
                $("#b7").attr("value","葉弈成");
            }
            else{
                    $("#b7").show();
                    $("#my7").attr("src","images/white.JPG");
                     mapArray[7] = 0;
            }
        })
    });
    
    $("#b8").click(function()
    {
        mapArray[8] = 1;
        $("#b8").hide();
        $("#my8").attr("src","images/chung.JPG");
        sleep(1000).then(() => {         

            if(mapArray[1]==1){    
                $("#b8").show();
                $("#b8").attr("value","鐘祥仁");
            }
            else{
                    $("#b8").show();
                    $("#my8").attr("src","images/white.JPG");
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
                $("#my9").attr("src","images/TIN.JPG");
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
        $("#my10").attr("src","images/PAN.JPG");
        sleep(1000).then(() => {         

            if(mapArray[2]==1){    
                $("#b10").show();
                $("#b10").attr("value","潘仁豪");
            }
            else{
                    $("#b10").show();
                    $("#my10").attr("src","images/white.JPG");
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
                $("#my11").attr("src","images/CHEN.JPG");
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
        $("#my12").attr("src","images/CHEN.JPG");
        sleep(1000).then(() => {         

            if(mapArray[11]==1){    
                $("#b12").show();
                $("#b12").attr("value","陳聿廣");
            }
            else{
                    $("#b12").show();
                    $("#my12").attr("src","images/white.JPG");
                     mapArray[12] = 0;
            }
        })
    });
    $("#b13").click(function()
    {
        mapArray[13] = 1;
        $("#b13").hide();
        $("#my13").attr("src","images/AN.JPG");
        sleep(1000).then(() => {         

            if(mapArray[4]==1){    
                $("#b13").show();
                $("#b13").attr("value","陳彥安");
            }
            else{
                    $("#b13").show();
                    $("#my13").attr("src","images/white.JPG");
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
                $("#my14").attr("src","images/jin.JPG");
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
        $("#my15").attr("src","images/Tin.JPG");
        sleep(1000).then(() => {         

            if(mapArray[9]==1){    
                $("#b15").show();
                $("#b15").attr("value","簡廷因");
            }
            else{
                    $("#b15").show();
                    $("#my15").attr("src","images/white.JPG");
                     mapArray[15] = 0;
            }
        })
    });
});

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
