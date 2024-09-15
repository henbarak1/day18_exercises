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
//Ex5.4
function toWeirdCase(str)
{
    let ret="";
    for(let i = 0 ; i < str.length; i++)
    {
        if(i%2==0)
        {
            ret+=str.charAt(i).toUpperCase();
        }else{
            ret+=str.charAt(i);
        }
    }
    return ret;
}

function abbreviateTwoWords(str)
{
    const strSplit = str.split(" ");
    const word1 = strSplit[0];
    const word2 = strSplit[1]
    return word1.charAt(0).toUpperCase() + "."+word2.charAt(0).toUpperCase()
}
//Ex5.6
function maskify(str)
{
    let ret="";
    for(let i = 0 ; i < str.length; i++)
    {
        if(i>str.length-4)
        {
            ret+='#'
        }else{
            ret+=str.charAt(i);
        }
    }
    return ret;
}
//Ex5.7
function shortestWord(scentence)
{
    
    const strSplit = str.split(" ");
    let min = strSplit[0].length;
    for (word of strSplit)
    {
        min = Math.min(min,word.length);
    }
    return min;
}
//Ex5.8
function longestWord(scentence)
{
    
    const strSplit = str.split(" ");
    let max = strSplit[0].length;
    for (word of strSplit)
    {
        max = Math.max(max,word.length);
    }
    return max;
}

//Ex6.1
function accum(str)
{
    let ret="";
    for(let i = 0 ; i < str.length; i++)
    {
            if(str.charAt(i).toUpperCase()!=str.charAt(i))//is lower case
            {
                ret+="-"+ (str.charAt(i)).toUpperCase();
                console.log();
                for(let j = 0;j<=i;j++)
                {
                    ret+=str.charAt(i);
                } 
            }else//upper case
            {
                ret+= str.charAt(i);
            }
           
       
    }
    return ret;
}
//Ex6.2
function duplicates(str)
{
    const charArr = str.toLowerCase().split("");
    charArr.sort();
    let curr = '';
    let count = 1;
    let ret=""
    for(let ch = 0 ; ch < charArr.length; ch++)
    {
        if(charArr[ch] != curr)
        {
            curr = charArr[ch];
            while(charArr[ch+1]===curr)
            {
                count++;
                ch++;
            }
        }
        ret+=charArr[ch] +" "+count+" ";
        count = 0;
    }
    return ret;
}

console.log(duplicates("aaabbbaa"));