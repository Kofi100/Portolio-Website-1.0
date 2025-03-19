var showAllFilter = document.getElementById("showAllFilter");
var htmlFilter = document.getElementById("htmlFilter");
var jsFilter = document.getElementById("jsFilter");
var cssFilter = document.getElementById("cssFilter");

var htmlActive = false;
var cssActive = false;

console.log("Project Script Loading....");
//Every Function here is meant to change the display style
//of each class Filter.
//The ShowAllFilter class though displays every single class div 
//element when activated.


// htmlFilter.addEventListener("")

showAllFilter.addEventListener("change", function () {
    if (this.checked) {
        htmlFilter.checked = false;
        cssFilter.checked = false;
        jsFilter.checked = false;
    }
    filter();

})
htmlFilter.addEventListener("change", function () {
    if (this.checked) {
        showAllFilter.checked = false;
    }
    filter();

})
cssFilter.addEventListener("change", function () {
    if (this.checked) {
        showAllFilter.checked = false;
    }
    filter();
})

jsFilter.addEventListener("change", function () {
    if (this.checked) {
        showAllFilter.checked = false;
    }
    filter();
})

if (htmlActive == true) {

}

function filter() {
    //showAllFilter appears here first since it's highly
    //rare that all the components would be shown first.
    if (showAllFilter.checked == true) {
        document.querySelectorAll(".html").forEach(element => {
            element.style.display = "flex";
        });
        document.querySelectorAll(".css").forEach(element => {
            element.style.display = "flex";
        });
        document.querySelectorAll(".js").forEach(element => {
            element.style.display = "flex";
        });
        return;
    }

    // if (htmlFilter.checked == true) {
    //     console.log(document.querySelectorAll(".html"));

    //     // document.getElementsByClassName("html")
    //     document.querySelectorAll(".html").forEach(element => {
    //         element.style.display = "flex";
    //         // console.log(element.nodeName);


    //         console.log("html filter on");
    //     });
    //     // showAllFilter.checked = false;
    // }
    // else {
    //     //document.getElementsByClassName("html")
    //     document.querySelectorAll(".html").forEach(element => {
    //         element.style.display = "none";
    //         console.log("html filter off");

    //     });
    //     // showAllFilter.checked = true;
    // }
    document.querySelectorAll(".html").forEach(element => {
        element.style.display = htmlFilter.checked ? "flex" : "none";
        console.log(htmlFilter.checked ? "HTMLFilter active" : "HTML Filter not active");
        // showAllFilter.checked = false;

    })


    if (cssFilter.checked == true) {
        // document.getElementsByClassName("html")
        document.querySelectorAll(".css").forEach(element => {
            element.style.display = "flex";
            console.log("css filter on");
        });
        showAllFilter.checked = false;
    }
    else {
        //document.getElementsByClassName("html")
        document.querySelectorAll(".css").forEach(element => {
            element.style.display = "none";
            console.log("css filter off");

        });
        // showAllFilter.checked = true;
    }

    if (jsFilter.checked == true) {
        // document.getElementsByClassName("html")
        document.querySelectorAll(".js").forEach(element => {
            element.style.display = "flex";
            console.log("js filter on");
        });
        showAllFilter.checked = false;
    }
    else {
        //document.getElementsByClassName("html")
        document.querySelectorAll(".js").forEach(element => {
            element.style.display = "none";
            console.log("js filter off");

        });
        // showAllFilter.checked = true;
    }






}