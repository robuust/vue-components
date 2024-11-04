import { mount, flushPromises } from '@vue/test-utils';

import ButtonBase from '@/components/ButtonBase.vue';

describe('ButtonBase.vue', () => {
  it('renders component', async () => {
    const wrapper = mount(ButtonBase, {
      props: {
        label: 'Foo',
        as: 'button',
      },
    });

    await flushPromises();

    expect(wrapper.text()).toContain('Foo');
  });
});
