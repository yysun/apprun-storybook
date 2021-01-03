import Home from '../Home';

export default {
  title: 'Home',
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   onClick: { action: 'onClick' },
  // },
};

export const HomePage = (args) => {
  const div = document.createElement('div');
  new Home().start(div);
  return div;
};
// HomePage.args = {};


