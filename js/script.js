document.addEventListener('DOMContentLoaded', function () {
    var drawer = document.getElementById('drawer');
    var toggleDrawer = document.getElementById('toggleDrawer');
    var closeDrawer = document.getElementById('closeDrawer');

    var drawerNavItem1 = document.getElementById('drawer-nav-ite1');
    var drawerNavItem2 = document.getElementById('drawer-nav-ite2');
    var drawerNavItem3 = document.getElementById('drawer-nav-ite3');
    var drawerNavItem4 = document.getElementById('drawer-nav-ite4');
    var drawerNavItem5 = document.getElementById('drawer-nav-ite5');
    var drawerNavItem6 = document.getElementById('drawer-nav-ite6');
    var drawerNavItem7 = document.getElementById('drawer-nav-ite7');
    var drawerNavItem8 = document.getElementById('drawer-nav-ite8');

    // var headerTitleData = document.getElementById("header-title-data");

    toggleDrawer.onclick = function () {
        drawer.style.left = '0';
        drawer.style.transition = "0.9s";

        drawerNavItem1.style.left = '0';
        drawerNavItem1.style.transitionDelay = '50ms';

        drawerNavItem2.style.left = '0';
        drawerNavItem2.style.transitionDelay = '200ms';

        drawerNavItem3.style.left = '0';
        drawerNavItem3.style.transitionDelay = '350ms';

        drawerNavItem4.style.left = '0';
        drawerNavItem4.style.transitionDelay = '500ms';

        drawerNavItem5.style.left = '0';
        drawerNavItem5.style.transitionDelay = '650ms';

        drawerNavItem6.style.left = '0';
        drawerNavItem6.style.transitionDelay = '750ms';

        drawerNavItem7.style.left = '0';
        drawerNavItem7.style.transitionDelay = '900ms';

        drawerNavItem8.style.left = '0';
        drawerNavItem8.style.transitionDelay = '1s';


        // headerTitleData.style.right = "-300%";

    };

    closeDrawer.onclick = function () {
        drawer.style.left = '-65%';
        drawer.style.transition = "3s";

        drawerNavItem1.style.left = '-100%';
        drawerNavItem1.style.transitionDelay = '1s';

        drawerNavItem2.style.left = '-100%';
        drawerNavItem2.style.transitionDelay = '900ms';

        drawerNavItem3.style.left = '-100%';
        drawerNavItem3.style.transitionDelay = '750ms';

        drawerNavItem4.style.left = '-100%';
        drawerNavItem4.style.transitionDelay = '650ms';

        drawerNavItem5.style.left = '-100%';
        drawerNavItem5.style.transitionDelay = '500ms';

        drawerNavItem6.style.left = '-100%';
        drawerNavItem6.style.transitionDelay = '350ms';

        drawerNavItem7.style.left = '-100%';
        drawerNavItem7.style.transitionDelay = '200ms';

        drawerNavItem8.style.left = '-100%';
        drawerNavItem8.style.transitionDelay = '50ms';

        // headerTitleData.style.right = "0";
        // headerTitleData.style.transitionDelay = '300ms';
    };
});

// gsap ----------------->
gsap.to(".navigation-bar", {
    backgroundColor: "#000",
    color: "#fff",
    duration: 0.5,

    scrollTrigger: {
        trigger: ".navigation-bar",
        scroller: "body",
        start: "top -95%"
    }
})

