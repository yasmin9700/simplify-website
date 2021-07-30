// Javascript String constants for translation
THEMEREX_GLOBALS["strings"] = {
	bookmark_add: 		"Add the bookmark",
	bookmark_added:		"Current page has been successfully added to the bookmarks. You can see it in the right panel on the tab &#039;Bookmarks&#039;",
	bookmark_del: 		"Delete this bookmark",
	bookmark_title:		"Enter bookmark title",
	bookmark_exists:		"Current page already exists in the bookmarks list",
	search_error:		"Error occurs in AJAX search! Please, type your query and press search icon for the traditional search way.",
	email_confirm:		"On the e-mail address %s we sent a confirmation email.Please, open it and click on the link.",
	reviews_vote:		"Thanks for your vote! New average rating is:",
	reviews_error:		"Error saving your vote! Please, try again later.",
	error_like:			"Error saving your like! Please, try again later.",
	error_global:		"Global error text",
	name_empty:			"The name can&#039;t be empty",
	name_long:			"Too long name",
	email_empty:			"Too short (or empty) email address",
	email_long:			"Too long email address",
	email_not_valid:		"Invalid email address",
	subject_empty:		"The subject can&#039;	t be empty",
	subject_long:		"Too long subject",
	text_empty:			"The message text can&#039;	t be empty",
	text_long:			"Too long message text",
	send_complete:		"Send message complete!",
	send_error:			"Transmit failed!",
	login_empty:			"The Login field can&#039;	t be empty",
	login_long:			"Too long login field",
	login_success:		"Login success! The page will be reloaded in 3 sec.",
	login_failed:		"Login failed!",
	password_empty:		"The password can&#039;	t be empty and shorter then 4 characters",
	password_long:		"Too long password",
	password_not_equal:	"The passwords in both fields are not equal",
	registration_success:"Registration success! Please log in!",
	registration_failed:	"Registration failed!",
	geocode_error:		"Geocode was not successful for the following reason:",
	googlemap_not_avail:	"Google map API not available!",
	editor_save_success:	"Post content saved!",
	editor_save_error:	"Error saving post data!",
	editor_delete_post:	"You really want to delete the current post?",
	editor_delete_post_header:"Delete post",
	editor_delete_success:	"Post deleted!",
	editor_delete_error:		"Error deleting post!",
	editor_caption_cancel:	"Cancel",
	editor_caption_close:	"Close"
};

if (typeof THEMEREX_GLOBALS == 'undefined') var THEMEREX_GLOBALS = {};

// Site base url
THEMEREX_GLOBALS['site_url']			= '/';

// Theme base font
if (THEMEREX_GLOBALS['theme_font']=='') THEMEREX_GLOBALS['theme_font'] = 'Roboto';
THEMEREX_GLOBALS['vc_edit_mode']		= false;
THEMEREX_GLOBALS['theme_font']		= 'Roboto';

// Theme skin
THEMEREX_GLOBALS['theme_skin']			= 'ester';
THEMEREX_GLOBALS['theme_skin_color']		= '';
THEMEREX_GLOBALS['theme_skin_bg_color']	= '';

// Slider height
THEMEREX_GLOBALS['slider_height']	= 100;

// System message
THEMEREX_GLOBALS['system_message']	= {message: '',status: '',header: ''};

// User logged in
THEMEREX_GLOBALS['user_logged_in']	= false;

// Show table of content for the current page
//if (jQuery("#toc_home").length > 0) {var THEMEREX_menu_toc = 'fixed';}
//else {var THEMEREX_menu_toc = 'no';}
THEMEREX_GLOBALS['toc_menu']		= 'float';
THEMEREX_GLOBALS['toc_menu_home']	= true;
THEMEREX_GLOBALS['toc_menu_top']	= true;

// Fix main menu
THEMEREX_GLOBALS['menu_fixed']		= false;

// Use responsive version for main menu
THEMEREX_GLOBALS['menu_relayout']	= 960;
THEMEREX_GLOBALS['menu_responsive']	= 640;
THEMEREX_GLOBALS['menu_slider']     = true;

// Right panel demo timer
THEMEREX_GLOBALS['demo_time']		= 0;

// Video and Audio tag wrapper
THEMEREX_GLOBALS['media_elements_enabled'] = true;

