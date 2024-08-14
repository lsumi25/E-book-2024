// 이미지 상태를 나타내는 변수 초기화
let imageState = 0;

// 이미지 업데이트 함수
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
            foregroundImage.style.right = "20px";
            foregroundImage.style.bottom = "15px";
            foregroundLink.href = "https://perfect-shadow-479.notion.site/845ee42b3b434853bab10bb7a72879d1?pvs=4"; // img2에 대한 링크
            break;
        case 2:
            backgroundImage.src = "page3.png";
            foregroundImage.style.display = "block";
            foregroundImage.src = "img3.png";
            foregroundImage.style.right = "50px"; // 예시 위치
            foregroundImage.style.bottom = "0px"; // 예시 위치
            foregroundLink.href = "http://perfect-shadow-479.notion.site"; // img3에 대한 링크
            break;
        case 3:
            backgroundImage.src = "page4.png";
            foregroundImage.style.display = "block";
            foregroundImage.src = "img4.png";
            foregroundImage.style.right = "0px"; // 예시 위치
            foregroundImage.style.bottom = "0px"; // 예시 위치
            foregroundLink.href = "https://perfect-shadow-479.notion.site/8dde5e083da54146aeae8e4298204451?pvs=4"; // img4에 대한 링크
            break;
        case 4:
            backgroundImage.src = "page5.png";
            foregroundImage.style.display = "block";
            foregroundImage.src = "img5.png";
            foregroundImage.style.right = "0px"; // 예시 위치
            foregroundImage.style.bottom = "0px"; // 예시 위치
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

// 이전 이미지로 이동
function prevImage() {
    if (imageState > 0) {
        imageState--;
        updateImage();
    }
}

// 다음 이미지로 이동
function nextImage() {
    if (imageState < 7) { // 7은 마지막 이미지 상태를 나타냄
        imageState++;
        updateImage();
    }
}

// 페이지 로드 시 첫 번째 이미지를 설정
window.onload = function() {
    updateImage();
}

