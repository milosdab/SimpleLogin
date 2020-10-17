$(document).ready(function () {
    $("#main").hide();
    let link = "https://services.odata.org/v3/Northwind/Northwind.svc/Customers";
    $.ajax({
        url: link,
        dataType: "json",
        success: function (result) {
            console.log(result);
            customers = result.value;
        },
        error: function (error) {
            console.error(error);
        }

    })
    $("#loginBtn").click(function () {
        let username = $("#username").val();
        let password = $("#password").val();
        for (const key in customers) {
            
                const customer = customers[key];
                
             if(username == customer.CustomerID &&  password == customer.CustomerID){
                 $("#login").hide();
                 $("#main").show();
             }
             
        }
    })
    
})

