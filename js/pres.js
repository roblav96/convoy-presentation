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
	el = null
}





window.CAN_SLIDE = function ( slide ) {

	if ( slide == 0 ) {
		document.getElementById( 'fixed_icon' ).classList.add( 'hide-me' )
		document.getElementById( 'fixed_buttons' ).classList.add( 'hide-me' )
		document.getElementById( 'nav_left' ).classList.add( 'hide-me' )
	} else {
		document.getElementById( 'fixed_icon' ).classList.remove( 'hide-me' )
		document.getElementById( 'fixed_buttons' ).classList.remove( 'hide-me' )
		document.getElementById( 'nav_left' ).classList.remove( 'hide-me' )
	}

	if ( location.pathname.indexOf( 'client' ) != -1 ) {
		document.getElementById( 'fixed_buttons' ).classList.add( 'hide-me' )
	}

}

Reveal.addEventListener( 'ready', function () {

	window.CAN_SLIDE( Reveal.getState().indexh )

	if ( location.pathname.indexOf( 'client' ) != -1 ) {
		document.getElementById( 'fixed_buttons' ).classList.add( 'hide-me' )
	}

	if ( Reveal.getState().indexh != 0 ) {
		document.getElementById( 'intro' ).classList.remove( 'animated' )
		document.getElementById( 'intro' ).classList.remove( 'opacity0' )
		document.getElementById( 'pitch' ).classList.remove( 'animated' )
		document.getElementById( 'pitch' ).classList.remove( 'opacity0' )
		document.getElementById( 'nav_left' ).classList.remove( 'animated' )
		document.getElementById( 'nav_left' ).classList.remove( 'opacity0' )
		document.getElementById( 'nav_right' ).classList.remove( 'animated' )
		document.getElementById( 'nav_right' ).classList.remove( 'opacity0' )
		return
	}

	setTimeout( function () {
		document.getElementById( 'intro' ).classList.remove( 'opacity0' )
		document.getElementById( 'intro' ).classList.add( 'zoomIn' )
	}, 250 )
	setTimeout( function () {
		document.getElementById( 'nav_left' ).classList.remove( 'opacity0' )
		document.getElementById( 'nav_left' ).classList.add( 'bounceIn' )
		document.getElementById( 'nav_right' ).classList.remove( 'opacity0' )
		document.getElementById( 'nav_right' ).classList.add( 'bounceIn' )
	}, 750 )
	setTimeout( function () {
		document.getElementById( 'intro' ).classList.remove( 'animated' )
		document.getElementById( 'intro' ).classList.remove( 'zoomIn' )
		document.getElementById( 'pitch' ).classList.remove( 'opacity0' )
		document.getElementById( 'pitch' ).classList.add( 'bounceIn' )
	}, 1250 )
	setTimeout( function () {
		document.getElementById( 'nav_left' ).classList.remove( 'animated' )
		document.getElementById( 'nav_left' ).classList.remove( 'bounceIn' )
		document.getElementById( 'nav_right' ).classList.remove( 'animated' )
		document.getElementById( 'nav_right' ).classList.remove( 'bounceIn' )
	}, 1750 )
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
	Reveal.slide( 19 )
} )

document.getElementById( 'fixed_overview' ).addEventListener( 'click', function ( evt ) {
	if ( location.pathname.indexOf( 'client' ) != -1 ) {
		return
	}
	Reveal.toggleOverview()
} )

document.getElementById( 'nav_left_a' ).addEventListener( 'click', function ( evt ) {
	if ( location.pathname.indexOf( 'client' ) != -1 ) {
		return
	}
	Reveal.prev()
} )

document.getElementById( 'nav_right_a' ).addEventListener( 'click', function ( evt ) {
	if ( location.pathname.indexOf( 'client' ) != -1 ) {
		return
	}
	Reveal.next()
} )













































































//

