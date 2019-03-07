function findGroup() {
    console.log('hello!')
    document.getElementsByClassName('homesections')[0].hidden = true;
    document.getElementsByClassName('findgroup')[0].hidden = false;
}

function searchData(time) {
    var url = "https://v2bq95m7ci.execute-api.us-east-1.amazonaws.com/prod/trains"

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function searchGroups() {
    var inputs = document.forms[0].elements;
    var searchData = {};

    searchData.firstName = inputs.firstname.value;
    searchData.lastName = inputs.lastname.value;
    searchData.time = inputs.time.value;
    console.log(searchData);

    console.log(this.searchData(searchData.time));
}