const charAmntrange = document.getElementById
('charAmntrange')
const charAmntnum = document.getElementById
('charAmntnum')
const includeUppercaseelemnt = document.getElementById('includeUppercase');
const includeSymbolselement = document.getElementById('includeSymbols');
const form = document.getElementById("PassswordGeneratorForm");
const passworddisplay= document.getElementById("passworddisplay");


const UPPERCASE_CHAR_CODE = arrayFromLowToHigh(97,122);
const LOWERCASE_CHAR_CODE = arrayFromLowToHigh(65,90);
const NUMBERS_CHAR_CODE = arrayFromLowToHigh(48,57);
const SYMBOLS_CHAR_CODE = arrayFromLowToHigh(33,47)
.concat(arrayFromLowToHigh(58,64)
)
.concat(arrayFromLowToHigh(91,96)
)
.concat(arrayFromLowToHigh(123,126));



charAmntnum.addEventListener('input',syncCharacterAmount);
charAmntrange.addEventListener('input',syncCharacterAmount);

form.addEventListener('submit', event => {
    event.preventDefault()
    const charAmntnum = charAmntnum.value;
    const includeUppercaseelemnt = includeUppercaseelemnt.checked;
    const includeNumbers = includeNumbers.checked;
    const includeSymbols = includeSymbols.checked;
    const password = GeneratePassword(
        characterAmount,
        includeUppercase,
        includeSymbols,
        includeNumbers
    );
    passworddisplay.innerText = password;
})

function GeneratePassword(characterAmount,includeUppercase,includeSymbols,includeNumbers)
{
 let charCode = LOWER_CHAR_CODE;
 if(includeUppercase) charCode = charCode.concat
 (UPPER_CHAR_CODE);
 if(includeSymbols) charCode = charCode.concat(SYMBOLS_CHAR_CODE);
 if(includeNumbers) charCode = charCode.concat(NUMBERS_CHAR_CODE);

 const passwordCharacters =[];
 for (let i = 0; i < characterAmount; i++){
    const randomcharCode = 
    charCode[Math.floor(Math.random()*charCode.length)];
passwordCharacters.push(String.fromCharCode(randomcharCode));
}
return passwordCharacters.join('');
}

function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);   
 }
 return array;
} 

function syncCharacterAmount(event) {
   const value = event.target.value;
   charAmntnum.value = value;
   charAmntrange.value = value;
}
