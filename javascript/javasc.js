let but2 =document.getElementById('but2');
let but1 =document.getElementById('but1');
let text =document.getElementById('text');
let aside =document.getElementById('aside');

but2.onclick=()=>{

	aside.innerHTML = text.value;
	localStorage.setItem("value",text.value);


}

but1.onclick=()=>{
	aside.innerHTML = "";
	text.value =" ";
}

onload=()=>{

aside.innerHTML = localStorage.getItem("value");

}