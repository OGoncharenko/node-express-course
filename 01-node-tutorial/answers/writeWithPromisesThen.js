const { writeFile, readFile } = require("fs").promises;

writeFile("temp.txt", "Line one\n")
.then(() => {
    return writeFile("temp.txt", "Line two\n", {flag: 'a'})
})
    .then(() => {
        return writeFile("temp.txt", "Line three\n", {flag: 'a'})
    })
        .then(() => {
            return readFile("temp.txt", "utf8")
        })
        .then((data) => {
            console.log("Log data:")
            console.log(data)
        })
        .catch((error) => {  
            console.log("An error occurred: ", error)  
        })
    


const writer = async () => {
    try {
        const lines = "Line one\nLine two\nLine three"
        await writeFile("temp.txt", lines);
        console.log("Your lines are written")
    } catch (err) {
        console.error("An error occured", err)
    }
}