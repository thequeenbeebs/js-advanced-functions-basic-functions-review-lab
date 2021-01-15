function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

var mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*") {
    return function(adjective="special"){
        return `You are ${string}${adjective}${string}!`
    }
}

let Calculator = {
    add: function(){return 1 + 3},
    subtract: function(){ return 1-3},
    multiply: function(){ return 1 * 3},
    divide: function(){return 10 / 5}
}

function actionApplyer(startingNumber, arrayOfFunctions) {
    let number = startingNumber
    if (arrayOfFunctions.length === 0) {
        return startingNumber
    } else {
        arrayOfFunctions.forEach((f) => {
            number = f(number)
        })
        return number
    }
}