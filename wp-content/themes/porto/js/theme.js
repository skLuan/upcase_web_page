/**
 * Porto theme's main JavaScript file
 */

/* Alternatives for old browsers */
if ( !String.prototype.endsWith ) {
	String.prototype.endsWith = function ( search, this_len ) {
		if ( this_len === undefined || this_len > this.length ) {
			this_len = this.length;
		}
		return this.substring( this_len - search.length, this_len ) === search;
	};
}
if ( window.NodeList && !NodeList.prototype.forEach ) {
	NodeList.prototype.forEach = Array.prototype.forEach;
}
if ( !String.prototype.trim ) {
	String.prototype.trim = function () {
		return this.replace( /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '' );
	};
}

/* Smart Resize  */
( function ( $, sr ) {
	'use strict';

	// debouncing function from John Hann
	// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
	var debounce = function ( func, threshold, execAsap ) {
		var timeout;

		return function debounced() {
			var obj = this, args = arguments;
			function delayed() {
				if ( !execAsap )
					func.apply( obj, args );
				timeout = null;
			}

			if ( timeout && timeout.val )
				theme.deleteTimeout( timeout );
			else if ( execAsap )
				func.apply( obj, args );

			timeout = theme.requestTimeout( delayed, threshold || 100 );
		};
	};
	// smartresize 
	jQuery.fn[ sr ] = function ( fn ) { return fn ? this.on( 'resize', debounce( fn ) ) : this.trigger( sr ); };

} )( jQuery, 'smartresize' );

/* easing */
jQuery.extend( jQuery.easing, {
	def: 'easeOutQuad',
	swing: function ( x, t, b, c, d ) {
		return jQuery.easing[ jQuery.easing.def ]( x, t, b, c, d );
	},
	easeOutQuad: function ( x, t, b, c, d ) {
		return -c * ( t /= d ) * ( t - 2 ) + b;
	},
	easeInOutQuart: function ( x, t, b, c, d ) {
		if ( ( t /= d / 2 ) < 1 ) return c / 2 * t * t * t * t + b;
		return -c / 2 * ( ( t -= 2 ) * t * t * t - 2 ) + b;
	},
	easeOutQuint: function ( x, t, b, c, d ) {
		return c * ( ( t = t / d - 1 ) * t * t * t * t + 1 ) + b;
	}
} );

( function ( $ ) {

	/**
	 * Copyright 2012, Digital Fusion
	 * Licensed under the MIT license.
	 * http://teamdf.com/jquery-plugins/license/
	 *
	 * @author Sam Sehnert
	 * @desc A small plugin that checks whether elements are within
	 *       the user visible viewport of a web browser.
	 *       only accounts for vertical position, not horizontal.
	 */
	$.fn.visible = function ( partial, hidden, direction, container ) {

		if ( this.length < 1 )
			return;

		var $t = this.length > 1 ? this.eq( 0 ) : this,
			isContained = typeof container !== 'undefined' && container !== null,
			$w = isContained ? $( container ) : $( window ),
			wPosition = isContained ? $w.position() : 0,
			t = $t.get( 0 ),
			vpWidth = $w.outerWidth(),
			vpHeight = $w.outerHeight(),
			direction = ( direction ) ? direction : 'both',
			clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

		if ( typeof t.getBoundingClientRect === 'function' ) {

			// Use this native browser method, if available.
			var rec = t.getBoundingClientRect(),
				tViz = isContained ?
					rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top :
					rec.top >= 0 && rec.top < vpHeight,
				bViz = isContained ?
					rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top :
					rec.bottom > 0 && rec.bottom <= vpHeight,
				lViz = isContained ?
					rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left :
					rec.left >= 0 && rec.left < vpWidth,
				rViz = isContained ?
					rec.right - wPosition.left > 0 && rec.right < vpWidth + wPosition.left :
					rec.right > 0 && rec.right <= vpWidth,
				vVisible = partial ? tViz || bViz : tViz && bViz,
				hVisible = partial ? lViz || rViz : lViz && rViz;

			if ( direction === 'both' )
				return clientSize && vVisible && hVisible;
			else if ( direction === 'vertical' )
				return clientSize && vVisible;
			else if ( direction === 'horizontal' )
				return clientSize && hVisible;
		} else {

			var viewTop = isContained ? 0 : wPosition,
				viewBottom = viewTop + vpHeight,
				viewLeft = $w.scrollLeft(),
				viewRight = viewLeft + vpWidth,
				position = $t.position(),
				_top = position.top,
				_bottom = _top + $t.height(),
				_left = position.left,
				_right = _left + $t.width(),
				compareTop = partial === true ? _bottom : _top,
				compareBottom = partial === true ? _top : _bottom,
				compareLeft = partial === true ? _right : _left,
				compareRight = partial === true ? _left : _right;

			if ( direction === 'both' )
				return !!clientSize && ( ( compareBottom <= viewBottom ) && ( compareTop >= viewTop ) ) && ( ( compareRight <= viewRight ) && ( compareLeft >= viewLeft ) );
			else if ( direction === 'vertical' )
				return !!clientSize && ( ( compareBottom <= viewBottom ) && ( compareTop >= viewTop ) );
			else if ( direction === 'horizontal' )
				return !!clientSize && ( ( compareRight <= viewRight ) && ( compareLeft >= viewLeft ) );
		}
	};

} )( jQuery );

/*
 Name: Porto Theme Javascript
 Writtern By: P-THEMES
 Javascript Version: 1.2
 */

// Theme
window.theme = {};

// Configuration
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};

	$.extend( theme, {

		rtl: js_porto_vars.rtl == '1' ? true : false,
		rtl_browser: $( 'html' ).hasClass( 'browser-rtl' ),

		ajax_url: js_porto_vars.ajax_url,
		request_error: js_porto_vars.request_error,

		change_logo: js_porto_vars.change_logo == '1' ? true : false,

		show_sticky_header: js_porto_vars.show_sticky_header == '1' ? true : false,
		show_sticky_header_tablet: js_porto_vars.show_sticky_header_tablet == '1' ? true : false,
		show_sticky_header_mobile: js_porto_vars.show_sticky_header_mobile == '1' ? true : false,

		category_ajax: js_porto_vars.category_ajax == '1' ? true : false,
		prdctfltr_ajax: js_porto_vars.prdctfltr_ajax == '1' ? true : false,

		container_width: parseInt( js_porto_vars.container_width ),
		grid_gutter_width: parseInt( js_porto_vars.grid_gutter_width ),
		screen_lg: parseInt( js_porto_vars.screen_lg ),
		slider_loop: js_porto_vars.slider_loop == '1' ? true : false,
		slider_autoplay: js_porto_vars.slider_autoplay == '1' ? true : false,
		slider_autoheight: js_porto_vars.slider_autoheight == '1' ? true : false,
		slider_speed: js_porto_vars.slider_speed ? js_porto_vars.slider_speed : 5000,
		slider_nav: js_porto_vars.slider_nav == '1' ? true : false,
		slider_nav_hover: js_porto_vars.slider_nav_hover == '1' ? true : false,
		slider_margin: js_porto_vars.slider_margin == '1' ? 40 : 0,
		slider_dots: js_porto_vars.slider_dots == '1' ? true : false,
		slider_animatein: js_porto_vars.slider_animatein ? js_porto_vars.slider_animatein : '',
		slider_animateout: js_porto_vars.slider_animateout ? js_porto_vars.slider_animateout : '',
		product_thumbs_count: js_porto_vars.product_thumbs_count ? js_porto_vars.product_thumbs_count : 4,
		product_zoom: js_porto_vars.product_zoom == '1' ? true : false,
		product_zoom_mobile: js_porto_vars.product_zoom_mobile == '1' ? true : false,
		product_image_popup: js_porto_vars.product_image_popup == '1' ? 'fadeOut' : false,

		animation_support: !$( 'html' ).hasClass( 'no-csstransitions' ) && window.innerWidth > 767,

		owlConfig: {
			rtl: js_porto_vars.rtl == '1' ? true : false,
			loop: js_porto_vars.slider_loop == '1' ? true : false,
			autoplay: js_porto_vars.slider_autoplay == '1' ? true : false,
			autoHeight: js_porto_vars.slider_autoheight == '1' ? true : false,
			autoplayTimeout: js_porto_vars.slider_speed ? js_porto_vars.slider_speed : 7000,
			autoplayHoverPause: true,
			lazyLoad: true,
			nav: js_porto_vars.slider_nav == '1' ? true : false,
			navText: [ "", "" ],
			dots: js_porto_vars.slider_dots == '1' ? true : false,
			stagePadding: ( js_porto_vars.slider_nav_hover != '1' && js_porto_vars.slider_margin == '1' ) ? 40 : 0,
			animateOut: js_porto_vars.slider_animateout ? js_porto_vars.slider_animateout : '',
			animateIn: js_porto_vars.slider_animatein ? js_porto_vars.slider_animatein : ''
		},

		sticky_nav_height: 0,

		is_device_mobile: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test( navigator.userAgent || navigator.vendor || window.opera ) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test( ( navigator.userAgent || navigator.vendor || window.opera ).substr( 0, 4 ) ),

		getScrollbarWidth: function () {

			if ( this.scrollbarSize === undefined ) {
				this.scrollbarSize = window.innerWidth - document.documentElement.clientWidth;
			}
			return this.scrollbarSize;
		},

		isTablet: function () {
			if ( window.innerWidth < 992 )
				return true;
			return false;
		},

		isMobile: function () {
			if ( window.innerWidth <= 480 )
				return true;
			return false;
		},

		isIOS: function () {
			return [
				'iPad Simulator',
				'iPhone Simulator',
				'iPod Simulator',
				'iPad',
				'iPhone',
				'iPod'
			  ].includes(navigator.platform)
			  // iPad on iOS 13 detection
			  || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
		},

		refreshVCContent: function ( $elements ) {
			if ( $elements || $( document.body ).hasClass( 'elementor-page' ) ) {
				$( window ).trigger( 'resize' );
			}
			theme.refreshStickySidebar( true );

			if ( typeof window.vc_js == 'function' )
				window.vc_js();

			$( document.body ).trigger( 'porto_refresh_vc_content', [ $elements ] );
		},

		adminBarHeight: function () {
			if ( theme.adminBarHeightNum || 0 === theme.adminBarHeightNum ) {
				return theme.adminBarHeightNum;
			}
			var obj = document.getElementById( 'wpadminbar' ),
				fixed_top = $( '.porto-scroll-progress.fixed-top' );
			if ( fixed_top.length ) {
				theme.adminBarHeightNum = fixed_top.height();
			} else {
				theme.adminBarHeightNum = 0;
			}
			if ( obj && obj.offsetHeight && window.innerWidth > 600 ) {
				theme.adminBarHeightNum += obj.offsetHeight;
			}

			return theme.adminBarHeightNum;
		},

		refreshStickySidebar: function ( timeout ) {
			var $sticky_sidebar = $( '.sidebar [data-plugin-sticky]' );
			if ( $sticky_sidebar.get( 0 ) ) {
				if ( timeout ) {
					theme.requestTimeout( function () {
						$sticky_sidebar.trigger( 'recalc.pin' );
					}, 400 );
				} else {
					$sticky_sidebar.trigger( 'recalc.pin' );
				}
			}
		},

		scrolltoContainer: function ( $container, timeout ) {
			if ( $container.get( 0 ) ) {
				if ( window.innerWidth < 992 ) {
					$( '.sidebar-overlay' ).trigger( 'click' );
				}
				if ( !timeout ) {
					timeout = 600;
				}
				$( 'html, body' ).stop().animate( {
					scrollTop: $container.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height - 18
				}, timeout, 'easeOutQuad' );
			}
		},

		requestFrame: function ( fn ) {
			var handler = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
			if ( !handler ) {
				return setTimeout( fn, 1000 / 60 );
			}
			var rt = new Object()
			rt.val = handler( fn );
			return rt;
		},

		requestTimeout: function ( fn, delay ) {
			var handler = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
			if ( !handler ) {
				return setTimeout( fn, delay );
			}
			var start, rt = new Object();

			function loop( timestamp ) {
				if ( !start ) {
					start = timestamp;
				}
				var progress = timestamp - start;
				progress >= delay ? fn.call() : rt.val = handler( loop );
			};

			rt.val = handler( loop );
			return rt;
		},

		deleteTimeout: function ( timeoutID ) {
			if ( !timeoutID ) {
				return;
			}
			var handler = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
			if ( !handler ) {
				return clearTimeout( timeoutID );
			}
			if ( timeoutID.val ) {
				return handler( timeoutID.val );
			}
		},

		execPluginFunction: function ( functionName, context ) {
			var args = Array.prototype.slice.call( arguments, 2 );
			var namespaces = functionName.split( "." );
			var func = namespaces.pop();

			for ( var i = 0; i < namespaces.length; i++ ) {
				context = context[ namespaces[ i ] ];
			}

			return context[ func ].apply( context, args );
		},

		getOptions: function ( opts ) {
			if ( typeof ( opts ) == 'object' ) {
				return opts;
			} else if ( typeof ( opts ) == 'string' ) {
				try {
					return JSON.parse( opts.replace( /'/g, '"' ).replace( ';', '' ) );
				} catch ( e ) {
					return {};
				}
			} else {
				return {};
			}
		},
		mergeOptions: function ( obj1, obj2 ) {
			var obj3 = {};
			for ( var attrname in obj1 ) { obj3[ attrname ] = obj1[ attrname ]; }
			for ( var attrname in obj2 ) { obj3[ attrname ] = obj2[ attrname ]; }
			return obj3;
		},

		intObs: function ( selector, functionName, accY ) {
			var $el;
			if ( typeof selector == 'string' ) {
				$el = document.querySelectorAll( selector );
			} else {
				$el = selector;
			}
			var intersectionObserverOptions = {
				rootMargin: '200px'
			}
			if ( typeof accY != 'undefined' ) {
				intersectionObserverOptions.rootMargin = '0px 0px ' + Number( accY ) + 'px 0px';
			}

			var observer = new IntersectionObserver( function ( entries ) {
				for ( var i = 0; i < entries.length; i++ ) {
					var entry = entries[ i ];
					if ( entry.intersectionRatio > 0 ) {
						var $this = $( entry.target ),
							opts;

						if ( typeof functionName == 'string' ) {
							var pluginOptions = theme.getOptions( $this.data( 'plugin-options' ) );
							if ( pluginOptions )
								opts = pluginOptions;

							theme.execPluginFunction( functionName, $this, opts );
						} else {
							var callback = functionName;
							callback.call( $this );
						}

						// Unobserve
						observer.unobserve( entry.target );
					}
				}
			}, intersectionObserverOptions );

			Array.prototype.forEach.call( $el, function ( obj ) {
				observer.observe( obj );
			} );
		},

		dynIntObsInit: function ( selector, functionName, pluginDefaults ) {
			var $el;
			if ( typeof selector == 'string' ) {
				$el = document.querySelectorAll( selector );
			} else {
				$el = selector;
			}

			Array.prototype.forEach.call( $el, function ( obj ) {
				var $this = $( obj ),
					opts;
				if ( $this.data( 'observer-init' ) ) {
					return;
				}

				var pluginOptions = theme.getOptions( $this.data( 'plugin-options' ) );
				if ( pluginOptions )
					opts = pluginOptions;

				var mergedPluginDefaults = theme.mergeOptions( pluginDefaults, opts )

				var intersectionObserverOptions = {
					rootMargin: '0px 0px 200px 0px',
					thresholds: 0
				}
				if ( mergedPluginDefaults.accY ) {
					intersectionObserverOptions.rootMargin = '0px 0px ' + Number( mergedPluginDefaults.accY ) + 'px 0px';
				}

				var observer = new IntersectionObserver( function ( entries ) {
					for ( var i = 0; i < entries.length; i++ ) {
						var entry = entries[ i ];
						if ( entry.intersectionRatio > 0 ) {
							theme.execPluginFunction( functionName, $this, mergedPluginDefaults );

							// Unobserve
							observer.unobserve( entry.target );
						}
					}
				}, intersectionObserverOptions );

				observer.observe( obj );
				$this.data( 'observer-init', true );
			} );
		}

	} );

	if ( theme.isIOS() ) {
		document.body.classList.add( 'ios' );
	}

} ).apply( this, [ window.theme, jQuery ] );

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
!function () { "use strict"; if ( "object" == typeof window ) if ( "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty( window.IntersectionObserverEntry.prototype, "isIntersecting", { get: function () { return this.intersectionRatio > 0 } } ); else { var t = function ( t ) { for ( var e = window.document, o = i( e ); o; )o = i( e = o.ownerDocument ); return e }(), e = [], o = null, n = null; s.prototype.THROTTLE_TIMEOUT = 100, s.prototype.POLL_INTERVAL = null, s.prototype.USE_MUTATION_OBSERVER = !0, s._setupCrossOriginUpdater = function () { return o || ( o = function ( t, o ) { n = t && o ? l( t, o ) : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }, e.forEach( function ( t ) { t._checkForIntersections() } ) } ), o }, s._resetCrossOriginUpdater = function () { o = null, n = null }, s.prototype.observe = function ( t ) { if ( !this._observationTargets.some( function ( e ) { return e.element == t } ) ) { if ( !t || 1 != t.nodeType ) throw new Error( "target must be an Element" ); this._registerInstance(), this._observationTargets.push( { element: t, entry: null } ), this._monitorIntersections( t.ownerDocument ), this._checkForIntersections() } }, s.prototype.unobserve = function ( t ) { this._observationTargets = this._observationTargets.filter( function ( e ) { return e.element != t } ), this._unmonitorIntersections( t.ownerDocument ), 0 == this._observationTargets.length && this._unregisterInstance() }, s.prototype.disconnect = function () { this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance() }, s.prototype.takeRecords = function () { var t = this._queuedEntries.slice(); return this._queuedEntries = [], t }, s.prototype._initThresholds = function ( t ) { var e = t || [ 0 ]; return Array.isArray( e ) || ( e = [ e ] ), e.sort().filter( function ( t, e, o ) { if ( "number" != typeof t || isNaN( t ) || t < 0 || t > 1 ) throw new Error( "threshold must be a number between 0 and 1 inclusively" ); return t !== o[ e - 1 ] } ) }, s.prototype._parseRootMargin = function ( t ) { var e = ( t || "0px" ).split( /\s+/ ).map( function ( t ) { var e = /^(-?\d*\.?\d+)(px|%)$/.exec( t ); if ( !e ) throw new Error( "rootMargin must be specified in pixels or percent" ); return { value: parseFloat( e[ 1 ] ), unit: e[ 2 ] } } ); return e[ 1 ] = e[ 1 ] || e[ 0 ], e[ 2 ] = e[ 2 ] || e[ 0 ], e[ 3 ] = e[ 3 ] || e[ 1 ], e }, s.prototype._monitorIntersections = function ( e ) { var o = e.defaultView; if ( o && -1 == this._monitoringDocuments.indexOf( e ) ) { var n = this._checkForIntersections, r = null, s = null; this.POLL_INTERVAL ? r = o.setInterval( n, this.POLL_INTERVAL ) : ( h( o, "resize", n, !0 ), h( e, "scroll", n, !0 ), this.USE_MUTATION_OBSERVER && "MutationObserver" in o && ( s = new o.MutationObserver( n ) ).observe( e, { attributes: !0, childList: !0, characterData: !0, subtree: !0 } ) ), this._monitoringDocuments.push( e ), this._monitoringUnsubscribes.push( function () { var t = e.defaultView; t && ( r && t.clearInterval( r ), c( t, "resize", n, !0 ) ), c( e, "scroll", n, !0 ), s && s.disconnect() } ); var u = this.root && ( this.root.ownerDocument || this.root ) || t; if ( e != u ) { var a = i( e ); a && this._monitorIntersections( a.ownerDocument ) } } }, s.prototype._unmonitorIntersections = function ( e ) { var o = this._monitoringDocuments.indexOf( e ); if ( -1 != o ) { var n = this.root && ( this.root.ownerDocument || this.root ) || t; if ( !this._observationTargets.some( function ( t ) { var o = t.element.ownerDocument; if ( o == e ) return !0; for ( ; o && o != n; ) { var r = i( o ); if ( ( o = r && r.ownerDocument ) == e ) return !0 } return !1 } ) ) { var r = this._monitoringUnsubscribes[ o ]; if ( this._monitoringDocuments.splice( o, 1 ), this._monitoringUnsubscribes.splice( o, 1 ), r(), e != n ) { var s = i( e ); s && this._unmonitorIntersections( s.ownerDocument ) } } } }, s.prototype._unmonitorAllIntersections = function () { var t = this._monitoringUnsubscribes.slice( 0 ); this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0; for ( var e = 0; e < t.length; e++ )t[ e ]() }, s.prototype._checkForIntersections = function () { if ( this.root || !o || n ) { var t = this._rootIsInDom(), e = t ? this._getRootRect() : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }; this._observationTargets.forEach( function ( n ) { var i = n.element, s = u( i ), h = this._rootContainsTarget( i ), c = n.entry, a = t && h && this._computeTargetAndRootIntersection( i, s, e ), l = null; this._rootContainsTarget( i ) ? o && !this.root || ( l = e ) : l = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }; var f = n.entry = new r( { time: window.performance && performance.now && performance.now(), target: i, boundingClientRect: s, rootBounds: l, intersectionRect: a } ); c ? t && h ? this._hasCrossedThreshold( c, f ) && this._queuedEntries.push( f ) : c && c.isIntersecting && this._queuedEntries.push( f ) : this._queuedEntries.push( f ) }, this ), this._queuedEntries.length && this._callback( this.takeRecords(), this ) } }, s.prototype._computeTargetAndRootIntersection = function ( e, i, r ) { if ( "none" != window.getComputedStyle( e ).display ) { for ( var s, h, c, a, f, d, g, m, v = i, _ = p( e ), b = !1; !b && _; ) { var w = null, y = 1 == _.nodeType ? window.getComputedStyle( _ ) : {}; if ( "none" == y.display ) return null; if ( _ == this.root || 9 == _.nodeType ) if ( b = !0, _ == this.root || _ == t ) o && !this.root ? !n || 0 == n.width && 0 == n.height ? ( _ = null, w = null, v = null ) : w = n : w = r; else { var I = p( _ ), E = I && u( I ), T = I && this._computeTargetAndRootIntersection( I, E, r ); E && T ? ( _ = I, w = l( E, T ) ) : ( _ = null, v = null ) } else { var R = _.ownerDocument; _ != R.body && _ != R.documentElement && "visible" != y.overflow && ( w = u( _ ) ) } if ( w && ( s = w, h = v, c = void 0, a = void 0, f = void 0, d = void 0, g = void 0, m = void 0, c = Math.max( s.top, h.top ), a = Math.min( s.bottom, h.bottom ), f = Math.max( s.left, h.left ), d = Math.min( s.right, h.right ), m = a - c, v = ( g = d - f ) >= 0 && m >= 0 && { top: c, bottom: a, left: f, right: d, width: g, height: m } || null ), !v ) break; _ = _ && p( _ ) } return v } }, s.prototype._getRootRect = function () { var e; if ( this.root && !d( this.root ) ) e = u( this.root ); else { var o = d( this.root ) ? this.root : t, n = o.documentElement, i = o.body; e = { top: 0, left: 0, right: n.clientWidth || i.clientWidth, width: n.clientWidth || i.clientWidth, bottom: n.clientHeight || i.clientHeight, height: n.clientHeight || i.clientHeight } } return this._expandRectByRootMargin( e ) }, s.prototype._expandRectByRootMargin = function ( t ) { var e = this._rootMarginValues.map( function ( e, o ) { return "px" == e.unit ? e.value : e.value * ( o % 2 ? t.width : t.height ) / 100 } ), o = { top: t.top - e[ 0 ], right: t.right + e[ 1 ], bottom: t.bottom + e[ 2 ], left: t.left - e[ 3 ] }; return o.width = o.right - o.left, o.height = o.bottom - o.top, o }, s.prototype._hasCrossedThreshold = function ( t, e ) { var o = t && t.isIntersecting ? t.intersectionRatio || 0 : -1, n = e.isIntersecting ? e.intersectionRatio || 0 : -1; if ( o !== n ) for ( var i = 0; i < this.thresholds.length; i++ ) { var r = this.thresholds[ i ]; if ( r == o || r == n || r < o != r < n ) return !0 } }, s.prototype._rootIsInDom = function () { return !this.root || f( t, this.root ) }, s.prototype._rootContainsTarget = function ( e ) { var o = this.root && ( this.root.ownerDocument || this.root ) || t; return f( o, e ) && ( !this.root || o == e.ownerDocument ) }, s.prototype._registerInstance = function () { e.indexOf( this ) < 0 && e.push( this ) }, s.prototype._unregisterInstance = function () { var t = e.indexOf( this ); -1 != t && e.splice( t, 1 ) }, window.IntersectionObserver = s, window.IntersectionObserverEntry = r } function i( t ) { try { return t.defaultView && t.defaultView.frameElement || null } catch ( t ) { return null } } function r( t ) { this.time = t.time, this.target = t.target, this.rootBounds = a( t.rootBounds ), this.boundingClientRect = a( t.boundingClientRect ), this.intersectionRect = a( t.intersectionRect || { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 } ), this.isIntersecting = !!t.intersectionRect; var e = this.boundingClientRect, o = e.width * e.height, n = this.intersectionRect, i = n.width * n.height; this.intersectionRatio = o ? Number( ( i / o ).toFixed( 4 ) ) : this.isIntersecting ? 1 : 0 } function s( t, e ) { var o, n, i, r = e || {}; if ( "function" != typeof t ) throw new Error( "callback must be a function" ); if ( r.root && 1 != r.root.nodeType && 9 != r.root.nodeType ) throw new Error( "root must be a Document or Element" ); this._checkForIntersections = ( o = this._checkForIntersections.bind( this ), n = this.THROTTLE_TIMEOUT, i = null, function () { i || ( i = setTimeout( function () { o(), i = null }, n ) ) } ), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin( r.rootMargin ), this.thresholds = this._initThresholds( r.threshold ), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map( function ( t ) { return t.value + t.unit } ).join( " " ), this._monitoringDocuments = [], this._monitoringUnsubscribes = [] } function h( t, e, o, n ) { "function" == typeof t.addEventListener ? t.addEventListener( e, o, n || !1 ) : "function" == typeof t.attachEvent && t.attachEvent( "on" + e, o ) } function c( t, e, o, n ) { "function" == typeof t.removeEventListener ? t.removeEventListener( e, o, n || !1 ) : "function" == typeof t.detatchEvent && t.detatchEvent( "on" + e, o ) } function u( t ) { var e; try { e = t.getBoundingClientRect() } catch ( t ) { } return e ? ( e.width && e.height || ( e = { top: e.top, right: e.right, bottom: e.bottom, left: e.left, width: e.right - e.left, height: e.bottom - e.top } ), e ) : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 } } function a( t ) { return !t || "x" in t ? t : { top: t.top, y: t.top, bottom: t.bottom, left: t.left, x: t.left, right: t.right, width: t.width, height: t.height } } function l( t, e ) { var o = e.top - t.top, n = e.left - t.left; return { top: o, left: n, height: e.height, width: e.width, bottom: o + e.height, right: n + e.width } } function f( t, e ) { for ( var o = e; o; ) { if ( o == t ) return !0; o = p( o ) } return !1 } function p( e ) { var o = e.parentNode; return 9 == e.nodeType && e != t ? i( e ) : ( o && o.assignedSlot && ( o = o.assignedSlot.parentNode ), o && 11 == o.nodeType && o.host ? o.host : o ) } function d( t ) { return t && 9 === t.nodeType } }();

/* browser select */
( function ( $ ) {
	'use strict';
	$.extend( {

		browserSelector: function () {

			// Touch
			var hasTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

			var u = navigator.userAgent,
				ua = u.toLowerCase(),
				is = function ( t ) {
					return ua.indexOf( t ) > -1;
				},
				g = 'gecko',
				w = 'webkit',
				s = 'safari',
				o = 'opera',
				h = document.documentElement,
				b = [ ( !( /opera|webtv/i.test( ua ) ) && /msie\s(\d)/.test( ua ) ) ? ( 'ie ie' + parseFloat( navigator.appVersion.split( "MSIE" )[ 1 ] ) ) : is( 'firefox/2' ) ? g + ' ff2' : is( 'firefox/3.5' ) ? g + ' ff3 ff3_5' : is( 'firefox/3' ) ? g + ' ff3' : is( 'gecko/' ) ? g : is( 'opera' ) ? o + ( /version\/(\d+)/.test( ua ) ? ' ' + o + RegExp.jQuery1 : ( /opera(\s|\/)(\d+)/.test( ua ) ? ' ' + o + RegExp.jQuery2 : '' ) ) : is( 'konqueror' ) ? 'konqueror' : is( 'chrome' ) ? w + ' chrome' : is( 'iron' ) ? w + ' iron' : is( 'applewebkit/' ) ? w + ' ' + s + ( /version\/(\d+)/.test( ua ) ? ' ' + s + RegExp.jQuery1 : '' ) : is( 'mozilla/' ) ? g : '', is( 'j2me' ) ? 'mobile' : is( 'iphone' ) ? 'iphone' : is( 'ipod' ) ? 'ipod' : is( 'mac' ) ? 'mac' : is( 'darwin' ) ? 'mac' : is( 'webtv' ) ? 'webtv' : is( 'win' ) ? 'win' : is( 'freebsd' ) ? 'freebsd' : ( is( 'x11' ) || is( 'linux' ) ) ? 'linux' : '', 'js' ];

			var c = b.join( ' ' );

			if ( theme.is_device_mobile ) {
				c += ' mobile';
			}

			if ( hasTouch ) {
				c += ' touch';
			}

			h.className += ' ' + c;

			// IE11 Detect
			var isIE11 = !( window.ActiveXObject ) && "ActiveXObject" in window;

			if ( isIE11 ) {
				$( 'html' ).removeClass( 'gecko' ).addClass( 'ie ie11' );
				return;
			}
		}

	} );

	$.browserSelector();

} )( jQuery );

// Accordion
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};
	var instanceName = '__accordion';
	var Accordion = function ( $el, opts ) {
		return this.initialize( $el, opts );
	};
	Accordion.defaults = {
	};
	Accordion.prototype = {
		initialize: function ( $el, opts ) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions( opts )
				.build();

			return this;
		},

		setData: function () {
			this.$el.data( instanceName, this );
			return this;
		},

		setOptions: function ( opts ) {
			this.options = $.extend( true, {}, Accordion.defaults, opts, {
				wrapper: this.$el
			} );

			return this;
		},

		build: function () {
			if ( !$.fn.collapse ) {
				return this;
			}

			var $el = this.options.wrapper,
				$collapse = $el.find( '.collapse' ),
				collapsible = $el.data( 'collapsible' ),
				active_num = $el.data( 'active-tab' );

			if ( $collapse.length > 0 ) {
				if ( $el.data( 'use-accordion' ) && 'yes' == $el.data( 'use-accordion' ) ) {
					$el.find( '.collapse' ).attr( 'data-parent', '#' + $el.attr( 'id' ) );
				}
				if ( collapsible == 'yes' ) {
					$collapse.collapse( { toggle: false, parent: '#' + $el.attr( 'id' ) } );
				} else if ( !isNaN( active_num ) && active_num == parseInt( active_num ) && $el.find( '.collapse' ).length > active_num ) {
					$el.find( '.collapse' ).collapse( { toggle: false, parent: '#' + $el.attr( 'id' ) } );
					$el.find( '.collapse' ).eq( active_num - 1 ).collapse( 'toggle' );
				} else {
					$el.find( '.collapse' ).collapse( { parent: '#' + $el.attr( 'id' ) } );
				}
			}

			return this;
		}
	};

	// expose to scope
	$.extend( theme, {
		Accordion: Accordion
	} );

	// jquery plugin
	$.fn.themeAccordion = function ( opts ) {
		return this.map( function () {
			var $this = $( this );

			if ( $this.data( instanceName ) ) {
				return $this.data( instanceName );
			} else {
				return new theme.Accordion( $this, opts );
			}

		} );
	};

} ).apply( this, [ window.theme, jQuery ] );


