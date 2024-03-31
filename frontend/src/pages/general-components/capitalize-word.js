let capitalizeWord = (word) => {
    let firstLetter = word.toUpperCase().charAt(0)
    let remainingLetters = word.slice(1)
    return firstLetter + remainingLetters
}

export default capitalizeWord