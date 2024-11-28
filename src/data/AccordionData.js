let id =0
function idIncrease  (){
    id++
    return id
}
export const accordionData =[
    {
        id:idIncrease(),
        title:"What is Congrats Card Generator",
        content:"Greeting card maker allows you to create greeting cards for your loved ones. Send greeting cards to your loved ones on special occasions"
    },
    {
        id:idIncrease(),
        title:"How it Works",
        content:"Clicking the button will redirect you to a new page where you can add text, background color or background image to add content to the greeting card. You can increase the text color and size. You can download the image to your computer by pressing the Download button. On the left side you can see a preview of your actions"
    }
]