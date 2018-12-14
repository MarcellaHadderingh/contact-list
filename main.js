function voegIemandToe() {
    var node = document.createElement("LI");
    var sNaam = document.getElementById("myNewName").value;
    var textnode = document.createTextNode(sNaam);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}

function myFilterFunction() {
    var sSearchWord = document.getElementById("myFilterBox").value;
    console.log(sSearchWord);
}

function myFilterFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myFilterBox");
    filter = input.value.toUpperCase();

    ul = document.getElementById("myList");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        txtValue = li[i].innerHTML;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
//sort function
function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("myList");
    switching = true;

    while (switching) {

        switching = false;
        b = list.getElementsByTagName("LI");

        for (i = 0; i < (b.length - 1); i++) {

            shouldSwitch = false;

            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {

                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {

            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}