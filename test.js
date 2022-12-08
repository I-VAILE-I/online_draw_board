var previousThicknessElement;

function fun1() {
	var rng=document.getElementById('r1'); //rng - это ползунок
	var i1=document.getElementById('i1'); // i1 - input
	i1.value=rng.value;
	
	context.lineWidth = i1.value;
	
	// Меняем стиль элемента <img>, по которому щелкнули
	imgElement.className = "Selected";
	
	// Возвращаем ранее выбранный элемент <img> в нормальное состояние
	if (previousThicknessElement != null)
	   previousThicknessElement.className = "";
	   
	previousThicknessElement = imgElement;
	
}
