import { base } from '$app/paths';

export const load = async () => {
  const images = [
    {
      src: `${base}/1.jpg`,
      title: 'VISUAL ART',
      description: 'A gallery of images, possibly using svelte-lightbox. Links to google currently',
      href: 'https://www.google.co.in/' 
    },
    {
      src: `${base}/2.jpg`,
      title: 'Placeholder',
      description: 'yay2',
      href: `${base}/Issues/Three/Interview`
    },
    {
      src: `${base}/3.jpg`,
      title: 'Poetry',
      description: 'Links to Poetry',
      href: `${base}/Issues/Three/Poetry` 
    },
    {
      src: `${base}/4.jpg`,
      title: 'Prose',
      description: 'Links to Prose',
      href: `${base}/Issues/Three/Prose` 
    }
  ];

  return {
    images
  };
};
