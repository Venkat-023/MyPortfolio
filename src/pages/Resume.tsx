import { Download, Github, Code2, Linkedin, Mail, Phone, Heart, Briefcase, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Tilt3D from '@/components/three/Tilt3D';

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

const Resume = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 [perspective:1400px]">
      <div className="container mx-auto px-4 max-w-5xl space-y-8">
        {/* Header */}
        <Tilt3D max={6} scale={1.01}>
        <div className="glass-card p-8 rounded-2xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-cyan">
            Venkat Baba Yemineni
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
            <a href="mailto:venkatbaba23@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={18} />
              venkatbaba23@gmail.com
            </a>
            <a href="tel:+919741937034" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={18} />
              +91 97419 37034
            </a>
          </div>

          {/* Social Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a href="https://github.com/Venkat-023?tab=repositories" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-lg hover:border-primary hover:glow-cyan transition-all">
              <Github className="text-primary" size={24} />
              <span className="font-semibold">GitHub - 25+ Projects</span>
            </a>
            <a href="https://leetcode.com/u/Venkat_Baba/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-lg hover:border-accent hover:glow-orange transition-all">
              <Code2 className="text-accent" size={24} />
              <span className="font-semibold">LeetCode - 900+ Solved</span>
            </a>
            <a href="https://www.linkedin.com/in/venkat-baba-yemineni-49a7612b4"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-lg hover:border-secondary hover:glow-blue transition-all">
              <Linkedin className="text-secondary" size={24} />
              <span className="font-semibold">LinkedIn</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a href={resumeUrl} download="Venkat_Baba_Yemineni_Resume.pdf">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-cyan">
                <Download className="mr-2" size={20} />
                Download PDF Resume
              </Button>
            </a>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10">
                <ExternalLink className="mr-2" size={20} />
                Open PDF
              </Button>
            </a>
          </div>
        </div>
        </Tilt3D>

        {/* Education */}
        <Tilt3D max={6} scale={1.01}>
        <div className="glass-card p-8 rounded-2xl animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-6 text-gradient-cyan">Education</h2>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">Bachelor of Engineering: Computer Science</h3>
            <p className="text-primary font-medium">RV Institute of Technology</p>
            <p className="text-muted-foreground">Chaithanya Layout, 8th Phase, J.P - 2023-2027</p>
            <p className="text-muted-foreground">Core: Operating Systems, DBMS, DSA, Computer Networks. CGPA: 8.23</p>
          </div>
        </div>

        {/* Experience */}
        <div className="glass-card p-8 rounded-2xl mb-8 animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-6 text-gradient-cyan">Experience</h2>
          <div className="border-l-4 border-primary pl-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <div>
                <h3 className="text-xl font-semibold text-foreground">AI Intern - GoAi</h3>
                <p className="text-sm text-primary font-medium">Paid Internship</p>
              </div>
              <p className="text-sm text-muted-foreground">June 2026 - December 2026</p>
            </div>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Working on applied AI systems, model-backed product features, and production-oriented AI workflows.</li>
              <li>Contributing to AI engineering tasks across research, implementation, testing, and deployment support.</li>
            </ul>
          </div>
        </div>
        </Tilt3D>

        {/* Skills */}
        <Tilt3D max={6} scale={1.01}>
        <div className="glass-card p-8 rounded-2xl animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-6 text-gradient-cyan">Skills</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Languages</h3>
              <p className="text-muted-foreground">Python (Proficient), Java</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Backend & APIs</h3>
              <p className="text-muted-foreground">FastAPI, REST, Pydantic</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Cloud & DevOps</h3>
              <p className="text-muted-foreground">Docker, AWS (EC2, S3, Lambda), CI/CD</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Machine Learning & AI</h3>
              <p className="text-muted-foreground">Deep Learning, scikit-learn, TensorFlow, Keras, OpenCV</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Data & Tools</h3>
              <p className="text-muted-foreground">Pandas, NumPy, Matplotlib, Seaborn</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Data Structures & Algorithms</h3>
              <p className="text-muted-foreground">Strong foundation with hands-on experience; solved over 900+ problems on LeetCode</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Development</h3>
              <p className="text-muted-foreground">Git/GitHub</p>
            </div>
          </div>
        </div>
        </Tilt3D>

        {/* Projects */}
        <Tilt3D max={6} scale={1.01}>
        <div className="glass-card p-8 rounded-2xl animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-6 text-gradient-cyan">Featured Projects</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Driver Drowsiness Detection System</h3>
              <p className="text-sm text-muted-foreground mb-3">Real-time fatigue monitoring using CNN and computer vision</p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Built real-time drowsiness detection using custom CNN models for eye state and facial alertness classification.</li>
                <li>Designed and evaluated 15+ CNN architectures, achieving 98.7% eye-state accuracy and 98.4% face-state accuracy.</li>
                <li>Engineered low-latency video inference with frame capture, prediction smoothing, and alert triggering.</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Insight Weaver - Scientific Discovery Copilot</h3>
              <p className="text-sm text-muted-foreground mb-3">Evidence-first GraphRAG pipeline using Gemma, Ollama, FastAPI, React, and Docker</p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Built a pipeline that turns scientific PDFs into cleaned evidence, entity graphs, hybrid retrieval, and grounded Gemma reasoning.</li>
                <li>Engineered section-aware chunking, scientific entity extraction, BM25 + vector retrieval fusion, and graph-context expansion.</li>
                <li>Developed contradiction detection and entity-grounded hypothesis generation over multi-paper scientific literature.</li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">TACOS - Real-Time Toxic Comment Moderation System</h3>
              <p className="text-sm text-muted-foreground mb-3">AI moderation system using multi-label transformer models</p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Trained DistilBERT on 2M+ comments to detect six toxicity categories; achieved Micro-F1: 0.75 and Macro-F1: 0.54.</li>
                <li>Designed a FastAPI inference pipeline for real-time requests with sub-second response latency.</li>
                <li>Deployed a Dockerized Hugging Face Spaces application with separate model inference, decision logic, and UI modules.</li>
              </ul>
            </div>
          </div>
        </div>
        </Tilt3D>

        {/* Achievements */}
        <Tilt3D max={6} scale={1.01}>
        <div className="glass-card p-8 rounded-2xl animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-6 text-gradient-cyan">Achievements</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>Ranked #1693 / 82,790 in the Amazon ML Hackathon 2025 (Product Price Prediction).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>900+ LeetCode challenges solved.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>Semifinalist, RIFT '26 - 24 Hour Hackathon by PhysicsWallah.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>Semifinalist, Adivya 2.0 at IIT Ropar, for SkillQuest AI - a gamified AI learning platform with adaptive assessments and tutoring.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>Ranked #3593 among 32,000+ participants in CodeWar (IIT Ropar), a national-level CodeChef contest.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-2xl">•</span>
              <span>Developed 25+ projects involving AI/ML, REST APIs, Dockerized deployments, and AWS.</span>
            </li>
          </ul>
        </div>
        </Tilt3D>

        {/* Community & Leadership */}
        <Tilt3D max={6} scale={1.01}>
        <div className="glass-card p-8 rounded-2xl animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-6 text-gradient-cyan">Community & Leadership</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Heart className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">Volunteer Teacher - U&I</h3>
                <p className="text-muted-foreground mt-2">Mentoring underprivileged and orphaned students through weekly academic support sessions.</p>
                <p className="text-muted-foreground mt-2">Led fundraising initiatives and volunteer teams to support students' educational expenses and learning resources.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Briefcase className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">NSS Coordinator</h3>
                <p className="text-muted-foreground mt-2">Organizing workshops and coordinating volunteers, logistics, and campus events for the National Service Scheme.</p>
              </div>
            </div>
          </div>
        </div>
        </Tilt3D>
      </div>
    </div>
  );
};

export default Resume;
