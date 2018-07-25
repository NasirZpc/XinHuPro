export function isNull( str ){
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return re.test(str);
}
