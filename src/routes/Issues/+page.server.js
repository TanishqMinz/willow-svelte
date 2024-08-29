export const load = async () => {
    const Issues = [
        {
            number: '1',
            title: "Unexplored Spaces",
            src: "/1.jpg",
            align: 'right',
            href: '/'
        },
        {
            number: '2',
            title: "Alchemy of Warmth",
            src: "/2.jpg",
            align: 'left',
            href: '/'
        },
        {
            number: '3',
            title: "Echoes of the Morphed",
            src: "/3.jpg",
            align: 'right',
            href: "/Issues/Three"
        }
    ];

    return {
        Issues
    }
}