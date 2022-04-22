const arr = ['Todd', 'Darie', 'Janathan', 'Zach', 'Manny']
const str = 'Ahmad';

function checkName(arrOfName,targetName) {
    for(let i = 0; i < arrOfName.length; i++){
        if(arrOfName[i] === targetName) return true
    }
    return false
} 

const isNameExist = checkName(arr,'Todd')
console.log(isNameExist)


