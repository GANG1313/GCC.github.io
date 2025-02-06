
$(document).ready(function() {
    $('#toggleMenuButton').on('click', function() {
        $('#learningIndex').slideToggle(300);
    });

    $('#closeBtn').on('click', function() {
        $('#learningIndex').slideUp(300); 
    });

	// 햄버거 버튼 클릭 시 메뉴 열기
    $(".m_open_btn button").click(function() {
        $(".nav.mobile").addClass("active");
        $(".dark").addClass("show");
    });

    // 닫기 버튼 클릭 시 메뉴 닫기
    $(".closeBtn, .dark").click(function() {
        $(".nav.mobile").removeClass("active");
        $(".dark").removeClass("show");
    });
	
});