// Accordion Menu
( function ( theme, $ ) {

	'use strict';

	theme = theme || {};

	var instanceName = '__accordionMenu';

	var AccordionMenu = function ( $el, opts ) {
		return this.initialize( $el, opts );
	};

	AccordionMenu.defaults = {

	};

	AccordionMenu.prototype = {
		initialize: function ( $el, opts ) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions( opts )
				.build();

			return this;
		},

		setData: function () {
			this.$el.data( instanceName, this );

			return this;
		},

		setOptions: function ( opts ) {
			this.options = $.extend( true, {}, AccordionMenu.defaults, opts, {
				wrapper: this.$el
			} );

			return this;
		},

		build: function () {
			var self = this,
				$el = this.options.wrapper;

			$el.find( 'li.menu-item.active' ).each( function () {
				var $this = $( this );

				if ( $this.find( '> .arrow' ).get( 0 ) )
					$this.find( '> .arrow' ).trigger( 'click' );
			} );

			$el.on( 'click', '.arrow', function ( e ) {
				e.preventDefault();
				e.stopPropagation();
				var $this = $( this ),
					$parent = $this.closest( 'li' );
				if ( typeof self.options.open_one != 'undefined' ) {
					$parent.siblings( '.open' ).children( '.arrow' ).next().hide();
					$parent.siblings( '.open' ).removeClass( 'open' );
					$this.next().stop().toggle();
				} else {
					$this.next().stop().slideToggle();
				}
				if ( $parent.hasClass( 'open' ) ) {
					$parent.removeClass( 'open' );
				} else {
					$parent.addClass( 'open' );
				}
				return false;
			} );

			return this;
		}
	};

	// expose to scope
	$.extend( theme, {
		AccordionMenu: AccordionMenu
	} );

	// jquery plugin
	$.fn.themeAccordionMenu = function ( opts ) {
		return this.map( function () {
			var $this = $( this );

			if ( $this.data( instanceName ) ) {
				return $this.data( instanceName );
			} else {
				return new theme.AccordionMenu( $this, opts );
			}

		} );
	};

} ).apply( this, [ window.theme, jQuery ] );

// Lazyload Menu
( function ( theme, $ ) {

	'use strict';

	theme = theme || {};

	// expose to scope
	$.extend( theme, {
		lazyload_menu: function ( $el, menu_type ) {
			if ( !js_porto_vars.lazyload_menu && 'mobile_menu' != menu_type ) {
				return;
			}
			if ( menu_type ) {
				var reload_menu = false,
					menu_loaded_fn = function ( data ) {
						if ( !data ) {
							return;
						}
						var $data = $( data );
						if ( 'mobile_menu' != menu_type ) {
							$el.each( function ( i ) {
								var $menu = $( this ),
									$main_menu = $data.children( '.mega-menu, .sidebar-menu' ).eq( i );
								if ( !$main_menu.length ) {
									$main_menu = $data.find( '.mega-menu, .sidebar-menu' ).eq( i );
								}
								$menu.children( 'li.menu-item-has-children' ).each( function ( index ) {
									var popup = $main_menu.children( 'li.menu-item-has-children' ).eq( index ).children( '.popup, .sub-menu' );
									if ( popup.hasClass( 'popup' ) ) {
										popup = popup.children( '.inner' );
									}
									if ( popup.length ) {
										if ( $( this ).children( '.popup' ).length ) {
											$( this ).children( '.popup' ).children( '.inner' ).replaceWith( popup );
										} else if ( $menu.hasClass( 'overlay' ) ) {
											$( this ).children( '.sub-menu' ).remove();
											$( this ).append( popup );
										} else {
											$( this ).children( '.sub-menu' ).replaceWith( popup );
										}
									}
								} );
								if ( $menu.hasClass( 'mega-menu' ) ) {
									theme.MegaMenu.build( $menu );
								} else {
									if ( $menu.hasClass( 'side-menu-accordion' ) ) {
										$menu.themeAccordionMenu( { 'open_one': true } );
									} else {
										theme.SidebarMenu.build( $menu );
									}
								}
								$menu.addClass( 'sub-ready' ).trigger( 'sub-loaded' );
							} );
						}
						if ( $data.find( '#nav-panel, #side-nav-panel' ).length || 'mobile_menu' == menu_type ) {
							var lazyload_again = false;
							if ( $( '#nav-panel' ).length ) {
								var $menu_content = $data.find( '.mobile-nav-wrap > *' );
								if ( $menu_content.length ) {
									$( '#nav-panel .mobile-nav-wrap > *' ).replaceWith( $menu_content );
									$( '#nav-panel .mobile-nav-wrap' ).removeClass( 'skeleton-body porto-ajax-loading' );
									$( '#nav-panel .accordion-menu' ).themeAccordionMenu();
								} else {
									lazyload_again = true;
								}
							} else if ( $( '#side-nav-panel' ).length ) {
								var $menu_content = $data.find( '.side-nav-panel-close' );
								if ( $menu_content.length ) {
									$( '#side-nav-panel' ).replaceWith( $menu_content.parent() );
									$( '#side-nav-panel .accordion-menu' ).themeAccordionMenu();
								} else {
									lazyload_again = true;
								}
							}
							if ( lazyload_again && !reload_menu ) {
								reload_menu = true;
								lazyload_again = false;
								$.post(
									window.location.href, {
									action: 'porto_lazyload_menu',
									porto_lazyload_menu_2: 1,
									menu_type: menu_type,
									nonce: js_porto_vars.porto_nonce
								},
									menu_loaded_fn
								);
							}
						}
					};
				$.post(
					window.location.href, {
					action: 'porto_lazyload_menu',
					menu_type: menu_type,
					nonce: js_porto_vars.porto_nonce
				},
					menu_loaded_fn
				);
			}
		}
	} );

} ).apply( this, [ window.theme, jQuery ] );


// Chart Circular
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};

	var instanceName = '__chartCircular';

	var ChartCircular = function ( $el, opts ) {
		return this.initialize( $el, opts );
	};

	ChartCircular.defaults = {
		accX: 0,
		accY: -150,
		delay: 1,
		barColor: '#0088CC',
		trackColor: '#f2f2f2',
		scaleColor: false,
		scaleLength: 5,
		lineCap: 'round',
		lineWidth: 13,
		size: 175,
		rotate: 0,
		animate: ( {
			duration: 2500,
			enabled: true
		} )
	};

	ChartCircular.prototype = {
		initialize: function ( $el, opts ) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions( opts )
				.build();

			return this;
		},

		setData: function () {
			this.$el.data( instanceName, this );

			return this;
		},

		setOptions: function ( opts ) {
			this.options = $.extend( true, {}, ChartCircular.defaults, opts, {
				wrapper: this.$el
			} );

			return this;
		},

		build: function () {
			if ( !$.fn.easyPieChart ) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper,
				value = this.options.percentValue ? parseInt( this.options.percentValue ) : parseInt( $el.attr( 'data-percent' ), 10 ),
				percentEl = $el.find( '.percent' );

			if ( !value ) value = 1;
			var labelValue = this.options.labelValue ? parseInt( this.options.labelValue, 10 ) : value;

			$.extend( true, self.options, {
				onStep: function ( from, to, currentValue ) {
					percentEl.html( parseInt( labelValue * currentValue / value ) );
				}
			} );

			$el.attr( 'data-percent', 0 ).easyPieChart( self.options );

			var handler;
			if ( Number( self.options.delay ) <= 1000 / 60 ) {
				handler = theme.requestFrame;
			} else {
				handler = theme.requestTimeout;
			}

			handler( function () {
				if ( $el.data( 'easyPieChart' ) ) {
					$el.data( 'easyPieChart' ).update( value );
					$el.attr( 'data-percent', value );
				}
			}, self.options.delay );

			return this;
		}
	};

	// expose to scope
	$.extend( theme, {
		ChartCircular: ChartCircular
	} );

	// jquery plugin
	$.fn.themeChartCircular = function ( opts ) {
		return this.map( function () {
			var $this = $( this );

			if ( $this.data( instanceName ) ) {
				return $this.data( instanceName );
			} else {
				return new theme.ChartCircular( $this, opts );
			}

		} );
	};

} ).apply( this, [ window.theme, jQuery ] );


// Fit Video
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};

	var instanceName = '__fitVideo';

	var FitVideo = function ( $el, opts ) {
		return this.initialize( $el, opts );
	};

	FitVideo.defaults = {

	};

	FitVideo.prototype = {
		initialize: function ( $el, opts ) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions( opts )
				.build();

			return this;
		},

		setData: function () {
			this.$el.data( instanceName, this );

			return this;
		},

		setOptions: function ( opts ) {
			this.options = $.extend( true, {}, FitVideo.defaults, opts, {
				wrapper: this.$el
			} );

			return this;
		},

		build: function () {
			if ( !$.fn.fitVids ) {
				return this;
			}

			var $el = this.options.wrapper;

			$el.fitVids();
			$( window ).on( 'resize', function () {
				$el.fitVids();
			} );

			return this;
		}
	};

	// expose to scope
	$.extend( theme, {
		FitVideo: FitVideo
	} );

	// jquery plugin
	$.fn.themeFitVideo = function ( opts ) {
		return this.map( function () {
			var $this = $( this );

			if ( $this.data( instanceName ) ) {
				return $this.data( instanceName );
			} else {
				return new theme.FitVideo( $this, opts );
			}

		} );
	};

} ).apply( this, [ window.theme, jQuery ] );

/* Porto Video Background */
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};

	var instanceName = '__videobackground';

	var PluginVideoBackground = function ( $el, opts ) {
		return this.initialize( $el, opts );
	};

	PluginVideoBackground.defaults = {
		overlay: true,
		volume: 1,
		playbackRate: 1,
		muted: true,
		loop: true,
		autoplay: true,
		position: '50% 50%',
		posterType: 'detect'
	};

	PluginVideoBackground.prototype = {
		initialize: function ( $el, opts ) {
			this.$el = $el;

			this
				.setData()
				.setOptions( opts )
				.build();

			return this;
		},

		setData: function () {
			this.$el.data( instanceName, this );

			return this;
		},

		setOptions: function ( opts ) {
			this.options = $.extend( true, {}, PluginVideoBackground.defaults, opts, {
				path: this.$el.data( 'video-path' ),
				wrapper: this.$el
			} );

			return this;
		},

		build: function () {

			if ( !$.fn.vide || !this.options.path ) {
				return this;
			}

			if ( this.options.overlay ) {
				this.options.wrapper.prepend(
					$( '<div />' ).addClass( 'video-overlay' )
				);
			}

			this.options.wrapper.vide( this.options.path, this.options );

			return this;
		}
	};

	// expose to scope
	$.extend( theme, {
		PluginVideoBackground: PluginVideoBackground
	} );

	// jquery plugin
	$.fn.themePluginVideoBackground = function ( opts ) {
		return this.map( function () {
			var $this = $( this );

			if ( $this.data( instanceName ) ) {
				return $this.data( instanceName );
			} else {
				return new PluginVideoBackground( $this, opts );
			}

		} );
	};

} ).apply( this, [ window.theme, jQuery ] );

