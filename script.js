
const faqList = document.querySelector( ".faq-list" );
const faqItems = document.querySelectorAll( ".faq-item" );
const faqItemHeadings = document.querySelectorAll( ".faq-item-heading" );
const carrots = document.querySelectorAll( ".faq-item-carrot" );

const rotateStartAll = () => {
  carrots.forEach( carrot => {
    carrot.classList.remove( "rotate" );
  } );
}

const removeBold = () => {
  faqItemHeadings.forEach( faqItemHeading => {
    faqItemHeading.classList.remove( "bold" ) 
  } );
}

const collapseFaqLists = () => {
  faqItems.forEach( faqItem => {
    faqItem.style.maxHeight = `${ faqItem.children[ 0 ].scrollHeight }px`;
  } );
}

faqItems.forEach( faqItem => {
  faqItem.style.maxHeight = `${ faqItem.children[ 0 ].scrollHeight }px`;
});

faqList.addEventListener( "click", function( event ) {
  if( event.target.classList.contains( "faq-item-title-area" ) ||
  event.target.closest( ".faq-item-title-area" ) ) {
    const faqItem = event.target.closest( ".faq-item" );
    const faqItemHeading = faqItem.querySelector( ".faq-item-heading" );
    const carrot = faqItem.querySelector( ".faq-item-carrot" );
    if( parseInt( faqItem.style.maxHeight ) < faqItem.scrollHeight ) {
      collapseFaqLists();
      removeBold();
      rotateStartAll();
      carrot.classList.add( "rotate" );
      faqItemHeading.classList.add( "bold" );
      faqItem.style.maxHeight = `${ faqItem.scrollHeight }px`;
    } else {
      removeBold();
      rotateStartAll();
      faqItem.style.maxHeight = `${ faqItem.children[ 0 ].scrollHeight }px`;
    }
  }
} );