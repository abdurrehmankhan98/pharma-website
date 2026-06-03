import Image from "next/image";

const badges = [
  { label: "PHARMACY EDUCATION", icon: "Rx", className: "badge-one", delay: "0s" },
  { label: "CERTIFICATIONS", icon: "C", className: "badge-two", delay: ".1s" },
  { label: "PROFESSIONAL GROWTH", icon: "G", className: "badge-three", delay: ".2s" },
  { label: "CLINICAL EXCELLENCE", icon: "+", className: "badge-four", delay: ".3s" },
  { label: "INDUSTRY READY", icon: "IR", className: "badge-five", delay: ".4s" },
  { label: "EXPERT MENTORS", icon: "M", className: "badge-six optional-badge", delay: ".5s" },
  { label: "CPD LEARNING", icon: "L", className: "badge-seven optional-badge", delay: ".6s" },
  { label: "REGULATORY AFFAIRS", icon: "RA", className: "badge-eight optional-badge", delay: ".7s" },
  { label: "PATIENT CARE", icon: "PC", className: "badge-nine optional-badge", delay: ".8s" },
  { label: "PHARMACOLOGY", icon: "P", className: "badge-ten optional-badge", delay: ".9s" },
];

const pathways = [
  "Clinical Pharmacist",
  "Regulatory Specialist",
  "Pharmacovigilance Lead",
  "Hospital Pharmacy",
];

const courses = [
  ["Pharmacology Fundamentals", "6 weeks", "Certificate Program"],
  ["Clinical Pharmacy Practice", "10 weeks", "Advanced Certificate"],
  ["Pharmaceutical Regulations", "6 weeks", "Career Certificate"],
  ["Drug Safety & Pharmacovigilance", "8 weeks", "Professional Track"],
  ["Pharmacy Management", "12 weeks", "Leadership Program"],
];

const blogs = [
  ["The Future of Pharmacy: Trends Shaping the Industry", "Strategy"],
  ["Understanding Drug Interactions in Clinical Practice", "Clinical"],
  ["How Pharmacists Can Improve Patient Outcomes", "Patient Care"],
];

const books = [
  ["Pharmacology Essentials", "6th Edition"],
  ["Clinical Pharmacy Handbook", "3rd Edition"],
  ["Pharmaceutical Care Practice", "2nd Edition"],
  ["Pharmacotherapy Principles", "5th Edition"],
  ["Goodman & Gilman's Pharmacological Basis", "14th Edition"],
  ["Regulatory Pharmacy Review", "2026 Guide"],
];

const revisions = [
  "Pharmacology",
  "Pharmacokinetics",
  "Medicinal Chemistry",
  "Pharmacognosy",
  "Pharmacy Law",
];