// Flickr Zoom
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};

	var instanceName = '__flickrZoom';

	var FlickrZoom = function ( $el, opts ) {
		return this.initialize( $el, opts );
	};

	FlickrZoom.defaults = {

	};

	FlickrZoom.prototype = {
		initialize: function ( $el, opts ) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions( opts )
				.build();

			return this;
		},

		setData: function () {
			this.$el.data( instanceName, this );

			return this;
		},

		setOptions: function ( opts ) {
			this.options = $.extend( true, {}, FlickrZoom.defaults, opts, {
				wrapper: this.$el
			} );

			return this;
		},

		build: function () {
			var $el = this.options.wrapper,
				links = [],
				i = 0,
				$flickr_links = $el.find( '.flickr_badge_image > a' );

			$flickr_links.each( function () {
				var slide = {},
					$image = $( this ).find( '> img' );

				slide.src = $image.attr( 'src' ).replace( '_s.', '_b.' );
				slide.title = $image.attr( 'title' );
				links[ i ] = slide;
				i++;
			} );

			$flickr_links.on( 'click', function ( e ) {
				e.preventDefault();
				if ( $.fn.magnificPopup ) {
					$.magnificPopup.close();
					$.magnificPopup.open( $.extend( true, {}, theme.mfpConfig, {
						items: links,
						gallery: {
							enabled: true
						},
						type: 'image'
					} ), $flickr_links.index( $( this ) ) );
				}
			} );

			return this;
		}
	};

	// expose to scope
	$.extend( theme, {
		FlickrZoom: FlickrZoom
	} );

	// jquery plugin
	$.fn.themeFlickrZoom = function ( opts ) {
		return this.map( function () {
			var $this = $( this );

			if ( $this.data( instanceName ) ) {
				return $this.data( instanceName );
			} else {
				return new theme.FlickrZoom( $this, opts );
			}

		} );
	}

} ).apply( this, [ window.theme, jQuery ] );

// Lazy Load
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};

	var instanceName = '__lazyload';

	var PluginLazyLoad = function ( $el, opts ) {
		return this.initialize( $el, opts );
	};

	PluginLazyLoad.defaults = {
		effect: 'show',
		appearEffect: '',
		appear: function ( elements_left, settings ) {

		},
		load: function ( elements_left, settings ) {
			$( this ).addClass( 'lazy-load-loaded' );
		}
	};

	PluginLazyLoad.prototype = {
		initialize: function ( $el, opts ) {
			if ( !$el.length ) {
				return this;
			}

			if ( !$.fn.lazyload ) {
				return this;
			}

			var options = $.extend( true, {}, PluginLazyLoad.defaults, opts, {} );
			return lazyload( $el, options );
		}
	};

	// expose to scope
	$.extend( theme, {
		PluginLazyLoad: PluginLazyLoad
	} );

	// jquery plugin
	$.fn.themePluginLazyLoad = function ( opts ) {
		var $this = $( this );
		if ( $this.data( instanceName ) ) {
			return this;
		} else {
			var ins = new PluginLazyLoad( $.makeArray( this ), opts );
			$this.data( instanceName, ins );
		}
		return this;
	}

} ).apply( this, [ window.theme, jQuery ] );


// Loading Overlay
( function ( theme, $ ) {

	'use strict';

	theme = theme || {};

	var loadingOverlayTemplate = [
		'<div class="loading-overlay">',
		'<div class="loader"></div>',
		'</div>'
	].join( '' );

	var LoadingOverlay = function ( $wrapper, options ) {
		return this.initialize( $wrapper, options );
	};

	LoadingOverlay.prototype = {

		options: {
			css: {}
		},

		initialize: function ( $wrapper, options ) {
			this.$wrapper = $wrapper;

			this
				.setVars()
				.setOptions( options )
				.build()
				.events();

			this.$wrapper.data( 'loadingOverlay', this );
		},

		setVars: function () {
			this.$overlay = this.$wrapper.find( '.loading-overlay' );

			return this;
		},

		setOptions: function ( options ) {
			if ( !this.$overlay.get( 0 ) ) {
				this.matchProperties();
			}
			this.options = $.extend( true, {}, this.options, options );
			this.loaderClass = this.getLoaderClass( this.options.css.backgroundColor );

			return this;
		},

		build: function () {
			if ( !this.$overlay.closest( document.documentElement ).get( 0 ) ) {
				if ( !this.$cachedOverlay ) {
					this.$overlay = $( loadingOverlayTemplate ).clone();

					if ( this.options.css ) {
						this.$overlay.css( this.options.css );
						this.$overlay.find( '.loader' ).addClass( this.loaderClass );
					}
				} else {
					this.$overlay = this.$cachedOverlay.clone();
				}

				this.$wrapper.append( this.$overlay );
			}

			if ( !this.$cachedOverlay ) {
				this.$cachedOverlay = this.$overlay.clone();
			}

			return this;
		},

		events: function () {
			var _self = this;

			if ( this.options.startShowing ) {
				_self.show();
			}

			if ( this.$wrapper.is( 'body' ) || this.options.hideOnWindowLoad ) {
				$( window ).on( 'load error', function () {
					_self.hide();
				} );
			}

			if ( this.options.listenOn ) {
				$( this.options.listenOn )
					.on( 'loading-overlay:show beforeSend.ic', function ( e ) {
						e.stopPropagation();
						_self.show();
					} )
					.on( 'loading-overlay:hide complete.ic', function ( e ) {
						e.stopPropagation();
						_self.hide();
					} );
			}

			this.$wrapper
				.on( 'loading-overlay:show beforeSend.ic', function ( e ) {
					e.stopPropagation();
					_self.show();
				} )
				.on( 'loading-overlay:hide complete.ic', function ( e ) {
					e.stopPropagation();
					_self.hide();
				} );

			return this;
		},

		show: function () {
			this.build();

			this.position = this.$wrapper.css( 'position' ).toLowerCase();
			if ( this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed' ) {
				this.$wrapper.css( {
					position: 'relative'
				} );
			}
			this.$wrapper.addClass( 'loading-overlay-showing' );
		},

		hide: function () {
			var _self = this;

			this.$wrapper.removeClass( 'loading-overlay-showing' );
			setTimeout( function () {
				if ( this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed' ) {
					_self.$wrapper.css( { position: '' } );
				}
			}, 500 );
		},

		matchProperties: function () {
			var i,
				l,
				properties;

			properties = [
				'backgroundColor',
				'borderRadius'
			];

			l = properties.length;

			for ( i = 0; i < l; i++ ) {
				var obj = {};
				obj[ properties[ i ] ] = this.$wrapper.css( properties[ i ] );

				$.extend( this.options.css, obj );
			}
		},

		getLoaderClass: function ( backgroundColor ) {
			if ( !backgroundColor || backgroundColor === 'transparent' || backgroundColor === 'inherit' ) {
				return 'black';
			}

			var hexColor,
				r,
				g,
				b,
				yiq;

			var colorToHex = function ( color ) {
				var hex,
					rgb;

				if ( color.indexOf( '#' ) > - 1 ) {
					hex = color.replace( '#', '' );
				} else {
					rgb = color.match( /\d+/g );
					hex = ( '0' + parseInt( rgb[ 0 ], 10 ).toString( 16 ) ).slice( -2 ) + ( '0' + parseInt( rgb[ 1 ], 10 ).toString( 16 ) ).slice( -2 ) + ( '0' + parseInt( rgb[ 2 ], 10 ).toString( 16 ) ).slice( -2 );
				}

				if ( hex.length === 3 ) {
					hex = hex + hex;
				}

				return hex;
			};

			hexColor = colorToHex( backgroundColor );

			r = parseInt( hexColor.substr( 0, 2 ), 16 );
			g = parseInt( hexColor.substr( 2, 2 ), 16 );
			b = parseInt( hexColor.substr( 4, 2 ), 16 );
			yiq = ( ( r * 299 ) + ( g * 587 ) + ( b * 114 ) ) / 1000;

			return ( yiq >= 128 ) ? 'black' : 'white';
		}

	};

	// expose to scope
	$.extend( theme, {
		LoadingOverlay: LoadingOverlay
	} );

	// expose as a jquery plugin
	$.fn.loadingOverlay = function ( opts ) {
		return this.each( function () {
			var $this = $( this );

			var loadingOverlay = $this.data( 'loadingOverlay' );
			if ( loadingOverlay ) {
				return loadingOverlay;
			} else {
				var options = opts || $this.data( 'loading-overlay-options' ) || {};
				return new LoadingOverlay( $this, options );
			}
		} );
	}

	// auto init
	//$( function () {
	$( 'body.loading-overlay-showing, [data-loading-overlay]' ).loadingOverlay();
	//} );

} ).apply( this, [ window.theme, jQuery ] );


// Masonry
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};

	var instanceName = '__masonry';

	var Masonry = function ( $el, opts ) {
		return this.initialize( $el, opts );
	};

	Masonry.defaults = {
		itemSelector: 'li',
		isOriginLeft: !theme.rtl
	};

	Masonry.prototype = {
		initialize: function ( $el, opts ) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions( opts )
				.build();

			return this;
		},

		setData: function () {
			this.$el.data( instanceName, this );

			return this;
		},

		setOptions: function ( opts ) {
			this.options = $.extend( true, {}, Masonry.defaults, opts, {
				wrapper: this.$el
			} );

			return this;
		},

		build: function () {
			if ( !$.fn.isotope ) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper,
				trigger_timer = null;
			$el.isotope( this.options );
			$el.isotope( 'on', 'layoutComplete', function () {
				if ( typeof this.options.callback == 'function' ) {
					this.options.callback.call();
				}

				if ( $el.find( '.porto-lazyload:not(.lazy-load-loaded):visible' ).length ) {
					$( window ).trigger( 'scroll' );
				}
			} );
			$el.isotope( 'layout' );
			self.resize();
			$( window ).smartresize( function () {
				self.resize()
			} );

			return this;
		},

		resize: function () {
			var self = this,
				$el = this.options.wrapper;

			if ( self.resizeTimer ) {
				theme.deleteTimeout( self.resizeTimer );
			}

			self.resizeTimer = theme.requestTimeout( function () {
				if ( $el.data( 'isotope' ) ) {
					$el.isotope( 'layout' );
				}
				delete self.resizeTimer;
			}, 600 );
		}
	};

	// expose to scope
	$.extend( theme, {
		Masonry: Masonry
	} );

	// jquery plugin
	$.fn.themeMasonry = function ( opts ) {
		return this.map( function () {
			var $this = $( this );
			imagesLoaded( this, function () {
				if ( $this.data( instanceName ) ) {
					return $this.data( instanceName );
				} else {
					return new theme.Masonry( $this, opts );
				}
			} );

		} );
	}

} ).apply( this, [ window.theme, jQuery ] );


// Preview Image
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};

	var instanceName = '__previewImage';

	var PreviewImage = function ( $el, opts ) {
		return this.initialize( $el, opts );
	};

	PreviewImage.defaults = {

	};

	PreviewImage.prototype = {
		initialize: function ( $el, opts ) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions( opts )
				.build();

			return this;
		},

		setData: function () {
			this.$el.data( instanceName, this );

			return this;
		},

		setOptions: function ( opts ) {
			this.options = $.extend( true, {}, PreviewImage.defaults, opts, {
				wrapper: this.$el
			} );

			return this;
		},

		build: function () {
			var $el = this.options.wrapper,
				image = $el.data( 'image' );

			if ( image ) {
				$el.css( 'background-image', 'url(' + image + ')' );
			}

			return this;
		}
	};

	// expose to scope
	$.extend( theme, {
		PreviewImage: PreviewImage
	} );

	// jquery plugin
	$.fn.themePreviewImage = function ( opts ) {
		return this.map( function () {
			var $this = $( this );

			if ( $this.data( instanceName ) ) {
				return $this.data( instanceName );
			} else {
				return new theme.PreviewImage( $this, opts );
			}

		} );
	}

} ).apply( this, [ window.theme, jQuery ] );


// Toggle
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};

	var instanceName = '__toggle';

	var Toggle = function ( $el, opts ) {
		return this.initialize( $el, opts );
	};

	Toggle.defaults = {

	};

	Toggle.prototype = {
		initialize: function ( $el, opts ) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions( opts )
				.build();

			return this;
		},

		setData: function () {
			this.$el.data( instanceName, this );

			return this;
		},

		setOptions: function ( opts ) {
			this.options = $.extend( true, {}, Toggle.defaults, opts, {
				wrapper: this.$el
			} );

			return this;
		},

		build: function () {
			var $el = this.options.wrapper;

			if ( $el.hasClass( 'active' ) )
				$el.find( "> div.toggle-content" ).stop().slideDown( 350, function () {
					$( this ).attr( 'style', '' ).show();
				} );

			$el.on( 'click', "> label", function ( e ) {
				var parentSection = $( this ).parent(),
					parentWrapper = $( this ).closest( "div.toogle" ),
					parentToggles = $( this ).closest( ".porto-toggles" ),
					isAccordion = parentWrapper.hasClass( "toogle-accordion" ),
					toggleContent = parentSection.find( "> div.toggle-content" );

				if ( isAccordion && typeof ( e.originalEvent ) != "undefined" ) {
					parentWrapper.find( "section.toggle.active > label" ).trigger( "click" );
				}

				// Preview Paragraph
				if ( !parentSection.hasClass( "active" ) ) {
					if ( parentToggles.length ) {
						if ( parentToggles.data( 'view' ) == 'one-toggle' ) {
							parentToggles.find( '.toggle' ).each( function () {
								$( this ).removeClass( 'active' );
								$( this ).find( "> div.toggle-content" ).stop().slideUp( 350, function () {
									$( this ).attr( 'style', '' ).hide();
								} );
							} );
						}
					}
					toggleContent.stop().slideDown( 350, function () {
						$( this ).attr( 'style', '' ).show();
						theme.refreshVCContent( toggleContent );
					} );
					parentSection.addClass( "active" );
				} else {
					if ( !parentToggles.length || parentToggles.data( 'view' ) != 'one-toggle' ) {
						toggleContent.stop().slideUp( 350, function () {
							$( this ).attr( 'style', '' ).hide();
						} );
						parentSection.removeClass( "active" );
					}
				}
			} );

			return this;
		}
	};

	// expose to scope
	$.extend( theme, {
		Toggle: Toggle
	} );

	// jquery plugin
	$.fn.themeToggle = function ( opts ) {
		return this.map( function () {
			var $this = $( this );

			if ( $this.data( instanceName ) ) {
				return $this.data( instanceName );
			} else {
				return new theme.Toggle( $this, opts );
			}

		} );
	}

} ).apply( this, [ window.theme, jQuery ] );


// Parallax
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};

	var instanceName = '__parallax';

	var Parallax = function ( $el, opts ) {
		return this.initialize( $el, opts );
	};

	Parallax.defaults = {
		speed: 1.5,
		horizontalPosition: '50%',
		offset: 0,
	};

	Parallax.prototype = {
		initialize: function ( $el, opts ) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions( opts )
				.build();

			return this;
		},

		setData: function () {
			this.$el.data( instanceName, this );

			return this;
		},

		setOptions: function ( opts ) {
			this.options = $.extend( true, {}, Parallax.defaults, opts, {
				wrapper: this.$el
			} );

			return this;
		},

		build: function () {
			var self = this,
				$window = $( window ),
				offset,
				yPos,
				bgpos,
				background;

			// Create Parallax Element
			background = $( '<div class="parallax-background"></div>' );

			// Set Style for Parallax Element
			var bg = self.options.wrapper.data( 'image-src' ) ? 'url(' + self.options.wrapper.data( 'image-src' ) + ')' : self.options.wrapper.css( 'background-image' );
			background.css( {
				'background-image': bg,
				'background-size': 'cover',
				'background-position': '50% 0%',
				'position': 'absolute',
				'top': 0,
				'left': 0,
				'width': '100%',
				'height': self.options.speed * 100 + '%'
			} );

			// Add Parallax Element on DOM
			self.options.wrapper.prepend( background );

			// Set Overlfow Hidden and Position Relative to Parallax Wrapper
			self.options.wrapper.css( {
				'position': 'relative',
				'overflow': 'hidden'
			} );

			if ( self.options.wrapper.attr( 'data-parallax-type' ) ) { // horizontal
				self.options.parallaxType = 'horizontal';
				background.css( {
					'background-position': '0% 50%',
					'width': self.options.speed * 100 + '%',
					'height': '100%',
				} );
			}

			// Parallax Effect on Scroll & Resize
			var parallaxEffectOnScrolResize = function () {
				var skrollr_size = 100 * self.options.speed,
					skrollr_start = -( skrollr_size - 100 );
				if ( !self.options.parallaxType ) {
					background.attr( "data-bottom-top", "top: " + skrollr_start + "%;" ).attr( "data-top-bottom", "top: 0%;" );
				} else {
					skrollr_start /= 9.8;
					background.attr( "data-bottom-top", "left: " + skrollr_start + "%;" ).attr( "data-top-bottom", "left: 0%;" );
				}
			}

			if ( !theme.is_device_mobile ) {
				parallaxEffectOnScrolResize();
			} else {
				if ( self.options.enableOnMobile == true ) {
					parallaxEffectOnScrolResize();
				} else {
					self.options.wrapper.addClass( 'parallax-disabled' );
				}
			}

			return this;
		}
	};

	// expose to scope
	$.extend( theme, {
		Parallax: Parallax
	} );

	// jquery plugin
	$.fn.themeParallax = function ( opts ) {
		if ( typeof skrollr == 'undefined' ) {
			return this;
		}
		var obj = this.map( function () {
			var $this = $( this );

			if ( $this.data( instanceName ) ) {
				return $this.data( instanceName );
			} else {
				return new theme.Parallax( $this, opts );
			}

		} );
		if ( theme.portoSkrollr ) {
			theme.portoSkrollr.refresh();
		} else if ( !theme.is_device_mobile ) {
			theme.portoSkrollr = skrollr.init( { forceHeight: false, smoothScrolling: false, mobileCheck: function () { return theme.is_device_mobile } } );
		}
		return obj;
	}

} ).apply( this, [ window.theme, jQuery ] );


