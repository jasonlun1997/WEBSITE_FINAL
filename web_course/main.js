$(document).ready(function(){
    
    $("#courseTable").append("<tr><th align='center'>年分</th><th>事件</th></tr>");
    
//    var topicCount = topic.length;
//    
//    var secondUnit = 1000;    
//    var minuteUnit = secondUnit * 60;
//    var hourUnit = minuteUnit * 60;
//    var dayUnit = hourUnit * 24;
    
    
     
     $("#courseTable").append("<tr>");
     $("#courseTable").append("<td>"+1989+"</tr>");
     $("#courseTable").append("<td>"+topic[0]+"</td>");
     $("#courseTable").append("</tr>");
    
     $("#courseTable").append("<tr>");
     $("#courseTable").append("<td>"+1992+"</tr>");
     $("#courseTable").append("<td>"+topic[1]+"</td>");
     $("#courseTable").append("</tr>"); 
    
     $("#courseTable").append("<tr>");
     $("#courseTable").append("<td>2002-2006</tr>");
     $("#courseTable").append("<td>"+topic[2]+"</td>");
     $("#courseTable").append("</tr>"); 
    
    $("#courseTable").append("<tr>");
     $("#courseTable").append("<td>"+2008+"</tr>");
     $("#courseTable").append("<td>"+topic[3]+"</td>");
     $("#courseTable").append("</tr>"); 
    
    $("#courseTable").append("<tr>");
     $("#courseTable").append("<td>"+2010+"</tr>");
     $("#courseTable").append("<td>"+topic[4]+"</td>");
     $("#courseTable").append("</tr>"); 
    
    $("#courseTable").append("<tr>");
     $("#courseTable").append("<td>"+2011+"</tr>");
     $("#courseTable").append("<td>"+topic[4]+"</td>");
     $("#courseTable").append("</tr>"); 
    
    $("#courseTable").append("<tr>");
     $("#courseTable").append("<td>"+2015+"</tr>");
     $("#courseTable").append("<td>"+topic[5]+"</td>");
     $("#courseTable").append("</tr>"); 
});
//    for(var x=0;x<topicCount;x++)
//    {
//        $("#courseTable").append("<tr>");
//        $("#courseTable").append("<td>"+(x+1)+"</tr>");
//        $("#courseTable").append("<td>"+
//        (new Date((startDate.getTime()+x*7*dayUnit))).toLocaleDateString().slice(5)
//                                 +"</td>");
//        if(topic[x]=="不上課"||topic[x]=="連假"||topic[x]=="校慶停課"||topic[x]=="畢業典禮"){
//            $("#courseTable").append('<td style="color: #d1e0e0";>'+topic[x]+"</td>");
//        }
//        else{
//            $("#courseTable").append("<td>"+topic[x]+"</td>");
//        }
//        $("#courseTable").append("</tr>");
//        
//    }
//    $("#datein").click(function(){
//        var firstday = $("#firstdate").val();//.split('-');
//        var year;
//        var month;
//        var day;
//        year = parseInt(firstday);
//        month = parseInt(firstday[1]);
//        day = parseInt(firstday[2]);
//        setMonthAndDay(year);//month,day);
       
//        for(var x=0;x<topicCount;x++)
//        {
//            $("#courseTable").append("<tr>");
//            $("#courseTable").append("<td>"+(x+1)+"</tr>");
//            $("#courseTable").append("<td>"+
//            (new Date((startDate.getTime()+x*7*dayUnit))).toLocaleDateString().slice(5)
//                                     +"</td>");
//            if(topic[x]=="不上課"||topic[x]=="連假"||topic[x]=="校慶停課"||topic[x]=="畢業典禮"){
//                $("#courseTable").append('<td style="color: #d1e0e0";>'+topic[x]+"</td>");
//            }
//            else{
//                $("#courseTable").append("<td>"+topic[x]+"</td>");
//            }
//            $("#courseTable").append("</tr>");
//
//        }   
//    })
//});