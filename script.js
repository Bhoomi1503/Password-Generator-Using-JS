document.getElementById('generateButton').addEventListener('click', generatePassword);
document.getElementById('copyButton').addEventListener('click', copyPassword);

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;

    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let characters = '';
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
    if (includeLowercase) characters += lowercase;
    if (includeUppercase) characters += uppercase;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('passwordOutput').value = password;
}

function copyPassword() {
    const passwordOutput = document.getElementById('passwordOutput');
    passwordOutput.select();
    alert('Password copied to clipboard');
}