// Sticky
( function ( theme, $ ) {
	'use strict';

	// jQuery Pin plugin
	$.fn.themePin = function ( options ) {
		var scrollY = 0, lastScrollY = 0, elements = [], disabled = false, $window = $( window ), fixedSideTop = [], fixedSideBottom = [], prevDataTo = [];

		options = options || {};

		var recalculateLimits = function () {
			for ( var i = 0, len = elements.length; i < len; i++ ) {
				var $this = elements[ i ];
				if ( options.minWidth && window.innerWidth < options.minWidth ) {
					if ( $this.parent().hasClass( "pin-wrapper" ) ) { $this.unwrap(); }
					$this.css( { width: "", left: "", top: "", position: "" } );
					if ( options.activeClass ) { $this.removeClass( options.activeClass ); }
					$this.removeClass( 'sticky-transition' );
					$this.removeClass( 'sticky-absolute' );
					disabled = true;
					continue;
				} else {
					disabled = false;
				}

				var $container = options.containerSelector ? ( $this.closest( options.containerSelector ).length ? $this.closest( options.containerSelector ) : $( options.containerSelector ) ) : $( document.body ),
					offset = $this.offset(),
					containerOffset = $container.offset();

				if ( typeof containerOffset == 'undefined' ) {
					continue;
				}

				var parentOffset = $this.parent().offset();

				if ( !$this.parent().hasClass( "pin-wrapper" ) ) {
					$this.wrap( "<div class='pin-wrapper'>" );
					if ( $this.hasClass( 'elementor-element-populated' ) ) {
						var $el_cont = $this.closest( '.elementor-container' );
						if ( $el_cont.length ) {
							var matches = $el_cont.attr( 'class' ).match( /elementor-column-gap-([a-z]*)/g );
							if ( matches && matches.length ) {
								var gap = matches[ 0 ].replace( 'elementor-column-gap-', '' );
								$this.addClass( 'porto-gap-' + gap );
							}
						}
					}
				}

				var pad = $.extend( {
					top: 0,
					bottom: 0
				}, options.padding || {} );

				var $pin = $this.parent(),
					pt = parseInt( $pin.parent().css( 'padding-top' ) ), pb = parseInt( $pin.parent().css( 'padding-bottom' ) );

				if ( options.autoInit ) {
					if ( $( '#header' ).hasClass( 'header-side' ) ) {
						pad.top = theme.adminBarHeight();
						/*if ($('.page-top.fixed-pos').length) {
							pad.top += $('.page-top.fixed-pos').height();
						}*/
					} else {
						pad.top = theme.adminBarHeight();
						if ( $( '#header > .main-menu-wrap' ).length || !$( '#header' ).hasClass( 'sticky-menu-header' ) ) {
							pad.top += theme.StickyHeader.sticky_height;
						}
					}
					if ( typeof options.paddingOffsetTop != 'undefined' ) {
						pad.top += parseInt( options.paddingOffsetTop, 10 );
					} else {
						pad.top += 18;
					}
					if ( typeof options.paddingOffsetBottom != 'undefined' ) {
						pad.bottom = parseInt( options.paddingOffsetBottom, 10 );
					} else {
						pad.bottom = 0;
					}
				}

				var bb = $this.css( 'border-bottom' ), h = $this.outerHeight();
				$this.css( 'border-bottom', '1px solid transparent' );
				var o_h = $this.outerHeight() - h - 1;
				$this.css( 'border-bottom', bb );
				$this.css( { width: $this.outerWidth() <= $pin.width() ? $this.outerWidth() : $pin.width() } );
				$pin.css( "height", $this.outerHeight() + o_h );

				if ( ( !options.autoFit && !options.fitToBottom ) || $this.outerHeight() <= $window.height() ) {
					$this.data( "themePin", {
						pad: pad,
						from: ( options.containerSelector ? containerOffset.top : offset.top ) - pad.top + pt,
						pb: pb,
						parentTop: parentOffset.top - pt,
						offset: o_h
					} );
				} else {
					$this.data( "themePin", {
						pad: pad,
						fromFitTop: ( options.containerSelector ? containerOffset.top : offset.top ) - pad.top + pt,
						from: ( options.containerSelector ? containerOffset.top : offset.top ) + $this.outerHeight() - window.innerHeight + pt,
						pb: pb,
						parentTop: parentOffset.top - pt,
						offset: o_h
					} );
				}
			}
		};

		var onScroll = function () {
			if ( disabled ) { return; }

			scrollY = $window.scrollTop();

			var window_height = window.innerHeight || $window.height();

			for ( var i = 0, len = elements.length; i < len; i++ ) {
				var $this = $( elements[ i ] ),
					data = $this.data( "themePin" ),
					sidebarTop;

				if ( !data || typeof data.pad == 'undefined' ) { // Removed element
					continue;
				}

				var $container = options.containerSelector ? ( $this.closest( options.containerSelector ).length ? $this.closest( options.containerSelector ) : $( options.containerSelector ) ) : $( document.body ),
					isFitToTop = ( !options.autoFit && !options.fitToBottom ) || ( $this.outerHeight() + data.pad.top ) <= window_height;
				data.end = $container.offset().top + $container.height();
				if ( isFitToTop ) {
					data.to = $container.offset().top + $container.height() - $this.outerHeight() - data.pad.bottom - data.pb;
				} else {
					data.to = $container.offset().top + $container.height() - window_height - data.pb;
					data.to2 = $container.height() - $this.outerHeight() - data.pad.bottom - data.pb;
				}

				if ( prevDataTo[ i ] === 0 ) {
					prevDataTo[ i ] = data.to;
				}

				if ( isFitToTop ) {
					var from = data.from - data.pad.bottom,
						to = data.to - data.pad.top - data.offset;
					if ( typeof data.fromFitTop != 'undefined' && data.fromFitTop ) {
						from = data.fromFitTop - data.pad.bottom;
					}

					if ( from + $this.outerHeight() > data.end || from >= to ) {
						$this.css( { position: "", top: "", left: "" } );
						if ( options.activeClass ) { $this.removeClass( options.activeClass ); }
						$this.removeClass( 'sticky-transition' );
						$this.removeClass( 'sticky-absolute' );
						continue;
					}
					if ( scrollY > from && scrollY < to ) {
						!( $this.css( "position" ) == "fixed" ) && $this.css( {
							left: $this.offset().left,
							top: data.pad.top
						} ).css( "position", "fixed" );
						if ( options.activeClass ) { $this.addClass( options.activeClass ); }
						$this.removeClass( 'sticky-transition' );
						$this.removeClass( 'sticky-absolute' );
					} else if ( scrollY >= to ) {
						$this.css( {
							left: "",
							top: to - data.parentTop + data.pad.top
						} ).css( "position", "absolute" );
						if ( options.activeClass ) { $this.addClass( options.activeClass ); }
						if ( $this.hasClass( 'sticky-absolute' ) ) $this.addClass( 'sticky-transition' );
						$this.addClass( 'sticky-absolute' );
					} else {
						$this.css( { position: "", top: "", left: "" } );
						if ( options.activeClass ) { $this.removeClass( options.activeClass ); }
						$this.removeClass( 'sticky-transition' );
						$this.removeClass( 'sticky-absolute' );
					}
				} else if ( options.fitToBottom ) {
					var from = data.from,
						to = data.to;
					if ( data.from + window_height > data.end || data.from >= to ) {
						$this.css( { position: "", top: "", bottom: "", left: "" } );
						if ( options.activeClass ) { $this.removeClass( options.activeClass ); }
						$this.removeClass( 'sticky-transition' );
						$this.removeClass( 'sticky-absolute' );
						continue;
					}
					if ( scrollY > from && scrollY < to ) {
						!( $this.css( "position" ) == "fixed" ) && $this.css( {
							left: $this.offset().left,
							bottom: data.pad.bottom,
							top: ""
						} ).css( "position", "fixed" );
						if ( options.activeClass ) { $this.addClass( options.activeClass ); }
						$this.removeClass( 'sticky-transition' );
						$this.removeClass( 'sticky-absolute' );
					} else if ( scrollY >= to ) {
						$this.css( {
							left: "",
							top: data.to2,
							bottom: ""
						} ).css( "position", "absolute" );
						if ( options.activeClass ) { $this.addClass( options.activeClass ); }
						if ( $this.hasClass( 'sticky-absolute' ) ) $this.addClass( 'sticky-transition' );
						$this.addClass( 'sticky-absolute' );
					} else {
						$this.css( { position: "", top: "", bottom: "", left: "" } );
						if ( options.activeClass ) { $this.removeClass( options.activeClass ); }
						$this.removeClass( 'sticky-transition' );
						$this.removeClass( 'sticky-absolute' );
					}
				} else { // auto fit
					var this_height = $this.outerHeight()
					if ( prevDataTo[ i ] != data.to ) {
						if ( fixedSideBottom[ i ] && this_height + $this.offset().top + data.pad.bottom < scrollY + window_height ) {
							fixedSideBottom[ i ] = false;
						}
					}
					if ( ( this_height + data.pad.top + data.pad.bottom ) > window_height || fixedSideTop[ i ] || fixedSideBottom[ i ] ) {
						var padTop = parseInt( $this.parent().parent().css( 'padding-top' ) );
						// Reset the sideSortables style when scrolling to the top.
						if ( scrollY + data.pad.top - padTop <= data.parentTop ) {
							$this.css( { position: "", top: "", bottom: "", left: "" } );
							fixedSideTop[ i ] = fixedSideBottom[ i ] = false;
							if ( options.activeClass ) { $this.removeClass( options.activeClass ); }
						} else if ( scrollY >= data.to ) {
							$this.css( {
								left: "",
								top: data.to2,
								bottom: ""
							} ).css( "position", "absolute" );
							if ( options.activeClass ) { $this.addClass( options.activeClass ); }
						} else {

							// When scrolling down.
							if ( scrollY >= lastScrollY ) {
								if ( fixedSideTop[ i ] ) {

									// Let it scroll.
									fixedSideTop[ i ] = false;
									sidebarTop = $this.offset().top - data.parentTop;

									$this.css( {
										left: "",
										top: sidebarTop,
										bottom: ""
									} ).css( "position", "absolute" );
									if ( options.activeClass ) { $this.addClass( options.activeClass ); }
								} else if ( !fixedSideBottom[ i ] && this_height + $this.offset().top + data.pad.bottom < scrollY + window_height ) {
									// Pin the bottom.
									fixedSideBottom[ i ] = true;

									!( $this.css( "position" ) == "fixed" ) && $this.css( {
										left: $this.offset().left,
										bottom: data.pad.bottom,
										top: ""
									} ).css( "position", "fixed" );
									if ( options.activeClass ) { $this.addClass( options.activeClass ); }
								}

								// When scrolling up.
							} else if ( scrollY < lastScrollY ) {
								if ( fixedSideBottom[ i ] ) {
									// Let it scroll.
									fixedSideBottom[ i ] = false;
									sidebarTop = $this.offset().top - data.parentTop;

									/*if ($this.css('position') == 'absolute' && sidebarTop > data.to2) {
										sidebarTop = data.to2;
									}*/
									$this.css( {
										left: "",
										top: sidebarTop,
										bottom: ""
									} ).css( "position", "absolute" );
									if ( options.activeClass ) { $this.addClass( options.activeClass ); }
								} else if ( !fixedSideTop[ i ] && $this.offset().top >= scrollY + data.pad.top ) {
									// Pin the top.
									fixedSideTop[ i ] = true;

									!( $this.css( "position" ) == "fixed" ) && $this.css( {
										left: $this.offset().left,
										top: data.pad.top,
										bottom: ''
									} ).css( "position", "fixed" );
									if ( options.activeClass ) { $this.addClass( options.activeClass ); }
								} else if ( !fixedSideBottom[ i ] && fixedSideTop[ i ] && $this.css( 'position' ) == 'absolute' && $this.offset().top >= scrollY + data.pad.top ) {
									fixedSideTop[ i ] = false;
								}
							}
						}
					} else {
						// If the sidebar container is smaller than the viewport, then pin/unpin the top when scrolling.
						if ( scrollY >= ( data.parentTop - data.pad.top ) ) {
							$this.css( {
								position: 'fixed',
								top: data.pad.top
							} );
						} else {
							$this.css( { position: "", top: "", bottom: "", left: "" } );
							if ( options.activeClass ) { $this.removeClass( options.activeClass ); }
						}

						fixedSideTop[ i ] = fixedSideBottom[ i ] = false;
					}
				}

				prevDataTo[ i ] = data.to;
			}

			lastScrollY = scrollY;
		};

		var update = function () { recalculateLimits(); onScroll(); },
			r_timer = null;

		this.each( function () {
			var $this = $( this ),
				data = $this.data( 'themePin' ) || {};

			if ( data && data.update ) { return; }
			elements.push( $this );
			$( "img", this ).one( "load", function () {
				if ( r_timer ) {
					theme.deleteTimeout( r_timer );
				}
				r_timer = theme.requestFrame( recalculateLimits );
			} );
			data.update = update;
			$this.data( 'themePin', data );
			fixedSideTop.push( false );
			fixedSideBottom.push( false );
			prevDataTo.push( 0 );
		} );

		//$window.on( 'touchmove', onScroll );
		window.addEventListener( 'touchmove', onScroll, { passive: true } );
		window.addEventListener( 'scroll', onScroll, { passive: true } );
		recalculateLimits();

		if ( !theme.isLoaded ) {
			$window.on( 'load', update );
		}

		$( this ).on( 'recalc.pin', function () {
			recalculateLimits();
			onScroll();
		} );

		return this;
	};

	theme = theme || {};

	var instanceName = '__sticky';

	var Sticky = function ( $el, opts ) {
		return this.initialize( $el, opts );
	};

	Sticky.defaults = {
		autoInit: false,
		minWidth: 767,
		activeClass: 'sticky-active',
		padding: {
			top: 0,
			bottom: 0
		},
		offsetTop: 0,
		offsetBottom: 0,
		autoFit: false,
		fitToBottom: false
	};

	Sticky.prototype = {
		initialize: function ( $el, opts ) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions( opts )
				.build();

			return this;
		},

		setData: function () {
			this.$el.data( instanceName, this );

			return this;
		},

		setOptions: function ( opts ) {
			this.options = $.extend( true, {}, Sticky.defaults, opts, {
				wrapper: this.$el
			} );

			return this;
		},

		build: function () {
			if ( !$.fn.themePin ) {
				return this;
			}

			var self = this,
				$el = this.options.wrapper,
				stickyResizeTrigger;

			if ( $el.hasClass( 'porto-sticky-nav' ) ) {
				this.options.padding.top = theme.StickyHeader.sticky_height + theme.adminBarHeight();
				this.options.activeClass = 'sticky-active';
				this.options.containerSelector = '.main-content-wrap';
				theme.sticky_nav_height = $el.outerHeight();
				if ( this.options.minWidth > window.innerWidth )
					theme.sticky_nav_height = 0;
			}

			$el.themePin( this.options );

			$( window ).smartresize( function () {
				if ( stickyResizeTrigger ) {
					clearTimeout( stickyResizeTrigger );
				}
				stickyResizeTrigger = setTimeout( function () {
					$el.trigger( 'recalc.pin' );
				}, 800 );

				var $parent = $el.parent();

				$el.outerWidth( $parent.width() );
				if ( $el.css( 'position' ) == 'fixed' ) {
					$el.css( 'left', $parent.offset().left );
				}

				if ( $el.hasClass( 'porto-sticky-nav' ) ) {
					theme.sticky_nav_height = $el.outerHeight();
					if ( self.options.minWidth > window.innerWidth )
						theme.sticky_nav_height = 0;
				}
			} );

			return this;
		}
	};

	// expose to scope
	$.extend( theme, {
		Sticky: Sticky
	} );

	// jquery plugin
	$.fn.themeSticky = function ( opts ) {
		return this.map( function () {
			var $this = $( this );
			if ( $this.data( instanceName ) ) {
				$this.trigger( 'recalc.pin' );
				setTimeout( function () {
					$this.trigger( 'recalc.pin' );
				}, 800 );

				return $this.data( instanceName );
			} else {
				return new theme.Sticky( $this, opts );
			}

		} );
	}

} ).apply( this, [ window.theme, jQuery ] );


// Mobile Panel
( function ( theme, $ ) {
	'use strict';

	$( function () {
		$( document.body ).on( 'click', '.mobile-toggle', function ( e ) {
			var $nav_panel = $( '#nav-panel' );
			if ( $nav_panel.length > 0 ) {
				if ( $( this ).closest( '.header-main' ).length && $nav_panel.closest( '.header-builder-p' ).length && !$nav_panel.parent( '.header-main' ).length ) {
					$nav_panel.appendTo( $( this ).closest( '.header-main' ) );
				}
				if ( $nav_panel.is( ':visible' ) && $( '#header' ).hasClass( 'sticky-header' ) ) {
					var h_h = $( '#header' ).height(), p_h = $nav_panel.outerHeight();
					if ( h_h > p_h + 30 ) {
						$( '#header' ).css( 'height', h_h - p_h );
					}
				}
				$nav_panel.stop().slideToggle();
			} else if ( $( '#side-nav-panel' ).length > 0 ) {
				$( 'html' ).toggleClass( 'panel-opened' );
				$( '.panel-overlay' ).toggleClass( 'active' );
			}
			if ( $( '#nav-panel .skeleton-body, #side-nav-panel .skeleton-body' ).length ) {
				theme.lazyload_menu( 1, 'mobile_menu' );
			}
			e.preventDefault();
		} );

		$( document.body ).on( 'click', '.panel-overlay', function () {
			$( 'html' ).css( 'transition', 'margin .3s' ).removeClass( 'panel-opened' );
			theme.requestTimeout( function () {
				$( 'html' ).css( 'transition', '' );
			}, 260 );
			$( this ).removeClass( 'active' );
		} );

		$( document.body ).on( 'click', '#side-nav-panel .side-nav-panel-close', function ( e ) {
			e.preventDefault();
			$( '.panel-overlay' ).trigger( 'click' );
		} );

		$( window ).on( 'resize', function () {
			if ( window.innerWidth > 991 ) {
				$( '#nav-panel' ).hide();
				if ( $( 'html' ).hasClass( 'panel-opened' ) ) {
					$( '.panel-overlay' ).trigger( 'click' );
				}
			}
		} );
	} );

} ).apply( this, [ window.theme, jQuery ] );


// Blog / Portfolio Like
( function ( theme, $ ) {
	'use strict';

	$( function () {
		$( document ).on( 'click', '.blog-like, .portfolio-like', function ( e ) {
			e.preventDefault();
			var $this = $( this ),
				parentObj = this.parentNode,
				item_id = $this.attr( 'data-id' ),
				is_blog = $this.hasClass( 'blog-like' ),
				sendData = { nonce: js_porto_vars.porto_nonce };
			if ( is_blog ) {
				if ( $this.hasClass( 'updating' ) ) {
					return false;
				}
				$this.addClass( 'updating' ).text( '...' );
				sendData.blog_id = item_id;
				sendData.action = 'porto_blog-like';
			} else {
				sendData.portfolio_id = item_id;
				sendData.action = 'porto_portfolio-like';
			}
			$.post(
				theme.ajax_url,
				sendData,
				function ( data ) {
					if ( data ) {
						$this.remove();
						parentObj.innerHTML = data;
						if ( typeof bootstrap != 'undefined' ) {
							var tooltipTriggerList = [].slice.call( parentObj.querySelectorAll( '[data-bs-tooltip]' ) );
							tooltipTriggerList.map( function ( tooltipTriggerEl ) {
								return new bootstrap.Tooltip( tooltipTriggerEl )
							} );
						}
					}
				}
			);
			return false;
		} );
	} );

} ).apply( this, [ window.theme, jQuery ] );

// Scroll to Top

//** jQuery Scroll to Top Control script- (c) Dynamic Drive DHTML code library: http://www.dynamicdrive.com.
//** Available/ usage terms at http://www.dynamicdrive.com (March 30th, 09')
//** v1.1 (April 7th, 09'):
//** 1) Adds ability to scroll to an absolute position (from top of page) or specific element on the page instead.
//** 2) Fixes scroll animation not working in Opera. 


var scrolltotop = {
	//startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control
	//scrollto: Keyword (Integer, or "Scroll_to_Element_ID"). How far to scroll document up when control is clicked on (0=top).
	setting: { startline: 100, scrollto: 0, scrollduration: 1000, fadeduration: [ 500, 100 ] },
	controlHTML: '<img src="assets/img/up.png" style="width:40px; height:40px" />', //HTML for control, which is auto wrapped in DIV w/ ID="topcontrol"
	controlattrs: { offsetx: 10, offsety: 10 }, //offset of control relative to right/ bottom of window corner
	anchorkeyword: '#top', //Enter href value of HTML anchors on the page that should also act as "Scroll Up" links

	state: { isvisible: false, shouldvisible: false },

	scrollup: function () {
		if ( !this.cssfixedsupport ) //if control is positioned using JavaScript
			this.$control.css( { opacity: 0 } ); //hide control immediately after clicking it
		var dest = isNaN( this.setting.scrollto ) ? this.setting.scrollto : parseInt( this.setting.scrollto );
		if ( typeof dest == "string" && jQuery( '#' + dest ).length == 1 ) //check element set by string exists
			dest = jQuery( '#' + dest ).offset().top;
		else
			dest = 0;
		this.$body.stop().animate( { scrollTop: dest }, this.setting.scrollduration );
	},

	keepfixed: function () {
		var $window = jQuery( window );
		var controlx = $window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx;
		var controly = $window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety;
		this.$control.css( { left: controlx + 'px', top: controly + 'px' } );
	},

	togglecontrol: function () {
		var scrolltop = jQuery( window ).scrollTop();
		if ( !this.cssfixedsupport )
			this.keepfixed();
		this.state.shouldvisible = ( scrolltop >= this.setting.startline ) ? true : false;
		if ( this.state.shouldvisible && !this.state.isvisible ) {
			this.$control.stop().animate( { opacity: 1 }, this.setting.fadeduration[ 0 ] );
			this.state.isvisible = true;
		}
		else if ( this.state.shouldvisible == false && this.state.isvisible ) {
			this.$control.stop().animate( { opacity: 0 }, this.setting.fadeduration[ 1 ] );
			this.state.isvisible = false;
		}
	},

	init: function () {
		jQuery( document ).ready( function ( $ ) {
			var mainobj = scrolltotop;
			var iebrws = document.all;
			mainobj.cssfixedsupport = !iebrws || iebrws && document.compatMode == "CSS1Compat" && window.XMLHttpRequest //not IE or IE7+ browsers in standards mode
			mainobj.$body = ( window.opera ) ? ( document.compatMode == "CSS1Compat" ? $( 'html' ) : $( 'body' ) ) : $( 'html,body' );
			mainobj.$control = $( '<div id="topcontrol">' + mainobj.controlHTML + '</div>' )
				.css( { position: mainobj.cssfixedsupport ? 'fixed' : 'absolute', bottom: mainobj.controlattrs.offsety, opacity: 0, cursor: 'pointer' } )
				.attr( { title: '' } )
				.on( 'click', function () { mainobj.scrollup(); return false; } )
				.appendTo( 'body' );
			if ( document.all && !window.XMLHttpRequest && mainobj.$control.text() != '' ) //loose check for IE6 and below, plus whether control contains any text
				mainobj.$control.css( { width: mainobj.$control.width() } ); //IE6- seems to require an explicit width on a DIV containing text
			mainobj.togglecontrol();
			$( 'a[href="' + mainobj.anchorkeyword + '"]' ).on( 'click', function () {
				mainobj.scrollup();
				return false;
			} );
			$( window ).on( 'scroll resize', function ( e ) {
				mainobj.togglecontrol();
			} );
		} );
	}
};

//scrolltotop.init()

( function ( theme, $ ) {
	'use strict';
	theme = theme || {};

	$.extend( theme, {

		ScrollToTop: {

			defaults: {
				html: '<i class="fas fa-chevron-up"></i>',
				offsetx: 10,
				offsety: 0
			},

			initialize: function ( html, offsetx, offsety ) {
				if ( $( '#topcontrol' ).length ) {
					return this;
				}
				this.html = ( html || this.defaults.html );
				this.offsetx = ( offsetx || this.defaults.offsetx );
				this.offsety = ( offsety || this.defaults.offsety );

				this.build();

				return this;
			},

			build: function () {
				var self = this;

				if ( typeof scrolltotop !== 'undefined' ) {
					// scroll top control
					scrolltotop.controlHTML = self.html;
					scrolltotop.controlattrs = { offsetx: self.offsetx, offsety: self.offsety };
					scrolltotop.init();
				}

				return self;
			}
		}

	} );

} ).apply( this, [ window.theme, jQuery ] );


