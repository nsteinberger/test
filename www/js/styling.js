/*
* Javascript-Funktionen zur Unterstützung der CSS-Formatierungen
*/

/* Beim Laden des Fensters soll die Höhe ermittelt werden.
*  Danach wird die Höhe des Headers berechnet, falls die 
*  berechnete Höhe unter 70px fällt, werden 70px gesetzt.
*/
jQuery(window).load(function setHeaderHightLoad(){
	
	$headerHeightMain = null;
	$headerHeightSub = null;
	$currentHeight = null;
	$currentHeight = $(window).height();
	
	$headerHeightMain = $currentHeight/100*10;
	$headerHeightMain = $currentHeight/20;
	
	
	alert("main: " + $headerHeightMain + " Sub: " + $headerHeightSub);
	
	if($headerHeightMain<40){
		$headerHeightMain = 40*1.3;
	}
	//else if($headerHeight>100){
		//$headerHeight = 100;
	//}
	
	if($headerHeightSub<40){
		$headerHeightSub = 40*1.1;
	}
	
	alert("hallo");
	alert("main: " + $headerHeightMain + " Sub: " + $headerHeightSub);
	
	$( "#appheader" ).css("height", $headerHeightMain+"px");
	$( ".header" ).css("height", $headerHeightSub+"px");
	
});

/* Beim Ändern der Größe des Fensters (von hoch auf quer und 
*  umgekehrt) soll die Höhe ermittelt werden.
*  Danach wird die Höhe des Headers berechnet, falls die 
*  berechnete Höhe unter 70px fällt, werden 70px gesetzt.
*/
jQuery(window).resize(function setHeaderHightResize(){
	
	$headerHeightMain = null;
	$headerHeightSub = null;
	$currentHeight = null;
	$currentHeight = $(window).height();
	
	$headerHeightMain = $currentHeight/100*10;
	$headerHeightMain = $currentHeight/20;
	
	if($headerHeightMain<40){
		$headerHeightMain = 40*1.3;
	}
	//else if($headerHeight>100){
		//$headerHeight = 100;
	//}

	if($headerHeightSub<40){
		$headerHeightSub = 40*1.1;
	}
	
	$( "#appheader" ).css("height", $headerHeightMain+"px");
	$( ".header" ).css("height", $headerHeightSub+"px");
	
});

