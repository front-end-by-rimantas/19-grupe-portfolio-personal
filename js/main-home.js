/***************
ALL IMPORTS
****************/
/* header */
import { renderHeader } from './components/header/renderHeader.js';
import { headerData } from './data/headerData.js';
$(window).scroll(function() {
    $('header').toggleClass('scroll', $(this).scrollTop() > 114);
  });
/* this is me */
/* about me */
/* services */
/* projects completed */
/* projects */
/* clients feedback about me */
/* choose your plan */
import { renderPlans } from './components/plans/renderPlans.js';
import { plansData } from './data/plansData.js';
/* posts */
/* partners */
/* footer */

/***************
EXECUTION
****************/
/* header */
renderHeader('header nav', headerData);
/* this is me */
/* about me */
/* services */
/* projects completed */
/* projects */
/* clients feedback about me */
/* choose your plan */
renderPlans('#choose-plan', plansData);
/* posts */
/* partners */
/* footer */