//



var sheets = []
if ( navigator.userAgent.indexOf( 'Mac' ) != -1 || navigator.userAgent.indexOf( 'iPhone' ) != -1 || navigator.userAgent.indexOf( 'iPad' ) != -1 ) {
	sheets.push( '/css/ionicons-ios.css' )
	document.body.classList.add( 'platform-ios' )
} else {
	sheets.push( '/css/ionicons-md.css' )
	document.body.classList.add( 'platform-android' )
}

var i, len = sheets.length
for ( i = 0; i < len; i++ ) {
	var el = document.createElement( 'link' )
	el.href = sheets[ i ]
	el.rel = "stylesheet"
	document.head.appendChild( el )
}



document.addEventListener( 'DOMContentLoaded', function ( evt ) {
	if ( location.pathname.indexOf( 'client' ) != -1 ) {
		document.getElementById( 'fixed_buttons' ).classList.add( 'hide-me' )
	}
} )



window.CAN_SLIDE = function ( TO_SLIDE ) {
	if ( TO_SLIDE == 0 ) {
		document.getElementById( 'fixed_icon' ).classList.add( 'hide-me' )
		document.getElementById( 'fixed_buttons' ).classList.add( 'hide-me' )
	} else {
		document.getElementById( 'fixed_icon' ).classList.remove( 'hide-me' )
		document.getElementById( 'fixed_buttons' ).classList.remove( 'hide-me' )
	}
}

Reveal.addEventListener( 'ready', function () {

	window.CAN_SLIDE( Reveal.getState().indexh )

	if ( Reveal.getState().indexh != 0 ) {
		document.getElementById( 'intro' ).classList.remove( 'animated' )
		document.getElementById( 'intro' ).classList.remove( 'opacity0' )
		document.getElementById( 'pitch' ).classList.remove( 'animated' )
		document.getElementById( 'pitch' ).classList.remove( 'opacity0' )
		return
	}

	setTimeout( function () {
		document.getElementById( 'intro' ).classList.remove( 'opacity0' )
		document.getElementById( 'intro' ).classList.add( 'zoomIn' )
	}, 250 )
	setTimeout( function () {
		document.getElementById( 'intro' ).classList.remove( 'animated' )
		document.getElementById( 'intro' ).classList.remove( 'zoomIn' )
		document.getElementById( 'pitch' ).classList.remove( 'opacity0' )
		document.getElementById( 'pitch' ).classList.add( 'bounceIn' )
	}, 1250 )
	setTimeout( function () {
		document.getElementById( 'pitch' ).classList.remove( 'animated' )
		document.getElementById( 'pitch' ).classList.remove( 'bounceIn' )
	}, 2250 )

	axios( {
		method: 'post',
		url: 'https://myconvoyapp.com/json/addone',
		data: {
			route: location.pathname,
			site: location.pathname,
			sessionID: Math.random().toString(),
			referrer: document.referrer,
			userAgent: navigator.userAgent,
		},
		headers: {
			'x-uuid': Math.random(),
			'x-bytes': Math.random()
		}
	} ).then( function ( response ) {} ).catch( function ( response ) {} )

} )

Reveal.addEventListener( 'slidechanged', function ( event ) {
	window.CAN_SLIDE( event.indexh )
} )

Reveal.addEventListener( "fragmentshown", function ( frag ) {
	// console.log( 'SHOW > frag >', frag.fragment.id )

	if ( frag.fragment.id == 'demo_frag' ) {
		document.getElementById( 'demo' ).pause()
		document.getElementById( 'demo' ).currentTime = 0
	} else if ( frag.fragment.id == 'demo_play' ) {
		document.getElementById( 'demo' ).play()
	} else if ( frag.fragment.id == 'demo_pause' ) {
		document.getElementById( 'demo' ).pause()
	}
} )

Reveal.addEventListener( "fragmenthidden", function ( frag ) {
	// console.log( 'HIDE > frag >', frag.fragment.id )

	if ( frag.fragment.id == 'demo_frag' ) {
		document.getElementById( 'demo' ).pause()
		document.getElementById( 'demo' ).currentTime = 0
	} else if ( frag.fragment.id == 'demo_play' ) {
		document.getElementById( 'demo' ).pause()
		document.getElementById( 'demo' ).currentTime = 0
	} else if ( frag.fragment.id == 'demo_pause' ) {
		document.getElementById( 'demo' ).play()
	}
} )

document.getElementById( 'fixed_icon' ).addEventListener( 'click', function ( evt ) {
	if ( location.pathname.indexOf( 'client' ) != -1 ) {
		return
	}
	if ( Reveal.isOverview() == true ) {
		Reveal.toggleOverview()
	}
	Reveal.slide( 0 )
} )

document.getElementById( 'fixed_revenue' ).addEventListener( 'click', function ( evt ) {
	if ( location.pathname.indexOf( 'client' ) != -1 ) {
		return
	}

	if ( location.pathname.indexOf( 'awesome' ) != -1 || location.pathname.indexOf( 'investors' ) != -1 ) {
		Reveal.slide( 20 )
		return
	} else {
		Reveal.slide( 20 )
	}

	if ( Reveal.isOverview() == false ) {
		Reveal.toggleOverview()
	}
} )

document.getElementById( 'fixed_overview' ).addEventListener( 'click', function ( evt ) {
	if ( location.pathname.indexOf( 'client' ) != -1 ) {
		return
	}
	Reveal.toggleOverview()
} )

// document.getElementById( 'fixed_fullscreen' ).addEventListener( 'click', function ( evt ) {
// 	alert( '\nPress "F"\n\n' )
// } )






// document.body.addEventListener( "scroll", function ( evt ) {
// 	console.log( 'evt >', evt )
// }, false )

// var body = document.body
// if ( body.addEventListener ) {
// 	body.addEventListener( "mousewheel", MouseWheelHandler, false )
// 	body.addEventListener( "DOMMouseScroll", MouseWheelHandler, false )
// } else {
// 	body.attachEvent( "onmousewheel", MouseWheelHandler )
// }

// function MouseWheelHandler( evt ) {
// 	var evt = window.event || evt
// 	console.log( 'evt >', evt )

// 	var deltaX = Math.max( -1, Math.min( 1, ( evt.wheelDeltaX || -evt.detail ) ) )
// 	console.log( 'deltaX >', deltaX )
// 	var deltaY = Math.max( -1, Math.min( 1, ( evt.wheelDeltaY || -evt.detail ) ) )
// 	console.log( 'deltaY >', deltaY )

// 	return false
// }





































































//

