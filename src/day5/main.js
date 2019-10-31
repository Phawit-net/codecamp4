export function main(arr) {
	for(let i =0;i<arr.length;i++)
	{
		for(let j =i+1;j<arr.length;j++)
		{
			if(arr[i]=='G')
			{
				let stack = '';
				if(arr[j]=='R')
				{
					stack = arr[i];
					arr[i] = arr[j];
					arr[j] = stack;
				}
			}
			else if(arr[i]=='B')
			{
				let stack = '';
				if(arr[j]=='R' || arr[j]=='G')
				{
					stack = arr[i];
					arr[i] = arr[j];
					arr[j] = stack;
				}
			}
			else if(arr[i]=='R')
			{
				break;
			}
		}
	}
	return (arr);
}
