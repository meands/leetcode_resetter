"use strict";

function handleSubmit(event) {
    const time = Math.random();
    chrome.storage.sync.set({ last: time });
    const el = document.getElementById("last");
    el.innerText = time;
    //   window.close();
}

document.getElementById("submit").addEventListener("click", handleSubmit);