// AJAX parameters
THEMEREX_GLOBALS['ajax_url']			 = '/';
THEMEREX_GLOBALS['ajax_nonce']		 = '7c3c2362ca';
THEMEREX_GLOBALS['ajax_nonce_editor'] = '3e75e7ff8b';

// Use AJAX search
THEMEREX_GLOBALS['ajax_search_enabled'] 	= false;
THEMEREX_GLOBALS['ajax_search_min_length']	= 3;
THEMEREX_GLOBALS['ajax_search_delay']		= 200;

// Css Animation
THEMEREX_GLOBALS['css_animation']      = true;
THEMEREX_GLOBALS['menu_animation_in']  = 'fadeInUp';
THEMEREX_GLOBALS['menu_animation_out'] = 'fadeOutDown';

// Popup windows engine
THEMEREX_GLOBALS['popup_engine']	= 'magnific';

// E-mail mask
THEMEREX_GLOBALS['email_mask']		= '^([a-zA-Z0-9_\-]+\.)*[a-zA-Z0-9_\-]+@[a-z0-9_\-]+(\.[a-z0-9_\-]+)*\.[a-z]{2,6}$';

// Messages max length
THEMEREX_GLOBALS['contacts_maxlength']	= 1000;
THEMEREX_GLOBALS['comments_maxlength']	= 1000;

// Remember visitors settings
THEMEREX_GLOBALS['remember_visitors_settings']	= false;
THEMEREX_GLOBALS['admin_mode']			= false;
THEMEREX_GLOBALS['isotope_resize_delta']	= 0.3;
THEMEREX_GLOBALS['error_message_box']	= null;
THEMEREX_GLOBALS['viewmore_busy']		= false;
THEMEREX_GLOBALS['video_resize_inited']	= false;
THEMEREX_GLOBALS['top_panel_height']		= 0;

var BP_Confirm = {"are_you_sure":"Are you sure?"};
var BP_DTheme = {"accepted":"Accepted","close":"Close","comments":"comments","leave_group_confirm":"Are you sure you want to leave this group?","mark_as_fav":"Favorite","my_favs":"My Favorites","rejected":"Rejected","remove_fav":"Remove Favorite","show_all":"Show all","show_all_comments":"Show all comments for this thread","show_x_comments":"Show all %d comments","unsaved_changes":"Your profile has unsaved changes. If you leave the page, the changes will be lost.","view":"View"};

var ajaxurl = '#';

jQuery(document).ready(function() {
    "use strict";
	main_slider_init();
	price_filter();
	hover_mobile();
	esg_init();
	photostack_init();
	woo_review_star();
});


