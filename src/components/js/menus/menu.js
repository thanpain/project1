var menus = [
    { menu: "trang chủ" },
    { menu: "giới thiệu" },
    { menu: "điện thoại" },
    { menu: "phụ kiện" },
    { menu: "tin công nghệ" }
];

var navMenu = document.getElementById('menu');

var showMenu = menus.map((element) => {
    return `
        <li><a href="#">${element.menu}</a></li>
    `;
});
navMenu.innerHTML = showMenu.join(' ');