function updateImage() {
    const backgroundImage = document.getElementById('backgroundImage');
    const foregroundImage = document.getElementById('foregroundImage');
    const foregroundLink = document.getElementById('foregroundLink');

    switch(imageState) {
        case 0:
            backgroundImage.src = "page1.png";
            foregroundImage.style.display = "none";
            foregroundLink.href = ""; // 링크를 비활성화
            break;
        case 1:
            backgroundImage.src = "page2.png";
            foregroundImage.style.display = "block";
            foregroundImage.src = "img2.png";
            foregroundImage.style.right = "270px";
            foregroundImage.style.bottom = "242px";
            foregroundLink.href = "https://perfect-shadow-479.notion.site/845ee42b3b434853bab10bb7a72879d1?pvs=4"; // img2에 대한 링크
            break;
        case 2:
            backgroundImage.src = "page3.png";
            foregroundImage.style.display = "block";
            foregroundImage.src = "img3.png";
            foregroundImage.style.right = "300px"; // 예시 위치
            foregroundImage.style.bottom = "200px"; // 예시 위치
            foregroundLink.href = "http://perfect-shadow-479.notion.site"; // img3에 대한 링크
            break;
        case 3:
            backgroundImage.src = "page4.png";
            foregroundImage.style.display = "block";
            foregroundImage.src = "img4.png";
            foregroundImage.style.right = "100px"; // 예시 위치
            foregroundImage.style.bottom = "150px"; // 예시 위치
            foregroundLink.href = "https://perfect-shadow-479.notion.site/8dde5e083da54146aeae8e4298204451?pvs=4"; // img4에 대한 링크
            break;
        case 4:
            backgroundImage.src = "page5.png";
            foregroundImage.style.display = "block";
            foregroundImage.src = "img5.png";
            foregroundImage.style.right = "50px"; // 예시 위치
            foregroundImage.style.bottom = "100px"; // 예시 위치
            foregroundLink.href = "https://perfect-shadow-479.notion.site/56be29be591a4f5c8d6d01f15ae9b091?pvs=4"; // img5에 대한 링크
            break;
        case 5:
            backgroundImage.src = "page6.png";
            foregroundImage.style.display = "none";
            foregroundLink.href = ""; // 링크를 비활성화
            break;
        case 6:
            backgroundImage.src = "page7.png";
            foregroundImage.style.display = "none";
            foregroundLink.href = ""; // 링크를 비활성화
            break;
        case 7:
            backgroundImage.src = "page8.png";
            foregroundImage.style.display = "none";
            foregroundLink.href = ""; // 링크를 비활성화
            break;
    }
}
