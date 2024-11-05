import { mount } from '@vue/test-utils';

import ButtonBase from '@/components/ButtonBase.vue';

describe('ButtonBase.vue', () => {
  it('renders component', () => {
    const wrapper = mount(ButtonBase, {
      props: {
        label: 'Foo',
        as: 'button',
      },
    });

    expect(wrapper.text()).toContain('Foo');
  });
});
