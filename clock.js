// this is my javascript

function handRotation(){
	
	var currentTime= new Date() // function in javascript that gives the date
	
	var hour = currentTime.getHours()%12  // this gives you 24h
	var minute=currentTime.getMinutes()
	var seconds=currentTime.getSeconds()// these are all javascript functions from Date()
	var millisecond-=currentTime.getMilliseconds()
	
	var clock = document.querySelector("div.clock") // find the div with clock in my document 
	var HourHand=clock.querySelector("div.hours")
	var MinHand=clock.querySelector("div.minutes")
	var SecondHand=clock.querySelector("div.seconds")
	
	var hourRotation= 30*hour
	// 360 degrees/12
	
	//hourHand.style.transform="rotate(30 degrees)" - this rotates it to 1 pm
	// we want it it be specific to the hour 
	
	HourHand.style.transform= "rotate(30deg)"// this doesn't work
	
	requestAnimationFrame(handRotation) // this runs it in every frame 
	
}
	

handRotation()








