(async () => {
    const data = await chrome.storage.sync.get('lastSubmission');
    document.getElementById("last").innerText = 'Last Submission: ' + data.lastSubmission;
})()
