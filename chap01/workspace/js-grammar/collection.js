var classes = ['A組', 'B組', 'C組', 'D組'];

for (var grade = 1; grade < 4; grade++) {
    for (var i = 0; i < 4; i++) {
        // <p>〇年〇組</p>という文字列を作る
        document.write('<p>' + grade + '年' + classes[i] + '</p>');
    }
}

var str = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];
for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str.length; j++) {
        document.write('<p>' + str[i] + str[j] + '</p>');
    }
}