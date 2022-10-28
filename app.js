let nasaDate = document.getElementById("nasaDate")
let nasaButton = document.getElementById("showimage")

let nasaMainImg = document.getElementById("nasaMainImg")
let nasaImg = document.getElementById("nasaImg2")
let nasaVideo = document.getElementById("nasaVideo")


let apiKey = "eORdFWhwmuw4yenCJwLs57pa0423cETcmQjhroyY"

//nasaImg.style("display: none;")


nasaButton.onclick = ()=>
{
    let nasaAPI = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&date=" + nasaDate.value

    fetch(nasaAPI).then
    (
        (values)=>
        {
            return values.json()
        }
    ).then
    (
        (values)=>
        {
            console.log(values)
            console.log(values.url)
            console.log(values.media_type)
            if(values.media_type == "image")
            {
                nasaImg.setAttribute("src" , values.url)
                nasaMainImg.setAttribute("style" , "background-image: url("+ values.url +");")
            }
            else if(values.media_type == "video")
            {
                nasaVideo.setAttribute("src" , values.url)
                nasaMainImg.setAttribute("style" , "background-image: url('./assets/images/space.jpg');")
                nasaImg.setAttribute("src" , "url('./assets/images/space.jpg')")
            }

        }
    )
}

