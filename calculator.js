var input = document.getElementById("insert");
var init = document.getElementById("inert");
var operate = document.querySelectorAll(".operator");
var num = document.getElementsByClassName("number");
var button = document.getElementById("button");
//call this func to display what history div contents are
function insertInert() {
    return init.innerText;
}
//call this func to work on/change history div value
function insertOnert(value) {
    return init.innerText = value;
}
//call this func to display input div contents
function getInput(){
    return input.innerText;
}
//call this func to work on/change input div values
function getOnput(output){
    return input.innerText = output;
}
//iterate over all operator class
for(var i=0; i<operate.length; i++) {

    operate[i].onclick =function() {
      //if clicked button is backspace remove last number or value            
        if (this.id=="backspace") {
            //convert input value to string
            var output = getInput().toString();
            //remove last item with substr
            output = output.substr(0,output.length-1);
            getOnput(output);          
        }
        
        else if(this.id=="clear") {
            //if clear remove all number or value by outputing an empty div
              getOnput("");
              insertInert("");
        }
        else {
            //else,
              var output = getInput();
             
              var value = output+this.id;
              //add clicked item to history div
              insertOnert(value);
              //empty input div
              getOnput("");
              
        
              
              button.onclick = function () {
                  //evaluate the arithmetic                          
               getOnput(eval(insertInert() + getInput()));
               
               insertOnert("");
              }
        }
          
    }

          
        
    
}
//iterate over all number class
for(var i=0; i<num.length; i++) {
    num[i].onclick =function() {
        var output = getInput();
        if (output != "NaN") {
            //if clicked item is a number, add the new number to input div 
          output = output+this.id;
          getOnput(output);
          
        } else {
            //if clicked item is not a number
             var output = "";
             //display empty input div
             getOnput(output);
        }
        
        
    }
}