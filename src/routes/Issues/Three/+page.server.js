export const load = async () => {
    const CardData = [
      {
        header: "Visual Art",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare fermentum orci, eget congue diam sollicitudin sed. Lorem ipsum dolor sit amet, consectetur adipiscing.",
        href: "/Issues/Three/Gallery"
      },
      {
        header: "Poetry",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare fermentum orci, eget congue diam sollicitudin sed. Lorem ipsum dolor sit amet, consectetur adipiscing.",
        href: "/Issues/Three/Poetry"
      },
      {
        header: "Prose",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare fermentum orci, eget congue diam sollicitudin sed. Lorem ipsum dolor sit amet, consectetur adipiscing.",
        href: "/Issues/Three/Prose"
      },
      {
        header: "header1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare fermentum orci, eget congue diam sollicitudin sed. Lorem ipsum dolor sit amet, consectetur adipiscing.",
        href: "/"
      },
      {
        header: "header1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare fermentum orci, eget congue diam sollicitudin sed. Lorem ipsum dolor sit amet, consectetur adipiscing.",
        href: "/"
      },
      {
        header: "header1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare fermentum orci, eget congue diam sollicitudin sed. Lorem ipsum dolor sit amet, consectetur adipiscing.",
        href: "/"
      },
    ];
  
    const teamMembers = [
      { name: 'Sam', role: 'Editor-in-Chief', src: '/1.jpg' },
      { name: 'Val', role: 'Content Head', src: '/2.jpg' },
      { name: 'Sam', role: 'Photography Head', src: '/3.jpg' },
      { name: 'Max', role: 'Photography Head', src: '/4.jpg' },
      { name: 'Sam', role: 'Layout Head', src: '/4.jpg' },
      { name: 'Alex', role: 'Layout Head', src: '/4.jpg' },
      { name: 'Max', role: 'Creative Head', src: '/4.jpg' },
    ];
  
    const LayoutDesigners = [
      { name: "name1", src: '/1.jpg' },
      { name: "name1", src: '/1.jpg' },
      { name: "name1", src: '/1.jpg' }
    ];
  
    return {
      CardData,
      teamMembers,
      LayoutDesigners
    };
  };
  