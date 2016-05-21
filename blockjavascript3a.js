"use strict";
/*computer turn to select ablock
1. select from the right
2. select a block next to any previous selected block
3. cannot click on previous selected block.
4. cannot jump ove user selected blocks
5.cannot click on a dioganal block
*/
function computerMove(){ 
	//alert('cm' + blocks);
	var z = 0;
	var i = 0;
	var j = 0;	
	var var6 = 0;
	var arrayNo = 4;
	var arrayCol = 6;
	var finis = 'N';
	var compset = 'N';
	var moveBlocked = 'N';
	var arrayTel = -1;
	var teller = -1;
	var playerTot = 0;
	var compTot = 0;
	if (wonthis !== 'Y'){
	if (blocks[arrayNo][arrayCol] == 2)
	  { 
	  var arrayColL = arrayCol + teller;
		while (finis == 'N') 
	  {  moveBlocked = 'N';
		   if  (blocks[arrayNo][arrayColL] > 0) // select new blok
			{ moveBlocked = 'Y';	
				alert(' block1 ' + blocks[arrayNo][arrayColL]);
			if (blocks[arrayNo][arrayColL] == 2)
				{  if (arrayTel < 0){arrayColL = arrayColL + teller;}
						alert('a0 ' + arrayNo);		
				   if (arrayTel > 0){arrayNo = arrayNo + arrayTel;
				   alert('a1 ' + arrayNo  + ' block ' + blocks[arrayNo][arrayColL] );
									arrayColL = arrayColL + teller;}}
			else {
			if (blocks[arrayNo][arrayColL] == 1)
				{	//test360(arrayNo,arrayColL);
					if (arrayTel < 0){arrayColL = arrayColL - teller;
					arrayNo = arrayNo + arrayTel}	
					alert( ' a2 ' + arrayNo + 'block ' + blocks[arrayNo][arrayColL]);									
					if (arrayTel > 0){arrayNo = arrayNo + arrayTel;arrayColL ++;};
				}
			}}
			
		   if(arrayNo < 0){arrayTel = 1;
				arrayNo = 0;
				alert('hier ' + arrayNo);
				alert('block ' + blocks[arrayNo][arrayColL]);}	
		   if(arrayNo > 8){arrayTel = -1;
				arrayNo= 8}	
	       if  (blocks[arrayNo][arrayColL] == 0)					
			{ alert('a3 ' + arrayNo);
				 moveBlocked = 'N';
				 finis = 'y';}
	  }		 //finis loop	
alert('blocked' + moveBlocked);	  
		if (arrayColL < 0){				
					teller   = 1;
					compWest = arrayNo;
					arrayNo  = 4;
					arrayCol = 6;}
			
		if (arrayColL >  6){
					  teller   = -1;
					  compEast = 1;
					  arrayNo  = 4;
					  arrayCol = 6;}					  						
		if (arrayNo < 0){
				  arrayTel = 1;
				  compNorth = arrayCol + 1;
					  arrayNo  = 4;
					  arrayCol = 6;}							
		if (arrayNo > 8){
						compSouth = arrayTel;
						arrayTel = -1;
					    arrayNo  = 4;
					    arrayCol = 6;}
				
		if (moveBlocked == 'N'){
			blocks[arrayNo][arrayColL] = 2;
			var buttonNo = arrayColL + 1;
			var6 = arrayNo + '0' + buttonNo;
						
			change_butname(var6, 'cc');
			if(arrayColL == 0){compWest = 1};
			if(arrayNo == 0){compNorth = 1};
			if(arrayNo == 8){compSouth = 1};
				//alert(compSouth);
		    markBlocks();
			countTheTotals();						
			testWinComp();						
								}
			}
	  }
}
	
