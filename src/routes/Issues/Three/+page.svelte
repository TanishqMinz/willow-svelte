<script>
    import { Card, Button } from 'flowbite-svelte';
    export const CardData = [
        {
            header: "Poetry",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare fermentum orci, eget congue diam sollicitudin sed. Lorem ipsum dolor sit amet, consectetur adipiscing.",
            href: "Three/Poetry"
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
        {
            header: "header1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare fermentum orci, eget congue diam sollicitudin sed. Lorem ipsum dolor sit amet, consectetur adipiscing.",
            href: "#"
        },
    ]

    export const teamMembers = [
    { name: 'Sam', role: 'Editor-in-Chief', img: '/1.jpg' },
    { name: 'Val', role: 'Content Head', img: '/2.jpg' },
    { name: 'Sam', role: 'Photography Head', img: '/3.jpg' },
    { name: 'Max', role: 'Photography Head', img: '/4.jpg' },
    { name: 'Sam', role: 'Layout Head', img: '/4.jpg' },
    { name: 'Alex', role: 'Layout Head', img: '/4.jpg' },
    { name: 'Max', role: 'Creative Head', img: '/4.jpg' },
    ];
    
    export const LayoutDesigners = [
        { name : "name1" , img:'/1.jpg'},
        { name : "name1" , img:'/1.jpg'},
        { name : "name1" , img:'/1.jpg'}
    ]
</script>

<div class=" bg-primary-50">
    <div class="bg-[#bea97e] flex flex-col flex-wrap lg:flex-row justify-between items-center ">
    {#each CardData as Data}
    <Card class="my-4 mx-12 flex items-center justify-center">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{Data.header}</h5>
        <p class="mb-3 font-normal text-gray-700 leading-tight">{Data.description}</p>
        <Button class="w-fit" href={Data.href}>
        View
        </Button>
    </Card>
    {/each}
    </div>
    <div class="bg-[#fcd68c] p-16 my-12">
        <div class=" h-6 mb-12 flex items-center justify-center">
        <h2 class="text-4xl text-center font-serif pb-2 relative">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meet The Team&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="absolute left-0 right-0 top-full border-b-2 border-current w-full"></span>
        </h2>
        </div>
        <div class="grid grid-flow-col auto-cols-max gap-8 justify-center ">
            {#each teamMembers as member}
              <div class="text-center">
                <img
                  class="w-32 h-32 rounded-full mx-auto mb-2"
                  src={member.img}
                  alt={member.role}
                />
                <h3 class="text-lg font-medium">{member.name}</h3>
                <p class="text-sm">{member.role}</p>
              </div>
            {/each}
        </div>
    </div>
    <div class="mb-12 bg-[#fcd68c]">
        <div class="my-4 text-center">
            <h2 class="my-2 text-4xl text-center font-serif">CONTENT EDITORS</h2>
        </div>
        <div class="grid grid-flow-col auto-cols-max gap-8 justify-center">
            {#each LayoutDesigners as design}
            <div class="text-center">
                <img
                  class="w-32 h-32 rounded-full mx-auto mb-2"
                  src={design.img}
                  alt="yes"
                />
                <h3 class="text-lg font-medium">{design.name}</h3>
            </div>
            {/each}
        </div>
        <div class="my-4 text-center">
            <h2 class="my-2 text-4xl text-center font-serif">VISUAL ADVISORS</h2>
        </div>
        <div class="grid grid-flow-col auto-cols-max gap-8 justify-center">
            {#each LayoutDesigners as design}
            <div class="text-center">
                <img
                  class="w-32 h-32 rounded-full mx-auto mb-2"
                  src={design.img}
                  alt="yes"
                />
                <h3 class="text-lg font-medium">{design.name}</h3>
            </div>
            {/each}
        </div>
        <div class="my-4 text-center">
            <h2 class="my-2 text-4xl text-center font-serif">LAYOUT DESIGNERS</h2>
        </div>
        <div class="grid grid-flow-col auto-cols-max gap-8 justify-center">
            {#each LayoutDesigners as design}
            <div class="text-center">
                <img
                  class="w-32 h-32 rounded-full mx-auto mb-2"
                  src={design.img}
                  alt="yes"
                />
                <h3 class="text-lg font-medium">{design.name}</h3>
            </div>
            {/each}
        </div>
        <div class="text-center my-4">
            <h6>Cover Image by</h6>
            <h6>This Guy</h6>
        </div>
    </div>

    <div>&nbsp;</div>
</div>