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
import { renderFeaturedProjectsNav } from './components/featuredProjects/renderFeaturedProjectsNav.js';
import { featuredProjectsNavData } from './data/featuredProjectsNavData.js';
/* clients feedback about me */
import { clientsFeedbackData } from './data/clientsFeedbackData.js';
import { renderClientsFeedback } from './components/clientsFeedback/Clients.js';
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
renderFeaturedProjectsNav('div div .filters', featuredProjectsNavData);
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
/* footer */