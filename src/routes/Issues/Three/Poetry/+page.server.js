export const load = async () => {
    const Issues = [
        {
            type: "poetry",
            header: "Sonnet 18",
            author: "Shakespeare",
            description: "desc1",
            href: "/Issues/Three/Poetry/sonnet-18"
        },
        {
            type: "poetry",
            header: "The Raven",
            author: "Shakespeare",
            description: "desc2",
            href: "/Issues/Three/Poetry/the-raven"
        },
        {
            type: "poetry",
            header: "test3",
            author: "author3",
            description: "desc3",
            href: "/"
        },
]
    return {
        Issues
    }

}