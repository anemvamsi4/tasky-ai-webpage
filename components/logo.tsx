import { cn } from '../lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <span className={cn('text-foreground font-bold text-xl', className)}>
            tasky-ai
        </span>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <span className={cn('text-foreground font-bold text-xl', className)}>
            T
        </span>
    )
}

// You can remove LogoStroke if not needed, or keep a simplified version
export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <span className={cn('text-foreground font-bold text-xl', className)}>
            tasky-ai
        </span>
    )
}
