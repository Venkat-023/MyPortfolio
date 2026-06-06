import { Trophy, Award, GraduationCap, Shield, Code2, Brain, Cpu, Cloud, FileText, ExternalLink, Heart, Users } from 'lucide-react';
import Tilt3D from '@/components/three/Tilt3D';

const Achievements = () => {
  const conferences = [
    {
      title: 'ICDTE-2025 — International Conference on Digital Technology and Engineering',
      org: 'RV Institute of Technology and Management, Bengaluru',
      result: 'Paper Presenter & Certificate of Appreciation',
      description: 'Presented a research paper on GAN-based age-invariant face recognition. The work focuses on how GANs can generate age-progressed and age-regressed facial images to support identity verification and forensic applications.',
      date: '2025',
      highlight: true,
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7432691845194801152/',
    },
    {
      title: 'IndiAIgnite: Prototyping AI Solutions for Atmanirbhar Bharat',
      org: 'RV Institute of Technology and Management, Bengaluru (Startup Ignition Cell & E-Cell in collaboration with CEDAT NEXUS)',
      result: 'Certificate of Participation — Presented TACOS System',
      description: 'Demonstrated excellence in innovation, presentation, and technical execution. Presented TACOS — a real-time toxic comment moderation system using DistilBERT transformer models for multi-label toxicity detection.',
      date: 'Feb 2026',
      highlight: true,
      link: 'https://github.com/Venkat-023/TACOS-ToxicityAnalysis-Comment-Observation-System',
    },
  ];

  const hackathons = [
    {
      title: 'Amazon ML Hackathon 2025',
      org: 'Amazon',
      result: 'Rank #1693 / 82,790',
      description: 'Product Price Prediction using ensemble ML methods. Final SMAPE Score: 51.4',
      date: 'Jan 2026',
      highlight: true,
    },
    {
      title: 'Artpark CodeForge Hackathon',
      org: 'Indian Institute of Science (IISc)',
      result: 'Participant',
      description: 'Built CareerDNA — AI-Adaptive Onboarding Engine that parses resumes, identifies skill gaps, and generates personalized training pathways.',
      date: 'Apr 2026',
    },
    {
      title: 'Build with Ai Hackathon',
      org: 'Unstop',
      result: 'Built DocOps-AI',
      description: 'Built DocOps-AI, an AI document operations project for document processing, extraction, summarization, and workflow assistance. Deployed on Hugging Face Spaces.',
      date: '2026',
      highlight: true,
      link: 'https://github.com/Venkat-023/DocOps-AI',
    },
    {
      title: 'Google Gemma 4 Hackathon',
      org: 'Google Gemma',
      result: 'Built Insight Weaver',
      description: 'Built Insight Weaver, a Gemma + Ollama powered scientific discovery copilot with evidence cleaning, entity extraction, knowledge graphs, GraphRAG, contradiction analysis, and hypotheses.',
      date: '2026',
      highlight: true,
      link: 'https://github.com/Venkat-023/Insight-Weaver',
    },
    {
      title: 'Meta OpenEnv Hackathon',
      org: 'Meta OpenEnv',
      result: 'Built AI First Minute',
      description: 'Built AI First Minute, an emergency first-response decision environment for evaluating AI agents supporting non-expert first responders. Deployed on Hugging Face Spaces.',
      date: '2026',
      highlight: true,
      link: 'https://github.com/Venkat-023/Ai_First_Minute',
    },
    {
      title: 'CodeWar — IIT Ropar',
      org: 'IIT Ropar (CodeChef)',
      result: 'Rank #3593 / 32,000+',
      description: 'National-level competitive programming contest on CodeChef.',
      date: '2026',
      highlight: true,
    },
    {
      title: 'AWS Summit',
      org: 'Amazon Web Services (AWS)',
      result: 'Selected Attendee',
      description: 'Selected to attend AWS Summit 2026, focused on cloud computing, artificial intelligence, modern infrastructure, and AWS builder ecosystems.',
      date: '2026',
      highlight: true,
      link: 'https://www.linkedin.com/posts/venkat-baba-yemineni-49a7612b4_awssummit-cloudcomputing-artificialintelligence-ugcPost-7454384782119018496-YLoc/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuTA3YBtKXkRvQ4qp0EdqsKhy16Bz2w33k',
    },
    {
      title: 'Kharagpur Data Science Hackathon',
      org: 'Indian Institute of Technology, Kharagpur',
      result: 'Participation Certificate',
      description: 'Data Science hackathon at IIT Kharagpur focused on real-world data challenges.',
      date: 'Jan 2026',
    },
    {
      title: 'Elan & nVision — IIT Hyderabad',
      org: 'IIT Hyderabad',
      result: 'Participant',
      description: 'Technical fest participation focused on Data Structures and Algorithms.',
      date: 'Jan 2026',
    },
    {
      title: 'Policy Hackathon — Policy Conclave\'26',
      org: 'Indian Institute of Technology, Kanpur',
      result: 'Participant',
      description: 'Policy-focused hackathon at IIT Kanpur.',
      date: 'Feb 2026',
    },
    {
      title: 'RIFT \'26 Hackathon',
      org: 'PW (PhysicsWallah)',
      result: 'Semifinalist',
      description: 'Semifinalist in the RIFT \'26 Hackathon organized by PhysicsWallah. Credential ID: 99d629c0-658e-4d1f-a2e3-166541c78c3c',
      date: 'Feb 2026',
      highlight: true,
    },
    {
      title: 'Adivya 2.0',
      org: 'IIT Ropar',
      result: 'Semifinalist',
      description: 'Built SkillQuest AI, a gamified AI learning platform with adaptive assessments and tutoring.',
      date: '2026',
      highlight: true,
      link: 'https://github.com/Venkat-023/SkillQuest-Ai',
    },
  ];

  const community = [
    {
      title: 'Volunteer Teacher - U&I',
      org: 'U&I',
      description: 'Mentoring underprivileged and orphaned students through weekly academic support sessions.',
      icon: <Heart className="w-6 h-6 text-accent" />,
    },
    {
      title: 'Fundraising & Volunteer Team Lead',
      org: 'Community education support',
      description: 'Led fundraising initiatives and volunteer teams to support students\' educational expenses and learning resources.',
      icon: <Users className="w-6 h-6 text-primary" />,
    },
    {
      title: 'NSS Coordinator',
      org: 'National Service Scheme',
      description: 'Organizing workshops and coordinating volunteers, logistics, and campus events.',
      icon: <Shield className="w-6 h-6 text-secondary" />,
    },
  ];

  const certifications = [
    {
      title: 'AWS Certifications',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Jun 2025',
      skills: ['Cloud Computing'],
      category: 'Cloud',
      link: 'https://www.linkedin.com/in/venkat-baba-yemineni-49a7612b4/',
    },
    {
      title: 'Machine Learning',
      issuer: 'Infosys Springboard',
      date: 'Jun 2025',
      skills: ['Model Training', 'Data Preprocessing', 'Data Analysis'],
      category: 'AI/ML',
    },
    {
      title: 'Deep Learning',
      issuer: 'Infosys Springboard',
      date: 'Jun 2025',
      skills: ['CNN', 'NLP', 'Neural Networks', 'TensorFlow', 'Keras'],
      category: 'AI/ML',
    },
    {
      title: 'Data Analysis with Python and Pandas',
      issuer: 'Infosys Springboard',
      date: 'Jun 2025',
      skills: ['Pandas', 'Exploratory Data Analysis', 'Python'],
      category: 'Data Science',
    },
    {
      title: 'Introduction to Programming Using Python',
      issuer: 'Infosys Springboard',
      date: 'Jun 2025',
      skills: ['Python'],
      category: 'Programming',
    },
    {
      title: 'Software Engineering Job Simulation',
      issuer: 'JPMorgan Chase via Forage',
      date: 'Jan 2026',
      skills: ['Software Engineering', 'Java'],
      category: 'Engineering',
    },
    {
      title: 'Software Development with Jira',
      issuer: 'Simplilearn',
      date: 'Nov 2025',
      skills: ['Jira', 'Agile', 'Project Management'],
      category: 'Engineering',
    },
  ];

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, React.ReactNode> = {
      'Cloud': <Cloud className="w-5 h-5 text-primary" />,
      'AI/ML': <Brain className="w-5 h-5 text-accent" />,
      'Data Science': <Cpu className="w-5 h-5 text-secondary" />,
      'Programming': <Code2 className="w-5 h-5 text-primary" />,
      'Engineering': <Shield className="w-5 h-5 text-accent" />,
    };
    return icons[category] || <FileText className="w-5 h-5 text-muted-foreground" />;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-cyan">
            Hackathons & Certifications
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Competitions, hackathons, and professional certifications
          </p>
        </div>

        {/* Conferences */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8 text-gradient-cyan flex items-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            Conferences & Presentations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conferences.map((conf, index) => (
              <Tilt3D
                key={index}
                max={5}
                scale={1.015}
                className="h-full animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="glass-card p-6 rounded-2xl hover-lift transition-all border-2 border-primary/50 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/20 flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-display font-bold text-foreground">{conf.title}</h3>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{conf.date}</span>
                      </div>
                      <p className="text-sm text-primary font-medium mt-1">{conf.org}</p>
                      <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold bg-primary/20 text-primary border border-primary/30">
                        {conf.result}
                      </span>
                      <p className="text-sm text-muted-foreground mt-2">{conf.description}</p>
                      {conf.link && (
                        <a href={conf.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors mt-3">
                          <ExternalLink className="w-4 h-4" />
                          View Post
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt3D>
            ))}
          </div>
        </div>

        {/* Hackathons */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8 text-gradient-cyan flex items-center gap-3">
            <Trophy className="w-8 h-8 text-accent" />
            Hackathons & Competitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hackathons.map((hack, index) => (
              <Tilt3D
                key={index}
                max={5}
                scale={1.015}
                className="h-full animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className={`glass-card p-6 rounded-2xl hover-lift transition-all h-full ${
                    hack.highlight ? 'border-2 border-accent/50' : 'border border-border/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${hack.highlight ? 'bg-accent/20' : 'bg-primary/10'} flex-shrink-0`}>
                      {hack.highlight ? (
                        <Trophy className="w-6 h-6 text-accent" />
                      ) : (
                        <Award className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-display font-bold text-foreground">{hack.title}</h3>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{hack.date}</span>
                      </div>
                      <p className="text-sm text-primary font-medium mt-1">{hack.org}</p>
                      {hack.result !== 'Participant' && hack.result !== 'Participation Certificate' && hack.result !== 'Certificate Participant' && (
                        <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent border border-accent/30">
                          {hack.result}
                        </span>
                      )}
                      <p className="text-sm text-muted-foreground mt-2">{hack.description}</p>
                      {'link' in hack && (hack as any).link && (
                        <a href={(hack as any).link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors mt-3">
                          <ExternalLink className="w-4 h-4" />
                          View Details
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt3D>
            ))}
          </div>
        </div>

        {/* Community & Leadership */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8 text-gradient-cyan flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            Community & Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {community.map((item, index) => (
              <Tilt3D
                key={index}
                max={5}
                scale={1.015}
                className="h-full animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="glass-card p-6 rounded-2xl hover-lift border border-border/50 hover:border-primary/50 transition-all h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-muted/50 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-primary font-medium mt-1">{item.org}</p>
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Tilt3D>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-3xl font-display font-bold mb-8 text-gradient-cyan flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Tilt3D
                key={index}
                max={5}
                scale={1.015}
                className="h-full animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="glass-card p-6 rounded-2xl hover-lift border border-border/50 hover:border-primary/50 transition-all h-full">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-muted/50">
                        {getCategoryIcon(cert.category)}
                      </div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{cert.category}</span>
                    </div>
                    <h3 className="text-base font-display font-bold text-foreground">{cert.title}</h3>
                    <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">Issued {cert.date}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-xs bg-muted/50 text-foreground rounded-full border border-border/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors mt-1">
                        <ExternalLink className="w-3 h-3" />
                        View Credential
                      </a>
                    )}
                  </div>
                </div>
              </Tilt3D>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
