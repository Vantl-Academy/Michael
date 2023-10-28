let number = 1
let string = "hello" // list.of("c", "a", "t") -> ["c", "a", "t"]
//organization of data -> evertying is graph
//relational types ->
// (start here) c -> a -> t //
// cat catherine
// c -> a -> t -> (stop)
//             -> h -> r -> i -> n -> e

//

function print(list) {
    var sum = 0
    for (var i = 0; i < list.length; i++) {
        sum = sum + retrieve(list, i)
    }
    // i = 0 is i < list.size() = 3? YES ? -> {
    //do what i said
    //}
    //
    //i = 0, i = 1, i = 2, i = 3 ->
    list.array.foreach(element => {
        sum = sum + element
    });
    return sum;
}

function summation(list) {
    var sum=0
    list.reduce((sum,element) => sum + element)
}



console.log(add([24, 31, 28, 28]))

function retrieve(list, index) {
    let test = ["a", "b", "c"]
    return list [index]

}

function alpha(ages, subtractor) {
    return sum = 
}
    let ages = [24, 31, 28, 28]
    let subtractor = 100
    let sum = alpha (ages, subtractor)
    return 
    

function subtractor(alpha, list) {
    let sum = summation(list)
    return alpha - sum
}