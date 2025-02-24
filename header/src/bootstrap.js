import { createApp } from 'vue';
import Header from './components/Header.vue';

export function mount(el) {
  const app = createApp(Header);
  app.mount(el);
  return app; // Optional: Return the app instance if needed
}