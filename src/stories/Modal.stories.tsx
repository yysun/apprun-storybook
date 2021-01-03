import app from 'apprun';
import Modal from '../modal';

export default {
  title: 'Modal',
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: false },
      description: 'title',
      control: {
        type: 'text'
      }
    },

    body: {
      name: 'body',
      type: { name: 'string', required: false },
      description: 'body',
      control: {
        type: 'text'
      }
    },

    event: {
      name: 'event',
      type: { name: 'string', required: false },
      description: 'event',
      control: {
        type: 'text'
      }
    },

    route: {
      name: 'route',
      type: { name: 'string', required: false },
      description: 'route',
      control: {
        type: 'text'
      }
    }
  },
};

export const Modal_Component = (args) => {
  console.log(args);
  const div = document.createElement('div');
  app.render(div, <Modal {...args} />);
  return div;
};
Modal_Component.args = {
  title: 'modal title',
  body: 'modal body'
};

export const Modal_Event = ({ event }) => {
  const div = document.createElement('div');
  const component = new Modal().mount(div);
  const e = JSON.parse(event);
  const [name, ...params] = e;
  component.run(name, ...params);
  return div;
};
Modal_Event.args = {
  event: '["@show-modal", {"title": "title", "body": "body"}]',
};

export const Modal_Route = ({ route }) => {
  const div = document.createElement('div');
  new Modal().mount(div);
  app.route(route);
  return div;
};

Modal_Route.args = {
  route: '#Modal/1/2/3',
};