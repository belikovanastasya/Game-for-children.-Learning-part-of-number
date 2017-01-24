$ (function(){



$("#start").one("click", function(e){
	var inputNumb = parseInt($("input").val());
if(inputNumb>20 || inputNumb<1){
	alert('Введите число от 1 до 20')
}
else{
for(var i = 0; i<=inputNumb; i++){
	
	//$( "#one" ).clone(true).appendTo( "#new" );

	$("#new").append("<div><input><input><input></div>");
	$("#new div").addClass('newitem');
	$("#check").css("display","block");	



$('.newitem input:nth-child(3)').keydown(function(e){
  console.log(e.key);
  e.preventDefault();



});

}};
	

$("#check").click(function(e){

var inputNumb = $(".data input").val();



	$('.newitem').each(function() {
	  num1 = parseInt($(this).children().val());
	  num2 = parseInt($(this).children(). next().val());
	  // num3 = $("#slide1").children(). last().val();
	  num3 = num1+num2;
	  if(num3==inputNumb){


	   $(this).children(). last().val("Да!"); 

	
}
else{
	$(this).children(). last().val("Нет!"); 
}

})

})
});

$("#reset").click(function(){
	location.reload(true);
})

})

