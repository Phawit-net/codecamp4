export function main(str, str2) {
	let count =0;
	for(let i=0;i<str.length;i++)
	{  
		let check = (str[i]!=str2[i]);
		count += check;
	}
	return count; 
}