const faqs = [
  "What courses does Kingstown College offer?",
  "Are the certificates recognized?",
  "How can I enroll in a course?",
  "Can I access course materials after completion?",
];

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero-section">
        <nav className="nav-wrap" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Kingstown College home">
            <span className="brand-mark">KC</span>
            <span>
              <strong>KINGSTOWN</strong>
              <small>College of Pharmacy</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="#courses">Courses</a>
            <a href="#pathways">Careers</a>
            <a href="#articles">Insights</a>
            <a href="#about">About</a>
          </div>
          <a className="nav-cta" href="#brochure">Request a Brochure</a>
        </nav>

        <div className="hero-inner" id="top">
          <div className="badge-field" aria-hidden="true">
            {badges.map((badge) => (
              <span
                className={`floating-badge ${badge.className}`}
                key={badge.label}
                style={{ animationDelay: badge.delay }}
              >
                <span>{badge.icon}</span>
                {badge.label}
              </span>
            ))}
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Professional Pharmacy Education</p>
            <h1>
              <span>Building Pharmacy</span>
              <span>Careers That Stand Out</span>
            </h1>
            <p className="hero-text">
              Empowering pharmacy professionals and students through
              industry-focused education, expert mentorship, certification
              programs, and career advancement opportunities.
            </p>
            <div className="hero-actions" id="brochure">
              <a className="button primary" href="#footer">
                Request Brochure
              </a>
              <a className="button secondary" href="#courses">
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="pathways">
        <SectionHeader
          eyebrow="Graduate Career Pathways"
          title="Where ambitious pharmacy graduates go next"
          action="View All Pathways"
        />
        <div className="pathway-grid">
          {pathways.map((pathway, index) => (
            <article className="image-card" key={pathway}>
              <div className={`visual visual-${index + 1}`} />
              <div>
                <span className="mini-icon">{index + 1}</span>
                <h3>{pathway}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="courses">
        <SectionHeader
          eyebrow="Pharmacy Courses"
          title="Best pharmacy courses and certificates"
          action="View All Courses"
        />
        <div className="course-grid">
          {courses.map(([title, duration, type], index) => (
            <article className="course-card" key={title}>
              <span className={`course-icon icon-${index + 1}`}>Rx</span>
              <h3>{title}</h3>
              <p>{type}</p>
              <small>{duration}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="articles">
        <SectionHeader
          eyebrow="Blog Articles"
          title="Latest thinking for modern pharmacy practice"
          action="View All Blogs"
        />
        <div className="blog-grid">
          {blogs.map(([title, tag], index) => (
            <article className="blog-card" key={title}>
              <div className={`blog-visual blog-${index + 1}`} />
              <div className="blog-body">
                <span>{tag}</span>
                <h3>{title}</h3>
                <a href="#footer">Read More</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section books-section">
        <SectionHeader
          eyebrow="Recommended Books"
          title="Core references for serious pharmacy learners"
          action="View All Books"
        />
        <div className="book-carousel" aria-label="Recommended pharmacy books">
          {books.map(([title, edition], index) => (
            <article className="book-item" key={title}>
              <div className={`book-cover cover-${index + 1}`}>
                <span>Kingstown</span>
                <strong>{title}</strong>
              </div>
              <div>
                <h3>{title}</h3>
                <p>{edition}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section revision-section">
        <SectionHeader
          eyebrow="Quick Revision Series"
          title="Focused study notes for exam-ready confidence"
          action="View All Notes"
        />
        <div className="revision-grid">
          {revisions.map((revision) => (
            <article className="revision-card" key={revision}>
              <span className="revision-icon">PDF</span>
              <h3>{revision} Quick Revision</h3>
              <p>PDF Notes</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-copy">
          <p className="eyebrow">About College</p>
          <h2>Built for pharmacy professionals with bigger plans</h2>
          <p>
            We are dedicated to advancing pharmacy education through
            industry-aligned programs, expert faculty, and practical learning
            experiences that move careers forward.
          </p>
          <div className="stats-row">
            <Stat value="15+" label="Years of Excellence" />
            <Stat value="25k+" label="Students Trained" />
            <Stat value="500+" label="Expert Mentors" />
            <Stat value="100+" label="Industry Partners" />
          </div>
        </div>
        <div className="about-image">
          <Image
            src="/assets/pharmacy-campus.jpg"
            alt="Modern pharmacy education campus and clinical learning facility"
            width={900}
            height={600}
            sizes="(max-width: 768px) 100vw, 48vw"
          />
        </div>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="Student Testimonials"
          title="What our students say"
          action="View Stories"
        />
        <div className="testimonial-grid">
          {["Priya Sharma", "Rahul Verma", "Anjali Patel"].map((name) => (
            <article className="testimonial-card" key={name}>
              <p className="stars">★★★★★</p>
              <blockquote>
                The courses are comprehensive, practical, and taught with the
                kind of clarity that builds real professional confidence.
              </blockquote>
              <strong>{name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="faq-grid">
          {faqs.map((faq) => (
            <details key={faq}>
              <summary>{faq}</summary>
              <p>
                Our admissions team can guide you through eligibility, course
                fit, schedules, certification details, and learning access.
              </p>
            </details>
          ))}
        </div>
      </section>

      <footer className="footer" id="footer">
        <div className="footer-inner">
          <div>
            <a className="brand footer-brand" href="#top">
              <span className="brand-mark">KC</span>
              <span>
                <strong>KINGSTOWN</strong>
                <small>College of Pharmacy</small>
              </span>
            </a>
            <p>
              Professional pharmacy education designed for career growth,
              clinical confidence, and industry readiness.
            </p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="#courses">Courses</a>
            <a href="#pathways">Careers</a>
            <a href="#articles">Insights</a>
          </div>
          <div>
            <h3>Support</h3>
            <a href="#footer">Help Center</a>
            <a href="#footer">Payment Options</a>
            <a href="#footer">Privacy Policy</a>
          </div>
          <form>
            <h3>Newsletter</h3>
            <label htmlFor="email">Subscribe for course updates</label>
            <div className="email-row">
              <input id="email" type="email" placeholder="Enter your email" />
              <button type="submit">Go</button>
            </div>
          </form>
        </div>
      </footer>
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: string;
}) {
  return (
    <div className="section-header">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {action ? <a href="#footer">{action}</a> : null}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
