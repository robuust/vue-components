<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/16154387?v=4',
    name: 'Rutger Bakker',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/rutgerbakker95' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/378974?v=4',
    name: 'Bob Olde Hampsink',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/boboldehampsink' },
    ]
  },
]
</script>

# About us

We are a small and experienced team of digital designers and developers.

We help your business achieve marketing goals, digitize or automate tasks, and integrate with your existing systems so you have more time for more important matters.

Go to our website [Robuust Digital](https://robuust.digital) for more information.

## Authors 

<VPTeamMembers size="small" :members="members" />

## License

MIT © [Robuust Digital](https://robuust.digital)

With `@robuust-digital/vue-components`, bring consistency, flexibility, and a polished look to all your Vue 3 applications.