// mark blocks captured by computer
function markBlocks()
{
if(compWest == 1){
	for (var i = 0; i < 9; i++)
	{ 	
	 if (blocks[i][0] == 2)
	 {
		if (i > 0)
		{ 	for (var k = i; k >= 0; k--)
			{ for(var l = 0; l < 7; l++){
				blocks[k][l] = 2;				
				// change the blok name 
				var buttonNo = l + 1;
				/*var buttonNo = column;*/
				var var6 = k + '0' + buttonNo;				
				change_butname(var6, 'cc');	}			
			}
		} 
	 }
	} 
	}	
if(compNorth == 1){
	for (var i = 0; i < 9; i++)
		{ for (var j = 0; j < 7; j++)
	 if (blocks[i][j] == 2)
			{
			if (i >= 0)
				{ for(var l = j; l < 7; l++){
				blocks[i][l] = 2;				
				// change the blok name 
				var buttonNo = l + 1;
				/*var buttonNo = column;*/
				var var6 = i + '0' + buttonNo;
				change_butname(var6, 'cc');	}			
				}
				}
		} compNorth = 0;
	}	

if(compSouth == 1){
	for (var i = 8; i >= 0; i--)
		{ for (var j = 0; j < 7; j++)
	 if (blocks[i][j] == 2)
			{
			if (i >= 0)
				{ for(var l = j; l < 7; l++){
				blocks[i][l] = 2;				
				// change the blok name 
				var buttonNo = l + 1;
				var var6 = i + '0' + buttonNo;
				change_butname(var6, 'cc');	}			
				}
				}
		}	
}	
}

//mark blocks claimed by player
function markPlayerBlocks()
{
if(playerNorth == 1){
	for (var i = 0; i < 9; i++)
		{ for (var j = 0; j < 7; j++)
			if (blocks[i][j] == 1)
			{
			if (i >= 0)
				{ for(var l = j; l >= 0; l--){
				blocks[i][l] = 1;				
				// change the blok name 
				var buttonNo = l + 1;
				/*var buttonNo = column;*/
				var var6 = i + '0' + buttonNo;
				change_butname(var6, 'bb');	}			
				} playerNorth = 0;
			}
		}
	}	
if(playerSouth == 1){
	for (var i = 8; i >= 0; i--)
		{ for (var j = 0; j < 7; j++)
			if (blocks[i][j] == 1)
			{
			if (i >= 0)
				{ for(var l = j; l >= 0; l--){
				blocks[i][l] = 1;				
				// change the blok name 
				var buttonNo = l + 1;
				//alert('hier');
				/*var buttonNo = column;*/
				var var6 = i + '0' + buttonNo;
				change_butname(var6, 'bb');	}			
				}
			}
		}
	}	playerSouth = 0;
// east needs work
if(playerEast == 1){
	for (var i = 8; i >= 0; i--)
		{ for (var j = 6; j > 0; j--)
			if (blocks[i][j] == 1)
			{
			if (i >= 0)
				{ for(var l = j; l >= 0; l++){
				blocks[i][l] = 1;				
				// change the blok name 
				var buttonNo = l + 1;
				var var6 = i + '0' + buttonNo;
				change_butname(var6, 'bb');	}	
				j = 0;
				i = -1;
				}
			}
		}
	}	playerEast = 0;	
}
function countTheTotals()
{ playerTot = 0;
	compTot = 0;
	for (var i=0; i < 9; i++)
	{
		for (var j=0; j < 7;j++){
			if(blocks[i][j]==1){
				playerTot++;
			}
			if(blocks[i][j]==2){
				compTot++;
			}
		}
	}
document.getElementById("demo").innerHTML = ('Computer = ' + compTot);	
document.getElementById("demo2").innerHTML = ('Player   = ' + playerTot);
}
//test if player won after previous move 
function testWinPlayer()
{//alert('hier p');
	if(playerNorth > 0){
		var resultVar = playerNorth * playerEast;
	}
	if(playerSouth > 0){
		resultVar = resultVar +(playerSouth * playerEast);
	}
	if(playerEast > 0){
		resultVar = resultVar +(32);
	}	
	if (resultVar > 31){
		{  document.getElementById("demo").innerHTML = 'Player won this round!     ';
			wonthis = 'Y';
			alert('player won!');
	}
}
}
//test if the computer won after previous move
function testWinComp()
{ //alert('hier c');
	if(compNorth > 0){
		var resultVar = compNorth * compEast;
	}
	if(compSouth > 0){
		resultVar = resultVar +(compSouth * compEast);
	}
	if(compWest > 0){
		resultVar = resultVar + 32;
	}
	if (resultVar > 32){
		{  document.getElementById("demo").innerHTML = 'Computer won this round     ';
			wonthis = 'Y';
			alert('computer won!');
	}
}
}

function testArrayNo()
{
	if (arrayNo == -1)
	{
		arrayTel = 1;
		arrayNo  = 4;
	}
}


