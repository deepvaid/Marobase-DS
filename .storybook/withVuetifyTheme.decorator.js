import { h } from 'vue';
import StoryWrapper from './StoryWrapper.vue';

export const withVuetifyTheme = (story, context) => {
  const themeName = context.globals.theme || 'light';

  return {
    setup() {
      return () => h(StoryWrapper, { themeName }, {
        story: () => h(story())
      });
    }
  };
};
