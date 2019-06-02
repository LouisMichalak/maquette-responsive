window.onload = () =>
{
    /*CAROUSEL*/
    var imageDiv = document.getElementsByClassName("carousel--images")[0];
    var visitsIcons = document.getElementsByClassName("carousel--sprites--visits")[0];
    var arrayImages = ["url('assets/6.jpg')",
        "url('assets/7.jpg')",
        "url('assets/8.jpg')",
        "url('assets/9.jpg')",
        "url('assets/10.jpg')",
        "url('assets/11.jpg')"];
    autoCarousel(imageDiv, visitsIcons, arrayImages);
};
function sleep(secs)
{
    var ms = secs * 1000;
    return new Promise(resolve =>
        setTimeout(resolve, ms));
}
async function autoCarousel(imageDiv, visitsIcons, arrayImages)
{
    var count = 0;
    changeImage();
    imageDiv.children[0].children[0].onclick = () =>
    {
        visitsIcons.children[count].className =
            "sprite--carousel sprite--carousel--visited_not";
        if(count !== 0)
        {
            count--;
        }
        else
        {
            count = 5;
        }
        changeImage();
    };
    imageDiv.children[0].children[1].onclick = () =>
    {
        visitsIcons.children[count].className =
            "sprite--carousel sprite--carousel--visited_not";
        if(count !== 5)
        {
            count++;
        }
        else
        {
            count = 0;
        }
        changeImage();
    };
    visitsIcons.onclick = (event) =>
    {
        for(var key = 0; key < visitsIcons.children.length; key++)
        {
            if(visitsIcons.children[key] === event.target)
            {
                visitsIcons.children[count].className =
                    "sprite--carousel sprite--carousel--visited_not";
                count = key;
                changeImage();
            }
        }
    };
    function changeImage()
    {
        if (count === 0)
        {
            imageDiv.children[1].children[0].className =
                "carousel--link carousel--link--hidden_not";
        }
        else
        {
            imageDiv.children[1].children[0].className =
                "carousel--link carousel--link--hidden_yes";
        }
        imageDiv.style.backgroundImage = arrayImages[count];
        visitsIcons.children[count].className =
            "sprite--carousel sprite--carousel--visited_yes";
    }
    for(count; count < visitsIcons.children.length; count++)
    {
        changeImage();
        await sleep(5);
        visitsIcons.children[count].className =
            "sprite--carousel sprite--carousel--visited_not";
        if(count === 5)
        {
            count = -1;
        }
    }
}