"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const frontendSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 70 },
    { name: "GraphQL", level: 65 },
  ]

  const otherSkills = [
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
    { name: "UI/UX Design", level: 75 },
    { name: "Testing", level: 70 },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-muted/20 dark:bg-muted/5">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
          <div className="w-20 h-1 bg-primary mt-4 mb-6"></div>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div variants={container} initial="hidden" animate={inView ? "show" : "hidden"}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center">Frontend</h3>
                <div className="space-y-4">
                  {frontendSkills.map((skill) => (
                    <motion.div key={skill.name} variants={item} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" aria-label={`${skill.name} skill level: ${skill.level}%`} />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate={inView ? "show" : "hidden"}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center">Backend</h3>
                <div className="space-y-4">
                  {backendSkills.map((skill) => (
                    <motion.div key={skill.name} variants={item} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" aria-label={`${skill.name} skill level: ${skill.level}%`} />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate={inView ? "show" : "hidden"}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-center">Other</h3>
                <div className="space-y-4">
                  {otherSkills.map((skill) => (
                    <motion.div key={skill.name} variants={item} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" aria-label={`${skill.name} skill level: ${skill.level}%`} />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

