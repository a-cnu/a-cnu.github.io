function finder(){
    const college = [
        {from: 96, to: 100,name: 'college1'},
        {from: 91, to: 95, name: 'college2'},
        {from: 86, to: 90, name: 'college3'},
        {from: 81, to: 85, name: 'college4'},
        {from: 76, to: 80, name: 'college5'},
        {from: 71, to: 75, name: 'college6'},
        {from: 66, to: 70, name: 'college7'},
        {from: 61, to: 65, name: 'college8'},
        {from: 56, to: 60, name: 'college9'},
        {from: 51, to: 55, name: 'college10'},
        {from: 46, to: 50, name: 'college11'},
        {from: 41, to: 45, name: 'college12'},
        {from: 36, to: 40, name: 'college13'},
        {from: 31, to: 35, name: 'college14'},
        {from: 26, to: 30, name: 'colege15'},
        {from: 21, to: 25, name: 'college16'},
        {from: 16, to: 20, name: 'college17'},
        {from: 11, to: 15, name: 'college18'},
        {from: 6,  to: 10, name: 'college19'},
        {from: 1,  to: 5,  name: 'college20'},
    ]
        value = document.getElementById("input").value
        if (value > 0){
            function isInRange(marks, value) {
            return (marks.from <= value) && ( marks.to >= value)
        }
        var priceFound = false
        for (var i = 0; i <college.length && !priceFound; i++) {
            var marks = college[i];
            if (isInRange(marks, value)) {
                document.getElementById("result").innerHTML = marks.name;
                priceFound = true
            }
        }}
        else{
            document.getElementById("result").innerHTML = 'No results found. Sorry!';
        }
    }x