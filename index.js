function showSidebar(){
    const sidebar = $(".pagesSmallScreen");
    sidebar.css("transform","translateX(100%)");
}
function hideSidebar(){
    const sidebar = $(".pagesSmallScreen");
    sidebar.css("transform","translateX(-100%)");
}