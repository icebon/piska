$(document).ready(function() {

	$(".toggle-mnu").click(function () {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
    });




	$(".section_4").waypoint(function() {

        $(".section_4 .card").each(function(index) {
            var ths = $(this);
            setInterval(function () {
                ths.removeClass("card-off").addClass("card-on");
            }, 200*index);
    	});

    }, {
		offset : "20%"
	});

    $(".section_5").waypoint(function() {

        $(".section_5 .tc-item").each(function(index) {
            var ths = $(this);
            setTimeout(function () {
                var myAnimation = new DrawFillSVG({
                    elementId: "tc-svg-" + index
                });
                ths.children(".tc-content").addClass("tc-content-on");
            }, 500*index);
        });
		this.destroy();
    }, {
        offset : "20%"
    });

    $(".slider").owlCarousel({
        items : 1,
		nav : true,
		navText : "",
		loop: true
    });
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
