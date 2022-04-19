var bannerWidth = document.getElementById("banner-container").offsetWidth;
var aspectRatio = "56.25%"; //16:9
console.log("banner-width:" + bannerWidth);
document.getElementById('banner-container').setAttribute("style","height: calc(" + bannerWidth + "px - " + aspectRatio + ")");
