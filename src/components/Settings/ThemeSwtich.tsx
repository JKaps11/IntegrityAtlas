'use client'

import { useTheme } from "next-themes"
import { Switch } from "../ui/switch"

export default function ThemeSwitch() {
    const { setTheme, theme } = useTheme()
    return <Switch checked={theme === 'dark'}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        aria-label="Toggle dark mode" />
}