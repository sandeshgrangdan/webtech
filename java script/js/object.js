// var a = new Object();
// a.name = "ram";
// a.age = 50;
// a.display = function(){
// 	alert('Name is ' +this.name + ' Age is ' +this.age);
// }
// a.display();

var a = {
	name : 'ram',
	age:50,
	display: function(){
		alert('Name is ' +this.name + ' Age is ' +this.age);
	}
}
a.display();
