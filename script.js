//your code here
function  textCount(event) {
   let letterCnt = document.getElementById("letterCount");
  // let letterCount = 0;

const text = event.target.value;
	const len = text.length;
	if(text === ""){
		document.getElementById("letterCount").innerText = 0;	
	}else{
		document.getElementById("letterCount").innerText = len;
	}
	
}
const txt = document.getElementById("evaluatedText");
txt.addEventListener("click", ()=>{
	document.getElementById("letterCount").innerText = 0;
})
txt.addEventListener("txt", (event) => {
	textCount(event);
});
