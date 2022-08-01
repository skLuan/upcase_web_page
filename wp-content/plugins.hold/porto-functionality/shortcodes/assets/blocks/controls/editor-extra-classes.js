export const portoAddHelperClasses = function( elClass, clientId ) {
	if ( typeof elClass == 'undefined' ) {
		return elClass;
	}
	elClass = elClass.trim();
	if ( ! elClass || ! clientId ) {
		return elClass;
	}
	const c_arr = [ 'd-inline-block', 'd-sm-inline-block', 'd-md-inline-block', 'd-lg-inline-block', 'd-xl-inline-block', 'd-none', 'd-sm-none', 'd-md-none', 'd-lg-none', 'd-xl-none', 'd-block', 'd-sm-block', 'd-md-block', 'd-lg-block', 'd-xl-block', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'd-xl-flex', 'col-auto', 'col-md-auto', 'col-lg-auto', 'col-xl-auto', 'flex-1', 'flex-none' ];
	const remove_c_arr = [ 'ml-auto', 'ms-auto', 'mr-auto', 'me-auto', 'mx-auto', 'h-100', 'h-50', 'w-100', 'float-start', 'float-end', 'pull-left', 'pull-right' ];
	/*for ( var i = 1; i <= 12; i++ ) {
		remove_c_arr.push( 'col-' + i );
		remove_c_arr.push( 'col-sm-' + i );
		remove_c_arr.push( 'col-md-' + i );
		remove_c_arr.push( 'col-lg-' + i );
		remove_c_arr.push( 'col-xl-' + i );
	}*/
	let blockObj = null;
	elClass.split( ' ' ).forEach( function( cls ) {
		cls = cls.trim();
		if ( cls && ( -1 !== c_arr.indexOf( cls ) || -1 !== remove_c_arr.indexOf( cls ) ) ) {
			if ( ! blockObj ) {
				blockObj = document.getElementById( 'block-' + clientId )
			}
			if ( blockObj ) {
				blockObj.classList.add( cls );

				/*if ( -1 !== remove_c_arr.indexOf( cls ) ) {
					elClass = elClass.replace( cls, '' ).trim();
				}*/
			}
		}
	} );

	return elClass;
};