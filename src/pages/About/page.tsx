import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AboutUs = () => {
    // Animation variants
    const fadeInUp = {
        initial: { y: 60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const scaleIn = {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.5, ease: "easeOut" }
    };

    // Custom hook for intersection observer
    const useAnimatedSection = (threshold = 0.1) => {
        const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: threshold,
        });
        return { ref, inView };
    };

    const { ref: heroRef, inView: heroInView } = useAnimatedSection();
    const { ref: missionRef, inView: missionInView } = useAnimatedSection();
    const { ref: valuesRef, inView: valuesInView } = useAnimatedSection();
    const { ref: teamRef, inView: teamInView } = useAnimatedSection();

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-gradient-to-br from-muted/50 to-primary/5 overflow-hidden">
                <motion.div
                    ref={heroRef}
                    initial="initial"
                    animate={heroInView ? "animate" : "initial"}
                    variants={staggerContainer}
                    className="container mx-auto px-6 lg:px-8"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge variant="secondary" className="mb-6">
                            Since 2020
                        </Badge>
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl lg:text-6xl font-bold tracking-tight mb-6"
                        >
                            Shaping Tomorrow's
                            <span className="block text-primary">Digital Landscape</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto"
                        >
                            We create elegant solutions that bridge the gap between innovation and practicality,
                            delivering exceptional value in the modern digital era.
                        </motion.p>
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Button size="lg" className="gap-2">
                                Explore Our Work
                            </Button>
                            <Button size="lg" variant="outline" className="gap-2">
                                Join Our Team
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Background Elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-10 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                />
            </section>

            {/* Mission Section */}
            <section className="py-20 lg:py-28">
                <motion.div
                    ref={missionRef}
                    initial="initial"
                    animate={missionInView ? "animate" : "initial"}
                    variants={staggerContainer}
                    className="container mx-auto px-6 lg:px-8"
                >
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div variants={fadeInUp}>
                            <Badge variant="outline" className="mb-4">
                                Our Mission
                            </Badge>
                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                                Driving innovation through purposeful design
                            </h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                We believe in creating technology that serves humanity, not the other way around.
                                Our mission is to build intuitive, accessible, and powerful solutions that empower
                                businesses and individuals alike.
                            </p>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                Through careful consideration of user experience and technical excellence,
                                we deliver products that stand the test of time while embracing the future.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-primary mb-2">50M+</h3>
                                    <p className="text-muted-foreground">Active Users</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-primary mb-2">150+</h3>
                                    <p className="text-muted-foreground">Team Members</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={scaleIn}
                            className="relative"
                        >
                            <Card className="border-primary/20">
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                                        <h3 className="text-xl font-semibold">2025 Vision</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        This year marks our commitment to AI-enhanced workflows, sustainable design practices,
                                        and creating digital experiences that feel both futuristic and fundamentally human.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Floating elements */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full border border-primary/30"
                            />
                            <motion.div
                                animate={{
                                    y: [0, 15, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full border border-primary/40"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-muted/30">
                <motion.div
                    ref={valuesRef}
                    initial="initial"
                    animate={valuesInView ? "animate" : "initial"}
                    variants={staggerContainer}
                    className="container mx-auto px-6 lg:px-8"
                >
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <Badge variant="outline" className="mb-4">
                            Our Values
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                            Principles that guide our work
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            The foundation of everything we build
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🎯",
                                title: "Precision",
                                description: "We believe in thoughtful execution and attention to detail in every aspect of our work."
                            },
                            {
                                icon: "🚀",
                                title: "Innovation",
                                description: "Pushing boundaries while maintaining practicality and user-centric design."
                            },
                            {
                                icon: "🤝",
                                title: "Collaboration",
                                description: "Great achievements come from diverse minds working together with shared purpose."
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <Card className="h-full border-border hover:border-primary/30 transition-colors">
                                    <CardContent className="p-8 text-center">
                                        <div className="text-3xl mb-4">{value.icon}</div>
                                        <h3 className="text-xl font-semibold mb-4">
                                            {value.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {value.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <motion.div
                    ref={teamRef}
                    initial="initial"
                    animate={teamInView ? "animate" : "initial"}
                    variants={staggerContainer}
                    className="container mx-auto px-6 lg:px-8"
                >
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <Badge variant="outline" className="mb-4">
                            Our Team
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                            Meet our leadership
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            The visionaries driving our mission forward
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Sarah Chen", role: "CEO & Founder", initials: "SC" },
                            { name: "Marcus Rodriguez", role: "CTO", initials: "MR" },
                            { name: "Dr. Elena Petrova", role: "Head of AI Research", initials: "EP" },
                            { name: "James Kim", role: "Chief Product Officer", initials: "JK" }
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.02 }}
                                className="text-center group"
                            >
                                <Card className="border-border group-hover:border-primary/30 transition-colors">
                                    <CardContent className="p-6">
                                        <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center text-primary text-lg font-semibold group-hover:bg-primary/20 transition-colors">
                                            {member.initials}
                                        </div>
                                        <h3 className="font-semibold mb-2">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">{member.role}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="container mx-auto px-6 lg:px-8 text-center"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
                            Ready to build the future with us?
                        </h2>
                        <p className="text-xl text-primary-foreground/80 mb-8">
                            Join forward-thinking companies transforming their digital presence with our solutions.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button size="lg" variant="secondary" className="gap-2">
                                Start Your Journey
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutUs;