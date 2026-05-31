import { Briefcase, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import Tilt3D from '@/components/three/Tilt3D';

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-cyan">
            Experience
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Current professional AI engineering work and internship experience.
          </p>
        </div>

        <Tilt3D max={6} scale={1.015}>
          <div className="glass-card p-8 md:p-10 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-primary/15 border border-primary/30">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    AI Intern - GoAi
                  </h2>
                  <p className="text-primary font-semibold mt-1">Paid Internship</p>
                  <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-accent" />
                    June 2026 - December 2026
                  </div>
                </div>
              </div>
              <Sparkles className="w-10 h-10 text-accent hidden md:block" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                'Working on applied AI systems and model-backed product features.',
                'Contributing across research, implementation, testing, and deployment support.',
                'Building production-oriented AI workflows with clean engineering practices.',
                'Applying ML/backend skills in a real paid internship environment.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/40">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Tilt3D>
      </div>
    </div>
  );
};

export default Experience;
