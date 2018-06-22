import { configure } from '@storybook/react';

function loadStories() {
  require('antd/dist/antd.css');
  require('../src/stories');
  require('../src/stories/Auth.story');
  require('../src/stories/InvoiceList.story');
}

configure(loadStories, module);
