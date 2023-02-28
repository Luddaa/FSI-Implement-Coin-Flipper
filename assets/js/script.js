// TODO: Declare any global variables we need
let flipButton = document.querySelector("#flip")
let clearButton = document.querySelector("#clear")
let headsTable = document.querySelector("#heads")
let headsPctTable = document.querySelector("#heads-percent")
let tailsTable = document.querySelector("#tails")
let tailsPctTable = document.querySelector("#tails-percent")
let statusMessage = document.querySelector("#message")
let image = document.querySelector("#penny-image")

let headsCount = 0
let tailsCount = 0
let total = 0
let headsPct = 0
let tailsPct = 0

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
    flipButton.addEventListener("click", function(){
        total ++
        let result = Math.round(Math.random() * 101)
        console.log("result is", result)
        if (result < 51) { //heads 0 - 50
          //picture change
          image.src = "./assets/images/penny-heads.jpg"
          //number of heads in scoreboard
          headsCount ++
          headsTable.textContent = `${headsCount}`
          console.log("headsCount", headsCount)
          //message
          statusMessage.textContent = "You Flipped Heads!"
        } else {
          //picture change
          image.src = "./assets/images/penny-tails.jpg"
          //number of heads in scoreboard
          tailsCount ++
          tailsTable.textContent = `${tailsCount}`
          console.log("tailsCount", tailsCount)
          //message
          statusMessage.textContent = "You Flipped Tails!"
        }
        headsPct = Math.round(headsCount/total * 100)
        tailsPct = Math.round(tailsCount/total * 100)
        headsPctTable.textContent = `${headsPct}%`
        tailsPctTable.textContent = `${tailsPct}%`
    })

    // Clear Button Click Handler
    clearButton.addEventListener("click", function(){
        statusMessage.textContent = "Let's Get Rolling!"
        headsCount = 0
        headsTable.textContent = `${headsCount}`
        tailsCount = 0
        tailsTable.textContent = `${tailsCount}`
        headsPct = 0
        tailsPct = 0   
        headsPctTable.textContent = `${headsPct}%`
        tailsPctTable.textContent = `${tailsPct}%`
    })

})