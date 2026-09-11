$(document).ready(function() {
	$('html').css({
		'background': '#000000'
	});
	function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
	var main_url = "https://mulaidariminus.github.io";
	if(window.location.href === main_url+"/login/" || window.location.href === main_url+"/daftar-akun/" || window.location.href === main_url+"/login/?action=forgot_password"){
		
		$('#toggleSideMenu2').hide();
		$('#menu-main').hide();
		$('#btn-join').hide();
		
		$('#memberpayNavButtonLogin').css("margin-right", "-15px");
		
		console.log( main_url+"/daftar-akun/", window.location.href);
		
    }
	$('#info-session-number').hide();
	if(window.location.href === main_url+"/courses/" || window.location.href === main_url+"/research/"){
        
        //if($('#menu-memberpress-classroom').length) {
		//	$('#menu-memberpress-classroom').remove();
		//}
		
		if($('#mpcs-navbar .navbar-section .nav-back').length) {
			$('#mpcs-navbar .navbar-section .nav-back').remove();
			$('a.navbar-brand.site-branding').css({
				'margin-left': '49.6px'
			})
		}
		
		if($('#mpcs-navbar .navbar-section').length) {
			if(memberpayObj.is_logged_in) {
				$('#mpcs-navbar .navbar-section:nth-child(2)').html(memberpayObj.html_nav_);	
			}
		}

		if($('#toggleSubMenu').length) {
			$('#toggleSubMenu').on('click', (function(e) {
				e.preventDefault();

				$('#subMenuNav').toggleClass('hidden');
			}))
		}

		if($('.except-link').length) {
			$('.except-link').on('click', (function(e) {
				e.preventDefault();

				var _url = $(this).attr('href');

				document.location.href = _url;
			}))
		}
		
     }
	// console.log(memberpayObj.is_user_registered);
	// console.log(memberpayObj.is_logged_in);
	
// 	Restricted page
// 	if(memberpayObj.is_logged_in) {
// 		if(memberpayObj.is_user_registered && memberpayObj.has_payment) {
// 			if(memberpayObj.is_home) {
// 				document.location.href = memberpayObj.thankyou_url;
// 			}
// 		} else {
// 			if(memberpayObj.is_thankyou_page) {
// 				document.location.href = memberpayObj.home_url;
// 			}
// 		}
// 	} else {
// 		if(memberpayObj.is_thankyou_page) {
// 			document.location.href = memberpayObj.home_url;
// 		}
// 	}

// 	console.log(memberpayObj);
// 	if (getCookie('msg-force-logout') == ''){
// 		if(memberpayObj.force_logout == "true" && memberpayObj.is_home) {
// 			alert('Akun kamu Terdeteksi Login pada Perangkat Lain, Kamu Akan Logout pada Perangkat ini. Bukan diri sendiri yang mengakses? Harap Reset Password akun-mu.');
			
// 			setCookie("msg-force-logout", "true", 90);
// 		}
// 	}
  
	if(memberpayObj.force_logout == "true" && memberpayObj.is_home) {
		alert('Akun kamu Terdeteksi Login pada Perangkat Lain, Kamu Akan Logout pada Perangkat ini. Bukan diri sendiri yang mengakses? Harap Reset Password akun-mu.');
	}
	
// 	if($('#mobile-checkout #new-checkout-btn').length && $('#mobile-checkout #new-join-btn').length) {
// 		$('#mobile-checkout #new-join-btn').click(function() {
// 			$('#mobile-checkout #new-checkout-btn').click();
// 		});
// 	}
	
// 	if($('#desktop-checkout #new-checkout-btn').length && $('#desktop-checkout #new-join-btn').length) {
// 		$('#desktop-checkout #new-join-btn').click(function() {
// 			$('#desktop-checkout #new-checkout-btn').click();
// 		});
// 	}
	
// 	if(document.getElementById("new-checkout-btn") && $('.oneclick_to_checkout').length) {
// 		$('.oneclick_to_checkout').on('click', function() {
// 			document.getElementById('new-checkout-btn').click();
// 		});
// 	}
	
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
		}
		return false;
	};
	
	if($('#mepr_loginform').length) {
		var _redirect = getUrlParameter('redirect');
		var _verification = getUrlParameter('verification');
		var _goto = getUrlParameter('goto');
		
		if(_verification != false) {
			$('input[name="redirect_to"]').val(memberpayObj.thankyou_url + '?r=' + _verification);	
		}
		
		if(_goto == 'join-membership') {
			$('input[name="redirect_to"]').val('https://mulaidariminus.github.io/#joinNow');	
		}
	}
	
	if($('#loginTitle').length) {
		var _page = getUrlParameter('action');
		
		if(_page === 'forgot_password') {
			$('title').html('Atur Password - Akadmi Crypto');
			$('#loginTitle h1').html('Atur Password');
			$('.elementor-shortcode h3').remove();
			$('.elementor-shortcode form input#mepr_user_or_email').attr('placeholder', 'Username or email');
			$('.elementor-shortcode form input#mepr_user_or_email').val(memberpayObj.current_email);
			$('.elementor-shortcode form input#wp-submit').val('Setup Password');
		} else if(_page === 'reset_password') {
			$('title').html('Setup New Password - Akadmi Crypto');
			$('#loginTitle h1').html('Setup New Password');
		} else {
			$('.mepr-login-actions > a').addClass('deleted');
			$('.mepr-login-actions > a').before('<p>Lupa atau tidak tahu password? <a href="https://mulaidariminus.github.io/login/?action=forgot_password">Atur Password Disini</a></p>')
			$('.mepr-login-actions > a.deleted').remove();
			
			$('label[for="user_login"]').html('Username atau Email');
		}
	}
	
	/* if($('.memberpay_oneclick_checkout_email').length) {
		$('.memberpay_oneclick_checkout_email').css({
			'text-transform': 'lowercase'
		})
		
		$('.memberpay_oneclick_checkout_email').on('keyup', (function(e) {
			e.preventDefault();
			
			$(this).val($(this).val().toLowerCase());
		}))
	} */
	
	if($('.elementor-toggle-title').length) {
		var _tab = getUrlParameter('tab');
		
		if(_tab == false || _tab == "") {
			var _tabcontent_first = $('.elementor-toggle-title').first().closest('.elementor-tab-title').attr('aria-controls');
			
			$('.elementor-toggle-title').first().closest('.elementor-tab-title').addClass('elementor-active');
			$('#' + _tabcontent_first).addClass('elementor-active');
			$('#' + _tabcontent_first).show();
		} else {
			$('.elementor-toggle-title').each(function() {
				var _text = $(this).html();
				
				if(_text.indexOf(_tab) != -1){
					var _tabcontent_first = $(this).closest('.elementor-tab-title').attr('aria-controls');
					
					$(this).closest('.elementor-tab-title').addClass('elementor-active');
					$('#' + _tabcontent_first).addClass('elementor-active');
					$('#' + _tabcontent_first).show();
				}
			})
		}
	}
	
    if($('.mepr-login-actions').length) {
		if(memberpayObj.is_logged_in && memberpayObj.is_user_registered) {
			$('.mepr-login-actions').append("<div style='display: block; margin-top: 14px;'><p>Belum memiliki akun? <a href='" + memberpayObj.coming_soon_url + "'>Register sekarang</a></p></div>");
		} else {
			$('.mepr-login-actions').append("<div style='display: block; margin-top: 14px;'><p>Belum memiliki akun? <a href='" + memberpayObj.register_free + "'>Register sekarang</a></p></div>");
		}
    }
	
	/* if($('#mepr_loginform').length) {
		$('#mepr_loginform input[type="submit"]').val('Member? Login');
	} */
	
