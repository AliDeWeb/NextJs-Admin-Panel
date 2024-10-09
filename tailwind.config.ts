import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        NunitoSans: ['var(--font-NunitoSans)'],
      },
      colors: {
        componentsBg: '#273142',
      },
    },
  },
  plugins: [
    function ({ addVariant }: { addVariant: (a: string, b: string) => void }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
export default config;
