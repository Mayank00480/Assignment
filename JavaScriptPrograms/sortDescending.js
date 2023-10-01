let arr = [10,12,19,11,7];
for(let i = 0;i<arr.length-1;i++)
{
for(let j = 0;j<arr.length-1-i;j++)
{
if(arr[j] < arr[j+1])
{
    let temp = arr[j];
    arr[j] = arr[j+1];
    arr[j+1] = temp; 
}
}
}
for(let i = 0;i<arr.length;i++)
{
    console.log(arr[i] + " ");
}