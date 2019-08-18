let mergePrElem = null;

function checkPage() {
    return true;
}

function checkBranch(branchName) {
    const elem = document.querySelector('.base-ref');
    if(elem){
        return elem.querySelector('.css-truncate-target').textContent === branchName;
    }
}

function toggleMergePrElem(isShow) {
    if(isShow){
        mergePrElem.style.display = 'block';
    }else{
        mergePrElem.style.display = 'none';
    }
}

function addButton(){
    const showMergePrElemButton = document.createElement('button');
    showMergePrElemButton.type = 'button';
    showMergePrElemButton.style.backgroundColor = "rgb(239, 98, 98)";
    showMergePrElemButton.style.border = "1px solid #ff0000";
    showMergePrElemButton.style.color = "#ffffff";
    showMergePrElemButton.style.margin =  "10px auto";
    showMergePrElemButton.style.display =  "block";
    showMergePrElemButton.style.height =  "40px";

    showMergePrElemButton.onclick = function(){
    const result = confirm('master branchにマージするためのボタンを表示しますか？');
        if (result) {
            toggleMergePrElem(true);
            showMergePrElemButton.style.display = 'none';
        }
    }
    showMergePrElemButton.textContent = 'master branchにマージするためのボタンを表示';
    mergePrElem.parentNode.insertBefore(showMergePrElemButton, mergePrElem);
}

function update(){
    const newMergePrElem = document.querySelector('.merge-pr');
    if(mergePrElem != newMergePrElem){
        mergePrElem = newMergePrElem;
        if(checkBranch('master')){
            toggleMergePrElem(false);
            addButton();
        }
    }
}
update();

setInterval(()=>{update()}, 3000);