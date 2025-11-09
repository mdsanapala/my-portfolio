"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ======== QUICK SETUP NOTES ========
// 1) TailwindCSS + shadcn/ui should be installed. In Next.js/ShadCN projects this works out-of-the-box.
// 2) Put your resume file at "/resume.pdf" (public folder) OR set RESUME_URL to any absolute URL.
// 3) Contact form uses EmailJS (client-side). Install: npm i emailjs-com
//    IDs are already filled in below.
// 4) Replace remaining placeholders if you see any.

// ======== EMAILJS =========
import emailjs from "emailjs-com";
const EMAILJS_SERVICE_ID = "service_zqb75vk";
const EMAILJS_TEMPLATE_ID = "template_yqft81l";
const EMAILJS_PUBLIC_KEY = "3r92N5JYEVJod5vLB";

// ======== ASSETS ========
// Put your PDF in the public folder as /resume.pdf OR change this to any absolute URL
const RESUME_URL = "/resume.pdf";

// ======== UTILS ========
const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const glass =
  "backdrop-blur-xl bg-white/10 dark:bg-white/10 border border-white/20 shadow-2xl";
const gradientText =
  "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent";
const gradientBg = "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600";
const gridBg =
  "absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px]";

// ======== DATA (Personalized) ========
const skills = [
  { group: "Programming Languages", items: ["Python", "Java", "C/C++ (Basic)"] },
  { group: "Web", items: ["HTML", "CSS"] },
  {
    group: "ML/DL",
    items: [
      "Machine Learning",
      "Deep Learning (ANN, CNN, RNN, LSTM)",
      "Model Optimization",
      "Evaluation",
    ],
  },
  {
    group: "CV & Libraries",
    items: [
      "Computer Vision",
      "MediaPipe",
      "OpenCV",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-Learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
    ],
  },
  { group: "Tools", items: ["Data Cleaning", "Pre-processing", "Git", "GitHub"] },
];

const projects = [
  {
    title: "AI Fake News Detector (Chrome Extension)",
    about: "Detects fake news in real time using ML-based classification.",
    tech: ["Python", "ML", "Chrome API"],
    link: "https://github.com/mdsanapala/Fake-News-Extension",
  },
  {
    title: "Asthma Detection ML Model (97% Accuracy)",
    about: "Supervised ML model predicting asthma likelihood with high accuracy.",
    tech: ["Python", "ML", "Pandas"],
    link: "https://github.com/mdsanapala/Asthma-Detection-ML",
  },
  {
    title: "Real-Time Hand Gesture Virtual Mouse",
    about: "Gesture-controlled virtual mouse built using CV + MediaPipe.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    link: "https://github.com/mdsanapala/HandGestureVirtualMouse",
  },
  {
    title: "Gesture Volume Control System",
    about: "Adjust system volume using hand gestures.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    link: "https://github.com/mdsanapala/Hand-Gesture-Volume-Control",
  },
  {
    title: "Background Remover using CV",
    about: "Real-time background remover using segmentation.",
    tech: ["Python", "OpenCV", "ML"],
    link: "https://github.com/mdsanapala/Background-Removal-Project",
  },
  {
    title: "Breast Cancer Detection",
    about: "ML model predicting breast cancer using classical algorithms.",
    tech: ["Python", "ML", "Scikit-Learn"],
    // No public repo yet – link omitted intentionally so UI shows a placeholder
  },
  {
    title: "AI Resume Analyzer",
    about: "Analyzes skill match and scores resumes using ML.",
    tech: ["Python", "NLP", "ML"],
    link: "https://github.com/mdsanapala/ai-resume-analyzer",
  },
  {
    title: "Air Canvas (OpenCV + MediaPipe)",
    about: "Draw in the air with fingertip tracking and gesture-based controls.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    link: "https://github.com/mdsanapala/Air-Canvas-Using-OpenCV-and-Mediapipe",
  },
];

