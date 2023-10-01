let data = "This is a sunny day";
let arr = data.split(' ');
let op = '';
for(let i = 0;i<arr.length;i++)
{
    for(let j = arr[i].length-1;j>=0;j--)
    {
        op += arr[i][j];
    }
   op += " ";
}
console.log(op);
