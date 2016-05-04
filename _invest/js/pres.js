//

window.IS_VIEWING = true
window.CLICKS = 0

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

window.CAN_SLIDE = function ( TO_SLIDE ) {
	if ( TO_SLIDE == 0 ) {
		document.getElementById( 'fixed_icon' ).classList.add( 'hide-me' )
	} else {
		document.getElementById( 'fixed_icon' ).classList.remove( 'hide-me' )
	}

	// if ( window.IS_VIEWING == true ) {
	// 	if ( TO_SLIDE >= 20 ) {
	// 		Reveal.slide( 20 )
	// 	}
	// }
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
	}, 500 )
	setTimeout( function () {
		document.getElementById( 'intro' ).classList.remove( 'animated' )
		document.getElementById( 'intro' ).classList.remove( 'zoomIn' )
		document.getElementById( 'pitch' ).classList.remove( 'opacity0' )
		document.getElementById( 'pitch' ).classList.add( 'bounceIn' )
	}, 1500 )
	setTimeout( function () {
		document.getElementById( 'pitch' ).classList.remove( 'animated' )
		document.getElementById( 'pitch' ).classList.remove( 'bounceIn' )
	}, 2500 )

	axios( {
		method: 'post',
		url: 'https://myconvoyapp.com/api/addone',
		data: {
			route: location.pathname,
			site: location.pathname,
			sessionID: Math.random().toString(),
			referrer: document.referrer,
			stamp: new Date().getTime(),
			date: new Date(),
			userAgent: navigator.userAgent
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
	if ( location.pathname == '/client' ) {
		return
	}

	Reveal.slide( 0 )

	// if ( window.CLICKS == 5 ) {
	// 	return	
	// }

	// window.CLICKS = window.CLICKS + 1
	// if ( window.CLICKS == 5 ) {
	// 	window.IS_VIEWING = false
	// 	document.getElementById( 'contact_us' ).remove()
	// 	if ( Reveal.getState().indexh == 20 ) {
	// 		Reveal.slide( 20 )
	// 	}
	// }
} )











































































//

