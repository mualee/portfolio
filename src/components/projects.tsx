"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A task management application with drag-and-drop functionality and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Firebase", "Tailwind CSS"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data from multiple APIs.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["JavaScript", "APIs", "CSS"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 5,
      title: "Blog API",
      description: "A RESTful API for a blog platform with authentication, authorization, and CRUD operations.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Node.js", "Express", "MongoDB"],
      category: "backend",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with private messaging and group chat functionality.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Socket.io", "Node.js"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <div className="w-20 h-1 bg-primary mt-4 mb-6"></div>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">A selection of my recent work</p>
        </motion.div>

        <div className="flex justify-center mb-8 space-x-2">
          <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>
            All
          </Button>
          <Button variant={filter === "frontend" ? "default" : "outline"} onClick={() => setFilter("frontend")}>
            Frontend
          </Button>
          <Button variant={filter === "backend" ? "default" : "outline"} onClick={() => setFilter("backend")}>
            Backend
          </Button>
          <Button variant={filter === "fullstack" ? "default" : "outline"} onClick={() => setFilter("fullstack")}>
            Full Stack
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md hover:shadow-primary/20 dark:hover:shadow-primary/10">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

