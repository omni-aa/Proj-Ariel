import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 dark:from-background-dark dark:via-background-dark dark:to-muted-dark/30 px-4">
            <div className="text-center max-w-lg mx-auto">
                {/* Animated 404 */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                        404
                    </h1>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="space-y-4 mb-8"
                >
                    <h2 className="text-2xl font-bold text-foreground dark:text-foreground-dark">
                        Lost in Space?
                    </h2>
                    <p className="text-foreground/70 dark:text-foreground-dark/70 text-lg leading-relaxed">
                        The page you're looking for seems to have drifted off into the cosmic void.
                        Let's get you back on track.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <Home size={20} />
                        Return Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-3 border-2 border-border dark:border-border-dark hover:bg-muted dark:hover:bg-muted-dark font-medium px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105"
                    >
                        <ArrowLeft size={20} />
                        Go Back
                    </button>
                </motion.div>

                {/* Additional Help */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="space-y-3 text-sm text-foreground/60 dark:text-foreground-dark/60"
                >
                    <div className="flex items-center justify-center gap-2">
                        <Search size={16} />
                        <span>Check the URL for typos</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Globe size={16} />
                        <span>Or use the navigation menu</span>
                    </div>
                </motion.div>

                {/* Floating Animation */}
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="mt-12 text-6xl"
                >
                    🚀
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;