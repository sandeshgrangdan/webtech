var n1=parseFloat(prompt('Enter the marks'));
var n2=parseFloat(prompt('Enter the marks'));
var n3=parseFloat(prompt('Enter the marks'));
var n4=parseFloat(prompt('Enter the marks'));
var n5=parseFloat(prompt('Enter the marks'));
var n6=parseFloat((n1+n2+n3+n4+n5)/500*100);
document.write('percentage='+ n6+'%'+'<br></br>');
document.write('Total Marks=' +(n1+n2+n3+n4+n5)+'<br></br>');
if(n6<40|n1<40 | n2<40 | n3<40 | n4<40 | n5<40){
	document.write('Fail Division');
 }
 else if(n6<60 & n6>=40& n1>=40 & n2>=40 & n3>=40 & n4>=40 & n5>=40 ){ 
 	document.write('Second Division');
}
 else if(n6<80 & n6>=70& n1>=40 & n2>=40 & n3>=40 & n4>=40 & n5>=40){
	document.write('First Division');
}
else if(n6>=80& n1>=40 & n2>=40 & n3>=40 & n4>=40 & n5>=40){
	document.write('Distinction');
}

