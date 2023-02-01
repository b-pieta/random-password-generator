const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatorButton = document.getElementById('generate-password');
let firstShelf = document.getElementById('first-shelf');
let secondShelf = document.getElementById('second-shelf');
let thirdShelf = document.getElementById('third-shelf');
let randomIndex = 0;
let lengthButton = document.getElementById('length');

count = 0;

lengthButton.addEventListener('click', function () {
	count = prompt('Please enter the length: ');

	while (count > 15) {
		if (count == null) {
			return;
		}
		window.alert(
			"Password can't be longer than 15 characters. Please try again."
		);
		count = prompt('Please enter the length: ');
	}

	while (count < 8) {
		if (count == null) {
			return;
		}
		window.alert(
			"Password can't be shorter than 8 characters. Please try again."
		);
		count = prompt('Please enter the length: ');
	}

	if (isNaN(count) == true) {
		if (count == null) {
			return;
		}
		window.alert('It is not a number. Invalid length. Try again.');
		count = prompt('Please enter the length: ');

	} else if (count != Math.floor(count)) {
        if (count == null) {
			return;
		}
        window.alert("Number can't be decimal. Try again.")
        count = prompt('Please enter the length: ');
    }



	lengthButton.textContent = 'Length: ' + count;
});

generatorButton.addEventListener('click', function () {
	if (count == null) {
		window.alert('Please specify the length. Try again.');
	}

	firstShelf.textContent = '';
	secondShelf.textContent = '';
	thirdShelf.textContent = '';

	for (let i = 0; i < count; i++) {
		randomIndex = Math.floor(Math.random() * characters.length);
		firstShelf.textContent += characters[randomIndex];
	}

	for (let j = 0; j < count; j++) {
		randomIndex = Math.floor(Math.random() * characters.length);
		secondShelf.textContent += characters[randomIndex];
	}

	for (let k = 0; k < count; k++) {
		randomIndex = Math.floor(Math.random() * characters.length);
		thirdShelf.textContent += characters[randomIndex];
	}
});