// 	if($('#memberpayNavButtonLogin').length) {
		if(memberpayObj.is_logged_in) {
			$('#memberpayNavButtonLogin a[href$="https://mulaidariminus.github.io/login/"]').before(memberpayObj.html_nav);
			$('#memberpayNavButtonLogin a[href$="https://mulaidariminus.github.io/login/"]').remove();
			
			
		}
// 	}
	
	if($('#memberpayLabelLogin').length) {
		if(memberpayObj.is_logged_in) {
			$('#memberpayLabelLogin').remove();
		}
	}
	
	if($('#toggleSubMenu').length) {
		$('#toggleSubMenu').on('click', (function(e) {
			e.preventDefault();
			
			$('#subMenuNav').toggleClass('hidden');
		}))
	}
	
	if($('.except-link').length) {
		$('.except-link').on('click', (function(e) {
			e.preventDefault();
			
			var _url = $(this).attr('href');
			
			document.location.href = _url;
		}))
	}
	
// 	if($('#toggleSubMenu').length && $('footer#colophon').length) {
	if($('footer#colophon').length) {
		var _width = $(window).width();
		
// 		if(memberpayObj.is_logged_in && _width <= 1024) { // 500
		if(_width <= 1024) {
			$('#toggleSubMenu').before(memberpayObj.html_menubar);
			$('#toggleSubMenu').remove();
			
			$('footer#colophon').after(memberpayObj.html_sidebar);
		}
	}
	
	if($('#toggleSideMenu').length) {
		$('#toggleSideMenu').on('click', (function(e) {
			e.preventDefault();
			
			$('#sidebarMenu').toggleClass('hidden');
		}))
	}
	
	if($('#toggleSideMenu2').length) {
		$('#toggleSideMenu2').on('click', (function(e) {
			e.preventDefault();
			console.log('menu clicked');
			$('#sidebarMenu').toggleClass('hidden');
		}))
	}
	
	if($('#sidebarMenu').length) {
		$(window).click(function() {
		  if($('#sidebarMenu').hasClass('hidden') === false) {
			  $('#sidebarMenu').addClass('hidden');	
		  }
		});
		
		$('#sidebarMenu').on('click', (function(e) {
			e.stopPropagation();			
		}))
		
		$('#toggleSideMenu').on('click', (function(e) {
			e.stopPropagation();			
		}))
		
		$('#toggleSideMenu2').on('click', (function(e) {
			e.stopPropagation();			
		}))
	}
	
	if($('.goto-home').length) {
		$('.goto-home').on('click', (function(e) {
			e.preventDefault();
			
			document.location.href = memberpayObj.home_url;
		}))
	}
	
	$(window).scroll(function() {
		if($('#subMenuNav').hasClass('hidden') === false) {
			$('#subMenuNav').addClass('hidden');	
		}
		
		if($('#sidebarMenu').hasClass('hidden') === false) {
			$('#sidebarMenu').addClass('hidden');	
		}
	})
	
	if($('#mobile-checkout #memberpay_oneclick_checkout_coupon_toggler').length && $('#mobile-checkout  #memberpay_oneclick_checkout_coupon_container').length && $('#mobile-checkout  #new-checkout-btn').length) {
		$('#mobile-checkout  #memberpay_oneclick_checkout_coupon_toggler').on('click', function() {
			$('#mobile-checkout  #memberpay_oneclick_checkout_coupon_toggler').hide();
			$('#mobile-checkout  #memberpay_oneclick_checkout_coupon_container').removeClass('hidden');
			$('#mobile-checkout  #new-checkout-btn span').html('Join Now');
			$('#mobile-checkout  #new-checkout-btn').addClass('coupon-enabled');
			
		});
	}
	
	if($('#desktop-checkout #memberpay_oneclick_checkout_coupon_toggler').length && $('#desktop-checkout  #memberpay_oneclick_checkout_coupon_container').length && $('#desktop-checkout  #new-checkout-btn').length) {
		$('#desktop-checkout  #memberpay_oneclick_checkout_coupon_toggler').on('click', function() {
			$('#desktop-checkout  #memberpay_oneclick_checkout_coupon_toggler').hide();
			$('#desktop-checkout  #memberpay_oneclick_checkout_coupon_container').removeClass('hidden');
			$('#desktop-checkout  #new-checkout-btn span').html('Join Now');
			$('#desktop-checkout  #new-checkout-btn').addClass('coupon-enabled');
			
		});
	}
	
	//$( "#coupon_toggler" ).each(function() {
	  $('.coupon_toggler').on('click', function() {
			var datax = $(this).attr("datax");
			console.log(datax);

			$('.coupon_toggler[datax='+ datax +']').hide();
			$('.coupon_toggler_input[datax='+ datax +']').removeClass('hidden');
// 			$('#new-checkout-btn[datax='+ datax +'] span').html('Join Now');
// 			$('#new-checkout-btn[datax='+ datax +']').addClass('coupon-enabled');
		  
		  	return false;
		});
	
		$('#new-checkout-btn[datax="six_month"]').on('click', function() {
// 		$('button[id="new-checkout-btn"]').on('click', function() {
 			var datax = $(this).attr("datax");
 			console.log(datax);
		  	$('#new-checkout-btn[datax="six_month"]').click();
 		  	return false;
 		});
	
	
	
