gradient: function(canva,w,h){
/*
canva- ������ canvas
h - ������ �����
w- ������
 */
  var context, gradient, hue;
			 
    context = canva.getContext("2d");
			      
	gradient = context.createLinearGradient(w/2,h,w/2,0);
				   
	 hue = [[255,0,0],[255,255,0],[0,255,0],[0,255,255],[0,0,255],[255,0,255],[255,0,0]];
         //����� �� ����� hue � rgb
				   
	     for (var i=0; i <= 6;i++){
		
	         color = 'rgb('+hue[i][0]+','+hue[i][1]+','+hue[i][2]+')';
	
	             gradient.addColorStop(i*1/6, color);
	
	                 };
				             
			context.fillStyle = gradient;
         	 
			   context.fillRect(0,0, w ,h);	
			 }	 	 