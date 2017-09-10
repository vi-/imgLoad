function toggleState( e ) {
	console.log('pressed');
	let keyName = event.key;
  if (e.ctrlKey && keyName === 'r') {
    const demos = document.querySelectorAll('.demowrap');
    demos.forEach( demo => isRevealed( demo ) ? demo.classList.remove('reveal') : demo.classList.add('reveal') );
  } else {
    return;
  }
}

function isRevealed( node ) {
	return node.classList.contains('reveal');
}

window.addEventListener( 'keydown', toggleState );