// 	console.log(memberpayObj);
// 	if($('.cta-join-now').length) {
// 		if(memberpayObj.is_logged_in && memberpayObj.is_user_registered) {
// 			$('.cta-join-now').each(function() {
// 				var _href = $(this).attr('href');
				
// 				if (typeof _href !== 'undefined' && _href !== false) {
// 					if(memberpayObj.has_payment == false) {
// 						$(this).attr('href', memberpayObj.current_payment_link);
// 					} else {
// 						$(this).attr('href', memberpayObj.coming_soon_url);	
// 					}
// 				} else {
// 					if(memberpayObj.has_payment == false) {
// 						$('.cta-join-now a').attr('href', memberpayObj.current_payment_link);
// 					} else {
// 						$('.cta-join-now a').attr('href', memberpayObj.coming_soon_url);
// 					}
// 				}
// 			})
// 		}
// 	}
	
	if($('.wpac_add_wrap').length) {
		setTimeout(function() {
			$('.wpac_add_wrap').each(function() {
				var _id = $(this).attr('id');
				var _height = $('#' + _id).outerHeight();
				var _margin_top = $('#' + _id).css('padding-top');

				$('<div style="display: block;position: absolute;background: #231729;width: calc(200vw);height: ' + _height + 'px;margin-left: calc(-50vw);margin-top: -' + _margin_top + ';"></div>').prependTo('#' + _id);
			})
		}, 3000)
	}
	
	$(window).on('resize', (function() {
		if($('.wpac_add_wrap').length) {
			$('.wpac_add_wrap').each(function() {
				var _id = $(this).attr('id');
				var _height = $('#' + _id).outerHeight();
				var _margin_top = $('#' + _id).css('padding-top');

				$('<div style="display: block;position: absolute;background: #231729;width: calc(150vw);height: ' + _height + 'px;margin-left: calc(-50vw);margin-top: -' + _margin_top + ';"></div>').prependTo('#' + _id);
			})
		}
	}))
	
	if($('#quoteSlider').length) {
		var splide = new Splide( '#quoteSlider', {
		  	type   : 'loop',
		  	padding: '26px',
		  	focus  : 'center',
			autoWidth: true,
		  	arrows: false,
			breakpoints: {
				768: {
					perPage: 1,
					autoWidth: false,
					padding: '0px',
				},
			}
		} );

		splide.mount();
	}
	
