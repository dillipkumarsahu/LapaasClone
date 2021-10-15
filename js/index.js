
$(document).ready(function(){
	if($(window).width() > 768)
	{
		$("#header").addClass("fixed-top");
	}
	else{
		$("#header").removeClass("fixed-top");	
	}

	// first submenu
	$("#digital-marketing-service,#submenu-digital-marketing-service").on("mouseover",function(){
		$("#submenu").removeClass("d-none");
		$("#submenu-digital-marketing-service").removeClass("d-none");
	});
	$("#digital-marketing-service,#submenu-digital-marketing-service").on("mouseout",function(){
		$("#submenu").addClass("d-none");
		$("#submenu-digital-marketing-service").addClass("d-none");
	});

	// first submenu
	$("#creative-services,#submenu-creative-services").on("mouseover",function(){
		$("#submenu").removeClass("d-none");
		$("#submenu-creative-services").removeClass("d-none");
	});
	$("#creative-services,#submenu-creative-services").on("mouseout",function(){
		$("#submenu").addClass("d-none");
		$("#submenu-creative-services").addClass("d-none");
	});

	// menu bar for mobile
	$("#bar").click(function(){
		if ($("#mobile-menu").attr("class") == "d-none") 
		{
			$("#mobile-menu").removeClass("d-none");
		}
		else{
			$("#mobile-menu").addClass("d-none");
		}
		
	});
});