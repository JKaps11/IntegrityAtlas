import { ModuleNames } from "@/generated/prisma"
import { prisma } from "@/lib/prisma"

async function main() {
  const modules = [
    {
      name: ModuleNames.VALUES,
      description: "Discover and define your core values.",
      step: {
        title: "Identify Your Values",
        content: {
          prompt: "List 5 values you believe guide your decisions.",
          example: ["Integrity", "Creativity", "Compassion"]
        }
      }
    },
    {
      name: ModuleNames.AIMS,
      description: "Set aims that align with your values.",
      step: {
        title: "Define Clear Aims",
        content: {
          prompt: "Write down 3 long-term aims based on your values.",
          hint: "Be specific and meaningful."
        }
      }
    },
    {
      name: ModuleNames.FOCUS,
      description: "Learn to focus your attention where it matters.",
      step: {
        title: "Eliminate Distractions",
        content: {
          prompt: "List your top 3 distractions and how to reduce them.",
          example: ["Social media", "Procrastination", "Multitasking"]
        }
      }
    },
    {
      name: ModuleNames.ADVENTURE,
      description: "Explore what excites and energizes you.",
      step: {
        title: "Plan a Mini Adventure",
        content: {
          prompt: "Choose a new experience you'd like to try this month.",
          example: ["Hike a new trail", "Attend a workshop"]
        }
      }
    },
    {
      name: ModuleNames.VALUE_GENERATOR,
      description: "Translate values into tangible daily actions.",
      step: {
        title: "Generate Actions from Values",
        content: {
          prompt: "Choose 2 values and write daily actions that express them.",
          example: {
            Integrity: "Be honest even when it's uncomfortable",
            Compassion: "Offer help without expecting return"
          }
        }
      }
    },
    {
      name: ModuleNames.TASKS,
      description: "Break goals into manageable tasks.",
      step: {
        title: "Create a Task List",
        content: {
          prompt: "Write 5 tasks that push you toward your main aim.",
          hint: "Make them small and actionable."
        }
      }
    },
    {
      name: ModuleNames.CALENDAR,
      description: "Schedule your life around what truly matters.",
      step: {
        title: "Design Your Ideal Week",
        content: {
          prompt: "Block out time for what you value most.",
          hint: "Leave buffers and downtime too."
        }
      }
    }
  ]

  for (const module of modules) {
    const createdModule = await prisma.moduleContent.create({
      data: {
        name: module.name,
        description: module.description,
        steps: {
          create: {
            title: module.step.title,
            content: module.step.content
          }
        }
      }
    })

    console.log(`Created module: ${createdModule.name}`)
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
