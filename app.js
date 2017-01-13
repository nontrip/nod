var nod = function(a,b){
do {
if (a>b){
a=a%b;
} else {
b=b%a;
}
} while(a!=0 && b!=0)
return a+b;
}

$(document).ready(function(){



	$('button').on('click', function(){
		var a = $('#a').val();
		var b = $('#b').val();
		$('#result').text(nod(a,b));
	});
});