// Mega Menu
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};

	$.extend( theme, {

		MegaMenu: {

			defaults: {
				menu: $( '.mega-menu' )
			},

			initialize: function ( $menu ) {
				this.$menu = ( $menu || this.defaults.menu );

				this.build()
					.events();

				return this;
			},

			popupWidth: function () {
				var winWidth = window.innerWidth,
					popupWidth = theme.bodyWidth - theme.grid_gutter_width * 2;
				if ( !$( 'body' ).hasClass( 'wide' ) ) {
					if ( winWidth >= theme.container_width + theme.grid_gutter_width - 1 )
						popupWidth = theme.container_width - theme.grid_gutter_width;
					else if ( winWidth >= 992 )
						popupWidth = 960 - theme.grid_gutter_width;
					else if ( winWidth >= 768 )
						popupWidth = 720 - theme.grid_gutter_width;
				}
				return popupWidth;
			},

			calcMenuPosition: function ( menu_obj ) {
				var menu = menu_obj,
					$header_container = $( '#header .header-main' ).hasClass( 'elementor-section' ) ? $( '#header .header-main > .elementor-container' ) : ( $( "#header .header-main .container-fluid" ).length ? $( "#header .header-main .container-fluid" ) : ( $( "#header .header-main .container" ).length ? $( "#header .header-main .container" ) : null ) );
				if ( null === $header_container || !$header_container.length ) {
					return;
				}
				var menuContainerWidth = $header_container.outerWidth() - parseInt( $header_container.css( 'padding-left' ) ) - parseInt( $header_container.css( 'padding-right' ) );
				if ( menuContainerWidth < 900 ) return;
				if ( menu.parent().hasClass( 'pos-fullwidth' ) ) {
					menu.get( 0 ).style.width = menuContainerWidth + 'px';
				}
				var browserWidth = theme.bodyWidth,
					menuLeftPos = menu.offset().left - ( browserWidth - menuContainerWidth ) / 2;
				if ( window.theme.rtl ) {
					menuLeftPos = theme.bodyWidth - ( menu.offset().left + menu.outerWidth() ) - ( browserWidth - menuContainerWidth ) / 2;
				}
				var menuWidth = menu.width(),
					remainWidth = menuContainerWidth - ( menuLeftPos + menuWidth ),
					l = false;
				if ( menuLeftPos > remainWidth && menuLeftPos < menuWidth ) {
					l = ( menuLeftPos + remainWidth ) / 3;
				}
				if ( remainWidth < 0 ) {
					l = -remainWidth;
				}
				return l;
			},

			build: function ( $menu ) {
				var self = this;
				if ( !$menu ) {
					$menu = self.$menu;
				}

				$menu.each( function () {
					var $menu = $( this ),
						$menu_container = $menu.closest( '.container' ),
						container_width = self.popupWidth();
					if ( $menu.closest( '.porto-popup-menu' ).length ) {
						return false;
					}

					var $menu_items = $menu.children( 'li.has-sub' );

					$menu_items.each( function () {
						var $menu_item = $( this ),
							$popup = $menu_item.children( '.popup' );
						if ( $popup.length ) {
							var popup_obj = $popup.get( 0 );
							popup_obj.style.display = 'block';
							if ( $menu_item.hasClass( 'wide' ) ) {
								popup_obj.style.left = 0;
								var padding = parseInt( $popup.css( 'padding-left' ) ) + parseInt( $popup.css( 'padding-right' ) ) +
									parseInt( $popup.find( '> .inner' ).css( 'padding-left' ) ) + parseInt( $popup.find( '> .inner' ).css( 'padding-right' ) );

								var row_number = 4;

								if ( $menu_item.hasClass( 'col-2' ) ) row_number = 2;
								if ( $menu_item.hasClass( 'col-3' ) ) row_number = 3;
								if ( $menu_item.hasClass( 'col-4' ) ) row_number = 4;
								if ( $menu_item.hasClass( 'col-5' ) ) row_number = 5;
								if ( $menu_item.hasClass( 'col-6' ) ) row_number = 6;

								if ( window.innerWidth < 992 )
									row_number = 1;

								var col_length = 0;
								$popup.find( '> .inner > ul > li' ).each( function () {
									var cols = parseFloat( $( this ).attr( 'data-cols' ) );
									if ( cols <= 0 || !cols )
										cols = 1;

									if ( cols > row_number )
										cols = row_number;

									col_length += cols;
								} );

								if ( col_length > row_number ) col_length = row_number;

								var popup_max_width = $popup.data( 'popup-mw' ) ? $popup.data( 'popup-mw' ) : $popup.find( '.inner' ).css( 'max-width' ),
									col_width = container_width / row_number;
								if ( 'none' !== popup_max_width && popup_max_width < container_width ) {
									col_width = parseInt( popup_max_width ) / row_number;
								}

								$popup.find( '> .inner > ul > li' ).each( function () {
									var cols = parseFloat( $( this ).data( 'cols' ) );
									if ( cols <= 0 )
										cols = 1;

									if ( cols > row_number )
										cols = row_number;

									if ( $menu_item.hasClass( 'pos-center' ) || $menu_item.hasClass( 'pos-left' ) || $menu_item.hasClass( 'pos-right' ) )
										this.style.width = ( 100 / col_length * cols ) + '%';
									else
										this.style.width = ( 100 / row_number * cols ) + '%';
								} );

								if ( $menu_item.hasClass( 'pos-center' ) ) { // position center
									$popup.find( '> .inner > ul' ).get( 0 ).style.width = ( col_width * col_length - padding ) + 'px';
									var left_position = $popup.offset().left - ( theme.bodyWidth - col_width * col_length ) / 2;
									popup_obj.style.left = '-' + left_position + 'px';
								} else if ( $menu_item.hasClass( 'pos-left' ) ) { // position left
									$popup.find( '> .inner > ul' ).get( 0 ).style.width = ( col_width * col_length - padding ) + 'px';
									popup_obj.style.left = '-15px';
								} else if ( $menu_item.hasClass( 'pos-right' ) ) { // position right
									$popup.find( '> .inner > ul' ).get( 0 ).style.width = ( col_width * col_length - padding ) + 'px';
									popup_obj.style.right = '-15px';
									popup_obj.style.left = 'auto';
								} else { // position justify
									if ( !$menu_item.hasClass( 'pos-fullwidth' ) ) {
										$popup.find( '> .inner > ul' ).get( 0 ).style.width = ( container_width - padding ) + 'px';
									}
									if ( theme.rtl ) {
										popup_obj.style.right = 0;
										popup_obj.style.left = 'auto';
									}
									var left_position = self.calcMenuPosition( $popup );
									if ( theme.rtl ) {
										popup_obj.style.right = '-15px';
										popup_obj.style.left = 'auto';
										if ( left_position ) {
											popup_obj.style.right = '-' + left_position + 'px';
										}
									} else {
										popup_obj.style.left = '-15px';
										popup_obj.style.right = 'auto';
										if ( left_position ) {
											popup_obj.style.left = '-' + left_position + 'px';
										}
									}
								}
							} else { // auto position
								if ( $menu_item.hasClass( 'pos-center' ) ) { // position center

								} else if ( $menu_item.hasClass( 'pos-left' ) ) { // position left

								} else if ( $menu_item.hasClass( 'pos-right' ) ) { // position right

								} else { // position justify
									if ( $popup.offset().left + $popup.width() > window.innerWidth ) {
										$menu_item.addClass( 'pos-right' );
									} else if ( $popup.find( '> .inner > ul' ).length ) {
										var $sub_menu = $popup.find( '> .inner > ul' ).eq( 0 );
										if ( $sub_menu.offset().left + $sub_menu.width() + 200 > window.innerWidth ) {
											$sub_menu.addClass( 'pos-left' );
										}
									}
								}
							}
							$menu_item.addClass( 'sub-ready' );
						}
					} );
				} );

				return self;
			},

			events: function () {
				var self = this;

				$( window ).smartresize( function () {
					self.build();
				} );

				if ( theme.isLoaded ) {
					theme.requestFrame( function () {
						self.build();
					} );
				} else {
					$( window ).on( 'load', function () {
						theme.requestFrame( function () {
							self.build();
						} );
					} );
				}

				return self;
			}
		}

	} );

} ).apply( this, [ window.theme, jQuery ] );


// Sidebar Menu
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};

	$.extend( theme, {

		SidebarMenu: {

			defaults: {
				menu: $( '.sidebar-menu:not(.side-menu-accordion)' ),
				toggle: $( '.widget_sidebar_menu .widget-title .toggle' ),
				menu_toggle: $( '#main-toggle-menu .menu-title' )
			},

			rtl: theme.rtl,

			initialize: function ( $menu, $toggle, $menu_toggle ) {
				if ( this.$menu && this.$menu.length && $menu && $menu.length ) {
					this.$menu = $.uniqueSort( $.merge( this.$menu, $menu ) );
					this.build();
					return this;
				}
				this.$menu = ( $menu || this.defaults.menu );
				if ( !this.$menu.length ) {
					return this;
				}
				this.$toggle = ( $toggle || this.defaults.toggle );
				this.$menu_toggle = ( $menu_toggle || this.defaults.menu_toggle );

				this.build()
					.events();

				return this;
			},

			isRightSidebar: function ( $menu ) {
				var flag = false;
				if ( this.rtl ) {
					flag = !( $( '#main' ).hasClass( 'column2-right-sidebar' ) || $( '#main' ).hasClass( 'column2-wide-right-sidebar' ) );
				} else {
					flag = $( '#main' ).hasClass( 'column2-right-sidebar' ) || $( '#main' ).hasClass( 'column2-wide-right-sidebar' );
				}

				if ( $menu.closest( '#main-toggle-menu' ).length ) {
					if ( this.rtl ) {
						flag = true;
					} else {
						flag = false;
					}
				}

				var $header_wrapper = $menu.closest( '.header-wrapper' );
				if ( $header_wrapper.length && $header_wrapper.hasClass( 'header-side-nav' ) ) {
					if ( this.rtl ) {
						flag = true;
					} else {
						flag = false;
					}
					if ( $( '.page-wrapper' ).hasClass( 'side-nav-right' ) ) {
						if ( this.rtl ) {
							flag = false;
						} else {
							flag = true;
						}
					}
				}

				return flag;
			},

			popupWidth: function () {
				var winWidth = window.innerWidth,
					popupWidth = theme.bodyWidth - theme.grid_gutter_width * 2;
				if ( !$( 'body' ).hasClass( 'wide' ) ) {
					if ( winWidth >= theme.container_width + theme.grid_gutter_width - 1 )
						popupWidth = theme.container_width - theme.grid_gutter_width;
					else if ( winWidth >= 992 )
						popupWidth = 960 - theme.grid_gutter_width;
					else if ( winWidth >= 768 )
						popupWidth = 720 - theme.grid_gutter_width;
				}
				return popupWidth;
			},

			build: function ( $menus ) {
				var self = this;
				if ( !$menus ) {
					$menus = self.$menu;
				}
				if ( !$menus.length ) {
					return;
				}

				var $parent_toggle_wrap = $menus.parent( '.toggle-menu-wrap' ),
					parent_toogle_wrap = null;
				if ( $parent_toggle_wrap.length && $parent_toggle_wrap.is( ':hidden' ) ) {
					parent_toogle_wrap = $parent_toggle_wrap.get( 0 );
					parent_toogle_wrap.style.display = 'block';
					parent_toogle_wrap.style.visibility = 'hidden';
				}

				$menus.each( function () {
					var menuobj = this, $menu = $( this ), container_width;
					if ( menuobj.classList.contains( 'side-menu-slide' ) ) {
						return;
					}
					if ( window.innerWidth < 992 )
						container_width = self.popupWidth();
					else {
						var menu_width = this.offsetWidth ? this.offsetWidth : $menu.width();
						container_width = self.popupWidth() - menu_width - 45;
					}

					var is_right_sidebar = self.isRightSidebar( $menu ),
						$menu_items = $menu.children( 'li' );

					$menu_items.each( function () {
						var $menu_item = $( this ),
							$popup = $menu_item.children( '.popup' );

						if ( $popup.length ) {
							var popup_obj = $popup.get( 0 ),
								is_opened = false;
							if ( $popup.is( ':visible' ) ) {
								is_opened = true;
							} else {
								popup_obj.style.display = 'block';
							}
							if ( $menu_item.hasClass( 'wide' ) ) {
								if ( !$menu.hasClass( 'side-menu-columns' ) ) {
									popup_obj.style.left = 0;
								}
								var row_number = 4;

								if ( $menu_item.hasClass( 'col-2' ) ) row_number = 2;
								if ( $menu_item.hasClass( 'col-3' ) ) row_number = 3;
								if ( $menu_item.hasClass( 'col-4' ) ) row_number = 4;
								if ( $menu_item.hasClass( 'col-5' ) ) row_number = 5;
								if ( $menu_item.hasClass( 'col-6' ) ) row_number = 6;

								if ( window.innerWidth < 992 )
									row_number = 1;

								var col_length = 0;
								$popup.find( '> .inner > ul > li' ).each( function () {
									var cols = parseFloat( $( this ).data( 'cols' ) );
									if ( !cols || cols <= 0 )
										cols = 1;

									if ( cols > row_number )
										cols = row_number;

									col_length += cols;
								} );

								if ( col_length > row_number ) col_length = row_number;

								var popup_max_width = $popup.data( 'popup-mw' ) ? $popup.data( 'popup-mw' ) : $popup.find( '.inner' ).css( 'max-width' ),
									col_width = container_width / row_number;
								if ( 'none' !== popup_max_width && popup_max_width < container_width ) {
									col_width = parseInt( popup_max_width ) / row_number;
								}

								$popup.find( '> .inner > ul > li' ).each( function () {
									var cols = parseFloat( $( this ).data( 'cols' ) );
									if ( cols <= 0 )
										cols = 1;

									if ( cols > row_number )
										cols = row_number;

									if ( $menu_item.hasClass( 'pos-center' ) || $menu_item.hasClass( 'pos-left' ) || $menu_item.hasClass( 'pos-right' ) )
										this.style.width = ( 100 / col_length * cols ) + '%';
									else
										this.style.width = ( 100 / row_number * cols ) + '%';
								} );

								popup_obj.children[ 0 ].children[ 0 ].style.width = col_width * col_length + 1 + 'px';

								if ( !$menu.hasClass( 'side-menu-columns' ) ) {
									if ( is_right_sidebar ) {
										popup_obj.style.left = 'auto';
										popup_obj.style.right = ( this.offsetWidth ? this.offsetWidth : $( this ).width() ) + 'px';
									} else {
										popup_obj.style.left = ( this.offsetWidth ? this.offsetWidth : $( this ).width() ) + 'px';
										popup_obj.style.right = 'auto';
									}
								}
							}

							if ( !is_opened ) {
								popup_obj.style.display = 'none';
							}
							if ( menuobj.classList.contains( 'side-menu-accordion' ) ) {

							} else if ( menuobj.classList.contains( 'side-menu-slide' ) ) {

							} else if ( !$menu_item.hasClass( 'sub-ready' ) ) {
								$menu_item.on( 'mouseenter', function () {
									$menu_items.find( '.popup' ).hide();
									$popup.show();
									$popup.parent().addClass( 'open' );
									//$( document.body ).trigger( 'appear_refresh' );
								} ).on( 'mouseleave', function () {
									$popup.hide();
									$popup.parent().removeClass( 'open' );
								} );
								$menu_item.addClass( 'sub-ready' );
							}
						}
					} );
				} );

				// slide menu
				if ( $menus.hasClass( 'side-menu-slide' ) ) {
					var slideNavigation = {
						$mainNav: $menus,
						$mainNavItem: $menus.find( 'li' ),

						build: function () {
							var self = this;

							self.menuNav();
						},
						initSub: function ( $obj ) {
							var currentMenu = $obj.closest( 'ul' ),
								nextMenu = $obj.parent().find( 'ul' ).first();

							if ( nextMenu.children( '.menu-item' ).children( '.go-back' ).length < 1 ) {
								nextMenu.prepend( '<li class="menu-item"><a class="go-back" href="#">' + js_porto_vars.submenu_back + '</a></li>' );
							}

							var nextMenuHeightDiff = nextMenu.find( '> li' ).length * nextMenu.find( '> li' ).outerHeight() - nextMenu.outerHeight();

							currentMenu.addClass( 'next-menu' );

							nextMenu.addClass( 'visible' );
							currentMenu.css( {
								overflow: 'visible',
								'overflow-y': 'visible'
							} );

							if ( nextMenuHeightDiff > 0 ) {
								nextMenu.css( {
									overflow: 'hidden',
									'overflow-y': 'scroll'
								} );
							}

							//for (i = 0; i < nextMenu.find('> li').length; i++) {
							if ( nextMenu.outerHeight() < ( nextMenu.closest( '.header-main' ).outerHeight() - 100 ) ) {
								nextMenu.css( {
									height: nextMenu.outerHeight() + nextMenu.find( '> li' ).outerHeight()
								} );
							}
							// }

							nextMenu.css( {
								'padding-top': nextMenuHeightDiff + 'px'
							} );
						},
						menuNav: function () {
							var self = this;

							self.$mainNav.find( '.menu-item-has-children > a.nolink' ).removeClass( 'nolink' ).attr( 'href', '' );

							self.$mainNav.find( '.menu-item-has-children > a:not(.go-back)' ).off( 'click' ).on( 'click', function ( e ) {
								e.stopImmediatePropagation();
								e.preventDefault();
								var $this = $( this );
								if ( js_porto_vars.lazyload_menu && !self.$mainNav.hasClass( 'sub-ready' ) ) {
									self.initSub( $this );
									self.$mainNav.on( 'sub-loaded', function () {
										self.initSub( $this );
									} );
								} else {
									self.initSub( $this );
								}
							} );
						}
					};

					slideNavigation.build();
				}

				if ( parent_toogle_wrap ) {
					parent_toogle_wrap.style.display = '';
					parent_toogle_wrap.style.visibility = '';
				}

				return self;
			},

			events: function () {
				var self = this;

				self.$toggle.on( 'click', function () {
					var $widget = $( this ).parent().parent();
					var $this = $( this );
					if ( $this.hasClass( 'closed' ) ) {
						$this.removeClass( 'closed' );
						$widget.removeClass( 'closed' );
						$widget.find( '.sidebar-menu-wrap' ).stop().slideDown( 400, function () {
							$( this ).attr( 'style', '' ).show();
							self.build();
						} );
					} else {
						$this.addClass( 'closed' );
						$widget.addClass( 'closed' );
						$widget.find( '.sidebar-menu-wrap' ).stop().slideUp( 400, function () {
							$( this ).attr( 'style', '' ).hide();
						} );
					}
				} );

				this.$menu_toggle.on( 'click', function () {
					var $toggle_menu = $( this ).parent();
					if ( $toggle_menu.hasClass( 'show-always' ) || $toggle_menu.hasClass( 'show-hover' ) ) {
						return;
					}
					var $this = $( this );
					if ( $this.hasClass( 'closed' ) ) {
						$this.removeClass( 'closed' );
						$toggle_menu.removeClass( 'closed' );
						$toggle_menu.find( '.toggle-menu-wrap' ).stop().slideDown( 400, function () {
							$( this ).attr( 'style', '' ).show();
						} );

						self.build();

					} else {
						$this.addClass( 'closed' );
						$toggle_menu.addClass( 'closed' );
						$toggle_menu.find( '.toggle-menu-wrap' ).stop().slideUp( 400, function () {
							$( this ).attr( 'style', '' ).hide();
						} );
					}
				} );

				if ( self.$menu.hasClass( 'side-menu-slide' ) ) {
					self.$menu.on( 'click', '.go-back', function ( e ) {
						e.preventDefault();
						var prevMenu = $( this ).closest( '.next-menu' ),
							prevMenuHeightDiff = 0;
						if ( prevMenu.length && prevMenu.find( '> li' ).length ) {
							prevMenuHeightDiff = prevMenu.find( '> li' ).length * prevMenu.find( '> li' ).outerHeight() - prevMenu.outerHeight();
						}




						prevMenu.removeClass( 'next-menu' );
						$( this ).closest( 'ul' ).removeClass( 'visible' );

						if ( prevMenuHeightDiff > 0 ) {
							prevMenu.css( {
								overflow: 'hidden',
								'overflow-y': 'scroll'
							} );
						}
					} );
				}

				if ( $( '.sidebar-menu:not(.side-menu-accordion)' ).closest( '[data-plugin-sticky]' ).length ) {
					var sidebarRefreshTimer;
					$( window ).smartresize( function () {
						if ( sidebarRefreshTimer ) {
							clearTimeout( sidebarRefreshTimer );
						}
						sidebarRefreshTimer = setTimeout( function () {
							self.build();
						}, 800 );
					} );
				} else {
					$( window ).smartresize( function () {
						self.build();
					} );
				}

				setTimeout( function () {
					self.build();
				}, 400 );

				return self;
			}
		}

	} );

} ).apply( this, [ window.theme, jQuery ] );

