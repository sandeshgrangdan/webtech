var a=parseFloat(prompt('Enter Your Income'));
var b=prompt('Enter Your marital status');
var c=prompt('Enter Your Gender');
var tax;


if(b == "unmarride")
{
	if(a>0 )
		tax = a*1/100;
	else if(a>350000 )
		tax = tax + a*10/100;
	if(a>450000 )
		tax = tax + a*20/100;
	if(a>650000 )
		tax = tax + a*30/100;
	if(a>2000000  )
		tax = tax + a*36/100;

}
else
{

    if(a>0)
		tax =   a*1/100;
	if(a>400000)
		tax = tax + a*10/100;
	if(a>500000)
		tax = tax + a*20/100;
	if(a>700000)
		tax = tax + a*30/100;
	if(a>2000000)
		tax = tax + a*36/100;	
}

if (c == "f")
{
	tax = tax - tax/100*10;
}
document.write("Your Tax Is:" +tax);