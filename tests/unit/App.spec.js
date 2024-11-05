import { mount } from '@vue/test-utils';

import App from '@/App.vue';

describe('App.vue', () => {
  it('renders app', () => {
    const wrapper = mount(App);

    expect(wrapper.exists()).toBeTruthy();
  });
});
