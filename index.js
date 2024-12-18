const pageName = document.createElement("h1")
pageName.innerText = "Chirper"
const linkRoot = 'https://jsonplaceholder.typicode.com/'

async function displayPosts(){
    document.body.innerHTML = ""
    document.body.appendChild(pageName)
    for (let i = 1; i <= 10; i++){
        let postUser = document.createElement("h2")
        let postTitle = document.createElement("h3")
        let postContent = document.createElement("p")
        let response = await fetch(`${linkRoot}posts/${i*10}`)
        let postInfo = JSON.parse(await response.text())
        postTitle.innerText = postInfo.title
        postContent.innerText = postInfo.body
        response = await fetch(`${linkRoot}/users/${postInfo.userId}`)
        let userInfo = JSON.parse(await response.text())
        postUser.innerText = userInfo.name
        document.body.appendChild(postUser)
        document.body.appendChild(postTitle)
        document.body.appendChild(postContent)
    }
}

displayPosts()
.then(() => console.log("Displayed"))
.catch(error => console.log(`There is an error: ${error}`))