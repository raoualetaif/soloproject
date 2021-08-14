//game rules 
//the picture should be covered with same image 
//when you hover on the picture ,it flip to uncovered the picture in the back 
	//click on it to see the hidden image 
//hover on another one and click on it 
	// if it's a match , the picure in the back disapear and the front one stay on both side
	//now you know where's the other image click on it to disapear also 
	//if it's not a match the two picture will flip again
//finish with same task until you finish the game while there is counter counting your matched clicks


function game(){
	//create a counter to count the clicks of the matched clicks
	var counter=0
	//create an accumulator to push the source of the image clicked
	var arr =[]
	//on event click i will target the images and push their source into the accumulator
	$(".p").click(function(){
		arr.push(this.src)
		//console.log the array of tthe source of our clicked images
		console.log(arr)
		//if the last 2 sources of the images in the accumulator are match
			//hide the back picture 
		if(arr[arr.length-1] === arr[arr.length-2]){
			$(this).hide(this)
			//incremente the counter
			counter++
			//dislay the nombre of the matched clicks by appending the value of the counter 
		var $div1 = $(`<div>${counter}</div>`)
	    	$("#count").append($div1)
		}	

	});
}
//invoke the function
game();
	

       


//tried this way this but i found it so challenging

// //create an array of objects that hold the image and their sources 
// var arr=[{title:'strawberry',
// 					src:'strawberry.jpg'},
// 		{title:'sun',
// 					src:'sun.jpg'},
// 		{title:'cat',
// 					src:'cat.jpg'},
// 		{title:'dog',
// 					src:'dog.jpg'},
// 		{title:'cat',
// 					src:'cat.jpg'},
// 		{title:'avocado',
// 					src:'avocado.jpg'},
// 		{title:'flower',
// 					src:'flower.jpg'},
// 		{title:'strawberry',
// 					src:'strawberry.jpg'},
// 		{title:'sun',
// 					src:'sun.jpg'},
// 		{title:'dog',
// 					src:'dog.jpg'},
// 		{title:'flower',
// 					src:'flower.jpg'},
// 		{title:'avocado',
// 					src:'avocado.jpg'}
// 					];



//matching function 

//if i click on the strawberry picture and i click on another one 
		//it's not a match so i should click on another untill i find a match 
		//if it's a match the picture stay fliped


	// $("#0").click(function(){
	// 	(".flip-front").attr("src","strawberry.jpg");
	

	// })


// function append(id,num){
// 	$('#b').click( function(){
// 	$(`#${id} img`).attr('src', arr[num].src)
// })
// }

// function swittch(id,num){
// 	$(`#${id}`).click(function(){
// 	$(`#${id} img`).attr('src', arr[num].src)
// 	})
// }
// for(var id=0;id<12;id++){
// swittch(id)
// }

    
