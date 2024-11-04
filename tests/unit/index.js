/* eslint-disable class-methods-use-this */
import { config } from '@vue/test-utils';

class IntersectionObserver {
  observe() { }

  unobserve() { }

  disconnect() { }
}

window.IntersectionObserver = IntersectionObserver;
window.requestAnimationFrame = vi.fn();
window.matchMedia = vi.fn().mockReturnValue({
  matches: false,
  addEventListener: vi.fn(),
});
window.setTimeout = vi.fn((cb) => cb());

HTMLCanvasElement.prototype.getContext = vi.fn();
HTMLMediaElement.prototype.pause = vi.fn();
HTMLMediaElement.prototype.play = vi.fn();

document.fonts = {
  ready: Promise.resolve(),
};

beforeAll(() => {
  config.global.renderStubDefaultSlot = true;
  config.global.stubs = {
    NuxtLink: true,
  };
});

afterAll(() => {
  config.global.renderStubDefaultSlot = false;
});
