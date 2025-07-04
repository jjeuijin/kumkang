const body = document.querySelector("body"),
    sidebar = body.querySelector("nav"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const submenuToggles = document.querySelectorAll('.submenu-toggle');

    submenuToggles.forEach(item => {
        item.addEventListener('click', function (e) {
            // 링크 자체를 눌렀을 경우만 방지
            if (e.target.tagName.toLowerCase() === 'a') {
                e.preventDefault();
            }
            this.classList.toggle('active');
        });
    });
});



