<script>
    import { base } from '$app/paths'

    import CustomCard  from '../../../lib/components/CustomCard.svelte'

    export let data; 
    let { CardData, teamMembers, LayoutDesigners } = data;

    $: CardData = CardData.map(data => ({
      ...data,
      href : `${base}${data.href}`
    }))
    
    $: teamMembers = teamMembers.map(data => ({
      ...data,
      src : `${base}${data.src}`
    }))

    $: LayoutDesigners = LayoutDesigners.map(data => ({
      ...data,
      src : `${base}${data.src}`
    }))

  </script>
  
  <div class="bg-primary-50">
    <!-- Card Section -->
    <div class="bg-[#bea97e] flex flex-col flex-wrap lg:flex-row justify-between items-center">
      {#each CardData as Data}
        <CustomCard header = {Data.header} text={Data.description} buttonHref={Data.href} />
      {/each}
    </div>
  
    <!-- Meet The Team Section -->
    <div class="bg-[#fcd68c] p-16 my-12">
      <div class="h-6 mb-12 flex items-center justify-center">
        <h2 class="text-4xl text-center font-serif pb-2 relative">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meet The Team&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="absolute left-0 right-0 top-full border-b-2 border-current w-full"></span>
        </h2>
      </div>
  
      <div class="grid grid-flow-col auto-cols-max gap-8 justify-center">
        {#each teamMembers as member}
          <div class="text-center">
            <img
              class="w-32 h-32 rounded-full mx-auto mb-2"
              src={member.src}
              alt={member.role}
            />
            <h3 class="text-lg font-medium">{member.name}</h3>
            <p class="text-sm">{member.role}</p>
          </div>
        {/each}
      </div>
    </div>
  
    <!-- Layout Designers Section -->
    <div class="mb-12 bg-[#fcd68c]">
      <div class="my-4 text-center">
        <h2 class="my-2 text-4xl text-center font-serif">CONTENT EDITORS</h2>
      </div>
      <div class="grid grid-flow-col auto-cols-max gap-8 justify-center">
        {#each LayoutDesigners as design}
          <div class="text-center">
            <img
              class="w-32 h-32 rounded-full mx-auto mb-2"
              src={design.src}
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
              src={design.src}
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
              src={design.src}
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
  