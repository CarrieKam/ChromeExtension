
function changeName() {
    let yumi = /((Y|y)umi)/g;
    let utau = /((U|u)tau)/g;
    let carrie = /((C|c)arrie)/g;
    let kam = /((K|k)am)/g;

    let element = document.querySelectorAll('i,b,p,span,div,li,h1,h2,h3,h4,h5,h6')
    for (let i = 0; i < element.length; i++) {
        element[i].innerHTML = element[i].innerHTML.replace(yumi, "🐼")
        element[i].innerHTML = element[i].innerHTML.replace(utau, "🐨")
        element[i].innerHTML = element[i].innerHTML.replace(carrie, "Yumi")
        element[i].innerHTML = element[i].innerHTML.replace(kam, "Cha")
    }
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: changeName
    });
});

