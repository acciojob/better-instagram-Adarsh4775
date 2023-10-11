//your code here
let dragged;


function drag(event){
	 dragged = event.target;
}

function allowDrop(event){
	event.preventDefault();
}

function drop(event)
{
	event.preventDefault();
	if(event.target.classList.contains("div"))
	{
		let temp=event.target.style.backgroundImage;

		event.target.style.backgroundImage = dragged.style.backgroundImage;

		dragged.style.backgroundImage = temp;
	}
}

let divs = document.querySelectorAll(".div");
divs.forEach(div=>{
	        div.addEventListener("dragstart", drag);
	div.addEventListener("dragover",allowDrop);
	       div.addEventListener("drop", drop);
});


divs.forEach((div, index) => {
    div.style.backgroundImage = `url('image${index + 1}.jpg')`;
});










