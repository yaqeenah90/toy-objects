const bopIt = {
    id: 1,
    name: "Bop it",
    madeInUsa: "no",
    kidsAgeGroup: 6,
    weight: 3.2
}

const boardGame = {
    id: 2,
    name: "Monopoly",
    madeInUsa: "yes",
    kidsAgeGroup: 10,
    weight: 2.91
}

const babyBall = {
    id: 3,
    name: "basketball",
    madeInUsa: "yes",
    kidsAgeGroup: 3,
    weight: 8
}



const toys = [
    {
        id: 1,
        name: "Bop It",
        madeInUsa: "no",
        kidsAgeGroup: 6,
        weight: 3.2
    },
    {
        id: 2,
        name: "Monopoly",
        madeInUsa:"yes",
        kidsAgeGroup: 10,
        weight: 2.91
    },
    {
        id: 3,
        name: "basketball",
        madeInUsa: "yes",
        kidsAgeGroup: 3,
        weight: 8
    }
]

toys.push(babyBall)
toys.push(bopIt)
toys.push(boardGame)





const doll = {
    id: 4,
    name: "Barbie",
    madeInUsa: "yes",
    kidsAgeGroup: 5,
    weight:1
}

const car = {
    id: 5,
    name:"Wheelies",
    madeInUsa:"no",
    kidsAgeGroup: 3,
    weight: 2
}



toys.push(doll)
toys.push(car)

for (const games of toys) {
    console.log(games.name) 
}