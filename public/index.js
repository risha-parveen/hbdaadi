const hysterical = document.getElementById("hysterical-image")
const hystericalContainer = document.getElementById("hysterical")
const happy = document.getElementById("happy")
const bday = document.getElementById("bday")
const toby = document.getElementById("toby")
const letter = document.getElementById("letter")


let currentPoshappy= null
let currentPosbday = null
let currentPoshappyUp=null, currentposBdayUp = null

window.addEventListener('scroll', ()=>{
  const offset = window.scrollY
  const viewportHeight = window.innerHeight
  let widthForImage = (offset + 1)*0.9
  const distanceFromTop = hysterical.getBoundingClientRect().top
  //console.log(viewportHeight, widthForImage)
  const widthForhappy = happy.getBoundingClientRect().top
  const widthForbday = bday.getBoundingClientRect().top

  
  
  if(distanceFromTop>0) {
    hysterical.style.width=widthForImage + "px"
    //happy.style.display = "none"
    happy.style.right = (widthForhappy-400) + "px"
    bday.style.right = (widthForbday-200*(widthForbday/100)) + "px"
    currentPoshappy= (widthForhappy-400)
    currentPosbday=widthForbday-200*(widthForbday/100)
    currentPoshappyUp = widthForhappy
  }
  else {
    happy.style.right = currentPoshappy
    bday.style.right = currentPosbday
  }
})

var getOffsetTop = function (elem) {

	// Set our distance placeholder
	var distance = 0;

	// Loop up the DOM
	if (elem.offsetParent) {
		do {
			distance += elem.offsetTop;
			elem = elem.offsetParent;
		} while (elem);
	}

	// Return our distance
	return distance < 0 ? 0 : distance;
};

// Example
//var elem = document.querySelector('#some-element');ge

const paperContainer = document.getElementById("paper-container")
const paper=document.getElementById("paper")
const overlay = document.getElementById("overlay")
const fuckyou =document.getElementById("fuckyou")
const writing =document.getElementById("writing")

let flag=true

paperContainer.style.display = "none"

letter.addEventListener('click', (e)=>{
  paperContainer.style.display = "block"
  
  if(flag === true){
    writing.style.display = "block"
    fuckyou.style.display = "none"
    flag = false
  }
  else {
    writing.style.display = "none"
    fuckyou.style.display ="block"
    flag = true
  }

  
})

paperContainer.addEventListener('click', (e)=>{
  if(overlay.contains(e.target)){
    paperContainer.style.display="none"
  }
})


