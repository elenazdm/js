// const code = "console.log('Hello')";
// eval(code);
function calcScreenRation(w, h) {
    w = parseInt(w);
    h = parseInt(h);

    let result = w / h;
    if (isNaN(result)) {
        return 'error';
    } else if (!isFinite(result)) {
        return 'is Infinity';
    }
    else {
        return result;
    }

}
console.log(calcScreenRation("1920px", "1000px"));
const num = parseFloat('1.55555');
console.log(num);
const domain = "it-brains.com.ua"
function redirectToPath(path) {
    path = encodeURIComponent(path);
    const link = encodeURIComponent(`https://${domain}/${path}`)
    /// go to page
    console.log(link);
    return link;
}

const URI =
    "https%3A%2F%2Fit-brains.com%20.ua%2F%252Fproduct%252Fmicrofon%2520pink%252Finfo"
function getUrl(urlInURI) {
    urlInURI = decodeURIComponent(urlInURI);
    console.log(urlInURI);
    return urlInURI;

}
const path = "/product/microfon pink/info"
const link = `https://${domain}/${path}`;
const link1 = redirectToPath(path); ///URI
const link2 = getUrl(link1); ///Decode URI
console.log(link === link2)

// console.log(10 + num);