// Sticky Header
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};

	$.extend( theme, {

		StickyHeader: {

			defaults: {
				header: $( '#header' )
			},

			initialize: function ( $header ) {
				this.$header = ( $header || this.defaults.header );
				this.sticky_height = 0;
				this.sticky_pos = 0;
				this.change_logo = theme.change_logo;

				if ( !theme.show_sticky_header || !this.$header.length || $( '.side-header-narrow-bar' ).length )
					return this;

				var self = this;

				var $menu_wrap = self.$header.find( '> .main-menu-wrap' );
				if ( $menu_wrap.length ) {
					self.$menu_wrap = $menu_wrap;
					self.menu_height = $menu_wrap.height();
				} else {
					self.$menu_wrap = false;
				}

				self.$header_main = self.$header.find( '.header-main' );

				// fix compatibility issue with Elementor pro header builder
				if ( !self.$header_main.length && self.$header.children( '.elementor-location-header' ).length ) {
					self.$header_main = self.$header.children( '.elementor-location-header' ).last().addClass( 'header-main' );
				}

				if ( !self.$header_main.length ) {
					return this;
				}

				self.reveal = self.$header.parents( '.header-wrapper' ).hasClass( 'header-reveal' );

				self.is_sticky = false;

				self.reset()
					.build()
					.events();

				return self;
			},

			build: function () {
				var self = this;

				if ( !self.is_sticky && ( window.innerHeight + self.header_height + theme.adminBarHeight() + parseInt( self.$header.css( 'border-top-width' ) ) >= $( document ).height() ) ) {
					return self;
				}

				if ( window.innerHeight > $( document.body ).height() )
					window.scrollTo( 0, 0 );

				var scroll_top = $( window ).scrollTop();

				if ( self.$menu_wrap && !theme.isTablet() ) {

					self.$header_main.stop().css( 'top', 0 );

					if ( self.$header.parent().hasClass( 'fixed-header' ) )
						self.$header.parent().attr( 'style', '' );

					if ( scroll_top > self.sticky_pos ) {
						if ( !self.$header.hasClass( 'sticky-header' ) ) {
							var header_height = self.$header.outerHeight();
							self.$header.addClass( 'sticky-header' ).css( 'height', header_height );
							self.$menu_wrap.stop().css( 'top', theme.adminBarHeight() );

							var selectric = self.$header.find( '.header-main .searchform select' ).data( 'selectric' );
							if ( selectric && typeof selectric.close != 'undefined' )
								selectric.close();

							if ( self.$header.parent().hasClass( 'fixed-header' ) ) {
								self.$header_main.hide();
								self.$header.css( 'height', '' );
							}

							if ( !self.init_toggle_menu ) {
								self.init_toggle_menu = true;
								theme.MegaMenu.build();
								if ( $( '#main-toggle-menu' ).length ) {
									if ( $( '#main-toggle-menu' ).hasClass( 'show-always' ) ) {
										$( '#main-toggle-menu' ).data( 'show-always', true );
										$( '#main-toggle-menu' ).removeClass( 'show-always' );
									}
									$( '#main-toggle-menu' ).addClass( 'closed' );
									$( '#main-toggle-menu .menu-title' ).addClass( 'closed' );
									$( '#main-toggle-menu .toggle-menu-wrap' ).attr( 'style', '' );
								}
							}
							self.is_sticky = true;
						}
					} else {
						if ( self.$header.hasClass( 'sticky-header' ) ) {
							self.$header.removeClass( 'sticky-header' );
							self.$header.css( 'height', '' );
							self.$menu_wrap.stop().css( 'top', 0 );
							self.$header_main.show();

							var selectric = self.$header.find( '.main-menu-wrap .searchform select' ).data( 'selectric' );
							if ( selectric && typeof selectric.close != 'undefined' )
								selectric.close();

							if ( self.init_toggle_menu ) {
								self.init_toggle_menu = false;
								theme.MegaMenu.build();
								if ( $( '#main-toggle-menu' ).length ) {
									if ( $( '#main-toggle-menu' ).data( 'show-always' ) ) {
										$( '#main-toggle-menu' ).addClass( 'show-always' );
										$( '#main-toggle-menu' ).removeClass( 'closed' );
										$( '#main-toggle-menu .menu-title' ).removeClass( 'closed' );
										$( '#main-toggle-menu .toggle-menu-wrap' ).attr( 'style', '' );
									}
								}
							}
							self.is_sticky = false;
						}
					}
				} else {
					self.$header_main.show();
					if ( self.$header.parent().hasClass( 'fixed-header' ) && $( '#wpadminbar' ).length && $( '#wpadminbar' ).css( 'position' ) == 'absolute' ) {
						self.$header.parent().css( 'top', ( $( '#wpadminbar' ).height() - scroll_top ) < 0 ? -$( '#wpadminbar' ).height() : -scroll_top );
					} else if ( self.$header.parent().hasClass( 'fixed-header' ) ) {
						self.$header.parent().attr( 'style', '' );
					} else {
						if ( self.$header.parent().hasClass( 'fixed-header' ) )
							self.$header.parent().attr( 'style', '' );
					}
					if ( self.$header.hasClass( 'sticky-menu-header' ) && !theme.isTablet() ) {
						self.$header_main.stop().css( 'top', 0 );
						if ( self.change_logo ) self.$header_main.removeClass( 'change-logo' );
						self.$header_main.removeClass( 'sticky' );
						self.$header.removeClass( 'sticky-header' );
						self.is_sticky = false;
						self.sticky_height = 0;
					} else {
						if ( self.$menu_wrap )
							self.$menu_wrap.stop().css( 'top', 0 );
						if ( scroll_top > self.sticky_pos && ( !theme.isTablet() || ( theme.isTablet() && ( !theme.isMobile() && theme.show_sticky_header_tablet ) || ( theme.isMobile() && theme.show_sticky_header_tablet && theme.show_sticky_header_mobile ) ) ) ) {
							if ( !self.$header.hasClass( 'sticky-header' ) ) {
								var header_height = self.$header.outerHeight();
								self.$header.addClass( 'sticky-header' ).css( 'height', header_height );
								self.$header_main.addClass( 'sticky' );
								if ( self.change_logo ) self.$header_main.addClass( 'change-logo' );
								self.$header_main.stop().css( 'top', theme.adminBarHeight() );

								if ( !self.init_toggle_menu ) {
									self.init_toggle_menu = true;
									theme.MegaMenu.build();
									if ( $( '#main-toggle-menu' ).length ) {
										if ( $( '#main-toggle-menu' ).hasClass( 'show-always' ) ) {
											$( '#main-toggle-menu' ).data( 'show-always', true );
											$( '#main-toggle-menu' ).removeClass( 'show-always' );
										}
										$( '#main-toggle-menu' ).addClass( 'closed' );
										$( '#main-toggle-menu .menu-title' ).addClass( 'closed' );
										$( '#main-toggle-menu .toggle-menu-wrap' ).attr( 'style', '' );
									}
								}
								self.is_sticky = true;
							}
						} else {
							if ( self.$header.hasClass( 'sticky-header' ) ) {
								if ( self.change_logo ) self.$header_main.removeClass( 'change-logo' );
								self.$header_main.removeClass( 'sticky' );
								self.$header.removeClass( 'sticky-header' );
								self.$header.css( 'height', '' );
								self.$header_main.stop().css( 'top', 0 );

								if ( self.init_toggle_menu ) {
									self.init_toggle_menu = false;
									theme.MegaMenu.build();
									if ( $( '#main-toggle-menu' ).length ) {
										if ( $( '#main-toggle-menu' ).data( 'show-always' ) ) {
											$( '#main-toggle-menu' ).addClass( 'show-always' );
											$( '#main-toggle-menu' ).removeClass( 'closed' );
											$( '#main-toggle-menu .menu-title' ).removeClass( 'closed' );
											$( '#main-toggle-menu .toggle-menu-wrap' ).attr( 'style', '' );
										}
									}
								}
								self.is_sticky = false;
							}
						}
					}
				}

				if ( !self.$header.hasClass( 'header-loaded' ) )
					self.$header.addClass( 'header-loaded' );

				if ( !self.$header.find( '.logo' ).hasClass( 'logo-transition' ) )
					self.$header.find( '.logo' ).addClass( 'logo-transition' );

				if ( self.$header.find( '.overlay-logo' ).get( 0 ) && !self.$header.find( '.overlay-logo' ).hasClass( 'overlay-logo-transition' ) )
					self.$header.find( '.overlay-logo' ).addClass( 'overlay-logo-transition' );

				return self;
			},

			reset: function () {
				var self = this;

				if ( self.$header.find( '.logo' ).hasClass( 'logo-transition' ) )
					self.$header.find( '.logo' ).removeClass( 'logo-transition' );

				if ( self.$header.find( '.overlay-logo' ).get( 0 ) && self.$header.find( '.overlay-logo' ).hasClass( 'overlay-logo-transition' ) )
					self.$header.find( '.overlay-logo' ).removeClass( 'overlay-logo-transition' );

				if ( self.$menu_wrap && !theme.isTablet() ) {
					// show main menu
					self.$header.addClass( 'sticky-header sticky-header-calc' );
					self.$header_main.addClass( 'sticky' );
					if ( self.change_logo ) self.$header_main.addClass( 'change-logo' );

					self.sticky_height = self.$menu_wrap.height() + parseInt( self.$menu_wrap.css( 'padding-top' ) ) + parseInt( self.$menu_wrap.css( 'padding-bottom' ) );

					if ( self.change_logo ) self.$header_main.removeClass( 'change-logo' );
					self.$header_main.removeClass( 'sticky' );
					self.$header.removeClass( 'sticky-header sticky-header-calc' );
					self.header_height = self.$header.height() + parseInt( self.$header.css( 'margin-top' ) );
					self.menu_height = self.$menu_wrap.height() + parseInt( self.$menu_wrap.css( 'padding-top' ) ) + parseInt( self.$menu_wrap.css( 'padding-bottom' ) );

					self.sticky_pos = ( self.header_height - self.sticky_height ) + parseInt( $( 'body' ).css( 'padding-top' ) ) + parseInt( self.$header.css( 'border-top-width' ) );
					if ( $( '.banner-before-header' ).length ) {
						self.sticky_pos += $( '.banner-before-header' ).height();
					}
					if ( $( '.porto-block-html-top' ).length ) {
						self.sticky_pos += $( '.porto-block-html-top' ).height();
					}
				} else {
					// show header main
					self.$header.addClass( 'sticky-header sticky-header-calc' );
					self.$header_main.addClass( 'sticky' );
					if ( self.change_logo ) self.$header_main.addClass( 'change-logo' );
					self.sticky_height = self.$header_main.outerHeight();

					if ( self.change_logo ) self.$header_main.removeClass( 'change-logo' );
					self.$header_main.removeClass( 'sticky' );
					self.$header.removeClass( 'sticky-header sticky-header-calc' );
					self.header_height = self.$header.height() + parseInt( self.$header.css( 'margin-top' ) );
					self.main_height = self.$header_main.height();

					if ( !( !theme.isTablet() || ( theme.isTablet() && !theme.isMobile() && theme.show_sticky_header_tablet ) || ( theme.isMobile() && theme.show_sticky_header_tablet && theme.show_sticky_header_mobile ) ) ) {
						self.sticky_height = 0;
					}

					/*if (self.$header_main.length && self.$header.length) {
						self.sticky_pos = self.$header_main.offset().top - self.$header.offset().top + $('.banner-before-header').height() + parseInt($('body').css('padding-top')) + parseInt(self.$header.css('border-top-width'));
					} else {
						self.sticky_pos = $('.banner-before-header').height() + parseInt($('body').css('padding-top')) + parseInt(self.$header.css('border-top-width'));
					}
					if (theme.adminBarHeight() && self.$header.offset().top > theme.adminBarHeight()) {
						self.sticky_pos -= theme.adminBarHeight();
					}
					self.sticky_pos = (self.header_height - self.sticky_height) + $('.banner-before-header').height() + $('.porto-block-html-top').height() + parseInt($('body').css('padding-top')) + parseInt(self.$header.css('border-top-width'));*/
					self.sticky_pos = self.$header.offset().top + self.header_height - self.sticky_height - theme.adminBarHeight() + parseInt( self.$header.css( 'border-top-width' ) );
				}

				if ( self.reveal ) {
					if ( self.menu_height ) {
						self.sticky_pos += self.menu_height + 30;
					} else {
						self.sticky_pos += 30;
					}
				}

				if ( self.sticky_pos < 0 ) {
					self.sticky_pos = 0;
				}

				self.init_toggle_menu = false;

				self.$header_main.removeAttr( 'style' );
				if ( !theme.isTablet() && self.$header.hasClass( 'header-side' ) && typeof self.$header.attr( 'data-plugin-sticky' ) != 'undefined' ) {
					self.$header.css( 'height', '' );
				} else {
					self.$header.removeAttr( 'style' );
				}
				return self;
			},

			events: function () {
				var self = this, win_width = 0;

				$( window ).smartresize( function () {
					if ( win_width != window.innerWidth ) {
						self.reset().build();
						win_width = window.innerWidth;
					}
				} );

				window.addEventListener( 'scroll', function () {
					theme.requestFrame( function () {
						self.build();
					} );
				}, { passive: true } );

				return self;
			}
		}

	} );

} ).apply( this, [ window.theme, jQuery ] );

// Side Nav
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};

	$.extend( theme, {

		SideNav: {

			defaults: {
				side_nav: $( '.header-side-nav #header' )
			},

			bc_pos_top: 0,

			initialize: function ( $side_nav ) {
				this.$side_nav = ( $side_nav || this.defaults.side_nav );

				if ( !this.$side_nav.length )
					return this;

				var self = this;

				self.$side_nav.addClass( 'initialize' );

				self.reset()
					.build()
					.events();

				return self;
			},

			build: function () {
				var self = this;

				var $page_top = $( '.page-top' ),
					$main = $( '#main' );

				if ( theme.isTablet() ) {
					//self.$side_nav.removeClass("fixed-bottom");
					$page_top.removeClass( "fixed-pos" );
					$page_top.attr( 'style', '' );
					$main.attr( 'style', '' );
				} else {
					//var side_height = self.$side_nav.innerHeight();
					//var window_height = window.innerHeight;
					var scroll_top = $( window ).scrollTop();

					/*if (side_height - window_height + theme.adminBarHeight() < scroll_top) {
						if (!self.$side_nav.hasClass("fixed-bottom"))
							self.$side_nav.addClass("fixed-bottom");
					} else {
						if (self.$side_nav.hasClass("fixed-bottom"))
							self.$side_nav.removeClass("fixed-bottom");
					}*/

					if ( $page_top.length && $page_top.outerHeight() < 100 && !$( '.side-header-narrow-bar-top' ).length ) {
						if ( self.page_top_offset == theme.adminBarHeight() || self.page_top_offset <= scroll_top ) {
							if ( !$page_top.hasClass( "fixed-pos" ) ) {
								$page_top.addClass( "fixed-pos" );
								$page_top.css( 'top', theme.adminBarHeight() );
								$main.css( 'padding-top', $page_top.outerHeight() );
							}
						} else {
							if ( $page_top.hasClass( "fixed-pos" ) ) {
								$page_top.removeClass( "fixed-pos" );
								$page_top.attr( 'style', '' );
								$main.attr( 'style', '' );
							}
						}
					}
					$main.css( 'min-height', window.innerHeight - theme.adminBarHeight() - $( '.page-top:not(.fixed-pos)' ).height() - $( '.footer-wrapper' ).height() );
				}

				return self;
			},

			reset: function () {
				var self = this;

				if ( theme.isTablet() ) {

					self.$side_nav.attr( 'style', '' );

				} else {

					var w_h = window.innerHeight,
						$side_bottom = self.$side_nav.find( '.side-bottom' );

					self.$side_nav.css( {
						'min-height': w_h - theme.adminBarHeight(),
						'padding-bottom': $side_bottom.length ? $side_bottom.height() + parseInt( $side_bottom.css( 'margin-top' ) ) + parseInt( $side_bottom.css( 'margin-bottom' ) ) : ''
					} );

					var appVersion = navigator.appVersion;
					var webkitVersion_positionStart = appVersion.indexOf( "AppleWebKit/" ) + 12;
					var webkitVersion_positionEnd = webkitVersion_positionStart + 3;
					var webkitVersion = appVersion.slice( webkitVersion_positionStart, webkitVersion_positionEnd );
					if ( webkitVersion < 537 ) {
						self.$side_nav.css( '-webkit-backface-visibility', 'hidden' );
						self.$side_nav.css( '-webkit-perspective', '1000' );
					}
				}

				var $page_top = $( '.page-top' ),
					$main = $( '#main' );

				if ( $page_top.length ) {
					$page_top.removeClass( "fixed-pos" );
					$page_top.attr( 'style', '' );
					$main.attr( 'style', '' );
					self.page_top_offset = $page_top.offset().top;
				}

				return self;
			},

			events: function () {
				var self = this;

				$( window ).on( 'resize', function () {
					self.reset()
						.build();
				} );

				window.addEventListener( 'scroll', function () {
					self.build();
				}, { passive: true } );

				if ( $( '.side-header-narrow-bar-top' ).length ) {
					if ( $( window ).scrollTop() > theme.adminBarHeight() + $( '.side-header-narrow-bar-top' ).height() ) {
						$( '.side-header-narrow-bar-top' ).addClass( 'side-header-narrow-bar-sticky' );
					}
					window.addEventListener( 'scroll', function () {
						var scroll_top = $( this ).scrollTop();
						if ( scroll_top > theme.adminBarHeight() + $( '.side-header-narrow-bar-top' ).height() ) {
							$( '.side-header-narrow-bar-top' ).addClass( 'side-header-narrow-bar-sticky' );
						} else {
							$( '.side-header-narrow-bar-top' ).removeClass( 'side-header-narrow-bar-sticky' );
						}
					}, { passive: true } );
				}

				// Side Narrow Bar
				$( '.side-header-narrow-bar .hamburguer-btn' ).on( 'click', function () {
					$( this ).toggleClass( 'active' );
					$( '#header' ).toggleClass( 'side-header-visible' );
					if ( $( this ).closest( '.side-header-narrow-bar-top' ).length && !$( '#header > .hamburguer-btn' ).length ) {
						$( this ).closest( '.side-header-narrow-bar-top' ).toggle();
					}
				} );
				$( '.hamburguer-close' ).on( 'click', function () {
					$( '.side-header-narrow-bar .hamburguer-btn' ).trigger( 'click' );
				} );

				return self;
			}
		}

	} );

} ).apply( this, [ window.theme, jQuery ] );


// Search
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};

	$.extend( theme, {

		Search: {

			defaults: {
				popup: $( '.searchform-popup' ),
				form: $( '.searchform' )
			},

			initialize: function ( $popup, $form ) {
				this.$popup = ( $popup || this.defaults.popup );
				this.$form = ( $form || this.defaults.form );

				this.build()
					.events();

				return this;
			},

			build: function () {
				var self = this;

				/* Change search form values */
				var $search_form_texts = self.$form.find( '.text input' ),
					$search_form_cats = self.$form.find( '.cat' );

				if ( $( '.header-wrapper .searchform .cat' ).get( 0 ) && $.fn.selectric ) {
					$( '.header-wrapper .searchform .cat' ).selectric( {
						arrowButtonMarkup: '',
						expandToItemText: true,
						maxHeight: 240
					} );
				}

				$search_form_texts.on( 'change', function () {
					var $this = $( this ),
						val = $this.val();

					$search_form_texts.each( function () {
						if ( $this != $( this ) ) $( this ).val( val );
					} );
				} );

				$search_form_cats.on( 'change', function () {
					var $this = $( this ),
						val = $this.val();

					$search_form_cats.each( function () {
						if ( $this != $( this ) ) $( this ).val( val );
					} );
				} );

				return this;
			},

			events: function () {
				var self = this;

				self.$popup.on( 'click', function ( e ) {
					e.stopPropagation();
				} );
				self.$popup.find( '.search-toggle' ).on( 'click', function ( e ) {
					$( this ).toggleClass( 'opened' );
					$( this ).next().toggle();
					if ( $( this ).hasClass( 'opened' ) ) {
						$( '#mini-cart.open' ).removeClass( 'open' );
						$( this ).next().find( 'input[type="text"]' ).focus();
						if ( self.$popup.find( '.btn-close-search-form' ).length ) {
							self.$popup.parent().addClass( 'position-static' );
						}
					}
					e.stopPropagation();
				} );

				$( 'html,body' ).on( 'click', function () {
					self.removeFormStyle();
				} );

				if ( !( 'ontouchstart' in document ) ) {

					$( window ).on( 'resize', function () {
						self.removeFormStyle();
					} );
				}

				$( '.btn-close-search-form' ).on( 'click', function ( e ) {
					e.preventDefault();
					self.removeFormStyle();
				} );

				return self;
			},

			removeFormStyle: function () {
				this.$form.removeAttr( 'style' );
				this.$popup.find( '.search-toggle' ).removeClass( 'opened' );
				if ( this.$popup.find( '.btn-close-search-form' ).length ) {
					this.$popup.parent().removeClass( 'position-static' );
				}
			}
		}

	} );

} ).apply( this, [ window.theme, jQuery ] );


