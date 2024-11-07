document.addEventListener("DOMContentLoaded", function () {
    var audioPlayer = document.getElementById("audioPlayer");
    var scriptParagraphs = document.querySelectorAll("#scriptContainer p");

    // 오디오 플레이어의 현재 재생 시간을 확인하고 해당하는 스크립트 섹션을 강조하는 함수
    function highlightScript() {
        var currentTime = audioPlayer.currentTime;

        scriptParagraphs.forEach(function (paragraph) {
            var start = parseFloat(paragraph.dataset.start);
            var end = parseFloat(paragraph.dataset.end);

            if (currentTime >= start && currentTime <= end) {
                paragraph.classList.add("active-script");
            } else {
                paragraph.classList.remove("active-script");
            }
        });
    }

    // timeupdate 이벤트는 오디오/비디오의 현재 재생 위치가 변경될 때 발생합니다.
    audioPlayer.addEventListener("timeupdate", highlightScript);
});
