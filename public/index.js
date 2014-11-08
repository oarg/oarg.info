var tileBool = false;

$("#tile1").click(function(){
	if(!tileBool){
		document.getElementById('tile1').style.width = 100+"%";
		document.getElementById('tile2').style.width = 0+"%";
		document.getElementById('tile2').style.height = 0+"%";
		document.getElementById('tile1').style.fontSize = 30+"px";
		document.getElementById('tile2').style.fontSize = 0+"px";
		tileBool = true;
	}
	else{
		document.getElementById('tile1').style.width = 49+"%";
		document.getElementById('tile2').style.width = 49+"%";
		document.getElementById('tile2').style.height = 200+"px";
		document.getElementById('tile1').style.fontSize = 30+"px";
		document.getElementById('tile2').style.fontSize = 30+"px";
		tileBool = false;
	}
});

$("#tile2").click(function(){
	if(!tileBool){
		document.getElementById('tile2').style.width = 100+"%";
		document.getElementById('tile1').style.width = 0+"%";
		document.getElementById('tile1').style.height = 0+"%";
		document.getElementById('tile2').style.fontSize = 30+"px";
		document.getElementById('tile1').style.fontSize = 0+"px";
		tileBool = true;
	}
	else{
		document.getElementById('tile2').style.width = 49+"%";
		document.getElementById('tile1').style.width = 49+"%";
		document.getElementById('tile1').style.height = 200+"px";
		document.getElementById('tile2').style.fontSize = 30+"px";
		document.getElementById('tile1').style.fontSize = 30+"px";
		tileBool = false;
	}
});