function findGroup() {
    document.getElementsByClassName('homesections')[0].hidden = true;
    document.getElementsByClassName('findgroup')[0].hidden = false;
    location.href = "#";
    location.href = "#findgroup";
}

function searchData(time) {
    var url = "https://v2bq95m7ci.execute-api.us-east-1.amazonaws.com/prod/trains"

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function createGroupList(groups) {
    document.getElementsByClassName('group-form')[0].hidden = true;
    document.getElementsByClassName('group-list')[0].hidden = false;
    var parent = document.getElementsByClassName('group-list')[0];

    groups.forEach(function(group) {
        var item = document.createElement('input');
        item.setAttribute('type', 'radio');
        item.setAttribute('onclick', 'confirmGroup()');
        var node = document.createTextNode(group.restaurant);
        item.appendChild(node);
        parent.appendChild(item);
    });
}

function confirmGroup() {
    document.getElementsByClassName('group-list')[0].hidden = true;
    document.getElementsByClassName('confirmation')[0].hidden = false;
}

function searchGroups() {
    var inputs = document.forms[0].elements;
    var searchData = {};

    searchData.firstName = inputs.firstname.value;
    searchData.lastName = inputs.lastname.value;
    searchData.time = inputs.time.value;
    console.log(searchData);

    var json = JSON.parse(this.searchData(searchData.time));
    createGroupList(json.body);  
}