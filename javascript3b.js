//do a 360 to see where the posible options is
function test360(line,col){
	if(line > 0 && col > 0){
		line = line - 1;
		col = col - 1;
	{for(i=o;i<3;i++){		
		if (blocks[line][col] <> 0)
		{
			line ++;				
		}
		else
		{
			
			
		}
}}}}
//
function lookForOpen()
{for(var a=0; a > 8; a++){
	for(var b=0; b > 6; b++) {
			if (blocks[a][b] == 0){
				openrow = a;
				opencol = b;				
				return openrow + "," + opencol;
			}
			   
		}
	}	
}