// Hash Scroll
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};

	$.extend( theme, {

		HashScroll: {

			initialize: function () {

				this.build()
					.events();

				return this;
			},

			build: function () {
				var self = this;

				try {
					var hash = window.location.hash;
					var target = $( hash );
					if ( target.length && !( hash == '#review_form' || hash == '#reviews' || hash.indexOf( '#comment-' ) != -1 ) ) {
						$( 'html, body' ).delay( 600 ).stop().animate( {
							scrollTop: target.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height + 1
						}, 600, 'easeOutQuad' );
					}

					return self;
				} catch ( err ) {
					return self;
				}
			},

			getTarget: function ( href ) {
				if ( '#' == href || href.endsWith( '#' ) ) {
					return false;
				}
				var target;

				if ( href.indexOf( '#' ) == 0 ) {
					target = $( href );
				} else {
					var url = window.location.href;
					url = url.substring( url.indexOf( '://' ) + 3 );
					if ( url.indexOf( '#' ) != -1 )
						url = url.substring( 0, url.indexOf( '#' ) );
					href = href.substring( href.indexOf( '://' ) + 3 );
					href = href.substring( href.indexOf( url ) + url.length );
					if ( href.indexOf( '#' ) == 0 ) {
						target = $( href );
					}
				}
				return target;
			},

			activeMenuItem: function () {
				var self = this;

				var scroll_pos = $( window ).scrollTop();

				var $menu_items = $( '.menu-item > a[href*="#"], .porto-sticky-nav .nav > li > a[href*="#"]' );
				if ( $menu_items.length ) {
					$menu_items.each( function () {
						var $this = $( this ),
							href = $this.attr( 'href' ),
							target = self.getTarget( href );
						if ( target && target.get( 0 ) ) {
							if ( $this.parent().is( ':last-child' ) && scroll_pos + window.innerHeight >= target.offset().top + target.outerHeight() ) {
								$this.parent().siblings().removeClass( 'active' );
								$this.parent().addClass( 'active' );
							} else {
								var scroll_to = target.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height + 1,
									$parent = $this.parent();
								//if (scroll_to <= theme.StickyHeader.sticky_pos + theme.sticky_nav_height) {
								//scroll_to = theme.StickyHeader.sticky_pos + theme.sticky_nav_height + 1;
								//}
								if ( scroll_to <= scroll_pos + 5 ) {
									$parent.siblings().removeClass( 'active' );
									$parent.addClass( 'active' );
									if ( $parent.closest( '.secondary-menu' ).length ) {
										$parent.closest( '#header' ).find( '.main-menu' ).eq( 0 ).children( '.menu-item.active' ).removeClass( 'active' );
									}
								} else {
									$parent.removeClass( 'active' );
								}
							}
						}
					} );
				}

				return self;
			},

			events: function () {
				var self = this;

				$( '.menu-item > a[href*="#"], .porto-sticky-nav .nav > li > a[href*="#"], a[href*="#"].hash-scroll, .hash-scroll-wrap a[href*="#"]' ).on( 'click', function ( e ) {
					e.preventDefault();

					var $this = $( this ),
						href = $this.attr( 'href' ),
						target = self.getTarget( href );

					if ( target && target.get( 0 ) ) {
						var $parent = $this.parent();

						var scroll_to = target.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height + 1;
						//                        if (scroll_to <= theme.StickyHeader.sticky_pos + theme.sticky_nav_height) {
						//                            scroll_to = theme.StickyHeader.sticky_pos + theme.sticky_nav_height + 1;
						//                        }
						$( 'html, body' ).stop().animate( {
							scrollTop: scroll_to
						}, 600, 'easeOutQuad', function () {
							//self.activeMenuItem();
							$parent.siblings().removeClass( 'active' );
							$parent.addClass( 'active' );
						} );
						if ( $this.closest( '.porto-popup-menu.opened' ).length ) {
							$this.closest( '.porto-popup-menu.opened' ).children( '.hamburguer-btn' ).trigger( 'click' );
						}
					} else if ( ( '#' != href || !$this.closest( '.porto-popup-menu.opened' ).length ) && !$this.hasClass( 'nolink' ) ) {
						window.location.href = $this.attr( 'href' );
					}
				} );

				/*window.addEventListener( 'scroll', function () {
					self.activeMenuItem();
				}, { passive: true } );*/
				var $menu_items = $( '.menu-item > a[href*="#"], .porto-sticky-nav .nav > li > a[href*="#"]' );
				$menu_items.each( function () {
					var rootMargin = '-20% 0px -79.9% 0px',
						isLast = $( this ).parent().is( ':last-child' );
					if ( isLast ) {
						var obj = document.getElementById( this.hash.replace( '#', '' ) );
						if ( obj && document.body.offsetHeight - obj.offsetTop < window.innerHeight ) {
							var ratio = ( window.innerHeight - document.body.offsetHeight + obj.offsetTop ) / window.innerHeight * 0.8;
							ratio = Math.round( ratio * 100 );
							rootMargin = '-' + ( 20 + ratio ) + '% 0px -' + ( 79.9 - ratio ) + '% 0px';
						}
					}
					var callback = function () {
						if ( this && typeof this[ 0 ] != 'undefined' && this[ 0 ].id ) {
							$( '.menu-item > a[href*="#' + this[ 0 ].id + '"], .porto-sticky-nav .nav > li > a[href*="#' + this[ 0 ].id + '"]' ).parent().addClass( 'active' ).siblings().removeClass( 'active' );
						}
					};
					self.scrollSpyIntObs( this.hash, callback, {
						rootMargin: rootMargin,
						thresholds: 0
					}, true, isLast, true, $menu_items, $( this ).parent().index() );
				} );

				//self.activeMenuItem();

				return self;
			},

			scrollSpyIntObs: function ( selector, functionName, intObsOptions, alwaysObserve, isLast, firstLoad, $allItems, index ) {
				if ( typeof IntersectionObserver == 'undefined' ) {
					return this;
				}
				var obj = document.getElementById( selector.replace( '#', '' ) );
				if ( !obj ) {
					return this;
				}

				var self = this;

				var intersectionObserverOptions = {
					rootMargin: '0px 0px 200px 0px'
				}

				if ( Object.keys( intObsOptions ).length ) {
					intersectionObserverOptions = $.extend( intersectionObserverOptions, intObsOptions );
				}

				var observer = new IntersectionObserver( function ( entries ) {

					for ( var i = 0; i < entries.length; i++ ) {
						var entry = entries[ i ];
						if ( entry.intersectionRatio > 0 ) {
							if ( typeof functionName === 'string' ) {
								var func = Function( 'return ' + functionName )();
							} else {
								var callback = functionName;

								callback.call( $( entry.target ) );
							}
						} else {
							if ( firstLoad == false ) {
								if ( isLast ) {
									$allItems.filter( '[href*="' + entry.target.id + '"]' ).parent().prev().addClass( 'active' ).siblings().removeClass( 'active' );
								}
							}
							firstLoad = false;

						}
					}
				}, intersectionObserverOptions );

				observer.observe( obj );

				return this;
			}
		}

	} );

} ).apply( this, [ window.theme, jQuery ] );


// Sort Filter
( function ( theme, $ ) {
	'use strict';

	theme = theme || {};

	$.extend( theme, {

		SortFilter: {

			defaults: {
				filters: '.porto-sort-filters ul',
				elements: '.porto-sort-container .row'
			},

			initialize: function ( $elements, $filters ) {
				this.$elements = ( $elements || $( this.defaults.elements ) );
				this.$filters = ( $filters || $( this.defaults.filters ) );

				this.build();

				return this;
			},

			build: function () {
				var self = this;

				self.$elements.each( function () {
					var $this = $( this );
					$this.isotope( {
						itemSelector: '.porto-sort-item',
						layoutMode: 'masonry',
						getSortData: {
							popular: '[data-popular] parseInt'
						},
						sortBy: 'popular',
						isOriginLeft: !theme.rtl
					} );
					/*$this.isotope( 'on', 'layoutComplete', function () {
						$this.find( '.porto-lazyload:not(.lazy-load-loaded)' ).trigger( 'appear' );
					} );*/
					imagesLoaded( this, function () {
						if ( $this.data( 'isotope' ) ) {
							$this.isotope( 'layout' );
						}
					} );
				} );

				self.$filters.each( function () {
					var $this = $( this );
					var id = $this.attr( 'data-sort-id' );
					var $container = $( '#' + id );
					if ( $container.length ) {
						$this.on( 'click', 'li', function ( e ) {
							e.preventDefault();

							var $that = $( this );
							$this.find( 'li' ).removeClass( 'active' );
							$that.addClass( "active" );

							var sortByValue = $that.attr( 'data-sort-by' );
							$container.isotope( { sortBy: sortByValue } );

							var filterByValue = $that.attr( 'data-filter-by' );
							if ( filterByValue ) {
								$container.isotope( { filter: filterByValue } );
							} else {
								$container.isotope( { filter: '.porto-sort-item' } );
							}
							theme.refreshVCContent();
						} );

						$this.find( 'li[data-active]' ).trigger( 'click' );
					}
				} );

				return self;
			}
		}

	} );

} ).apply( this, [ window.theme, jQuery ] );

/*
* Footer Reveal
*/

( function ( $ ) {
	var $footerReveal = {

		$wrapper: $( '.footer-reveal' ),
		init: function () {
			var self = this;

			self.build();
			self.events();
		},

		build: function () {
			var self = this,
				footer_height = self.$wrapper.outerHeight( true ),
				window_height = window.innerHeight - theme.adminBarHeight();
			if ( $( '#header .header-main' ).length ) {
				window_height -= $( '#header .header-main' ).height();
			}

			if ( footer_height > window_height ) {
				$( '.footer-wrapper' ).removeClass( 'footer-reveal' );
				$( '.page-wrapper' ).css( 'margin-bottom', 0 );
			} else {
				$( '.footer-wrapper' ).addClass( 'footer-reveal' );
				$( '.page-wrapper' ).css( 'margin-bottom', footer_height );
				if ( document.body.offsetHeight < window.innerHeight ) {
					document.body.style.paddingBottom = '0.1px';
				}
			}

		},

		events: function () {
			var self = this,
				$window = $( window );

			$window.smartresize( function () {
				self.build();
			} );
		}
	}

	if ( $( '.footer-reveal' ).get( 0 ) ) {
		$footerReveal.init();
	}

} )( jQuery );

// Float Element
( function ( theme, $ ) {

	'use strict';

	theme = theme || {};

	var instanceName = '__floatElement';

	var PluginFloatElement = function ( $el, opts ) {
		return this.initialize( $el, opts );
	};

	PluginFloatElement.defaults = {
		startPos: 'top',
		speed: 3,
		horizontal: false,
		transition: false,
		transitionDelay: 0,
		transitionDuration: 500
	};

	PluginFloatElement.prototype = {
		initialize: function ( $el, opts ) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setData()
				.setOptions( opts )
				.build();

			return this;
		},

		setData: function () {
			this.$el.data( instanceName, this );

			return this;
		},

		setOptions: function ( opts ) {
			this.options = $.extend( true, {}, PluginFloatElement.defaults, opts, {
				wrapper: this.$el
			} );

			return this;
		},

		build: function () {
			var self = this,
				$el = this.options.wrapper,
				$window = $( window ),
				minus;

			if ( self.options.style ) {
				$el.attr( 'style', self.options.style );
			}

			if ( $window.width() > 767 ) {

				// Set Start Position
				if ( self.options.startPos == 'none' ) {
					minus = '';
				} else if ( self.options.startPos == 'top' ) {
					$el.css( {
						top: 0
					} );
					minus = '';
				} else {
					$el.css( {
						bottom: 0
					} );
					minus = '-';
				}

				// Set Transition
				if ( self.options.transition ) {
					$el.css( {
						transition: 'ease-out transform ' + self.options.transitionDuration + 'ms ' + self.options.transitionDelay + 'ms'
					} );
				}

				// First Load
				self.movement( minus );

				// Scroll
				window.addEventListener( 'scroll', function () {
					self.movement( minus );
				}, { passive: true } );

			}

			return this;
		},

		movement: function ( minus ) {
			var self = this,
				$el = this.options.wrapper,
				$window = $( window ),
				scrollTop = $window.scrollTop(),
				elementOffset = $el.offset().top,
				currentElementOffset = ( elementOffset - scrollTop );

			var scrollPercent = 100 * currentElementOffset / ( $window.height() );

			if ( elementOffset + $el.height() >= scrollTop && elementOffset <= scrollTop + window.innerHeight ) {

				if ( !self.options.horizontal ) {

					$el.css( {
						transform: 'translate3d(0, ' + minus + scrollPercent / self.options.speed + '%, 0)'
					} );

				} else {

					$el.css( {
						transform: 'translate3d(' + minus + scrollPercent / self.options.speed + '%, ' + minus + scrollPercent / self.options.speed + '%, 0)'
					} );

				}
			}
		}
	};

	// expose to scope
	$.extend( theme, {
		PluginFloatElement: PluginFloatElement
	} );

	// jquery plugin
	$.fn.themePluginFloatElement = function ( opts ) {
		return this.map( function () {
			var $this = $( this );

			if ( $this.data( instanceName ) ) {
				return $this.data( instanceName );
			} else {
				return new PluginFloatElement( $this, opts );
			}

		} );
	}

} ).apply( this, [ window.theme, jQuery ] );


// Init Theme
function porto_init( $wrap ) {
	'use strict';
	jQuery( window ).on( 'touchstart', function () { } );
	if ( !$wrap ) {
		$wrap = jQuery( document.body );
	}
	var wrapObj = $wrap.get( 0 );
	$wrap.trigger( 'porto_init_start', [ wrapObj ] );

	( function ( $ ) {
		// Accordion
		if ( $.fn.themeAccordion ) {

			$( function () {
				$wrap.find( '.accordion:not(.manual)' ).each( function () {
					var $this = $( this ),
						opts;

					var pluginOptions = $this.data( 'plugin-options' );
					if ( pluginOptions )
						opts = pluginOptions;

					$this.themeAccordion( opts );
				} );
			} );
		}

		// Accordion Menu
		if ( $.fn.themeAccordionMenu ) {

			$( function () {
				$wrap.find( '.accordion-menu:not(.manual)' ).each( function () {
					var $this = $( this ),
						opts;

					var pluginOptions = $this.data( 'plugin-options' );
					if ( pluginOptions )
						opts = pluginOptions;

					$this.themeAccordionMenu( opts );
				} );
			} );

		}

		// Chart.Circular
		if ( $.fn.themeChartCircular ) {
			var $objects = wrapObj.querySelectorAll( '[data-plugin-chart-circular]:not(.manual), .circular-bar-chart:not(.manual)' );
			if ( $objects.length ) {
				theme.dynIntObsInit( $objects, 'themeChartCircular', theme.ChartCircular.defaults );
			}

		}

		// Fit Video
		if ( $.fn.themeFitVideo ) {

			$( function () {
				$wrap.find( '.fit-video:not(.manual)' ).each( function () {
					var $this = $( this ),
						opts;

					var pluginOptions = $this.data( 'plugin-options' );
					if ( pluginOptions )
						opts = pluginOptions;

					$this.themeFitVideo( opts );
				} );
			} );

		}

		// Video Background
		if ( $.fn.themePluginVideoBackground ) {

			$( function () {
				$wrap.find( '[data-plugin-video-background]:not(.manual)' ).each( function () {
					var $this = $( this ),
						opts;

					var pluginOptions = theme.getOptions( $this.data( 'plugin-options' ) );
					if ( pluginOptions )
						opts = pluginOptions;

					$this.themePluginVideoBackground( opts );
				} );
			} );

		}

		// Flickr Zoom
		if ( $.fn.themeFlickrZoom ) {

			$( function () {
				$wrap.find( '.wpb_flickr_widget:not(.manual)' ).each( function () {
					var $this = $( this ),
						opts;

					var pluginOptions = $this.data( 'plugin-options' );
					if ( pluginOptions )
						opts = pluginOptions;

					$this.themeFlickrZoom( opts );
				} );
			} );

		}

		// Lazy Load
		if ( $.fn.themePluginLazyLoad ) {

			$( function () {
				$wrap.find( '[data-plugin-lazyload]:not(.manual)' ).each( function () {
					var $this = $( this ),
						opts;

					var pluginOptions = $this.data( 'plugin-options' );
					if ( pluginOptions )
						opts = pluginOptions;
					$this.themePluginLazyLoad( opts );
				} );

				$wrap.find( '.porto-lazyload' ).filter( function () {
					if ( $( this ).data( '__lazyload' ) || ( $( this ).closest( '.owl-carousel' ).length && $( this ).closest( '.owl-carousel' ).find( '.owl-item.cloned' ).length ) ) {
						return false;
					}
					return true;
				} ).themePluginLazyLoad( { effect: 'fadeIn', effect_speed: 400 } );
				if ( $wrap.find( '.porto-lazyload' ).closest( '.nivoSlider' ).length ) {
					theme.requestTimeout( function () {
						$wrap.find( '.nivoSlider' ).each( function () {
							if ( $( this ).find( '.porto-lazyload' ).length ) {
								$( this ).closest( '.nivoSlider' ).find( '.nivo-main-image' ).attr( 'src', $( this ).closest( '.nivoSlider' ).find( '.porto-lazyload' ).eq( 0 ).attr( 'src' ) );
							}
						} );
					}, 100 );
				}
				if ( $wrap.find( '.porto-lazyload' ).closest( '.porto-carousel-wrapper' ).length ) {
					theme.requestTimeout( function () {
						$wrap.find( '.porto-carousel-wrapper' ).each( function () {
							if ( $( this ).find( '.porto-lazyload:not(.lazy-load-loaded)' ).length ) {
								$( this ).find( '.slick-list' ).css( 'height', 'auto' );
								//$( this ).find( '.porto-lazyload:not(.lazy-load-loaded)' ).trigger( 'appear' );
							}
						} );
					}, 100 );
				}
			} );

		}

		// Masonry
		if ( $.fn.themeMasonry ) {

			$( function () {
				$wrap.find( '[data-plugin-masonry]:not(.manual)' ).each( function () {
					var $this = $( this ),
						opts;
					if ( $this.hasClass( 'elementor-row' ) ) {
						$this.children( '.elementor-column' ).addClass( 'porto-grid-item' );
					}
					var pluginOptions = $this.data( 'plugin-options' );
					if ( pluginOptions )
						opts = pluginOptions;
					$this.themeMasonry( opts );
				} );
				$wrap.find( '.posts-masonry .posts-container:not(.manual)' ).each( function () {
					var pluginOptions = $( this ).data( 'plugin-options' );
					if ( !pluginOptions ) {
						pluginOptions = {};
					}
					pluginOptions.itemSelector = '.post';
					$( this ).themeMasonry( pluginOptions );
				} );
				$wrap.find( '.page-portfolios .portfolio-row:not(.manual)' ).each( function () {
					if ( $( this ).closest( '.porto-grid-container' ).length > 0 || typeof $( this ).attr( 'data-plugin-masonry' ) != 'undefined' ) {
						return;
					}
					var $parent = $( this ).parent(), layoutMode = 'masonry', options, columnWidth = '.portfolio:not(.w2)', timer = null;

					if ( $parent.hasClass( 'portfolios-grid' ) ) {
						//layoutMode = 'fitRows';
					} else if ( $parent.hasClass( 'portfolios-masonry' ) ) {
						if ( !$parent.children( '.bounce-loader' ).length ) {
							$parent.append( '<div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>' );
						}
					}

					options = {
						itemSelector: '.portfolio',
						layoutMode: layoutMode,
						callback: function () {
							timer && clearTimeout( timer );
							timer = setTimeout( function () {
								if ( typeof theme.FilterZoom !== 'undefined' ) {
									theme.FilterZoom.initialize( $( '.page-portfolios' ) );
								}
								$parent.addClass( 'portfolio-iso-active' );
							}, 400 );
						}
					};
					if ( layoutMode == 'masonry' ) {
						if ( !$parent.find( '.portfolio:not(.w2)' ).length )
							columnWidth = '.portfolio';
						options = $.extend( true, {}, options, {
							masonry: { columnWidth: columnWidth }
						} );
					}

					$( this ).themeMasonry( options );

				} );
				$wrap.find( '.page-members .member-row:not(.manual)' ).each( function () {
					$( this ).themeMasonry( {
						itemSelector: '.member',
						//layoutMode: 'fitRows',
						callback: function () {
							setTimeout( function () {
								if ( typeof theme.FilterZoom !== 'undefined' ) {
									theme.FilterZoom.initialize( $( '.page-members' ) );
								}
							}, 400 );
						}
					} );
				} );
			} );

		}

		// Preview Image
		if ( $.fn.themePreviewImage ) {

			$( function () {
				$wrap.find( '.thumb-info-preview .thumb-info-image:not(.manual)' ).each( function () {
					var $this = $( this ),
						opts;

					var pluginOptions = $this.data( 'plugin-options' );
					if ( pluginOptions )
						opts = pluginOptions;

					$this.themePreviewImage( opts );
				} );
			} );

		}

		// Toggle
		if ( $.fn.themeToggle ) {

			$( function () {
				$wrap.find( 'section.toggle:not(.manual)' ).each( function () {
					var $this = $( this ),
						opts;

					var pluginOptions = $this.data( 'plugin-options' );
					if ( pluginOptions )
						opts = pluginOptions;

					$this.themeToggle( opts );
				} );
			} );

		}

		// Parallax
		if ( $.fn.themeParallax ) {

			$( function () {
				$wrap.find( '[data-plugin-parallax]:not(.manual)' ).each( function () {
					var $this = $( this ),
						opts;

					var pluginOptions = $this.data( 'plugin-options' );
					if ( pluginOptions )
						opts = pluginOptions;

					$this.themeParallax( opts );
				} );
			} );

		}

		// Sticky
		if ( $.fn.themeSticky ) {

			$( function () {
				$wrap.find( '[data-plugin-sticky]:not(.manual), .porto-sticky:not(.manual), .porto-sticky-nav:not(.manual)' ).each( function () {
					var $this = $( this ),
						opts;

					var pluginOptions = $this.data( 'plugin-options' );
					if ( pluginOptions )
						opts = pluginOptions;
					if ( $this.is( ':visible' ) ) {
						$this.themeSticky( opts );
					}
				} );
			} );
		}

		// Float Element
		if ( $.fn[ 'themePluginFloatElement' ] ) {

			$( function () {
				$wrap.find( '[data-plugin-float-element]:not(.manual)' ).each( function () {
					var $this = $( this ),
						opts;

					var pluginOptions = theme.getOptions( $this.data( 'plugin-options' ) );
					if ( pluginOptions )
						opts = pluginOptions;

					$this.themePluginFloatElement( opts );
				} );
			} );
		}

		/* Common */

		if ( typeof bootstrap != 'undefined' ) {
			// Tooltip
			var tooltipTriggerList = [].slice.call( wrapObj.querySelectorAll( "[data-bs-tooltip]:not(.manual), [data-toggle='tooltip']:not(.manual), .star-rating:not(.manual)" ) );
			tooltipTriggerList.map( function ( tooltipTriggerEl ) {
				return new bootstrap.Tooltip( tooltipTriggerEl )
			} );

			// bootstrap popover
			var popoverTriggerList = [].slice.call( wrapObj.querySelectorAll( "[data-toggle='popover']" ) );
			popoverTriggerList.map( function ( popoverTriggerEl ) {
				return new bootstrap.Popover( popoverTriggerEl )
			} );
		}

		// Tabs
		$wrap.find( 'a[data-bs-toggle="tab"]' ).off( 'shown.bs.tab' ).on( 'shown.bs.tab', function ( e ) {
			$( this ).parents( '.nav-tabs' ).find( '.active' ).removeClass( 'active' );
			$( this ).addClass( 'active' ).parent().addClass( 'active' );
		} );

		if ( $.fn.vcwaypoint ) {
			// Progress bar tooltip
			$wrap.find( '.vc_progress_bar' ).each( function () {
				var $this = $( this );
				if ( !$this.find( '.progress-bar-tooltip' ).length ) {
					return;
				}
				$this.vcwaypoint( function () {
					var $tooltips = $this.find( '.progress-bar-tooltip' ),
						index = 0,
						count = $tooltips.length;
					function loop() {
						theme.requestTimeout( function () {
							$tooltips.animate( {
								opacity: 1
							} );
						}, 200 );
						index++;
						if ( index < count ) {
							loop();
						}
					}
					loop();
				}, {
					offset: '85%'
				} );
			} );
		}

		// call async functions
		if ( typeof theme.initAsync == 'function' ) {
			theme.initAsync( $wrap, wrapObj );
		} else {
			$( document.body ).on( 'porto_async_init', function () {
				theme.initAsync( $wrap, wrapObj );
			} );
		}

	} )( jQuery );


	jQuery( document.body ).trigger( 'porto_init', [ $wrap ] );
}

