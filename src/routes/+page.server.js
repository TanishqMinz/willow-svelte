import {base} from '$app/paths'

export const load = async () => {
    const images = [
      {
        alt: 'Cosmic timetraveler',
        src: `${base}/1.jpg`,
        title: 'VISUAL ART',
        description: 'A gallery of images, possibly using svelte-lightbox. Links to google currently',
        href: 'https://www.google.co.in/'
      },
      {
        alt: 'Cristina Gottardi',
        src: `${base}/2.jpg`,
        title: 'Placeholder',
        description: 'yay2'
      },
      {
        src: `${base}/3.jpg`,
        title: 'Poetry',
        description: 'Links to Poetry',
        href: '/Issues/Three/Poetry'
      },
      {
        src: `${base}/4.jpg`,
        title: 'Prose',
        description: 'Links to Prose',
        href: '/Issues/Three/Prose'
      }
    ];
  
    return {
      images
    };
  };
  