// 	Auto redirect
// 	if(memberpayObj.is_home) {
// 		var _auto_redirect = setInterval(function() {
// 			$.ajax({
// 				method: 'POST',
// 				url: memberpayObj.ajax_url,
// 				data: 'action=auto_redirect&nonce=' + memberpayObj.nonce,
// 				dataType: 'json',
// 				processData: false,
// 				success: function(response) {
// 					if(response.disable_auto_redirect == false || response.disable_auto_redirect == 'false') {
// 						// Silent is gold
// 						// console.log("Still checking..");
// 					} else {
// 						clearInterval(_auto_redirect);
						
// 						if(typeof(response.redirect_link) != "undefined" && response.redirect_link !== null) {
// 							document.location.href = response.redirect_link;
// 						}
// 					}
// 				}
// 			});
// 		}, 15000)
// 	}
	
	$("span.usernm").text(function(index, currentText) {
	  var maxLength = 12;
	  if(currentText.length >= maxLength) {
		return currentText.substr(0, maxLength) + "...";
	  } else {
		return currentText
	  } 
	});
	
	var max_session = "1";
	if(memberpayObj.membership_id == "19395"){
		max_session = "2";
	}
	if(memberpayObj.membership_id == "19397"){
		max_session = "6";
	}

	
	
	console.log(max_session);
})