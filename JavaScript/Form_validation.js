var flag=false;
function pizzaOrder(){
    var str=document.getElementsByClassName("input");
    var spam=document.getElementsByTagName("span");
    var result=document.getElementsByClassName("res");
    var deli=document.getElementById("Delivery").value;
    var toppy=document.getElementsByClassName("top");
    for(i=0;i<str.length;i++){
        if(str[i].value==""){
            spam[i].style.display="block";
            flag=true;
        }
       
    }
    var count=0;
    var topf="";
    for(i=0;i<toppy.length;i++){
        if(toppy[i].checked==1){
            count=count+1;
            topf+=toppy[i].value;
        }
    }
    
    if(flag){
        return false;
        }
    else{
    
        if(count<2){
        alert("Enter atleast 2 toppings");
            return false;
    }
       else{ 
           result[0].innerHTML+= "Full Name:" + " " + str[0].value +" "+ str[1].value +"<br>"+"Address: "+ str[2].value +"<br>"+"Email is: " + str[3].value +"<br>"+ "Contact number is:" + str[4].value + "<br>" + "Order Details: " + "<br>" + "Your toppings:" + topf +"<br>"+ "Delivery Type:"+ deli;
            
        return false;
    }
    }
}