window.addEventListener('load', function () {
    //调用初始化左侧分类的功能函数
    initLeftSlide();
    // 初始化右侧分类的滑动
    initRightSlide();
});

// 初始化左侧分类滑动
function initLeftSlide() {
    // 注意因为页面有2个 swiper-container 使用外面选择器区分开
    // 初始化左侧的swiper插件
    var swiper = new Swiper('.category-left .swiper-container', {
        // 垂直滚动
        direction: 'vertical',
        // 支持多张图一起
        slidesPerView: 'auto',
        // 惯性
        freeMode: true,
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
        // mousewheel: true,
    });
}
// 初始化右侧分类滑动
function initRightSlide() {
    // 初始化右侧swiper插件
    var swiper = new Swiper('.category-right .swiper-container', {
        // 垂直滚动
        direction: 'vertical',
        // 支持多张图一起
        slidesPerView: 'auto',
        // 惯性
        freeMode: true,
        // 右边需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        // mousewheel: true,
    });
}