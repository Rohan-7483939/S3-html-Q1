
	const isVowel= (checkingVowel) => {
		return (checkingVowel == 'a' || checkingVowel == 'A' || checkingVowel == 'e'
				|| checkingVowel == 'E' || checkingVowel == 'i' || checkingVowel == 'I'
				|| checkingVowel == 'o' || checkingVowel == 'O' || checkingVowel == 'u'
				|| checkingVowel == 'U');
	}

	const reverseVowel=(str1) => {
		let j = 0;
		let str = str1.split('');
		let vowel = "";
		for (let i = 0; i < str.length; i++) {
			if (isVowel(str[i])) {
				j++;
				vowel += str[i];
			}
		}
	
		for (let i = 0; i < str.length; i++) {
			if (isVowel(str[i])) {
				str[i] = vowel[--j];
			}
		}

		return str.join("");
	}
	
	let str = "hello";
	console.log(reverseVowel(str));
		