( function ( theme, $ ) {

	'use strict';

	$( document ).ready( function () {
		// update adminbar height
		var win_width = 0;
		$( window ).smartresize( function() {
			if ( win_width != window.innerWidth ) {
				theme.adminBarHeightNum = null;
				win_width = window.innerWidth;
			}
		} );

		// Scroll to Top
		if ( typeof theme.ScrollToTop !== 'undefined' ) {
			theme.ScrollToTop.initialize();
		}
		setTimeout( function () {
			// Init Porto Theme
			porto_init();
		}, 0 );

		( function () {
			theme.bodyWidth = theme.bodyWidth || document.body.offsetWidth;
			// Mega Menu
			if ( typeof theme.MegaMenu !== 'undefined' ) {
				theme.MegaMenu.initialize();
			}
			// Sidebar Menu
			if ( typeof theme.SidebarMenu !== 'undefined' ) {
				theme.SidebarMenu.initialize();

				$( '.sidebar-menu.side-menu-accordion' ).themeAccordionMenu( { 'open_one': true } );
			}
		} )();
		( function () {
			// Overlay Menu
			if ( $( '.porto-popup-menu' ).length ) {
				$( '.porto-popup-menu .hamburguer-btn' ).on( 'click', function ( e ) {
					e.preventDefault();
					var $this = $( this );
					if ( $( '.porto-popup-menu-spacer' ).length ) {
						$( '.porto-popup-menu-spacer' ).remove();
					} else {
						$( '<div class="porto-popup-menu-spacer"></div>' ).insertBefore( $this.parent() );
						$( '.porto-popup-menu-spacer' ).width( $this.parent().width() );
					}
					$this.parent().toggleClass( 'opened' );
					theme.requestFrame( function () {
						$this.toggleClass( 'active' );
					} );
				} );
				$( '.porto-popup-menu .main-menu' ).scrollbar();
				$( '.porto-popup-menu' ).on( 'click', 'li.menu-item-has-children > a', function ( e ) {
					e.preventDefault();
					$( this ).parent().siblings( 'li.menu-item-has-children.opened' ).removeClass( 'opened' );
					$( this ).parent().toggleClass( 'opened' );
				} );
			}
			// Lazy load Menu
			if ( js_porto_vars.lazyload_menu ) {
				var menu_type, $menu_obj, porto_menu_loaded = false;
				if ( $( '.secondary-menu.mega-menu' ).length ) {
					menu_type = 'secondary_menu';
					$menu_obj = $( '.mega-menu.main-menu' );
				} else if ( $( '.mega-menu.main-menu:not(.scroll-wrapper)' ).length ) {
					menu_type = 'main_menu';
					$menu_obj = $( '.mega-menu.main-menu:not(.scroll-wrapper)' );
				} else if ( $( '.toggle-menu-wrap .sidebar-menu' ).length ) {
					menu_type = 'toggle_menu';
					$menu_obj = $( '.toggle-menu-wrap .sidebar-menu' );
				} else if ( $( '.main-sidebar-menu .sidebar-menu' ).length ) {
					menu_type = 'sidebar_menu';
					$menu_obj = $( '.main-sidebar-menu .sidebar-menu' );
				} else if ( $( '.header-side-nav .sidebar-menu' ).length ) {
					menu_type = 'header_side_menu';
					$menu_obj = $( '.header-side-nav .sidebar-menu' );
				}

				if ( $menu_obj && $menu_obj.length ) {
					if ( 'pageload' == js_porto_vars.lazyload_menu ) {
						theme.lazyload_menu( $menu_obj, menu_type );
					} else if ( 'firsthover' == js_porto_vars.lazyload_menu ) {
						$menu_obj.one( 'mouseenter touchstart', 'li.menu-item-has-children', function () {
							if ( porto_menu_loaded ) {
								return true;
							}
							theme.lazyload_menu( $menu_obj, menu_type );
							porto_menu_loaded = true;
						} );
					}
				}
			}
			// Side Navigation
			if ( typeof theme.SideNav !== 'undefined' ) {
				theme.SideNav.initialize();
			}
			// Sticky Header
			if ( typeof theme.StickyHeader !== 'undefined' ) {
				theme.StickyHeader.initialize();
			}
		} )();


		// Hash Scroll
		if ( typeof theme.HashScroll !== 'undefined' ) {
			theme.HashScroll.initialize();
		}

		// Common

		// skeleton screens
		if ( js_porto_vars.use_skeleton_screen.length > 0 && $( '.skeleton-loading' ).length ) {
			var dclFired = false,
				dclPromise = ( function () {
					var deferred = $.Deferred();
					$( function () {
						deferred.resolve();
						dclFired = true;
					} );
					return deferred.promise();
				} )(),
				observer = false,
				NativeMutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver;
			if ( typeof NativeMutationObserver != 'undefined' ) {
				observer = new NativeMutationObserver( function ( mutationsList, observer ) {
					for ( var i in mutationsList ) {
						var mutation = mutationsList[ i ];
						if ( mutation.type == 'childList' ) {
							$( mutation.target ).trigger( 'skeleton:initialised' );
						}
					}
				} );
			}
			var killObserverTrigger = setTimeout( function () {
				if ( observer ) {
					observer.disconnect();
					observer = undefined;
				}
			}, 4000 );
			var skeletonTimer;
			$( '.skeleton-loading' ).each( function ( e ) {
				var $this = $( this ),
					skeletonInitialisedPromise = ( function () {
						var deferred = $.Deferred();
						$this.on( 'skeleton:initialised', function ( evt ) {
							if ( evt.target.classList.contains( 'skeleton-loading' ) ) {
								deferred.resolve( evt );
							}
						} );
						return deferred.promise();
					} )(),
					resourcesLoadedPromise = ( function () {
						return $.Deferred().resolve().promise();
					} )();
				$.when( skeletonInitialisedPromise, resourcesLoadedPromise, dclPromise ).done( function ( e ) {
					var $real = $( e.target ),
						$placeholder = $real.siblings( '.skeleton-body' );
					if ( !$placeholder.length ) {
						$placeholder = $real.parent().parent().parent().find( '[class="' + $real.attr( 'class' ).replace( 'skeleton-loading', 'skeleton-body' ) + '"]' );
					}
					porto_init( $real );
					if ( $real.find( '.sidebar-menu:not(.side-menu-accordion)' ).length ) {
						theme.SidebarMenu.initialize( $real.find( '.sidebar-menu:not(.side-menu-accordion)' ) );
					}
					if ( skeletonTimer ) {
						theme.deleteTimeout( skeletonTimer );
					}
					$real.trigger( 'skeleton-loaded' );
					theme.requestTimeout( function () {
						if ( $placeholder.length ) {
							// fix YITH Products Filters compatibility issue
							if ( $placeholder.parent().hasClass( 'yit-wcan-container' ) ) {
								$placeholder.parent().remove();
							} else {
								$placeholder.remove();
							}
						}
						$real.removeClass( 'skeleton-loading' );
						if ( $real.closest( '.skeleton-loading-wrap' ) ) {
							$real.closest( '.skeleton-loading-wrap' ).removeClass( 'skeleton-loading-wrap' );
						}
						if ( $( document.body ).hasClass( 'elementor-default' ) || $( document.body ).hasClass( 'elementor-page' ) ) {
							$( window ).trigger( 'resize' );
						}
						theme.refreshStickySidebar( false );
					}, 100 );
					if ( !$( '.skeleton-loading' ).length ) {
						clearTimeout( killObserverTrigger );
						observer.disconnect();
						observer = undefined;
					}
				} );
				if ( $this.children( 'script[type="text/template"]' ).length ) {
					var content = $( JSON.parse( $this.children( 'script[type="text/template"]' ).eq( 0 ).html() ) );
					$this.children( 'script[type="text/template"]' ).eq( 0 ).remove();
					if ( observer ) {
						observer.observe( this, { childList: true, subtree: false } );
					}
					$this.append( content );
					if ( !observer ) {
						$this.trigger( 'skeleton:initialised' );
					}
				}
			} );
		}

		$( document ).trigger( 'porto_theme_init' );

	} );
	$( window ).on( 'load', function () {
		setTimeout( function () {
			// Search
			if ( typeof theme.Search !== 'undefined' ) {
				theme.Search.initialize();
			}
		}, 0 );
		// Sort Filter
		if ( typeof theme.SortFilter !== 'undefined' ) {
			theme.SortFilter.initialize();
		}

		// Mobile Sidebar
		// filter popup events
		$( document ).on( 'click', '.sidebar-toggle', function ( e ) {
			e.preventDefault();
			var $html = $( 'html' );
			if ( $( this ).siblings( '.porto-product-filters' ).length ) {
				if ( $html.hasClass( 'filter-sidebar-opened' ) ) {
					$html.removeClass( 'filter-sidebar-opened' );
					$( '.sidebar-overlay' ).removeClass( 'active' );
				} else {
					$html.removeClass( 'sidebar-opened' );
					$html.addClass( 'filter-sidebar-opened' );
					$( '.sidebar-overlay' ).addClass( 'active' );
				}
			} else {
				if ( $html.hasClass( 'sidebar-opened' ) ) {
					$html.removeClass( 'sidebar-opened' );
					$( '.sidebar-overlay' ).removeClass( 'active' );
				} else {
					$html.addClass( 'sidebar-opened' );
					$( '.sidebar-overlay' ).addClass( 'active' );
					//$( '.mobile-sidebar' ).find( '.porto-lazyload:not(.lazy-load-loaded)' ).trigger( 'appear' );
				}
			}
		} );

		$( '.minicart-offcanvas .cart-head' ).on( 'click', function () {
			$( this ).closest( '.minicart-offcanvas' ).toggleClass( 'minicart-opened' );
		} );
		$( '.minicart-offcanvas .minicart-overlay' ).on( 'click', function () {
			$( this ).closest( '.minicart-offcanvas' ).removeClass( 'minicart-opened' );
		} );

		$( document.body ).on( 'click', '.sidebar-overlay', function () {
			$( 'html' ).removeClass( 'sidebar-opened' );
			$( 'html' ).removeClass( 'filter-sidebar-opened' );
			$( this ).removeClass( 'active' );
		} );

		$( window ).on( 'resize', function ( e ) {
			if ( e.originalEvent && window.innerWidth > 991 && $( 'html' ).hasClass( 'sidebar-opened' ) ) {
				$( '.sidebar-overlay' ).trigger( 'click' );
			}
		} );

		// Match Height
		var $matchHeightObj = $( '.tabs-simple .featured-box .box-content, .porto-content-box .featured-box .box-content, .vc_general.vc_cta3, .match-height' );
		if ( $matchHeightObj.length ) {
			if ( $.fn.matchHeight ) {
				$matchHeightObj.matchHeight();
			} else {
				var script = document.createElement( "script" );
				script.addEventListener( "load", function ( event ) {
					$matchHeightObj.matchHeight();
				} );
				script.src = js_porto_vars.ajax_loader_url.replace( '/images/ajax-loader@2x.gif', '/js/libs/jquery.matchHeight.min.js' );
				script.async = true;
				document.body.appendChild( script );
			}
		}

		// WhatsApp Sharing
		if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ) {
			$( '.share-whatsapp' ).css( 'display', 'inline-block' );
		}
		$( document ).ajaxComplete( function ( event, xhr, options ) {
			if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ) {
				$( '.share-whatsapp' ).css( 'display', 'inline-block' );
			}
		} );

		// Add Ege Browser Class
		var ua = window.navigator.userAgent,
			ie12 = ua.indexOf( 'Edge/' ) > 0;
		if ( ie12 ) $( 'html' ).addClass( 'ie12' );

		// Portfolio Link Lightbox
		$( document ).on( 'click', '.portfolios-lightbox a.portfolio-link', function ( e ) {
			$( this ).find( '.thumb-info-zoom' ).trigger( 'click' );
			return false;
		} );

		$( '.porto-faqs' ).each( function () {
			if ( $( this ).find( '.faq .toggle.active' ).length < 1 ) {
				$( this ).find( '.faq' ).eq( 0 ).find( '.toggle' ).addClass( 'active' );
				$( this ).find( '.faq' ).eq( 0 ).find( '.toggle-content' ).show();
			}
		} );

		// refresh wpb content
		$( document ).on( 'shown.bs.collapse', '.collapse', function () {
			var panel = $( this );
			theme.refreshVCContent( panel );
		} );
		$( document ).on( 'shown.bs.tab', 'a[data-bs-toggle="tab"]', function ( e ) {
			var panel = $( $( e.target ).attr( 'href' ) );
			theme.refreshVCContent( panel );
		} );

		// porto tooltip for header, footer
		$( '.porto-tooltip .tooltip-icon' ).on( 'click', function () {
			if ( $( this ).parent().children( ".tooltip-popup" ).css( "display" ) == "none" ) {
				$( this ).parent().children( ".tooltip-popup" ).fadeIn( 200 );
			} else {
				$( this ).parent().children( ".tooltip-popup" ).fadeOut( 200 );
			}
		} );
		$( '.porto-tooltip .tooltip-close' ).on( 'click', function () {
			$( this ).parent().fadeOut( 200 );
		} );
	} );

} ).apply( this, [ window.theme, jQuery ] );

( function ( theme, $, undefined ) {
	"use strict";

	$( document ).ready( function () {
		$( window ).on( 'vc_reload', function () {
			porto_init();
			$( '.type-post' ).addClass( 'post' );
			$( '.type-portfolio' ).addClass( 'portfolio' );
			$( '.type-member' ).addClass( 'member' );
			$( '.type-block' ).addClass( 'block' );
		} );
	} );

	/*
	* Experience Timeline
	*/
	var timelineHeightAdjust = {
		$timeline: $( '#exp-timeline' ),
		$timelineBar: $( '#exp-timeline .timeline-bar' ),
		$firstTimelineItem: $( '#exp-timeline .timeline-box' ).first(),
		$lastTimelineItem: $( '#exp-timeline .timeline-box' ).last(),

		build: function () {
			var self = this;

			self.adjustHeight();
		},
		adjustHeight: function () {
			var self = this,
				calcFirstItemHeight = ( self.$firstTimelineItem.outerHeight( true ) / 2 ) + 5,
				calcLastItemHeight = ( self.$lastTimelineItem.outerHeight( true ) / 2 ) + 5;

			// Set Timeline Bar Top and Bottom
			self.$timelineBar.css( {
				top: calcFirstItemHeight,
				bottom: calcLastItemHeight
			} );
		}
	}

	if ( $( '#exp-timeline' ).get( 0 ) ) {
		// Adjust Timeline Height On Resize
		var timeline_timer = null;
		$( window ).smartresize( function () {
			if ( timeline_timer ) {
				clearTimeout( timeline_timer );
			}
			timeline_timer = setTimeout( function () {
				timelineHeightAdjust.build();
			}, 800 );
		} );

		timelineHeightAdjust.build();
	}

	$( '.custom-view-our-location' ).on( 'click', function ( e ) {
		e.preventDefault();
		var this_ = $( this );
		$( '.custom-googlemap' ).slideDown( '1000', function () {
			this_.delay( 700 ).hide();
		} );
	} );

} )( window.theme, jQuery );

// Porto 4.0 extra shortcodes
( function ( theme, $, undefined ) {
	'use strict';

	// porto ultimate heading
	function porto_headings_init() {
		$( '.porto-u-heading' ).each( function () {
			var align = $( this ).attr( 'data-halign' ),
				spacer = $( this ).attr( 'data-hspacer' );

			if ( spacer == 'line_only' ) {
				if ( align == 'right' || align == 'left' ) {
					if ( $( this ).find( '.porto-u-heading-spacer' ).find( '.porto-u-headings-line' )[ 0 ].style.width != 'auto' ) {
						$( this ).find( '.porto-u-heading-spacer' ).find( '.porto-u-headings-line' ).css( { 'float': align } );
					}
				} else {
					$( this ).find( '.porto-u-heading-spacer' ).find( '.porto-u-headings-line' ).css( { 'margin': '0 auto' } );
				}
			}
		} );
	}

	window.onload = function () {
		theme.isLoaded = true;
	};

	$( document ).ready( function () {
		porto_headings_init();
		if ( typeof elementorFrontend != 'undefined' ) {
			// fix Elementor ScrollTop
			$( window ).on( 'elementor/frontend/init', function () {
				elementorFrontend.hooks.addFilter( 'frontend/handlers/menu_anchor/scroll_top_distance', function ( scrollTop ) {
					if ( theme && theme.StickyHeader && typeof theme.sticky_nav_height != 'undefined' ) {
						if ( elementorFrontend.elements.$wpAdminBar.length ) {
							scrollTop += elementorFrontend.elements.$wpAdminBar.height();
						}
						scrollTop = scrollTop - theme.adminBarHeight() - theme.StickyHeader.sticky_height - theme.sticky_nav_height + 1;
					}
					return scrollTop;
				} );
			} );
		}

		if ( js_porto_vars.user_edit_pages ) {
			var porto_init_builder_tooltip = function ( obj ) {
				var tooltipTriggerList = [].slice.call( obj.querySelectorAll( '.pb-edit-link' ) );
				tooltipTriggerList.map( function ( o ) {
					var title = o.getAttribute( 'data-title' );
					if ( o.nextSibling && o.nextSibling.classList.contains( 'porto-block' ) ) {
						var tooltipobj = o.nextSibling;
						tooltipobj.classList.add( 'has-pb-edit' );
						var tooltip_ins = new bootstrap.Tooltip( tooltipobj, {
							html: true,
							template: '<div class="tooltip porto-tooltip-wrap" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
							trigger: 'manual',
							title: '<a href="' + o.getAttribute( 'data-link' ) + '"><i class="porto-icon-edit me-1"></i>' + title + '</a>',
							delay: 300
						} );
						if ( tooltip_ins && tooltip_ins._element ) {
							tooltip_ins._element.addEventListener( 'mouseenter', function ( e ) {
								tooltip_ins._enter( e, tooltip_ins );
							} );
							tooltip_ins._element.addEventListener( 'mouseleave', function ( e ) {
								tooltip_ins._leave( e, tooltip_ins );
							} );
						}
					}

					o.parentNode.removeChild( o );
				} );
			};
			porto_init_builder_tooltip( document.body );
			$( '.skeleton-loading' ).on( 'skeleton-loaded', function () {
				porto_init_builder_tooltip( this );
			} );
			$( document.body ).on( 'mouseenter mouseleave', '.porto-tooltip-wrap[role="tooltip"]', function ( e ) {
				var $element = $( '.porto-block[aria-describedby="' + $( this ).attr( 'id' ) + '"]' );
				if ( $element.length ) {
					var ins = bootstrap.Tooltip.getInstance( $element.get( 0 ) );
					if ( ins ) {
						var fn_name = 'mouseenter' == e.type ? '_enter' : '_leave';
						ins[ fn_name ]( e, ins );
					}
				}
			} ).on( 'porto_init_start', function ( e, wrapObj ) {
				// init edit tooltip
				if ( wrapObj.classList.contains( 'porto-posts-grid' ) ) {
					porto_init_builder_tooltip( wrapObj );
				}
			} );
		}
	} );

	/* Advanced Buttons */
	$( '.porto-btn[data-hover]' ).on( 'mouseenter', function () {
		var hoverColor = $( this ).data( 'hover' ),
			hover_border_color = $( this ).data( 'border-hover' );
		if ( hoverColor ) {
			$( this ).data( 'originalColor', $( this ).css( 'color' ) );
			$( this ).css( 'color', hoverColor );
		}
		if ( hover_border_color ) {
			$( this ).data( 'originalBorderColor', $( this ).css( 'border-color' ) );
			$( this ).css( 'border-color', hover_border_color );
		}
	} ).on( 'mouseleave', function () {
		var originalColor = $( this ).data( 'originalColor' ),
			original_border_color = $( this ).data( 'originalBorderColor' );
		if ( originalColor ) {
			$( this ).css( 'color', originalColor );
		}
		if ( original_border_color ) {
			$( this ).css( 'border-color', original_border_color );
		}
	} );

	// widget wysija
	$( '#footer .widget_wysija .wysija-submit:not(.btn)' ).addClass( 'btn btn-default' );

	// fixed visual compoer issue which has owl carousel
	if ( $( '[data-vc-parallax] .owl-carousel' ).length ) {
		theme.requestTimeout( function () { if ( typeof window.vcParallaxSkroll == 'object' ) { window.vcParallaxSkroll.refresh(); } }, 200 );
	}

	if ( $( '.page-content > .alignfull, .post-content > .alignfull' ).length ) {
		var initAlignFull = function () {
			$( '.page-content > .alignfull, .post-content > .alignfull' ).each( function () {
				$( this ).css( 'left', -1 * $( this ).parent().offset().left ).css( 'right', -1 * $( this ).parent().offset().left ).css( 'width', $( 'body' ).width() - ( parseInt( $( this ).css( 'margin-left' ), 10 ) + parseInt( $( this ).css( 'margin-right' ), 10 ) ) );
			} );
		};
		initAlignFull();
		$( window ).smartresize( function () {
			initAlignFull();
		} );
	}
} )( window.theme, jQuery );

// Porto Sticky icon bar on mobile
( function ( theme, $ ) {
	'use strict';

	var $header_main = $( '#header .header-main' );
	var $menu_wrap = $( '#header .main-menu-wrap' );
	if ( $( '.porto-sticky-navbar' ).length > 0 ) {
		window.addEventListener( 'scroll', function () {
			if ( window.innerWidth < 576 ) {
				var headerOffset = -1;
				var scrollTop = $( window ).scrollTop();

				if ( $header_main.length ) {
					headerOffset = Math.max( $header_main.scrollTop() + $header_main.height(), headerOffset );
				}
				if ( $menu_wrap.length ) {
					headerOffset = Math.max( $menu_wrap.scrollTop() + $menu_wrap.height(), headerOffset );
				}
				if ( headerOffset <= 0 ) {
					if ( $( '#header' ).length > 0 && $( '#header' ).height() > 10 ) headerOffset = $( '#header' ).scrollTop() + $( '#header' ).height();
					else headerOffset = 100;
				}
				if ( headerOffset <= scrollTop ) {
					$( '.porto-sticky-navbar' ).addClass( 'fixed' );
				} else {
					$( '.porto-sticky-navbar' ).removeClass( 'fixed' );
				}
			}
		}, { passive: true } );
	}
} )( window.theme, jQuery );
