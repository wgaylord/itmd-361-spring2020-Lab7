function init(){

	var button = document.getElementById('entrybutton');
    button.addEventListener('click', entrybuttonFunction);
}

function entrybuttonFunction()
{
	var input = document.getElementById('entryinput');
	var output = document.getElementById('textoutput');
	
	output.innerHTML = input.value;
	alert('William Gaylord: ' + input.value);
	
}





window.addEventListener('load', init);
