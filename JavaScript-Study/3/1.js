var str = "ss fsdfsdvdgffs gsfds fsf%fsfđs fsdfsd sfdv";
var index = str.indexOf("%");
var value = str.slice(index + 1, str.length);
console.log(value);