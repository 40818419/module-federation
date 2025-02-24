import { createApp } from 'vue';
import Header from './components/Header.vue';
import './index.css'

export function mount(el) {
  const app = createApp(Header);
  app.mount(el);
  return app; // Optional: Return the app instance if needed
}