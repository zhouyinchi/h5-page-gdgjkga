document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('itemContainer');
    const wrapper = container.querySelector('.item-wrapper');
    const items = wrapper.querySelectorAll('.file-word');
    let currentIndex = 0;

    function showItem(index) {
        wrapper.style.transform = `translateX(max(${-index * 100}vw, ${-index * 409}px))`;
        currentIndex = index;
    }

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            showItem(index);
        });
    });

    // 添加触摸滑动功能
    let startX, moveX;
    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    container.addEventListener('touchmove', (e) => {
        moveX = e.touches[0].clientX;
    });

    container.addEventListener('touchend', () => {
        const diff = startX - moveX;
        if (Math.abs(diff) > 50) { // 滑动距离超过50px才触发
            if (diff > 0 && currentIndex < items.length - 1) {
                showItem((currentIndex + 1) % 9);
            } else if (diff < 0 && currentIndex > 0) {
                showItem((currentIndex - 1) % 9);
            }
        }
    });
});