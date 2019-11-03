function main(arr,...num) {
	for(let i =0;i<arr.length;i++)
	{
		for(let j=0;j<num.length;j++)
		{
			if(arr[i] === num[j])
			{
				arr.splice(i,1)
				i=i-1
			}
		}
	}
	return (arr)
}
module.exports = { main };
