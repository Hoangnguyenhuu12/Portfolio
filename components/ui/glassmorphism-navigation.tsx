"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, User, Briefcase, FileText, Moon, Sun, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavItem {
  name: string
  url: string
  icon: LucideIcon | React.ElementType
}

export interface GlassmorphismNavBarProps {
  items?: NavItem[]
  className?: string
  theme?: "light" | "dark"
  defaultTheme?: "light" | "dark"
  onThemeChange?: (theme: "light" | "dark") => void
  activeTab?: string
  onTabChange?: (name: string, url: string) => void
}

/**
 * Ultra-fast smooth scroll that covers 90% of distance in first 100ms
 */
export function smoothScrollTo(targetY: number, customDuration?: number) {
  if (typeof window === "undefined") return

  const startY = window.scrollY
  const distance = Math.abs(targetY - startY)
  if (distance < 2) return

  const duration =
    customDuration ?? Math.min(240, Math.max(160, 140 + Math.sqrt(distance) * 1.5))

  let startTime: number | null = null
  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

  function step(currentTime: number) {
    if (!startTime) startTime = currentTime
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = easeOutQuart(progress)

    window.scrollTo(0, startY + (targetY - startY) * easedProgress)

    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}

export function GlassmorphismNavBar({
  items = [
    { name: "Home", url: "#", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Projects", url: "#projects", icon: Briefcase },
    { name: "Resume", url: "#", icon: FileText },
  ],
  className,
  theme: controlledTheme,
  defaultTheme = "light",
  onThemeChange,
  activeTab: controlledActiveTab,
  onTabChange,
}: GlassmorphismNavBarProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(items[0]?.name || "Home")
  const [internalTheme, setInternalTheme] = useState<"light" | "dark">(defaultTheme)
  const [isHovered, setIsHovered] = useState(false)

  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab
  const theme = controlledTheme !== undefined ? controlledTheme : internalTheme

  useEffect(() => {
    if (controlledTheme === undefined && typeof document !== "undefined") {
      if (internalTheme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [internalTheme, controlledTheme])

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light"
    if (controlledTheme === undefined) {
      setInternalTheme(nextTheme)
    }
    onThemeChange?.(nextTheme)
  }

  const handleItemClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault()
    if (controlledActiveTab === undefined) {
      setInternalActiveTab(item.name)
    }
    onTabChange?.(item.name, item.url)

    if (item.url === "#" || item.url === "#home" || !item.url) {
      smoothScrollTo(0)
    } else if (item.url.startsWith("#")) {
      const targetElement = document.querySelector(item.url)
      if (targetElement) {
        const targetY = targetElement.getBoundingClientRect().top + window.scrollY - 80
        smoothScrollTo(targetY)
      }
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:mb-0 sm:pt-6 pointer-events-auto",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 py-1 px-1 rounded-full shadow-lg transition-all duration-300",
          theme === "dark"
            ? "bg-black/60 border border-white/10 backdrop-blur-xl text-white shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "bg-white/60 border border-black/5 backdrop-blur-xl text-black shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
        )}
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab.toLowerCase() === item.name.toLowerCase()

          return (
            <button
              key={item.name}
              onClick={(e) => handleItemClick(e, item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300",
                theme === "dark"
                  ? "text-white/70 hover:text-white"
                  : "text-neutral-800/80 hover:text-black",
                isActive &&
                  (theme === "dark"
                    ? "bg-white/10 text-white"
                    : "bg-black/5 text-black")
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className={cn(
                    "absolute inset-0 w-full rounded-full -z-10",
                    theme === "dark" ? "bg-white/10" : "bg-black/5"
                  )}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div
                    className={cn(
                      "absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full",
                      theme === "dark" ? "bg-white/80" : "bg-black"
                    )}
                  >
                    <div
                      className={cn(
                        "absolute w-12 h-6 rounded-full blur-md -top-2 -left-2",
                        theme === "dark" ? "bg-white/30" : "bg-black/20"
                      )}
                    />
                    <div
                      className={cn(
                        "absolute w-8 h-6 rounded-full blur-md -top-1",
                        theme === "dark" ? "bg-white/30" : "bg-black/20"
                      )}
                    />
                    <div
                      className={cn(
                        "absolute w-4 h-4 rounded-full blur-sm top-0 left-2",
                        theme === "dark" ? "bg-white/30" : "bg-black/20"
                      )}
                    />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}

        <div
          className={cn(
            "w-px h-6 mx-1 transition-colors duration-200",
            theme === "dark" ? "bg-white/15" : "bg-black/10"
          )}
        />

        <button
          onClick={toggleTheme}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            "relative cursor-pointer p-2 rounded-full transition-all duration-300 outline-none flex items-center justify-center",
            theme === "dark"
              ? "text-zinc-400 hover:text-white hover:bg-white/10"
              : "text-zinc-600 hover:text-black hover:bg-black/5"
          )}
          aria-label={
            theme === "light" ? "Switch to dark mode" : "Switch to light mode"
          }
        >
          <motion.div
            initial={false}
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: theme === "dark" ? 180 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            {theme === "light" ? (
              <Moon size={18} strokeWidth={2.5} />
            ) : (
              <Sun size={18} strokeWidth={2.5} />
            )}
          </motion.div>
        </button>
      </div>
    </div>
  )
}

export default GlassmorphismNavBar
