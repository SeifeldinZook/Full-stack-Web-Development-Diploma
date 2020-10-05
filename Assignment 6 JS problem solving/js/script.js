// Question 1 //
function click1() {
    if (event.code == "Enter") {
        if (isNaN(inp1.value) == false) {
            document.getElementById('outp1').innerHTML = inp1.value;
        }
        else {
            document.getElementById('outp1').innerHTML = "Your Input is NOT a number";
        }
    }
}
var inp1 = document.getElementById('inp1'); inp1.addEventListener('keyup', click1)

// Question 2 //
function click2() {
    if (event.code == "Enter") {
        if (isNaN(inp2.value) == false) {
            if (inp2.value % 3 == 0) {
                document.getElementById('outp2').innerHTML = "Yes";
            } else if (inp2.value % 4 == 0) {
                document.getElementById('outp2').innerHTML = "Yes";
            } else {
                document.getElementById('outp2').innerHTML = "No";
            }
        }
        else {
            document.getElementById('outp1').innerHTML = "Your Input is NOT a number";
        }
    }
}
var inp2 = document.getElementById('inp2'); inp2.addEventListener('keyup', click2);

// Question 3 //
var arr = [0, 0];
function click3a() {
    if (event.code == "Enter") {
        if (isNaN(inp3a.value) == false) {
            arr[0] = Number (inp3a.value);
            document.getElementById('outp3').innerHTML = arr;
            if (arr[1] > arr[0]) {
                document.getElementById('max').innerHTML = arr[1]
            } else {
                document.getElementById('max').innerHTML = arr[0]
            };
        }
        else {
            document.getElementById('outp3').innerHTML = "Your Input is NOT a number";
        };
    };
};
function click3b() {
    if (event.code == "Enter") {
        if (isNaN(inp3b.value) == false) {
            arr[1] =  Number (inp3b.value);
            document.getElementById('outp3').innerHTML = arr;
            if (arr[1] > arr[0]) {
                document.getElementById('max').innerHTML = arr[1]
            } else {
                document.getElementById('max').innerHTML = arr[0]
            };
        }
        else {
            document.getElementById('outp3').innerHTML = "Your Input is NOT a number";
        };
    };
};
var inp3a = document.getElementById('inp3a'); inp3a.addEventListener('keyup', click3a);
var inp3b = document.getElementById('inp3b'); inp3b.addEventListener('keyup', click3b);

// Question 4 //
function click4() {
    if (event.code == "Enter") {
        if (isNaN(inp4.value) == false) {
            if (inp4.value >= 0) {
                document.getElementById('outp4').innerHTML = "Postive";
            } else {
                document.getElementById('outp4').innerHTML = "Negative";
            }
        }
        else {
            document.getElementById('outp4').innerHTML = "Your Input is NOT a number";
        }
    }
}
var inp4 = document.getElementById('inp4'); inp4.addEventListener('keyup', click4)

// Question 5 //
var arr = [0, 0, 0];
function click5a() {
    if (event.code == "Enter") {
        if (isNaN(inp5a.value) == false) {
            arr[0] = Number (inp5a.value);
            document.getElementById('outp5').innerHTML = arr;
            document.getElementById('max5').innerHTML = Math.max.apply(Math, arr);
            document.getElementById('min5').innerHTML = Math.min.apply(Math, arr);
        } else {
            document.getElementById('outp5').innerHTML = "Your Input is NOT a number";
        };
    };
};
function click5b() {
    if (event.code == "Enter") {
        if (isNaN(inp5b.value) == false) {
            arr[1] =  Number (inp5b.value);
            document.getElementById('outp5').innerHTML = arr;
            document.getElementById('max5').innerHTML = Math.max.apply(Math, arr);
            document.getElementById('min5').innerHTML = Math.min.apply(Math, arr);
        } else {
            document.getElementById('outp5').innerHTML = "Your Input is NOT a number";
        };
    };
};
function click5c() {
    if (event.code == "Enter") {
        if (isNaN(inp5c.value) == false) {
            arr[2] =  Number (inp5c.value);
            document.getElementById('outp5').innerHTML = arr;
            document.getElementById('max5').innerHTML = Math.max.apply(Math, arr);
            document.getElementById('min5').innerHTML = Math.min.apply(Math, arr);
        } else {
            document.getElementById('outp5').innerHTML = "Your Input is NOT a number";
        };
    };
};
var inp5a = document.getElementById('inp5a'); inp5a.addEventListener('keyup', click5a);
var inp5b = document.getElementById('inp5b'); inp5b.addEventListener('keyup', click5b);
var inp5c = document.getElementById('inp5c'); inp5c.addEventListener('keyup', click5c);

