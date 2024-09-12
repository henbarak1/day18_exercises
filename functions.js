//impure functions
//1. initialize charechters stats

const charecterStats = initializeCharectersStats;
function initializeCharectersStats()
{
    
     return [];
}
//2
function addCharecterStat(charecterName, strength)
{
    const stat =[];
    stat.push(charecterName);
    stat.push(strength);
    return stat;
}
//3
function findCharecterStrength(charecterName)
{
    for (charecter in charecterStats)
    {
        if(charecterStats[charecter][0] == charecterName)
        {
            return charecterStats[charecter][1];
        }
        else
        {
            return "charecter not found";
        }
    }
}


//4
function updateCharecterStrength(charecterName,newStrength)
{
    for (charecter in charecterStats)
    {
        if(charecterStats[charecter][0] == charecterName)
        {
            charecterStats[charecter][1] = newStrength;
        }
        else
        {
            return "charecter not found";
        }
    }
}
//5
function removeCharecterStat(charecterName)
{
    for (charecter in charecterStats)
    {
        if(charecterStats[charecter][0] == charecterName)
        {
            charecterStats.remove(charecterStats[charecter]);
        }
        else
        {
            return "charecter not found";
        }
    }
}

//6
function listCharecters()
{
    for (charecter in charecterStats)
        {
            console.log(`charecter Name: ${charecterStats[charecter][0]} charecter Status: ${charecterStats[charecter][1]}`)
        }
}
//7
function strongestCharecter()
{
    let maxStrength = 0;
    let charecter = 0;
    for (charecter in charecterStats)
        {
            if(charecterStats[charecter][1] >maxStrength)
            {
                maxStrength = charecterStats[charecter][1];
                charecter = charecterStats[charecter];
            }
        }
        return charecterl
}
// Pure Functions

// 1. Determine the Average Rating of Games
// Input: [8.5, 7.9, 6.3, 9.2, 8.1]
function calculateAverageRating(ratings)
{
    let avg = parseFloat(0);
    for(r in ratings)
    {
        avg += parseFloat(ratings[r]);
        //console.log(avg);
    }
    return parseFloat(avg/(parseFloat(ratings.length).toFixed(1))).toFixed(1);
}
// console.log(calculateAverageRating([8.5, 7.9, 6.3, 9.2, 8.1]));

// 2. Extract Developer Names from Game Titles
// Input Example: ['The Legend of Zelda: Breath of the Wild (2017) - Developed by Nintendo', 'Final Fantasy VII (1997) - Developed by Square Enix', 'Halo: Combat Evolved (2001) - Developed by Bungie']
function extractDevelopersNames(gameTitles)
{
    const ret = [];
    let currTitleAsArray = [];
    for (t in gameTitles)
    {
        currTitleAsArray = gameTitles[t].split(" ");
        for (word in currTitleAsArray)
        {
            if(currTitleAsArray[word] == 'by')
            {
                word++;
                ret.push((currTitleAsArray.slice(word,currTitleAsArray.length).join(" ")));
            }
        }
    } 
    return ret;
}
// console.log(extractDevelopersNames(["kjwwkjvn by Hen Barak","erverv reverv revrv by george cloney"]))

;
// 3. Check if a Game Title Contains a Specific Word
// Input: ('Final Fantasy VII', 'Fantasy')
function containsWordInTitle(Title,wordToSearch)
{
    
    let currTitleAsArray = [];
    TitleAsArray = Title.split(" ");
        for (word in currTitleAsArray)
        {
            if(currTitleAsArray[word] == wordToSearch)
            {
             return true
            }
        }
    return false; 
}
// 4. Check if All Game Titles Start with the Same Letter
// Input: ['Assassin's Creed', 'Age of Empires', 'Animal Crossing']
function allTitlesWithTheSameLetter(gameTitles)
{
    const letter = gameTitles[0].charAt(0);
    for (t in gameTitles)
    {
        if(gameTitles[t].charAt(0)!=letter)
            {
                return false;

            }       
            
    } 
    return true;
}
// 5. Concatenate All Game Genres into a Single String
// Input: ['RPG', 'Action', 'Adventure']
function conctenateGenres(genres)
{
    let ret =""
    for (let g = 0 ;g<genres.length-1;g++)
        {
           ret += genres[g];
           ret+=", ";
           
                
        } 
        ret += genres[genres.length-1];
        return ret;
}

// console.log(conctenateGenres(['RPG', 'Action', 'Adventure']));
// 6. Count Battles in XP Range
// Input: ([50, 75, 100, 30, 20, 100], 75, 100)
function countInXpRange(arr,low,high)
{
    let count = 0;
    for(i in arr)
    {
        if(arr[i]>=low && arr[i]<=high)
        {
            count++;
        }
    }
}
// 7. Find Games Developed by a Specific Developer
// Input Example: ['The Legend of Zelda', 'Final Fantasy', 'Halo: Combat Evolved'], ['Nintendo', 'Square Enix', 'Bungie'], 'Nintendo'
function findGamesByDeveloper(titles,developers,developer)
{
    for(i in developers)
    {
        if(developers[i]=developer)
        {
            return titles[i];
        }
    }
}
// 8. Capitalize the First Letter of Each Game Title
// Input: ['the legend of zelda', 'final fantasy', 'halo: combat evolved']
function capitzlizeFirstLetter(titles)
{
    for(i in titles)
    {
    titles[i] =    titles[i].charAt(0).toUpperCase()+titles[i].substring(1);
    }
    return titles;
}
// 9. Filter Unique XP Values
// Input: [100, 50, 75, 50, 100, 75, 100]
function uniqueXP(arr)
{
    let uniques = new Set();
    const ret = []
    for(i in arr)
    {
        if(uniques.has(arr[i])==false)
        {
            uniques.add(arr[i]);
        }
    }
    for(i of uniques)
    {
        ret.push(i);
    }
    return ret;
}
console.log(uniqueXP([100, 50, 75, 50, 100, 75, 100]))
// 10. Sort Game Titles Alphabetically
// Input: ['The Legend of Zelda', 'Final Fantasy', 'Halo: Combat Evolved']
function sortTitlesAlphabetically(titles)
{
    const sorted = titles.sorted();
    return sorted;
}
// 11. Filter XP by Multiple Criteria
// Input: ([10, 20, 30, 40, 50], greaterThan=20, lessThan=50)
function filterXpByCrateria(xps,low,high)
{
    const ret = [];
    for (xp of xps)
    {
        if(xp<=high && xp>=low)
        {
            ret.push(xp);
        }
    }
    return ret;
}