import app from 'apprun';
app.on('//', (route) => {
    const menus = document.querySelectorAll('.navbar-nav li');
    for (let i = 0; i < menus.length; ++i) {
        menus[i].classList.remove('active');
    }
    const item = document.querySelector(`[href='${route}']`);
    item && item.parentElement.classList.add('active');
});
export default () => app.h("div", { class: "container" },
    app.h("nav", { class: "navbar navbar-expand-lg navbar-light bg-light" },
        app.h("a", { class: "navbar-brand", href: "#" }, "Project Name"),
        app.h("button", { class: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
            app.h("span", { class: "navbar-toggler-icon" })),
        app.h("div", { class: "collapse navbar-collapse", id: "navbarSupportedContent" },
            app.h("ul", { class: "navbar-nav mr-auto" },
                app.h("li", { class: "nav-item active" },
                    app.h("a", { class: "nav-link", href: "#Home" },
                        "Home",
                        app.h("span", { class: "sr-only" }, "(current)"))),
                app.h("li", { class: "nav-item" },
                    app.h("a", { class: "nav-link", href: "#About" }, "About")),
                app.h("li", { class: "nav-item" },
                    app.h("a", { class: "nav-link", href: "#Contact" }, "Contact"))))),
    app.h("div", { class: "container", id: "my-app" }));
//# sourceMappingURL=Layout.js.map