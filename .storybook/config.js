import { configure } from '@storybook/react';

function loadStories() {
  require('antd/dist/antd.css');
  require('../src/stories');
  require('../src/stories/Auth.story');
}

configure(loadStories, module);
