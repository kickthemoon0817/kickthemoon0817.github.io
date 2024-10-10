// script.js

document.addEventListener('DOMContentLoaded', () => {
    const centralImage = document.querySelector('.central-image');
    const imageMenuContainer = document.querySelector('.image-menu-container');
    const closeBtn = document.querySelector('.close-btn');

    // 중앙 이미지 클릭 시 메뉴 토글
    centralImage.addEventListener('click', (e) => {
        e.stopPropagation(); // 이벤트 전파 방지
        imageMenuContainer.classList.toggle('active');
    });

    // 닫기 버튼 클릭 시 메뉴 닫기
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // 이벤트 전파 방지
        imageMenuContainer.classList.remove('active');
    });

    // 클릭 외부 영역에서 메뉴 닫기
    document.addEventListener('click', (e) => {
        if (!imageMenuContainer.contains(e.target)) {
            imageMenuContainer.classList.remove('active');
        }
    });
});
