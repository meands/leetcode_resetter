const langList = [
    "cpp",
    "java",
    "python",
    "python3",
    "c",
    "csharp",
    "javascript",
    "typescript",
    "php",
    "swift",
    "kotlin",
    "dart",
    "golang",
    "ruby",
    "scala",
    "rust",
    "racket",
    "erlang",
    "elixir",
];

const callback = (_, observer) => {
    const submitBtn = document.querySelectorAll('[data-e2e-locator="console-submit-button"]')?.[0];

    if (submitBtn) {
        submitBtn.onclick = () => {
            for (let i = 0; i < localStorage.length; i++) {
                const matchedLang = localStorage.key(i).match(new RegExp(`^\\d+_\\d+_(${langList.join("|")})$`))?.[0]
                if (matchedLang) {
                    localStorage.removeItem(matchedLang)
                }
            }
        };
        observer.disconnect();
    }
};

const observer = new MutationObserver(callback);

observer.observe(document.getElementById("__next"), { childList: true, subtree: true });
