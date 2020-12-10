let slides = document.querySelectorAll( '.slide' );

let buttons = document.querySelectorAll( '.btn' );

let index = 1;

// Javascript for image slider manual navigation:

let manualNav = function ( manual ) {

    slides.forEach( slide => slide.classList.remove( 'active' ) );

    buttons.forEach( btn => btn.classList.remove( 'active' ) );

    slides[ manual ].classList.add( 'active' );

    buttons[ manual ].classList.add( 'active' );

}

buttons.forEach( ( btn, i ) => {

    btn.addEventListener( 'click', _ => {

        manualNav( i );

        index = i;

    });

});

// Javascript for image slider autoplay navigation:

(function repeat () {

    let active = document.getElementsByClassName( 'active' );

    window.setInterval( _ => {

        [...active].forEach( active_slide => {

            active_slide.classList.remove( 'active' );

        });

        slides[ index ].classList.add( 'active' );

        buttons[ index ].classList.add( 'active' );

        index++;

        if ( index == slides.length ) index = 0;

    }, 10000);

}());