// Question 6
function click6() {
    if (event.code == "Enter") {
        if (isNaN(inp6.value) == false) {
            if (inp6.value % 2 == 0) {
                document.getElementById('outp6').innerHTML = "Even";
            } else {
                document.getElementById('outp6').innerHTML = "Odd";
            }
        }
        else {
            document.getElementById('outp6').innerHTML = "Your Input is NOT a number";
        }
    }
}
var inp6 = document.getElementById('inp6'); inp6.addEventListener('keyup', click6)

// Question 7
var marks = [0, 0, 0, 0, 0];
var total;
function click7a() {
    if (event.code == "Enter") {
        if (isNaN(inp7a.value) == false) {
            marks[0] = Number (inp7a.value);
            document.getElementById('outp7').innerHTML = marks;
            total = 0;
            for (var i = 0; i < 5; i++) {
                total += Number (marks[i])
            }
            document.getElementById('outp7a').innerHTML = total;
            document.getElementById('outp7b').innerHTML = total / Number(5);
            var percent1 = (marks[0]/total)*100;
            
            total -=  marks[0];
        } else {
            document.getElementById('outp7').innerHTML = "Your Input is NOT a number";
        }
    }
};
function click7b() {
    if (event.code == "Enter") {
        if (isNaN(inp7b.value) == false) {
            marks[1] = Number (inp7b.value);
            document.getElementById('outp7').innerHTML = marks;
            total = 0;
            for (var i = 0; i < 5; i++) {
                total += Number (marks[i])
            }
            document.getElementById('outp7a').innerHTML = total;
            document.getElementById('outp7b').innerHTML = total / Number(5);
            document.getElementById('outp7c').innerHTML = (marks[1]/total);
            total -=  marks[1];
        } else {
            document.getElementById('outp7').innerHTML = "Your Input is NOT a number";
        }
    }
};
function click7c() {
    if (event.code == "Enter") {
        if (isNaN(inp7c.value) == false) {
            marks[2] = Number (inp7c.value);
            document.getElementById('outp7').innerHTML = marks;
            total = 0;
            for (var i = 0; i < 5; i++) {
                total += Number (marks[i])
            }
            document.getElementById('outp7a').innerHTML = total;
            document.getElementById('outp7b').innerHTML = total / Number(5);
            total -=  marks[2];
        } else {
            document.getElementById('outp7').innerHTML = "Your Input is NOT a number";
        }
    }
};
// function click7d() {
//     if (event.code == "Enter") {
//         if (isNaN(inp7d.value) == false) {
//             marks[3] = Number (inp7d.value);
//             document.getElementById('outp7').innerHTML = marks;
//             total = 0;
//             for (var i = 0; i < 5; i++) {
//                 total += Number (marks[i])
//             }
//             document.getElementById('outp7a').innerHTML = total;
//             document.getElementById('outp7b').innerHTML = total / Number(5);

//             total -=  marks[3]
//         } else {
//             document.getElementById('outp7').innerHTML = "Your Input is NOT a number";
//         }
//     }
// };
// function click7e() {
//     if (event.code == "Enter") {
//         if (isNaN(inp7e.value) == false) {
//             marks[4] = Number (inp7e.value);
//             document.getElementById('outp7').innerHTML = marks;
//             total = 0;
//             for (var i = 0; i < 5; i++) {
//                 total += Number (marks[i])
//             }
//             document.getElementById('outp7a').innerHTML = total;
//             document.getElementById('outp7b').innerHTML = total / Number(5);             
//             total -=  marks[4]
//         } else {
//             document.getElementById('outp7').innerHTML = "Your Input is NOT a number";
//         }
//     }
// };
var inp7a = document.getElementById('inp7a'); inp7a.addEventListener('keyup', click7a);
var inp7b = document.getElementById('inp7b'); inp7b.addEventListener('keyup', click7b);
var inp7c = document.getElementById('inp7c'); inp7c.addEventListener('keyup', click7c);
var inp7d = document.getElementById('inp7d'); inp7d.addEventListener('keyup', click7d);
var inp7e = document.getElementById('inp7e'); inp7e.addEventListener('keyup', click7e);


// Question 8


// Question 9


// Question 10


// Question 11


// Question 12


// Question 13


// Question 14


// Question 15

