console.log("hii");
$.ajax({
    url:"https://api.covid19api.com/summary",
    type:"GET",
    dataType:"json",
    success:function(data){
      //  console.log(data);
        var element=data.Countries;
      //  console.log(element[0]);
        element.forEach(ele => {
            //creating row in tables
            var tablerow=`<tr><td>${ele.Country}</td> <td>${ele.TotalConfirmed}</td><td>0</td><td>${ele.TotalRecovered}</td><td>${ele.TotalDeaths}</td></tr>`
           // console.log(tablerow);
            
            $("#myTable").append(tablerow);
    
            
            
            // $("#confirm").text(ele.TotalConfirmed);
            // $("#active").text();
            // $("#recover").text(ele.TotalRecovered);
            // $("#death").text(ele.TotalDeaths);
        })
        $("#myTable").DataTable();
    },
    error:function(){
        console.log("error in the request");
    }
});
//including data table for sort and search functionalitites


