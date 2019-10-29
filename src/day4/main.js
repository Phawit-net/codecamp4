function main(arr) {
	count = 1;
	for (let i=0;i<arr.length-1;i++)
	{
			if(arr[i][1] > (arr[i+1][1]))
			{
				count ++;
			}
		
	}
	console.log(count);
}
main([[30, 75], [80, 120], [60, 150], [45, 50]])
