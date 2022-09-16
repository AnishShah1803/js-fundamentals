function encryption(inputString) {
    const characters = ` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:."\\|,.<>/?\`~§±1234567890`;
    let encryptedString = "";
    for (let i = 0; i < inputString.length; ++i){
        encryptedString += characters.indexOf(inputString[i]) + 1;
    }
    return encryptedString;
};