<script>
    export let header;
    export let text;
    export let buttonText = "View";
    export let buttonHref = "/";
    export let cardColor = "bg-[#f7f3ef]";
    export let buttonColor = "bg-[#5e4a2e]";
  </script>
  
  <div class={`${cardColor} p-8 my-8 shadow-md max-w-sm mx-auto text-center`}>
    <h2 class="text-2xl font-semibold mb-4">{header}</h2>
    <p class="mb-6 text-gray-700">{text}</p>
    <a 
      href={buttonHref} 
      class={`${buttonColor} text-white py-2 px-6 inline-block hover:opacity-90 transition-opacity`}
    >
      {buttonText}
    </a>
  </div>