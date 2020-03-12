var age = 16;
var isMember = true;
var result = null;
if (age <= 15) {
    result = '800';
} else if (isMember) {
    result = '1000';
} else {
    result = '1800';
}
document.write(result);