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
        rating: 4.9,
        tag: {
            title: "Popular",
            color:"#0EA5E9",
            backgroundColor: "#F0F9FF",
            borderColor: "#E0F2FE"
        }
    },
    {
        id: "02",
        name: "Vue.js",
        logo: VueIcon,
        description: "An approachable, performant, and versatile framework for building web user interfaces.",
        type: "Frontend",
        level: "Beginner-Friendly",
        rating: 4.8,
        tag: {
            title: "Versatile",
            color:"#059669",
            backgroundColor: "#ECFDF5",
            borderColor: "#D1FAE5"
        }
    },
    {
        id: "03",
        name: "Svelte",
        logo: SvelteIcon,
        description: "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
        type: "Frontend",
        level: "Intermediate",
        rating: 4.8,
        tag: {
            title: "Fast",
            color:"#EA580C",
            backgroundColor: "#FFF7ED",
            borderColor: "#FFEDD5"
        }
    },
    {
        id: "04",
        name: "Next.js",
        logo: NextJSIcon,
        description: "The React framework for full-stack web applications with hybrid static & server rendering.",
        type: "Frontend",
        level: "Intermediate",
        rating: 4.9,
        tag: {
            title: "SSR / Edge",
            color:"",
            backgroundColor: "",
            borderColor: ""
        }
    },
    {
        id: "05",
        name: "Node.js",
        logo: NodeJSIcon,
        description: "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
        type: "Backend",
        level: "Intermediate",
        rating: 4.8,
        tag: {
            title: "Standard",
            color:"#059669",
            backgroundColor: "#ECFDF5",
            borderColor: "#D1FAE5"
        }
        
    },
    {
        id: "06",
        name: "PostgreSQL",
        logo: PostgreSQLIcon,
        description: "A powerful, open-source object-relational database system with proven reliability.",
        type: "Database",
        level: "Intermediate",
        rating: 4.9,
        tag: {
            title: "Top SQL",
            color:"#2563EB",
            backgroundColor: "#EFF6FF",
            borderColor: "#DBEAFE"
        }
    },
    {
        id: "07",
        name: "Redis",
        logo: RedisIcon,
        description: "In-memory data structure store used as a high-speed database, cache, and message broker.",
        type: "Database",
        level: "Intermediate",
        rating: 4.8,
        tag: {
            title: "Cache",
            color:"#DC2626",
            backgroundColor: "#FEF2F2",
            borderColor: "#FEE2E2"
        }
    },
    {
        id: "08",
        name: "JavaScript",
        logo: JavaScriptIcon,
        description: "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
        type: "Language",
        level: "Beginner-Friendly",
        rating: 4.9,
        tag: {
            title: "Ubiquitous",
            color:"#D97706",
            backgroundColor: "#FFFBEB",
            borderColor: "#FEF3C7"
        }
    },
    {
        id: "09",
        name: "TypeScript",
        logo: TypeScriptIcon,
        description: "A strongly typed programming language that builds on JavaScript for robust tooling.",
        type: "Language",
        level: "Intermediate",
        rating: 4.9,
        tag: {
            title: "Essential",
            color:"#0284C7",
            backgroundColor: "#F0F9FF",
            borderColor: "#E0F2FE"
        }
    },
    {
        id: "10",
        name: "Java",
        logo: JavaIcon,
        description: "A secure, object-oriented programming language designed for portability and scale.",
        type: "Language",
        level: "Intermediate",
        rating: 4.6,
        tag: {
            title: "Robust",
            color:"#0284C7",
            backgroundColor: "#F0F9FF",
            borderColor: "#E0F2FE"
        }
    },
    {
        id: "11",
        name: "Tailwind CSS",
        logo: TailwindCSSIcon,
        description: "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
        type: "Styling",
        level: "Beginner-Friendly",
        rating: 4.9,
        tag: {
            title: "Modern",
            color:"#0891B2",
            backgroundColor: "#ECFEFF",
            borderColor: "#CFFAFE"
        }
    },
    {
        id: "12",
        name: "Docker",
        logo: DockerIcon,
        description: "A platform designed to build, share, and run containerized applications reliably.",
        type: "DevOps",
        level: "Intermediate",
        rating: 4.9,
        tag: {
            title: "Containers",
            color:"#0284C7",
            backgroundColor: "#F0F9FF",
            borderColor: "#E0F2FE"
        }
    }
]



