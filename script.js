function findMajority(arr , n)
{
	let maxCount = 0;
    let index = -1; // sentinels
     
    for(let i = 0; i < n; i++)
    {
        let count = 0;
        for(let j = 0; j < n; j++)
        {
            if (arr[i] == arr[j])
                count++;
        }
 
        // Update maxCount if count of
        // current element is greater
        if (count > maxCount)
        {
            maxCount = count;
            index = i;
        }
    }
 
    // If maxCount is greater than n/2
    // return the corresponding element
    if (maxCount > n / 2)
        console.log(arr[index]);
    else
        console.log("No Majority Element");
}


let arr = [2 , 1 , 2];
let n = arr.length;
findMajority(arr , n);
