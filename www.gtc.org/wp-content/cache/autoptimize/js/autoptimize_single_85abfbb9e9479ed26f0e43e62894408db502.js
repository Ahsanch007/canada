(function(){var initializeBlock=function(block,attr){const el=attr?block[0]:block;if('function'!=typeof jQuery){return false;}
if(!attr){jQuery(el).slick({arrows:true,cssEase:'cubic-bezier(0.39, 0.575, 0.565, 1)',dots:false,infinite:true,slidesToShow:1,speed:550,centerPadding:'0px',variableWidth:true,prevArrow:`<button type="button" class="slick-prev" aria-label="Previous">
     <svg xmlns="http://www.w3.org/2000/svg" width="23.322" height="18.843" viewBox="0 0 23.322 18.843">
      <path d="M12359.879,668.68v6.334h-8.029l12.509,12.509h-8.958l-8.03-8.03v8.03h-6.334V668.68Z" transform="translate(-12341.036 -668.68)" />
       </svg>
    </button>`,nextArrow:`<button type="button" class="slick-prev" aria-label="Next">
     <svg xmlns="http://www.w3.org/2000/svg" width="23.322" height="18.843" viewBox="0 0 23.322 18.843">
      <path d="M13453.926,668.68v6.334h8.03l-12.509,12.509h8.958l8.029-8.03v8.03h6.335V668.68Z" transform="translate(-13449.447 -668.68)" />
     </svg>
    </button>`});}else{if(el){jQuery(el).slick({arrows:true,draggable:false,dots:false,infinite:false,slidesToShow:1,centerPadding:'0px',variableWidth:true,prevArrow:`<button type="button" class="slick-prev" aria-label="Previous">
      <svg xmlns="http://www.w3.org/2000/svg" width="23.322" height="18.843" viewBox="0 0 23.322 18.843">
       <path d="M12359.879,668.68v6.334h-8.029l12.509,12.509h-8.958l-8.03-8.03v8.03h-6.334V668.68Z" transform="translate(-12341.036 -668.68)" />
      </svg>
     </button>`,nextArrow:`<button type="button" class="slick-prev" aria-label="Next">
      <svg xmlns="http://www.w3.org/2000/svg" width="23.322" height="18.843" viewBox="0 0 23.322 18.843">
       <path d="M13453.926,668.68v6.334h8.03l-12.509,12.509h8.958l8.029-8.03v8.03h6.335V668.68Z" transform="translate(-13449.447 -668.68)" />
      </svg>
     </button>`});}}};document.addEventListener('DOMContentLoaded',function(){[...document.querySelectorAll('.wp-block-acf-timeline')].forEach((glide)=>initializeBlock(glide));});if(window.acf){window.acf.addAction('render_block_preview/type=timeline',initializeBlock);}}());