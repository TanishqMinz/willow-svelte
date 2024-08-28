export const load = async () => {
    const Issues = [
        {
            number: '1',
            title: "Unexplored Spaces",
            image: "/1.jpg",
            align: 'right'
        },
        {
            number: '2',
            title: "Alchemy of Warmth",
            image: "/2.jpg",
            align: 'left'
        },
        {
            number: '3',
            title: "Echoes of the Morphed",
            image: "/3.jpg",
            align: 'right',
            href: "/Issues/Three"
        }
    ];

    return {
        Issues
    }
}