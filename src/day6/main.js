export function main(root) {	
    let node =root
    let queue = [node]
    let data =[]
    while(queue.length){
        node = queue.shift()
        if(node.left)
            queue.push(node.left)
        if(node.left)
            queue.push(node.right)
        data.push(node.value)
    }
    let result = data.sort(function(a,b){return a-b})
    return result[result.length -2]
}   