/*Main slider*/
function main_slider_init() {

    if (jQuery("#mainslider_1").length > 0) {
    	"use strict";
		var setREVStartSize=function(){
			try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
				e.c = jQuery('#rev_slider_1_1');
				e.gridwidth = [1170];
				e.gridheight = [810];
						
				e.sliderLayout = "fullwidth";
				if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
			}catch(d){console.log("Failure at Presize of Slider:"+d)}
		};
					
			
		setREVStartSize();
		function revslider_showDoubleJqueryError(sliderID) {
				var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
				errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
				errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
				errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
				errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
					jQuery(sliderID).show().html(errorMessage);
			}
		var tpj=jQuery;
		tpj.noConflict();
		var revapi1;
		if(tpj("#rev_slider_1_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_1_1");
		}else{
			revapi1 = tpj("#rev_slider_1_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"http://ester-html.themerex.net/wp-content/plugins/revslider/public/assets/js/",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					onHoverStop:"on",
					touch:{
						touchenabled:"on",
						swipe_threshold: 75,
						swipe_min_touches: 1,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					,
					bullets: {
						enable:true,
						hide_onmobile:false,
						style:"hermes",
						hide_onleave:false,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20,
						space:10,
						tmp:''
					}
				},
				gridwidth:1170,
				gridheight:810,
				lazyType:"none",
				shadow:0,
				spinner:"spinner0",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
	}

	if (jQuery("#mainslider_2").length > 0) {
    	"use strict";
		var setREVStartSize=function(){
			try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
				e.c = jQuery('#rev_slider_2_1');
				e.gridwidth = [1170];
				e.gridheight = [620];
						
				e.sliderLayout = "auto";
				if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
			}catch(d){console.log("Failure at Presize of Slider:"+d)}
		};
					
			
		setREVStartSize();
		function revslider_showDoubleJqueryError(sliderID) {
				var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
				errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
				errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
				errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
				errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
					jQuery(sliderID).show().html(errorMessage);
		}
		var tpj=jQuery;
		tpj.noConflict();
		var revapi2;
		if(tpj("#rev_slider_2_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_2_1");
		}else{
			revapi2 = tpj("#rev_slider_2_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"http://ester-html.themerex.net/wp-content/plugins/revslider/public/assets/js/",
				sliderLayout:"auto",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					onHoverStop:"on",
					touch:{
						touchenabled:"on",
						swipe_threshold: 75,
						swipe_min_touches: 1,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					,
					bullets: {
						enable:true,
						hide_onmobile:false,
						style:"hermes",
						hide_onleave:false,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20,
						space:10,
						tmp:''
					}
				},
				gridwidth:1170,
				gridheight:620,
				lazyType:"none",
				shadow:0,
				spinner:"spinner0",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
	}

	if (jQuery("#mainslider_3").length > 0) {
    	"use strict";
		var setREVStartSize=function(){
			try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
				e.c = jQuery('#rev_slider_3_1');
				e.gridwidth = [1170];
				e.gridheight = [550];
						
				e.sliderLayout = "auto";
				if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
			}catch(d){console.log("Failure at Presize of Slider:"+d)}
		};
					
			
		setREVStartSize();
		function revslider_showDoubleJqueryError(sliderID) {
				var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
				errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
				errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
				errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
				errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
					jQuery(sliderID).show().html(errorMessage);
			}
		var tpj=jQuery;
		tpj.noConflict();
		var revapi3;
		if(tpj("#rev_slider_3_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_3_1");
		}else{
			revapi3 = tpj("#rev_slider_3_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"http://ester-html.themerex.net/wp-content/plugins/revslider/public/assets/js/",
				sliderLayout:"auto",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					onHoverStop:"on",
					touch:{
						touchenabled:"on",
						swipe_threshold: 75,
						swipe_min_touches: 1,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					,
					bullets: {
						enable:true,
						hide_onmobile:false,
						style:"hermes",
						hide_onleave:false,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20,
						space:10,
						tmp:''
					}
				},
				gridwidth:1170,
				gridheight:550,
				lazyType:"none",
				shadow:0,
				spinner:"spinner0",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
	}

	if (jQuery("#mainslider_4").length > 0) {
    	"use strict";
		var setREVStartSize=function(){
			try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
				e.c = jQuery('#rev_slider_4_1');
				e.gridwidth = [1170];
				e.gridheight = [930];
						
				e.sliderLayout = "auto";
				e.minHeight = 450;
				if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
			}catch(d){console.log("Failure at Presize of Slider:"+d)}
		};
					
			
		setREVStartSize();
		function revslider_showDoubleJqueryError(sliderID) {
				var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
				errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
				errorMessage += "<br> <br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong> <b>Put JS Includes To Body</b> </strong> option to true.";
				errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
				errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
					jQuery(sliderID).show().html(errorMessage);
			}
		var tpj=jQuery;
		tpj.noConflict();
		var revapi4;
		if(tpj("#rev_slider_4_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_4_1");
		}else{
			revapi4 = tpj("#rev_slider_4_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"http://ester-html.themerex.net/wp-content/plugins/revslider/public/assets/js/",
				sliderLayout:"auto",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					onHoverStop:"on",
					touch:{
						touchenabled:"on",
						swipe_threshold: 75,
						swipe_min_touches: 1,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					,
					bullets: {
						enable:true,
						hide_onmobile:false,
						style:"hermes",
						hide_onleave:false,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20,
						space:10,
						tmp:''
					}
				},
				gridwidth:1170,
				gridheight:930,
				lazyType:"none",
				minHeight:450,
				shadow:0,
				spinner:"spinner0",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:463,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
	}

}

/*Essential grid*/
function esg_init() {
	if (jQuery("#esg-grid-1-1-wrap").length > 0) {
    	"use strict";
		function eggbfc(winw,resultoption) {
			var lasttop = winw,
			lastbottom = 0,
			smallest =9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [
								{ width:1400,amount:4},
								{ width:1170,amount:4},
								{ width:1024,amount:4},
								{ width:960,amount:2},
								{ width:778,amount:2},
								{ width:640,amount:2},
								{ width:480,amount:1}
								];
			if (responsiveEntries!=undefined && responsiveEntries.length>0)
				jQuery.each(responsiveEntries, function(index,obj) {
					var curw = obj.width != undefined ? obj.width : 0,
						cura = obj.amount != undefined ? obj.amount : 0;
					if (smallest>curw) {
						smallest = curw;
						samount = cura;
						resultidb = index;
					}
					if (largest<curw) {
						largest = curw;
						lamount = cura;
					}
					if (curw>lastbottom && curw<=lasttop) {
						lastbottom = curw;
						lastamount = cura;
						resultid = index;
					}
				})
				if (smallest>winw) {
					lastamount = samount;
					resultid = resultidb;
				}
				var obj = new Object;
				obj.index = resultid;
				obj.column = lastamount;
				if (resultoption=="id")
					return obj;
				else
					return lastamount;
			}
		if ("cobbles"=="even") {
			var coh=0,
				container = jQuery("#esg-grid-1-1");
			var	cwidth = container.width(),
				ar = "4:3",
				gbfc = eggbfc(jQuery(window).width(),"id"),
			row = 2;
		ar = ar.split(":");
		aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
		coh = cwidth / aratio;
		coh = coh/gbfc.column*row;
			var ul = container.find("ul").first();
			ul.css({display:"block",height:coh+"px"});
		}
		var essapi_1;
		essapi_1 = jQuery("#esg-grid-1-1").tpessential({
	        gridID:1,
	        layout:"cobbles",
	        forceFullWidth:"off",
	        lazyLoad:"off",
	        row:9999,
	        loadMoreAjaxToken:"4f588e8c2c",
	        loadMoreAjaxUrl:"http://ester.themerex.net/wp-admin/admin-ajax.php",
	        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
	        ajaxContentTarget:"ess-grid-ajax-container-",
	        ajaxScrollToOffset:"0",
	        ajaxCloseButton:"off",
	        ajaxContentSliding:"on",
	        ajaxScrollToOnLoad:"on",
	        ajaxNavButton:"off",
	        ajaxCloseType:"type1",
	        ajaxCloseInner:"false",
	        ajaxCloseStyle:"light",
	        ajaxClosePosition:"tr",
	        space:0,
	        pageAnimation:"fade",
	        paginationScrollToTop:"off",
	        spinner:"spinner0",
	        lightBoxMode:"single",
	        animSpeed:1000,
	        delayBasic:1,
	        mainhoverdelay:1,
	        filterType:"single",
	        showDropFilter:"hover",
	        filterGroupClass:"esg-fgc-1",
	        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
	        aspectratio:"4:3",
	        responsiveEntries: [
							{ width:1400,amount:4},
							{ width:1170,amount:4},
							{ width:1024,amount:4},
							{ width:960,amount:2},
							{ width:778,amount:2},
							{ width:640,amount:2},
							{ width:480,amount:1}
							]
		});
	}
}

// Price range slider
function price_filter() {
    "use strict";
    if (jQuery("#slider-range").length > 0) {
        jQuery("#slider-range").slider({
            range: true,
            min: 0,
            max: 250,
            values: [0, 250],
            slide: function(event, ui) {
                jQuery("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        jQuery("#amount").val("$" + jQuery("#slider-range").slider("values", 0) +
            " - $" + jQuery("#slider-range").slider("values", 1));
    }
}

// Hover effects on mobile
function hover_mobile() {
    "use strict";
    if (jQuery("div.mobile_tap_hover").length > 0) {
        jQuery('.taphover').on("touchstart", function(e) {
            var link = jQuery(this); //preselect the link
            if (link.hasClass('hover')) {
                return true;
            } else {
                link.addClass("hover");
                //$(this).parent().css({'z-index': 1});
                jQuery('.taphover').not(this).removeClass("hover");
                e.preventDefault();
                return false; //extra, and to make sure the function has consistent return points
            }
        });
    }

}

// Hover effects on mobile
function photostack_init() {
    "use strict";
	if (jQuery("#sc_gallery_283177892").length > 0) {
		jQuery(document.getElementById( "sc_gallery_283177892" )).parent(".sc_gallery_area").height("auto");

		new Photostack( document.getElementById( "sc_gallery_283177892" ), {
			callback : function( item ) {
			}
		})
	}
}

// Select review stars
function woo_review_star() {
    "use strict";
    if (jQuery(".stars", "#review_form").length > 0) {
        $(".stars").find("a").on("click", function() {
            $("a.active").removeClass("active");
            $(this).addClass("active");
            return false;
        });
    }
}