const experience = [
  {
    role: "Machine Learning Engineer Intern",
    company: "InternsElite",
    period: "2024",
    points: [
      "Developed ML pipelines for real-world applications.",
      "Worked on CV and DL-based automation tasks.",
      "Improved ML model accuracy and optimized performance.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Lovely Professional University, Jalandhar, Punjab",
    period: "2023 – 2026",
    details: ["Learning AI/ML, DL, CV", "Working on real-world AI projects"],
  },
  {
    degree: "Intermediate – MPC",
    school: "Narayana Junior College, Palasa, Andhra Pradesh",
    period: "2020 – 2022",
    details: [],
  },
  {
    degree: "Matriculation",
    school: "Narayana High School, Visakhapatnam, Andhra Pradesh",
    period: "Before 2020",
    details: [],
  },
];

export default function Portfolio() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => alert("Message sent!"))
      .catch(() => alert("Failed to send. Please try again."));
  };

  return (
    <div className="relative min-h-screen text-gray-900 dark:text-white antialiased">
      {/* Background gradient + subtle grid */}
      <div className="fixed inset-0 -z-10">
        <div className={`absolute inset-0 ${gradientBg} opacity-30`} />
        <div className={gridBg} aria-hidden />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/30 dark:bg-black/30 border-b border-white/20">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-tight">
            md · portfolio
          </a>
          <div className="flex items-center gap-2">
            <a href="#projects" className="px-3 py-2 rounded-lg hover:bg-white/20">
              Projects
            </a>
            <a href="#experience" className="px-3 py-2 rounded-lg hover:bg-white/20">
              Experience
            </a>
            <a href="#contact" className="px-3 py-2 rounded-lg hover:bg-white/20">
              Contact
            </a>
            <Button asChild className="ml-2">
              <a href={RESUME_URL} download>
                <Download className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
          </div>
        <button
              onClick={() => {
                if (typeof document !== "undefined") {
                  document.documentElement.classList.toggle("dark");
                }
              }}
              className="ml-3 px-3 py-2 rounded-lg hover:bg-white/20 border border-white/30 text-sm"
            >
              Toggle Dark
            </button>
          </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-24">
        {/* HERO */}
        <section id="hero" className="pt-12 sm:pt-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className={`rounded-3xl p-8 sm:p-12 ${glass}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <p className="uppercase text-sm tracking-widest opacity-80">
                  Hello, I am
                </p>
                <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mt-2">
                  <span className={gradientText}>Murali Dharan Sanapala</span>
                </h1>
                <p className="mt-4 text-lg opacity-90">
                  Deep Learning & Computer Vision Innovator | AI/ML Developer
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="secondary" className="shadow-lg">
                    <a href="#projects">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Projects
                    </a>
                  </Button>
                  <Button asChild className="shadow-lg">
                    <a href="#contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Hire Me
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="shadow-lg">
                    <a href={RESUME_URL} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                </div>
                <div className="mt-6 flex items-center gap-4 opacity-90">
                  <a
                    href="https://linkedin.com/in/murali-dharan-sanapala"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-100 flex items-center gap-2"
                  >
                    <Linkedin className="h-5 w-5" /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/mdsanapala"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-100 flex items-center gap-2"
                  >
                    <Github className="h-5 w-5" /> GitHub
                  </a>
                </div>
              </div>

              <div className="justify-self-center">
                <div
                  className={`relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden ${glass}`}
                >
                  {/* Replace with your photo */}
                  <img
                    src="https://raw.githubusercontent.com/mdsanapala/Images/main/murali.png"
                    alt="Murali Dharan Sanapala"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 ring-1 ring-white/30" />
                </div>
                <div className="mt-3 text-center text-sm opacity-80">Based in India</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className={`rounded-3xl ${glass}`}>
              <CardHeader>
                <CardTitle className="text-2xl">About</CardTitle>
              </CardHeader>
              <CardContent className="text-base leading-relaxed whitespace-pre-line">
                {`I am an AI/ML Developer passionate about building intelligent systems that solve real-world problems. My work centers around Deep Learning, Computer Vision, and applied Machine Learning, where I enjoy turning complex ideas into functional, user-ready solutions.

I have built several hands-on projects—from gesture-based interfaces and sign-language detection systems to healthcare-focused ML models—and I am constantly exploring how AI can push the boundaries of human-computer interaction.

I believe in learning by doing. Every project I create is an opportunity to refine my thinking, experiment with new tools, and build something meaningful. My goal is simple: to design AI-powered solutions that are accurate, impactful, and accessible.

When I am not coding, I explore research papers, improve my problem-solving skills, or experiment with new model architectures.`}
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-16">
          <motion.h2
            className="text-2xl font-semibold mb-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            Skills
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((s) => (
              <motion.div
                key={s.group}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className={`rounded-2xl ${glass}`}>
                  <CardHeader>
                    <CardTitle className="text-lg">{s.group}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-wrap gap-2">
                      {s.items.map((i) => (
                        <li
                          key={i}
                          className="px-3 py-1 rounded-full text-sm border border-white/30 bg-white/10"
                        >
                          {i}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-16">
          <motion.h2
            className="text-2xl font-semibold mb-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <motion.div
                key={p.title}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className={`rounded-3xl overflow-hidden ${glass}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{p.title}</span>
                      {p.link ? (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm underline flex items-center gap-1"
                        >
                          View <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <span className="text-sm opacity-70">Private / Coming soon</span>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="opacity-90 mb-3">{p.about}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-sm border border-white/30 bg-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mt-16">
          <motion.h2
            className="text-2xl font-semibold mb-4 flex items-center gap-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Briefcase className="h-6 w-6" /> Experience / Internships
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((e) => (
              <motion.div
                key={e.role}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className={`rounded-3xl ${glass}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {e.role} – {e.company}
                    </CardTitle>
                    <div className="text-sm opacity-80">{e.period}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {e.points.map((pt, idx) => (
                        <li key={`${e.company}-${idx}`}>{pt}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="mt-16">
          <motion.h2
            className="text-2xl font-semibold mb-4 flex items-center gap-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <GraduationCap className="h-6 w-6" /> Education
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((ed) => (
              <motion.div
                key={ed.degree}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className={`rounded-3xl ${glass}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{ed.degree}</CardTitle>
                    <div className="text-sm opacity-80">
                      {ed.school} · {ed.period}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {ed.details.map((pt, idx) => (
                        <li key={`${ed.degree}-${idx}`}>{pt}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* RESUME DOWNLOAD (extra callout) */}
        <section id="resume" className="mt-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className={`rounded-3xl ${glass}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6" /> Resume
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <Button asChild>
                    <a href={RESUME_URL} download>
                      <Download className="mr-2 h-4 w-4" /> Download PDF
                    </a>
                  </Button>

                  <Button asChild variant="outline">
                    <a href="#resume-preview">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Online
                    </a>
                  </Button>
                </div>

                <div id="resume-preview" className="w-full h-[600px] rounded-xl overflow-hidden border border-white/20">
                  <iframe
                    src={RESUME_URL}
                    className="w-full h-full"
                    title="Resume Preview"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16">
          <motion.h2
            className="text-2xl font-semibold mb-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            Contact
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={`rounded-3xl p-6 ${glass}`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 opacity-90">
                    <Mail className="h-5 w-5" /> sanapalamuralidharan2004@gmail.com
                  </div>
                  <div className="flex items-center gap-3 opacity-90">
                    <Phone className="h-5 w-5" /> +91 9640742433
                  </div>
                  <div className="flex items-center gap-3 opacity-90">
                    <MapPin className="h-5 w-5" /> India (Remote-friendly)
                  </div>
                </div>
                <p className="mt-4 opacity-90">
                  Prefer email? Use the form and I will get back within 24 hours.
                </p>
              </div>

              {/* EmailJS form */}
              <form ref={formRef} className="space-y-3" onSubmit={sendEmail}>
                <input type="hidden" name="to_name" value="Murali" />
                <div>
                  <label className="text-sm opacity-80">Your Name</label>
                  <input
                    name="from_name"
                    required
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-white/30 bg-white/10 outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm opacity-80">Your Email</label>
                  <input
                    type="email"
                    name="reply_to"
                    required
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-white/30 bg-white/10 outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm opacity-80">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-white/30 bg-white/10 outline-none"
                  />
                </div>
                {/* If you do not want EmailJS, replace Button with: <a href="mailto:sanapalamuralidharan2004@gmail.com" className="inline-block"><Button type="button">Email Me</Button></a> */}
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Murali Dharan Sanapala · Built with React & Tailwind
      </footer>
    </div>
  );
}

// ================= Simple Self-Checks ("Test Cases") =================
// These are runtime checks to help catch common mistakes. They do not affect UI.
(function runSelfTests() {
  try {
    const mustHave = [
      skills.length > 0,
      projects.length > 0,
      education.length > 0,
      experience.length > 0,
      typeof gradientText === "string" && gradientText.length > 0,
    ];
    if (mustHave.some((x) => !x)) {
      // eslint-disable-next-line no-console
      console.warn("Self-test failed: one of the required data sets is empty or invalid.");
    }

    // Extra tests: check project link shapes and resume URL
    const badLinks = projects
      .filter((p) => p.link)
      .filter((p) => typeof p.link !== "string" || !/^https?:\/\//.test(String(p.link)));
    if (badLinks.length) {
      // eslint-disable-next-line no-console
      console.warn("Self-test: Some project links are not valid URLs:", badLinks.map((b) => b.title));
    }

    if (typeof RESUME_URL !== "string" || RESUME_URL.length === 0) {
      // eslint-disable-next-line no-console
      console.warn("Self-test: RESUME_URL is missing or not a string.");
    }

    if (!RESUME_URL.endsWith(".pdf") && !/^https?:\/\//.test(RESUME_URL)) {
      // eslint-disable-next-line no-console
      console.warn("Self-test: RESUME_URL should be a .pdf path or an absolute URL.");
    }

    // Ensure each skills group has at least one item
    const emptySkillGroups = skills.filter((g) => !g.items || g.items.length === 0);
    if (emptySkillGroups.length) {
      // eslint-disable-next-line no-console
      console.warn("Self-test: Some skill groups are empty:", emptySkillGroups.map((g) => g.group));
    }

    // EmailJS IDs check
    const ids = [EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY];
    if (!ids.every((x) => typeof x === "string" && x.length > 0)) {
      // eslint-disable-next-line no-console
      console.warn("Self-test: EmailJS credentials look missing or malformed.");
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn("Self-test exception:", e);
  }
})();
