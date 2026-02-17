import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Marketing Director",
        quote: "I landed my dream job within two weeks of using Artisan. The designs are stunning and professional.",
        rating: 5,
    },
    {
        name: "David Chen",
        role: "Software Engineer",
        quote: "Finally, a resume builder that doesn't feel clunky. The ATS support is actually real—I got way more callbacks.",
        rating: 5,
    },
    {
        name: "Elena Rodriguez",
        role: "Creative Lead",
        quote: "As a designer, I'm picky. These templates are the perfect balance of creativity and structure.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Loved by Professionals
                    </h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        Join thousands of users who have elevated their careers with our modern resume builder.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-secondary/10 p-8 rounded-2xl relative border border-secondary/20 hover:shadow-lg transition-shadow duration-300"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-secondary/20" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                ))}
                            </div>

                            <p className="text-foreground/80 mb-6 italic leading-relaxed">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center text-secondary font-bold font-serif">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
