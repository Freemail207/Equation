'use strict';
var input = document.getElementsByClassName('input')[0],
    output = document.getElementsByClassName('output')[0],
    putMe= document.getElementsByClassName('putMe')[0];
putMe.onclick=function() {
    var string = input.value;
    var pattern = [/[a-z][\d]|[a-z][a-z]/gi, /[\.]{2,}/gi, /[\.][\w][\.]/gi, /[a-z][\.]/gi, /[\\+*-]{2,}/gi, /[\\+*-][\)]/gi, /\s/gi, /[\(][\\+*]/gi, /[\d][a-z]/gi, /[(][)]/gi, /[a-z][(]/gi,/[\)][\(]/gi,/[\)][0-9]/gi,/[\)][a-z]/gi];
    var result = [];
    var description = [];
    var c = checkBracket(string);
    pattern.forEach(function (item, i, pattern) {
        result[i] = string.match(pattern[i]);
    });
    description[0] = ", Wrong variable name <br>";
    description[1] = ", Wrong amount of point <br>";
    description[2] = ", unknown number <br>";
    description[3] = ", Wrong variable <br>";
    description[4] = ", unknown action <br>";
    description[5] = ", Wrong action before bracket<br>";
    description[6] = ", Delete space <br>";
    description[7] = ", Wrong action after bracket<br>";
    description[8] = ", Wrong variable name <br>";
    description[9] = ", empty bracket <br>";
    description[10] = ", unknown action <br>";
description[11] = ",  unknown action <br>";
description[12] = ", wrong action after bracket<br>";
description[13] = ", wrong action after bracket<br>";
    result.forEach(function (item, i, result) {
        if (item != null) {
            document.write(result[i] + description[i]+"<br>");
      
        }
    });
    var bracket;
    if (bracket = checkBracket(string)) {
        document.write(bracket);
    }
checkAction(string);
}
////////////////////////////////
//Check amount of bracket
function checkAction(str){
    var res;
    res=str[0].match(/([a-z])|([0-9])|(\-)/);
    if(!res){
        alert('wrong first symbol');
    }
    res=str[str.length-1].match(/([a-z])|([0-9])/);

    if(!res){
        alert('wrong last symbol');
    }
}
function checkBracket(str){
    var checksum=0;

    for(var i=0; i<str.length; i++){
        if(str[i]=='('){
            checksum++;
        }
        if(str[i]==')'){
            checksum--;
        }
        if(checksum<0){
            return "Wrong first bracket or amount of open bracket";
        }

    }
    if(checksum!=0){
        return "Wrong amount of bracket";
    }

}


