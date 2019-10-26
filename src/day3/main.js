function main(str) {
	let stack = "";
	for(let i=0;i<str.length;i++)
	{
		let	sum=0;
		let count=1;
		if(i == str.length-1 && str[i]!=str[i+1])
		{
			sum=1;
			stack =stack.concat(sum);
			stack =stack.concat(str[i]);
			break;
		}
		for(let j=i+1;j<str.length;j++)
		{
			if (str[i]===str[j])
			{
				count ++;
				sum = count;
			}
			else{
				sum = count;
				break
			}
		}
		stack =stack.concat(sum);
		stack =stack.concat(str[i]);
		if(str[i]==str[i+1])
		{
			i+=(sum-1);
		}
	}
	return (stack);
}
module.exports = { main };