function saveCanvas() {
    // Находим элемент <img>
	var imageCopy = document.getElementById("savedImageCopy");
	
	// Отображаем данные холста в элементе <img>
	imageCopy.src = canvas.toDataURL();
	
	// Показываем элемент <div>, делая изображение видимым
	// делая изображение видимым
	var imageContainer = document.getElementById("savedCopyContainer");
    imageContainer.style.display = "block";
}