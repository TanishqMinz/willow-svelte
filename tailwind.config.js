import flowbitePlugin from 'flowbite/plugin'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}', "./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#fee4b3',
          100: '#aa9b75',
          200: '#dfddc1',
          300: '#D2B379',
          400: '#be9e60',
          500: '#a77513',
          600: '#543a09',
          700: '#FEE4B3',
          800: '#EB4F27',
          900: '#CC4522',
          1000: '#A5371B'
        }
      }
    }
	},
	plugins: [flowbitePlugin]
} 