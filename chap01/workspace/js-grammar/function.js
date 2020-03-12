var myBirthTime = new Date(1982, 11, 17, 12, 30);
function updateParagrapth() {
    var now = new Date();
    var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
    document.getElementById('birth-time').innerText = '生まれてから' + seconds + '秒経過';
}
setInterval(updateParagrapth, 50);


function areaOfCircle(r) {
    var area = (r * r * 3.14);
    return area;
}
document.write( '<p>' + areaOfCircle(5) + '</p>' );
document.write( '<p>' + areaOfCircle(10) + '</p>' );
document.write( '<p>' + areaOfCircle(15) + '</p>' );