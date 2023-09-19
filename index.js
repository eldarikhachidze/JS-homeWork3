// #1

for (let i = 5; i <= 100; i++) {
    console.log(i)
}

// #2

let numbers1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12,]

for (let i = 0; i < numbers1.length; i++) {
    if ( numbers1[i] > 0 && numbers1[i] < 10 ) {
        console.log(numbers1[i])
    }
}

// #3

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < numbers2.length; i++) {
    if ( numbers2[i] === 5) {
        console.log(numbers2[i])
    }
}

// #4

let users = [
    {userName: 'giorgi', status: false},
    {userName: 'levan', status: false},
    {userName: 'anna', status: true}
]
users.forEach(function (user){
    if (user.status === true) {
        console.log(user)
    }
})