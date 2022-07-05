// program to convert decimal to binary
function DecToBinary(decimal) {
    let binary = 0, reminder, i = 1;
    while (decimal != 0) {
        reminder = decimal % 2;
        decimal = parseInt(decimal / 2);
        binary = binary + reminder * i;
        i = i * 10;
    }
    return (binary);
}
convertToBinary(125);