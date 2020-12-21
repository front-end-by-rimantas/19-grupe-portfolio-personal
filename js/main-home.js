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
import { clientsFeedbackData } from './data/clientsFeedbackData.js';
import { renderClientsFeedback } from './components/clientsFeedback/Clients.js';
/* choose your plan */
import { renderPlans } from './components/plans/renderPlans.js';
import { plansData } from './data/plansData.js';
/* posts */
/* partners */
import { Partners } from './components/partners/Partners.js';
import { partnersData } from './data/partnersData.js';
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
new renderClientsFeedback({
  selector: '#testimonials_block',
  data: clientsFeedbackData,
  maxItems: 4,
  cloneCount: 2,
  visibilitystrategy: 'random',
});

/* choose your plan */
renderPlans('#choose-plan', plansData);
/* posts */
/* partners */

const partnersLogo = new Partners({
  selector:'#partners_block',
  data: partnersData,
  maxItems:7,
  cloneCount:2,
  visibilityStrategy: 'last',
});

/* footer */