const results = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
]

const result = document.getElementById("result")

window.onclick = function changeResult() {
    const index = Math.floor(Math.random() * 20)
    result.innerHTML = results[index];
    if (index < 10) {
        result.style.color = "#2ECC40"
    } else if (index < 15) {
        result.style.color = "#FFDC00"
    } else {
        result.style.color = "#FF4136"
    }
}