import { configure } from '@storybook/react';

function loadStories() {
  require('antd/dist/antd.css');
  require('../src/stories/Auth.story');
  require('../src/stories/InvoiceList.story');
  require('../src/stories/InvoiceEdit.story');
}

configure(loadStories, module);
