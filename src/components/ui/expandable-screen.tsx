"use client"

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

// Context
interface ExpandableScreenContextValue {
    isExpanded: boolean
    expand: () => void
    collapse: () => void
    layoutId: string
    triggerRadius: string
    contentRadius: string
    animationDuration: number
}

const ExpandableScreenContext =
    createContext<ExpandableScreenContextValue | null>(null)

function useExpandableScreen() {
    const context = useContext(ExpandableScreenContext)
    if (!context) {
        throw new Error(
            "useExpandableScreen must be used within an ExpandableScreen"
        )
    }
    return context
}

// Root Component
interface ExpandableScreenProps {
    children: ReactNode
    defaultExpanded?: boolean
    onExpandChange?: (expanded: boolean) => void
    layoutId?: string
    triggerRadius?: string
    contentRadius?: string
    animationDuration?: number
    lockScroll?: boolean
}

export function ExpandableScreen({
    children,
    defaultExpanded = false,
    onExpandChange,
    layoutId = "expandable-card",
    triggerRadius = "100px",
    contentRadius = "0px",
    animationDuration = 0.5,
    lockScroll = true,
}: ExpandableScreenProps) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded)

    const expand = () => {
        setIsExpanded(true)
        onExpandChange?.(true)
    }

    const collapse = () => {
        setIsExpanded(false)
        onExpandChange?.(false)
    }

    useEffect(() => {
        if (lockScroll) {
            if (isExpanded) {
                document.body.style.overflow = "hidden"
            } else {
                document.body.style.overflow = "unset"
            }
        }
    }, [isExpanded, lockScroll])

    return (
        <ExpandableScreenContext.Provider
            value={{
                isExpanded,
                expand,
                collapse,
                layoutId,
                triggerRadius,
                contentRadius,
                animationDuration,
            }}
        >
            {children}
        </ExpandableScreenContext.Provider>
    )
}

// Trigger Component
interface ExpandableScreenTriggerProps {
    children: ReactNode
    className?: string
}

export function ExpandableScreenTrigger({
    children,
    className = "",
}: ExpandableScreenTriggerProps) {
    const { isExpanded, expand, layoutId, triggerRadius } = useExpandableScreen()

    return (
        <AnimatePresence>
            {!isExpanded && (
                <motion.div className={`inline-block relative ${className}`} layout>
                    {/* Background layer with shared layoutId for morphing */}
                    <motion.div
                        style={{
                            borderRadius: triggerRadius,
                        }}
                        layoutId={layoutId} // SHARED ID
                        className="absolute inset-0 transform-gpu will-change-transform bg-brand-gold z-0"
                    />
                    {/* Content layer */}
                    <motion.div
                        layout
                        onClick={expand}
                        className="relative cursor-pointer z-10"
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

// Content Component
interface ExpandableScreenContentProps {
    children: ReactNode
    className?: string
    showCloseButton?: boolean
    closeButtonClassName?: string
}

export function ExpandableScreenContent({
    children,
    className = "",
    showCloseButton = true,
    closeButtonClassName = "",
}: ExpandableScreenContentProps) {
    const { isExpanded, collapse, layoutId, contentRadius, animationDuration } =
        useExpandableScreen()

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const content = (
        <AnimatePresence>
            {isExpanded && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={collapse}
                    />

                    {/* Morphing background with shared layoutId */}
                    <motion.div
                        layoutId={layoutId} // SHARED ID
                        transition={{ type: "spring", stiffness: 300, damping: 30, duration: animationDuration }}
                        style={{
                            borderRadius: contentRadius,
                        }}
                        className={`relative flex h-full w-full overflow-y-auto transform-gpu will-change-transform z-10 ${className}`}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                            className="relative w-full h-full"
                        >
                            {children}
                        </motion.div>

                        {showCloseButton && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={collapse}
                                className={`absolute right-6 top-6 z-50 flex h-10 w-10 items-center justify-center transition-all rounded-full ${closeButtonClassName ||
                                    "text-white bg-white/10 hover:bg-white/20 border border-white/5 backdrop-blur-md"
                                    }`}
                                aria-label="Close"
                            >
                                <X className="h-5 w-5" />
                            </motion.button>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )

    return createPortal(content, document.body)
}

export { useExpandableScreen }
