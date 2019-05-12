// Pure javascript. If you use JQuery you can minimize this code

// AJAX request
var xmlhttp = new XMLHttpRequest();
// You can modify this url to filter or order airdrops. Please switch to the custom API tab
var url = "https://api.airdropking.io/airdrops/";

// Icons used
// money icon (svg)
var money_icon = '<?xml version="1.0" encoding="UTF-8"?><svg class="icn icn-money" version="1.1" viewBox="0 0 58 43" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g class="color" transform="translate(-601 -485)" fill="#000"><g transform="translate(601 485)"><path d="m56.079 9l-51.079-8.173v4.33l-3-0.24v4.083h-2v34h58v-34h-1.921zm-49.079-5.827l26.802 4.288-26.802-2.144v-2.144zm-3 3.91l1 0.08v1e-3l6.757 0.54 16.203 1.296h-23.96v-1.917zm-2 3.917h54v30h-54v-30z"/><path d="m47 36.5c0-2.481 2.019-4.5 4.5-4.5 0.138 0 0.273 9e-3 0.408 0.021l1.092 0.1v-12.242l-1.092 0.1c-0.135 0.012-0.27 0.021-0.408 0.021-2.481 0-4.5-2.019-4.5-4.5 0-0.139 0.01-0.276 0.021-0.412l0.097-1.088h-10.944c-2.101-1.261-4.55-2-7.174-2s-5.073 0.739-7.174 2h-10.947l0.1 1.091c0.012 0.135 0.021 0.271 0.021 0.409 0 2.481-2.019 4.5-4.5 4.5-0.138 0-0.274-9e-3 -0.409-0.021l-1.091-0.1v12.242l1.091-0.1c0.135-0.012 0.271-0.021 0.409-0.021 2.481 0 4.5 2.019 4.5 4.5 0 0.138-9e-3 0.274-0.021 0.409l-0.1 1.091h7.996c0.866 0 1.643-0.516 1.979-1.315 0.077-0.183 0.121-0.373 0.145-0.564 0.322-0.36 0.653-0.63 1.01-0.825l3.215-1.584v-0.171c-1.399-0.786-2.389-2.056-2.949-3.788-0.858-0.476-1.404-1.377-1.404-2.384v-0.87c0-0.822 0.371-1.588 0.996-2.103 0.119-0.817 0.324-1.585 0.612-2.285 0.129-0.318 0.24-0.555 0.329-0.747 0.218-0.469 0.218-0.469 0.058-1.277-0.083-0.419-0.139-0.802-0.176-1.131-0.039-0.331 0.066-0.665 0.287-0.914 0.463-0.52 1.367-0.495 1.802 0.057 0.165 0.209 0.424 0.432 0.768 0.664 0.726 0.489 1.703 0.707 2.724 0.624 0.183-0.015 0.372-0.022 0.564-0.022 4.948 0 6.534 2.627 6.953 5.017 0.634 0.515 1.012 1.287 1.012 2.117v0.87c0 1.007-0.546 1.908-1.404 2.384-0.561 1.732-1.55 3.002-2.949 3.788v0.181l3.1 1.583c0.477 0.239 0.897 0.574 1.242 0.992l0.46 0.558c0.371 0.694 1.077 1.145 1.876 1.145h7.993l-0.097-1.088c-0.011-0.136-0.021-0.273-0.021-0.412zm-27.989-0.59c-0.038 0.09-0.109 0.09-0.136 0.09h-5.894c-0.244-3.186-2.795-5.737-5.981-5.981v-8.038c3.186-0.244 5.737-2.794 5.981-5.981h6.232c-0.015 0.015-0.028 0.031-0.043 0.046-0.171 0.169-0.329 0.35-0.491 0.528-0.156 0.17-0.318 0.334-0.464 0.511-0.057 0.068-0.106 0.142-0.161 0.211-1.639 2.049-2.679 4.523-2.967 7.178-3e-3 0.033-0.011 0.065-0.015 0.098-0.047 0.471-0.072 0.948-0.072 1.428 0 0.512 0.034 1.017 0.088 1.52 0.017 0.15 0.044 0.297 0.065 0.446 0.05 0.354 0.109 0.705 0.186 1.052 0.034 0.156 0.074 0.309 0.114 0.463 0.088 0.342 0.188 0.68 0.302 1.015 0.045 0.134 0.091 0.267 0.141 0.4 0.135 0.361 0.287 0.714 0.452 1.063 0.045 0.094 0.085 0.19 0.132 0.282 0.207 0.414 0.434 0.818 0.683 1.211 0.014 0.022 0.026 0.046 0.04 0.068 0.512 0.798 1.104 1.552 1.781 2.245 0.019 0.021 0.061 0.063 0.027 0.145zm26.008 0.09h-5.894c-0.027 0-0.098 0-0.136-0.09-0.034-0.082 8e-3 -0.124 0.028-0.145 0.251-0.257 0.481-0.528 0.71-0.8 8e-3 -0.011 0.018-0.02 0.027-0.031 1.005-1.203 1.787-2.549 2.333-3.989 0.039-0.102 0.072-0.205 0.108-0.307 0.13-0.368 0.245-0.741 0.343-1.12 0.037-0.143 0.074-0.287 0.107-0.432 0.081-0.362 0.146-0.729 0.198-1.099 0.021-0.146 0.048-0.291 0.064-0.439 0.057-0.511 0.093-1.027 0.093-1.548 0-0.48-0.025-0.957-0.072-1.428-4e-3 -0.033-0.012-0.065-0.015-0.098-0.288-2.655-1.328-5.129-2.967-7.178-0.055-0.069-0.104-0.143-0.161-0.211-0.146-0.177-0.308-0.341-0.464-0.511-0.162-0.178-0.32-0.359-0.491-0.528-0.015-0.015-0.028-0.031-0.043-0.046h6.232c0.244 3.187 2.794 5.737 5.981 5.981v8.038c-3.187 0.244-5.737 2.795-5.981 5.981z"/><path d="m6.5 19c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5"/><path d="m48 15.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5"/><path d="m6.5 33c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5"/><path d="m51.5 33c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5"/></g></g></g></svg>';
// thumbs up icon
var icon_thumbsup = '<?xml version="1.0" encoding="UTF-8"?><svg class="icn icn-thumbs-up" version="1.1" viewBox="0 0 56 52" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g class="color" fill="#000" fill-rule="nonzero"><path d="m37.114 52h7.886c1.3107-0.05291 2.4715-0.86176 2.975-2.073 0.34073-1.0745 0.054626-2.2494-0.742-3.047-0.56025-0.56487-1.3234-0.8818-2.119-0.88h-8.114c-0.79559-0.0018031-1.5587 0.31513-2.119 0.88-0.79724 0.79724-1.0834 1.9725-0.742 3.047 0.50354 1.2112 1.6643 2.0201 2.975 2.073z"/><path d="m1.636 46h7.364c1.2573-0.15257 2.4806 0.47707 3.087 1.589 0.044922 0.084211 0.097832 0.16391 0.158 0.238 3.755 4.11 10.417 4.173 10.483 4.173h10.328c-0.37505-0.43951-0.6586-0.94948-0.834-1.5-0.55684-1.7784-0.077219-3.7188 1.244-5.033 0.057-0.056 0.124-0.1 0.182-0.149-1.138-0.59619-2.0056-1.604-2.426-2.818-0.81118-2.5653 0.56579-5.3103 3.107-6.194-0.50745-0.50534-0.88696-1.1245-1.107-1.806-0.42829-1.3729-0.24471-2.8637 0.50385-4.0916 0.74856-1.2279 1.9896-2.0741 3.4061-2.3224-0.41151-0.45878-0.7216-0.99921-0.91-1.586-0.48084-1.5377-0.19121-3.213 0.778-4.5h-2.083c-0.80394-8.1e-4 -1.5501-0.41776-1.9722-1.102-0.42207-0.68423-0.45982-1.5382-0.099783-2.257 0.2-0.389 0.359-0.7 0.414-0.782 1.1598-1.7764 2.6335-3.3268 4.349-4.575l0.435-0.352c0.432-0.351 0.882-0.677 1.334-1 4.123-2.971 8.023-7.467 8.023-9.255 0.024888-1.0625-0.53907-2.052-1.466-2.572-0.634-0.262-1.315-0.033-2.027 0.679-3.99 3.991-9.054 6.348-13.951 8.629-5.128 2.387-9.972 4.643-13.775 8.625-0.6565 0.72251-1.3742 1.387-2.145 1.986-2.46 1.823-5.328 1.976-8.055 1.976h-4.345c-0.90308 0.001102-1.6349 0.73292-1.636 1.636v20.728c0.001102 0.90308 0.73292 1.6349 1.636 1.636zm0.364-20c0-0.55228 0.44772-1 1-1s1 0.44772 1 1v2c0 0.55228-0.44772 1-1 1s-1-0.44772-1-1v-2zm0 6c0-0.55228 0.44772-1 1-1s1 0.44772 1 1v10c0 0.55228-0.44772 1-1 1s-1-0.44772-1-1v-10z"/><path d="m41 22c-0.79559-0.0018031-1.5587 0.31513-2.119 0.88-0.79724 0.79724-1.0834 1.9725-0.742 3.047 0.50354 1.2112 1.6643 2.0201 2.975 2.073h11.772c1.3107-0.05291 2.4715-0.86176 2.975-2.073 0.34122-1.0744 0.055477-2.2493-0.741-3.047-0.56075-0.56474-1.3242-0.88162-2.12-0.88h-12z"/><path d="m52.861 41.927c0.34122-1.0744 0.055477-2.2493-0.741-3.047-0.56075-0.56474-1.3242-0.88162-2.12-0.88h-14c-0.79559-0.0018031-1.5587 0.31513-2.119 0.88-0.79724 0.79724-1.0834 1.9725-0.742 3.047 0.50354 1.2112 1.6643 2.0201 2.975 2.073h13.772c1.3107-0.05291 2.4715-0.86176 2.975-2.073z"/><path d="m54.861 33.927c0.34122-1.0744 0.055477-2.2493-0.741-3.047-0.56075-0.56474-1.3242-0.88162-2.12-0.88h-14c-0.79559-0.0018031-1.5587 0.31513-2.119 0.88-0.79724 0.79724-1.0834 1.9725-0.742 3.047 0.50354 1.2112 1.6643 2.0201 2.975 2.073h13.772c1.3107-0.05291 2.4715-0.86176 2.975-2.073z"/></g></g></svg>';


xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		// If the request was a success parse the data you received from our API
        var myArr = JSON.parse(this.responseText);
        // and call the function below
        fill_list(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

// Here you can change the html tags, classes and so on
// Be cautious and don't miss to close any tags
// If you want a list of all available attributes (arr) please switch to the last tab
function fill_list(arr) {
    var o = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        // open new divider (change css in styles if needed)
        o += '<div class="ak_card">';
        // set image
        o += '<a href="' + arr[i].url_king + '"><img src="' + arr[i].thumbnail + '" alt="' + arr[i].name + ' Logo"></a>';
        // name and url
        o += '<div><a class="ad_title" href="' + arr[i].url_king + '">' + arr[i].name + '</a>';
        // value of the airdrop or TBA (automatically)
        o += '<span class="value">' + money_icon + '$' + arr[i].value + '</span>'
        // load rating if available (-1 == not rated yet)
        if (arr[i].like_ratio >= 0) {
            o += '<span class="rating">' + icon_thumbsup + ' ' + arr[i].like_ratio + '%</span>';
        }
        // days left absoulte position
        o += '<span class="days_left">' + arr[i].days_left + ' days left</span>';
        o += '</div></div>';
    }
    // Powered by Airdrop King API - we would appreciate if you would not remove this. Thanks :)
    o += '';

// finally write all serialized and fetched data into the div with the id=airdropKingList
// If you change this id you also have to change the one from your divider
document.getElementById("airdropKingList").innerHTML = o;
}

function copytoClipboard(target,place) {
    let a = document.getElementById(target);
    let b = document.getElementById(place);

    b.append(a.dataset.text);

    b.select();

    document.execCommand("copy");

    b.textContent = "";
}
function removeValue() {
    let x = document.getElementById("valuesplace-2");
    let notif = document.querySelector(".notification-content");
    notif.textContent = "";
}
function showNotifications(content) {
    let notifContent = document.querySelector(".notification-content");
    let notif = document.getElementById("notifications-1")
    notif.classList.add("show");
    notifContent.append(content);
}
function doAction(theid) {
    document.getElementById(theid).addEventListener("click", function() {
        copytoClipboard(theid,"valuesplace-2");
        showNotifications(document.getElementById(theid).dataset.text);
        setTimeout(function() {
            document.getElementById("notifications-1").classList.remove("show");
            removeValue();
        },2000)
    })
}

doAction("eth-1");

doAction("twitter-1");

doAction("facebook-1");

doAction("medium-1");

doAction("reddit-1");

document.getElementById("close-section-1").addEventListener("click", function() {
    document.getElementById("notifications-1").classList.remove("show");
    removeValue();
})