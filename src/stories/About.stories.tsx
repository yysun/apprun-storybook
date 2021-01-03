import About from '../About';

export default {
  title: 'About',
  // argTypes: {
  // },
};

export const AboutPage = (args) => {
  const div = document.createElement('div');
  new About().start(div);
  return div;
};
// AboutPage.args = {};