const jobType = [["Doc1", "Priority"], ["Doc4", "Regular"], ["Doc3", "Priority"], ["Doc2", "Regular"]];
const sortedJobType = jobType.toSorted();
console.log(sortedJobType);
console.log(jobType[0][1])






console. log ("Sorted example 2");
const input = [[3, 2], [1, 4], [2, 3], [3, 1]];

//sort array
var sortedResult = input.toSorted();
console.log(sortedResult);

//find position of output in input array
var output = [
    input.findIndex(element => element == sortedResult[0]),
    input.findIndex(element => element == sortedResult[1]),
    input.findIndex(element => element == sortedResult[2]),
    input.findIndex(element => element == sortedResult[3])
];

//"Position of output in input array", 
console.log(output)

