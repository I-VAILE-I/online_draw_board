var canvas;
var context;

window.onload = function() {
      canvas = document.getElementById("drawingCanvas");
      context = canvas.getContext("2d");
       
      // ���������� ��������� ��� ��������� �������
      canvas.onmousedown = startDrawing;
      canvas.onmouseup = stopDrawing;
      canvas.onmouseout = stopDrawing;
      canvas.onmousemove = draw;
   }
