'use strict';
var input = document.getElementsByClassName('input')[0],
    output = document.getElementsByClassName('output')[0],
    putMe= document.getElementsByClassName('putMe')[0];
putMe.onclick=function() {
    var string = input.value;
    var result = [];
    var description = [];
    var c = checkBracket(string);
// RegExp check correct action
    var action={
        reg: /([\\+*-]{2,})|([\\+*-][\)])|([\(][\\+*])|([(][)])|([\)][\(])|([\)][0-9])|([\)][a-z])|([a-z][(])/gi,
        normReg:[/[\(][+-]*[\)]/gi,/[\\*]/gi],//for parallel, lab2
        error: 'Unknown action <br>'
    }
// RegExp check correct action
    var variable={
        reg: /([a-z][\d]|[a-z][a-z])|([\.]{2,})|([\.][\w][\.])|([a-z][\.])|([\d][a-z])/gi,
        error: 'Unknown variable <br>'
    }
    var check = [action, variable];
        result[0] = string.match(action.reg);
    result[1] = string.match(variable.reg);


    result.forEach(function (item, i, result) {
        if (item != null) {
            document.write(result[i] + check[i].error);
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
    res=str[0].match(/([a-z])|([0-9])|(\-)|\(|\)/);
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