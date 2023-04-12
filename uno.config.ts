import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  shortcuts: [
    ['wh-full', 'w-full h-full'],
    ['flex-c-c', 'flex justify-center items-center'],
    ['flex-a-c', 'flex justify-around items-center'],
    ['flex-col', 'flex flex-wrap'],
    ['text-ellipsis', 'truncate'],
    ['icon-btn', 'text-16 inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary !outline-none']
  ],
  rules: [
    [/^bc-(.+)$/, ([, color]) => ({ 'border-color': `#${color}` })],
    ['card-shadow', { 'box-shadow': '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017' }]
  ],
  theme: { colors: { primary: 'var(--primary-color)', dark_bg: 'var(--dark-bg)' } }
})
