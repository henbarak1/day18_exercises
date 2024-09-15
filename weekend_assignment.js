//Ex1.1
function yesOrNo(boolVal)
{
    if(typeof(boolVal)=="boolean")
    {
        if(boolVal)
        {
            return "Yes";
        }
        else
        {
            return "No";
        }
    }
    return "invalid input";
        
}
    
//Ex2.1
function sumOfTwoLowestNumbers(arr)
{
    arr.sort(function(a,b) {return a - b});
    if(arr.length >= 2)
    {
        return(arr[0] + arr[1]);
    }
    else
    {
        return 0;
    }
}

//ex2.2
function convertArrayToBinaryNumber(arr)
{
    let ret = 0;
    let powOfTwo = 1;
    for (let i =0; i< arr.length; i++)
    {
        ret += powOfTwo*arr[arr.length-i-1];
        powOfTwo*=2;
    }
    return ret;
}

//ex2.3
function nextPerfectSquare(number)
{
    if(Math.floor(Math.sqrt(number))===Math.sqrt(number))
    {
        return Math.sqrt(number)+1;
    }
    else
    {
        return -1;
    }
}
//ex2.4
function findUniqueNum(arr)
{
    arr.sort(function(a,b) {return a - b});
    if(arr[length-1]===arr[length-2])
    {
        return arr[0]
    }
    else
    {
        return arr[length-1];
    }
}
//ex2.5
function summation(number)
{
    return (number+1)*number/2;
}

//ex2.6
function centuryFromYear(year)
{
    return parseInt(1+(year-1)/100);
}

//Ex2.7
function basicMath(op,val1,val2)
{
    if(op=='+')
    {
        return val1+val2;
    }
    else if(op=='-'){
        return val1-val2;

    }
    else if(op=='*'){
        return val1*val2;

    }
    else if(op=='/'){
        return val1/val2;

    }
    else{
        return "no such operation";
    }
}
//Ex3.1
function nb_year(p0,percent,aug,p)
{
    let tempPopu = p0;
    let yearsPassed = 0;
    while(tempPopu < p )
    {
        tempPopu = tempPopu+tempPopu*percent/100 + aug;
        yearsPassed ++;
    }
    return yearsPassed;
}

//ex3.2
function NumPeopleOnTheBus(transitions)
{
    let numOfPeople = 0
    for(stop in transitions)
    {
        numOfPeople+=stop[0]-stop[1];
        if(numOfPeople<0)
        {
            return "invalid"
        }
    }
    return numOfPeople;
}

//Ex4.1
function fibo(index)
{
    if(index == 0)
    { 
        return 0;

    }
    if(index ===1 ||index ===2)
    {
        return 1;

    }
    return fibo(n-1)+fibo(n-2);
}

//Ex4.2
function Tribonnaci(index)
{
    if(index == 0)
        { 
            return 0;
        }
        if(index ===1 ||index ===2)
        {
            return 1;
        }
        if(index === 3 )
        {
            return 2;
        }
        return fibo(n-1)+ fibo(n-2) +fibo(n-3);
}

//Ex5.1
function trimStr(str)
{
    return str.substring(1,str.length()-1);
}
//Ex5.2
function strRepeat(str,times)
{
    let ret =str;
    for(let i=0; i < times; i++)
    {
        ret+=str;
    }
    return ret;
}
//ex5.3
function toCamelCase(str)
{
    let ret=""
   
    for(let i = 0 ; i < str.length; i++)
    {

        if(str.charAt(i)=='-')
        {
            ret+=str.charAt(i+1).toUpperCase();
            i++;
        }
        else if(str.charAt(i)=='_')
        {
            ret+=str.charAt(i+1)
            i++;
        }
        else
        {
            ret+=str.charAt(i);
        }
    }
    return ret;
}
