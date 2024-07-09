const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
    try {
        const lines = "Line one\nLine two\nLine three"
        await writeFile("temp.txt", lines);
        console.log("Your lines are written")
    } catch (err) {
        console.error("An error occured", err)
    }
}

const reader = async () => {
    try {
        const data = await readFile("temp.txt", "utf8");
        console.log("Log data:")
        console.log(data)
    } catch (err) {
        console.error("An error occured", err)
    }
}

const readWrite = async () => {
    await writer();
    await reader();
}

readWrite();