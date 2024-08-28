export const load = async () => {
    const CardData = [
      {
        header: "Poetry",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare fermentum orci, eget congue diam sollicitudin sed. Lorem ipsum dolor sit amet, consectetur adipiscing.",
        href: "Three/Poetry"
      },
      {
        header: "Prose",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare fermentum orci, eget congue diam sollicitudin sed. Lorem ipsum dolor sit amet, consectetur adipiscing.",
        href: "Three/Prose"
      },
      {
        header: "header1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare fermentum orci, eget congue diam sollicitudin sed. Lorem ipsum dolor sit amet, consectetur adipiscing.",
        href: "#"
      },
      {
        header: "header1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare fermentum orci, eget congue diam sollicitudin sed. Lorem ipsum dolor sit amet, consectetur adipiscing.",
        href: "#"
      },
      {
        header: "header1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare fermentum orci, eget congue diam sollicitudin sed. Lorem ipsum dolor sit amet, consectetur adipiscing.",
        href: "#"
      },
      {
        header: "header1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare fermentum orci, eget congue diam sollicitudin sed. Lorem ipsum dolor sit amet, consectetur adipiscing.",
        href: "#"
      },
    ];
  
    const teamMembers = [
      { name: 'Sam', role: 'Editor-in-Chief', img: '/1.jpg' },
      { name: 'Val', role: 'Content Head', img: '/2.jpg' },
      { name: 'Sam', role: 'Photography Head', img: '/3.jpg' },
      { name: 'Max', role: 'Photography Head', img: '/4.jpg' },
      { name: 'Sam', role: 'Layout Head', img: '/4.jpg' },
      { name: 'Alex', role: 'Layout Head', img: '/4.jpg' },
      { name: 'Max', role: 'Creative Head', img: '/4.jpg' },
    ];
  
    const LayoutDesigners = [
      { name: "name1", img: '/1.jpg' },
      { name: "name1", img: '/1.jpg' },
      { name: "name1", img: '/1.jpg' }
    ];
  
    return {
      CardData,
      teamMembers,
      LayoutDesigners
    };
  };
  