export const load = async () => {
    const images = [
      {
        alt: 'Cosmic timetraveler',
        src: '/1.jpg',
        title: 'VISUAL ART',
        description: 'A gallery of images, possibly using svelte-lightbox. Links to google currently',
        href: '/'
      },
      {
        alt: 'Cristina Gottardi',
        src: '/2.jpg',
        title: 'Placeholder',
        description: 'yay2',
        href: '/'
      },
      {
        src: '/3.jpg',
        title: 'Poetry',
        description: 'Links to Poetry',
        href: '/Issues/Three/Poetry'
      },
      {
        src: '/4.jpg',
        title: 'Prose',
        description: 'Links to Prose',
        href: '/Issues/Three/Prose'
      }
    ];
  
    return {
      images
    };
  };
  