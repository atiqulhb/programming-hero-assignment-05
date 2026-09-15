import type { Data } from '@/types'
import ReactIcon from '@/assets/react.svg'
import VueIcon from '@/assets/vue.js.svg'
import SvelteIcon from '@/assets/svelte.svg'
import NextJSIcon from '@/assets/next.js.svg'
import NodeJSIcon from '@/assets/node.js.svg'
import PostgreSQLIcon from '@/assets/postgresql.svg'
import RedisIcon from '@/assets/redis.svg'
import JavaScriptIcon from '@/assets/javascript.svg'
import TypeScriptIcon from '@/assets/typescript.svg'
import JavaIcon from '@/assets/java.svg'
import TailwindCSSIcon from '@/assets/tailwind css.svg'
import DockerIcon from '@/assets/docker.svg'


export const data: Data[] = [
    {
        id: "01",
        name: "React",
        logo: ReactIcon,
        description: "A declarative, component-based JavaScript library for building modern user interfaces.",
        type: "Frontend",
        level: "Beginner-Friendly",
        tag: "Popular",
        rating: 4.9
    },
    {
        id: "02",
        name: "Vue.js",
        logo: VueIcon,
        description: "An approachable, performant, and versatile framework for building web user interfaces.",
        type: "Frontend",
        level: "Beginner-Friendly",
        tag: "Versatile",
        rating: 4.8
    },
    {
        id: "03",
        name: "Svelte",
        logo: SvelteIcon,
        description: "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
        type: "Frontend",
        level: "Intermediate",
        tag: "Fast",
        rating: 4.8
    },
    {
        id: "04",
        name: "Next.js",
        logo: NextJSIcon,
        description: "The React framework for full-stack web applications with hybrid static & server rendering.",
        type: "Frontend",
        level: "Intermediate",
        tag: "SSR / Edge",
        rating: 4.9
    },
    {
        id: "05",
        name: "Node.js",
        logo: NodeJSIcon,
        description: "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
        type: "Backend",
        level: "Intermediate",
        tag: "Standard",
        rating: 4.8
    },
    {
        id: "06",
        name: "PostgreSQL",
        logo: PostgreSQLIcon,
        description: "A powerful, open-source object-relational database system with proven reliability.",
        type: "Database",
        level: "Intermediate",
        tag: "Top SQL",
        rating: 4.9
    },
    {
        id: "07",
        name: "Redis",
        logo: RedisIcon,
        description: "In-memory data structure store used as a high-speed database, cache, and message broker.",
        type: "Database",
        level: "Intermediate",
        tag: "Cache",
        rating: 4.8
    },
    {
        id: "08",
        name: "JavaScript",
        logo: JavaScriptIcon,
        description: "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
        type: "Language",
        level: "Beginner-Friendly",
        tag: "Ubiquitous",
        rating: 4.9
    },
    {
        id: "09",
        name: "TypeScript",
        logo: TypeScriptIcon,
        description: "A strongly typed programming language that builds on JavaScript for robust tooling.",
        type: "Language",
        level: "Intermediate",
        tag: "Essential",
        rating: 4.9 
    },
    {
        id: "10",
        name: "Java",
        logo: JavaIcon,
        description: "A secure, object-oriented programming language designed for portability and scale.",
        type: "Language",
        level: "Intermediate",
        tag: "Robust",
        rating: 4.6 
    },
    {
        id: "11",
        name: "Tailwind CSS",
        logo: TailwindCSSIcon,
        description: "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
        type: "Styling",
        level: "Beginner-Friendly",
        tag: "Modern",
        rating: 4.9
    },
    {
        id: "12",
        name: "Docker",
        logo: DockerIcon,
        description: "A platform designed to build, share, and run containerized applications reliably.",
        type: "DevOps",
        level: "Intermediate",
        tag: "Containers",
        rating: 4.9
    }
]



