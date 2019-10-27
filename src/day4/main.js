function main(arr) {
	console.log(typeof(arr));
	console.log(arr[1][1]);
	count = 1;
	for (let i=0;i<arr.length;i++)
	{
		console.log(i)
		console.log(typeof(arr))
			if(arr[i][1] > (arr[i+1][1]))
			{
				count ++;
			}
		
	}
	//console.log(count);
}
main([[30, 75], [0, 50], [60, 150], [45, 50]])
