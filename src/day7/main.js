// function main(arr) {
// 	let result = []
// 	// result.push([])
// 	// for(let i =0;i<arr.length;i++)
// 	// {
// 	// 	result.push([arr[i]])
		
// 	// 	for(let j =i+1;j<arr.length;j++)
// 	// 	{
// 	// 		let a = []
// 	// 		a.push(arr[i])
// 	// 		a.push(arr[j])
// 	// 		result.push(a)
// 	// 	}
		
// 	// }
// 	// result.push(arr)
// 	// console.log(result)
// 	for(let i=0;i<=arr.length;i++)
// 	{
// 		for(let j=i+1;j<=arr.length;j++)
// 		{ 
// 			result.push(arr.slice(i,j))
// 		}
// 	}
// 	console.log(result)
// }

// main([1, 2, 3, 4])
// module.exports = { main };


var a = [1, 2, 3,4], res = [];
for (var i = 0; i < Math.pow(2, a.length); i++) {
    var bin = (i).toString(2), set = [];
    bin = new Array((a.length-bin.length)+1).join("0")+bin;
    console.log(bin);
    for (var j = 0; j < bin.length; j++) {
        if (bin[j] === "1") {
            set.push(a[j]);
        }
    }
    res.push(set);
}
console.log(res);