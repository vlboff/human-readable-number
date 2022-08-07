module.exports = function toReadable (number) {
    number = String(number);

    const singleNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine', 
                           'ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const doubleNumbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number.length === 1) {
        return singleNumbers[number];
    } else if (number.length === 2 && Number(number) < 20) {
        return singleNumbers[number];
    } else if (number.length === 2 && Number(number) >= 20) {
        if (number % 10 === 0) {
            return doubleNumbers[number[0] - 2];
        } else {
        return `${doubleNumbers[number[0] - 2]} ${singleNumbers[number[1]]}`;
        }
    } else if (number.length === 3){
        if (number % 100 === 0) {
            return `${singleNumbers[number[0]]} hundred`;
        } else if (number % 10 === 0 && Number(number[1]) !== 1) {
            return `${singleNumbers[number[0]]} hundred ${doubleNumbers[number[1] - 2]}`;
        } else if (Number(number[1]) === 0) {
            return `${singleNumbers[number[0]]} hundred ${singleNumbers[number[2]]}`;
        } else if (Number(number[1]) === 1) {
            return `${singleNumbers[number[0]]} hundred ${singleNumbers[Number(number.slice(1))]}`;
        } else {
            return `${singleNumbers[number[0]]} hundred ${doubleNumbers[number[1] - 2]} ${singleNumbers[number[2]]}`;
        }
    }
};

