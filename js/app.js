function select(userSelection) {
    Cookies.set('selection', userSelection);
    window.open("pages/selection.html","_self");
}