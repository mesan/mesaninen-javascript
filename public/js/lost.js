(function () {
    var url = 'https://culturexchange1.files.wordpress.com/2013/01/lost-saison-6-sur-tf1-fr-l-ultime-saison-4167951ftdgh.jpg';
    var img = new Image();
    img.src = url;

    var int = int || undefined;

    if (typeof int !== 'undefined') {
        clearInterval(int);
        int = undefined;
    }

    var numbersElem = document.getElementById('numbers');

    int = setInterval(function () {
        if (numbersElem && numbersElem.textContent.trim() == '4815162342') {
            document.body.style.backgroundImage = 'url(' + url + ')';
            document.body.style.backgroundSize = 'cover';
            clearInterval(int);
            int = undefined;
        }
    }, 20);
})();