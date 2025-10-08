import { useState } from 'react';
import { Link, NavLink, Outlet, ScrollRestoration } from 'react-router-dom';
import { cn } from '@/lib/utils.ts';
import { Home, ChevronDown, Menu, X, Book, Info, Newspaper} from "lucide-react";
import { ModeToggle } from "@/components/ui/dark-mode-toggle.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import { motion } from "motion/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isGuidesOpen, setIsGuidesOpen] = useState(false);
    const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    const navigation = [
        {
            path: "/",
            label: "Home",
            icon: Home
        },
        {
            path: "/news",
            label: "News",
            icon: Newspaper
        }
    ];

    const mobileGuides = [
        { path: "/guides", label: "Guides Main Page" },
        { path: "/guides/new-player-guide", label: "New Player Guide" },
        { path: "/guides/quests-events", label: "Quest & Event Guides" },
        { path: "/guides/hiram-gear-guide", label: "Hiram Gear Guide" },
        { path: "/guides/erenor-crafting-guide", label: "Erenor Crafting Guide" },
        { path: "/guides/costume-undergarments", label: "Costume & Undergarments" },
        { path: "/guides/achievements-collection-guide", label: "Achievement Guides" }
    ];

    const mobileInfo = [
        { path: "/info/about", label: "About Us" },
        { path: "/info/contact", label: "Contact Us" }
    ];

    return (
        <>
            <div className="min-h-screen flex flex-col bg-background dark:bg-background-dark">
                {/* Header */}
                <header className="sticky top-0 z-50 bg-background/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-border/40 dark:border-border-dark/40">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            {/* Brand/Logo */}
                            <Link
                                to="/"
                                className="flex items-center space-x-2 group"
                            >
                                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">PA</span>
                                </div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 dark:from-foreground-dark dark:to-foreground-dark/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
                                    Proj-Ariel
                                </span>
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex items-center space-x-1">
                                {navigation.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            className={({ isActive }) =>
                                                cn(
                                                    'flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200',
                                                    isActive
                                                        ? 'text-primary bg-primary/10 dark:bg-primary-dark/10'
                                                        : 'text-foreground/70 dark:text-foreground-dark/70 hover:text-foreground dark:hover:text-foreground-dark hover:bg-muted/50 dark:hover:bg-muted-dark/50'
                                                )
                                            }
                                        >
                                            <Icon size={18} />
                                            <span>{item.label}</span>
                                        </NavLink>
                                    );
                                })}
                            </nav>

                            {/* Right Side Controls */}
                            <div className="flex items-center space-x-2">
                                <ModeToggle />

                                {/* Mobile Navigation Toggle */}
                                <button
                                    className="md:hidden p-2 rounded-lg bg-muted/50 dark:bg-muted-dark/50 hover:bg-muted dark:hover:bg-muted-dark transition-colors"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Modern Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden fixed inset-0 z-40">
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-background/80 dark:bg-background-dark/80 backdrop-blur-sm"
                            onClick={closeMenu}
                        />

                        {/* Menu Panel */}
                        <div className="absolute right-0 top-0 h-full w-80 bg-background dark:bg-background-dark border-l border-border/40 dark:border-border-dark/40 shadow-2xl">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-border/40 dark:border-border-dark/40">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">PA</span>
                                    </div>
                                    <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 dark:from-foreground-dark dark:to-foreground-dark/80 bg-clip-text text-transparent">
                                        Proj-Ariel
                                    </span>
                                </div>
                                <button
                                    onClick={closeMenu}
                                    className="p-2 rounded-lg hover:bg-muted/50 dark:hover:bg-muted-dark/50 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Navigation Content */}
                            <div className="h-[calc(100vh-80px)] overflow-y-auto">
                                <div className="p-6 space-y-6">
                                    {/* Main Navigation */}
                                    <div className="space-y-2">
                                        <h3 className="text-sm font-semibold text-foreground/60 dark:text-foreground-dark/60 uppercase tracking-wide px-2">
                                            Navigation
                                        </h3>
                                        {navigation.map((item) => {
                                            const Icon = item.icon;
                                            return (
                                                <NavLink
                                                    key={item.path}
                                                    to={item.path}
                                                    onClick={closeMenu}
                                                    className={({ isActive }) =>
                                                        cn(
                                                            'flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 group',
                                                            isActive
                                                                ? 'text-primary bg-primary/10 dark:bg-primary-dark/10 shadow-sm'
                                                                : 'text-foreground/70 dark:text-foreground-dark/70 hover:text-foreground dark:hover:text-foreground-dark hover:bg-muted/50 dark:hover:bg-muted-dark/50'
                                                        )
                                                    }
                                                >
                                                    <div className={cn(
                                                        'p-2 rounded-lg transition-all duration-200',
                                                        'bg-muted/50 dark:bg-muted-dark/50 group-hover:bg-primary/10 dark:group-hover:bg-primary-dark/10'
                                                    )}>
                                                        <Icon size={18} />
                                                    </div>
                                                    <span>{item.label}</span>
                                                </NavLink>
                                            );
                                        })}
                                    </div>

                                    {/* Guides Section */}
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setIsGuidesOpen(!isGuidesOpen)}
                                            className="flex items-center justify-between w-full px-4 py-3 rounded-xl font-medium text-foreground/70 dark:text-foreground-dark/70 hover:text-foreground dark:hover:text-foreground-dark hover:bg-muted/50 dark:hover:bg-muted-dark/50 transition-all duration-200 group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 rounded-lg bg-muted/50 dark:bg-muted-dark/50 group-hover:bg-primary/10 dark:group-hover:bg-primary-dark/10 transition-all duration-200">
                                                    <Book size={18} />
                                                </div>
                                                <span>Guides</span>
                                            </div>
                                            <ChevronDown
                                                size={16}
                                                className={cn(
                                                    'transition-transform duration-300',
                                                    isGuidesOpen ? 'rotate-180' : ''
                                                )}
                                            />
                                        </button>

                                        {isGuidesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="ml-4 space-y-1 overflow-hidden"
                                            >
                                                {mobileGuides.map((item) => (
                                                    <NavLink
                                                        key={item.path}
                                                        to={item.path}
                                                        onClick={closeMenu}
                                                        className={({ isActive }) =>
                                                            cn(
                                                                'flex items-center gap-3 px-4 py-2 rounded-lg font-normal transition-all duration-200 group',
                                                                isActive
                                                                    ? 'text-primary bg-primary/10 dark:bg-primary-dark/10'
                                                                    : 'text-foreground/60 dark:text-foreground-dark/60 hover:text-foreground dark:hover:text-foreground-dark hover:bg-muted/30 dark:hover:bg-muted-dark/30'
                                                            )
                                                        }
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-all duration-200" />
                                                        <span>{item.label}</span>
                                                    </NavLink>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Project Information Section */}
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setIsMoreInfoOpen(!isMoreInfoOpen)}
                                            className="flex items-center justify-between w-full px-4 py-3 rounded-xl font-medium text-foreground/70 dark:text-foreground-dark/70 hover:text-foreground dark:hover:text-foreground-dark hover:bg-muted/50 dark:hover:bg-muted-dark/50 transition-all duration-200 group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 rounded-lg bg-muted/50 dark:bg-muted-dark/50 group-hover:bg-primary/10 dark:group-hover:bg-primary-dark/10 transition-all duration-200">
                                                    <Info size={18} />
                                                </div>
                                                <span>Project Information</span>
                                            </div>
                                            <ChevronDown
                                                size={16}
                                                className={cn(
                                                    'transition-transform duration-300',
                                                    isMoreInfoOpen ? 'rotate-180' : ''
                                                )}
                                            />
                                        </button>

                                        {isMoreInfoOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="ml-4 space-y-1 overflow-hidden"
                                            >
                                                {mobileInfo.map((item) => (
                                                    <NavLink
                                                        key={item.path}
                                                        to={item.path}
                                                        onClick={closeMenu}
                                                        className={({ isActive }) =>
                                                            cn(
                                                                'flex items-center gap-3 px-4 py-2 rounded-lg font-normal transition-all duration-200 group',
                                                                isActive
                                                                    ? 'text-primary bg-primary/10 dark:bg-primary-dark/10'
                                                                    : 'text-foreground/60 dark:text-foreground-dark/60 hover:text-foreground dark:hover:text-foreground-dark hover:bg-muted/30 dark:hover:bg-muted-dark/30'
                                                            )
                                                        }
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-all duration-200" />
                                                        <span>{item.label}</span>
                                                    </NavLink>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Bottom Spacing */}
                                    <div className="pt-8">
                                        <div className="text-center text-sm text-foreground/40 dark:text-foreground-dark/40">
                                            Proj-Ariel © 2024
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Outlet />
                </main>
            </div>

            <Footer />
            <ScrollRestoration />
        </>
    );
};

export default Navbar;