import Contact from '../dist/Contact';

export default {
  title: 'Contact',
  // argTypes: {
  // },
};

export const ContactPage = (args) => {
  const div = document.createElement('div');
  new Contact().start(div);
  return div;
};
// ContactPage.args = {};