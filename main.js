const socialMediaUser = {
    //Change information inside this Object to test the application for yourself :)
    github : "yThxz",
    youTube : "UCn-culTnIuaFNeYw743lBGw",
    instagram : "__balbuenaa/",
    facebook : "ThiagoBalbuena.2004",
    twitter : "yThigszz"       
}
function changeSocialMediaLinks(){
   for(let li of socialLinks.children){
       const social = (li.getAttribute('class'))
       li.children[0].href = `https://${social}.com/${socialMediaUser[social]}`
   }
}
changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${socialMediaUser.github}`
    fetch(url).then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userGitHub.href = data.html_url
        userLogin.textContent = data.login
        userProfilePic.src = data.avatar_url
    })
}
getGitHubProfileInfos()