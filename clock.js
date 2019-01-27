// this is my javascript

function handRotation(){
	
	var time = new Date(); // function in javascript that gives the date
	
	var hour = time.getHours()%12;  // this gives you 24h
	var minute=time.getMinutes();
	var seconds=time.getSeconds();// these are all javascript functions from Date()
	var millisecond=time.getMilliseconds();
	
	
	var clock=document.querySelector("div.clock") // find the div with clock in my document 
	var HourHand=clock.querySelector("div.hours")
	var MinHand=clock.querySelector("div.minutes")
	var SecondHand=clock.querySelector("div.seconds")
	
	var hourRotation=30*hour+0.5*minute // 360 degrees/12
	var minRotation=6*minute +(0.1*seconds) // 360 degrees/60 + the increment on the seconds
	var secRotation=6*seconds+0.006 *millisecond // 1000 ms in a second
	
	//HourHand.style.WebkitTransform="rotate(30deg)" //this rotates it to 1 pm 
	// we want it it be specific to the hour 
	
	

	HourHand.style.WebkitTransform="rotate("+hourRotation+"deg)";
	MinHand.style.WebkitTransform="rotate("+minRotation+"deg)";
	SecondHand.style.WebkitTransform="rotate("+secRotation+"deg)";
	
	
	requestAnimationFrame(handRotation) // this runs it in every frame 
	
}
	
handRotation()







