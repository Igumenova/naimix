export function getArcan(birthday): Number {
    let arcan = 0;
    birthday.split('.').forEach((element, index) => {
        if (index == 2) {
            arcan += summString(element);
        } else {
            arcan += Number(element);
        }
    });
    return arcan > 22 ? Number(summString(arcan)) : Number(arcan);
}

function summString(str) {
    return str.split('').reduce((acc, val) => Number(acc) + Number(val), 0);
}
