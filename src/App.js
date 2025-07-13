"use client"

import { useState } from "react"
import {
  Heart,
  Users,
  Shield,
  Lightbulb,
  Zap,
  Lock,
  Handshake,
  GraduationCap,
  Briefcase,
  BookOpen,
  Phone,
  Palette,
  Activity,
  MessageSquare,
  MapPin,
  Wrench,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Mail,
  User,
  Award,
} from "lucide-react"

const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    line-height: 1.6;
  }

  .app-container {
    min-height: 100vh;
    background: linear-gradient(135deg, #f0f9ff 0%, #faf5ff 50%, #fdf2f8 100%);
  }

  .navbar {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
  }

  .navbar-brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .navbar-title {
    font-size: 1.25rem;
    font-weight: bold;
    background: linear-gradient(45deg, #9333ea, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .navbar-nav {
    display: flex;
    gap: 2rem;
  }

  .nav-button {
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    background: transparent;
    color: #374151;
  }

  .nav-button:hover {
    background: #f3e8ff;
    color: #9333ea;
  }

  .nav-button.active {
    background: #e9d5ff;
    color: #7c3aed;
  }

  .mobile-menu-button {
    display: none;
    padding: 0.5rem;
    border: none;
    border-radius: 0.375rem;
    background: transparent;
    color: #374151;
    cursor: pointer;
  }

  .mobile-menu-button:hover {
    background: #f3e8ff;
  }

  .mobile-nav {
    display: none;
    padding-bottom: 1rem;
  }

  .mobile-nav.open {
    display: block;
  }

  .mobile-nav-button {
    display: block;
    width: 100%;
    text-align: left;
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    background: transparent;
    color: #374151;
    margin-bottom: 0.25rem;
  }

  .mobile-nav-button:hover {
    background: #f3e8ff;
    color: #9333ea;
  }

  .mobile-nav-button.active {
    background: #e9d5ff;
    color: #7c3aed;
  }

  .hero-section {
    overflow: hidden;
    position: relative;
  }

  .hero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 1rem;
    text-align: center;
  }

  .hero-icon {
    width: 5rem;
    height: 5rem;
    color: #9333ea;
    margin: 0 auto 1rem;
  }

  .hero-title {
    font-size: 3rem;
    font-weight: bold;
    background: linear-gradient(45deg, #9333ea, #ec4899, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    color: #374151;
    max-width: 64rem;
    margin: 0 auto;
    line-height: 1.75;
  }

  .hero-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 4rem auto 0;
  }

  .hero-card {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(8px);
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(147, 51, 234, 0.1);
  }

  .hero-card.vision {
    border-color: rgba(236, 72, 153, 0.1);
  }

  .hero-card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .hero-card-title.vision {
    color: #9333ea;
  }

  .hero-card-title.mission {
    color: #ec4899;
  }

  .hero-card-text {
    color: #374151;
    line-height: 1.75;
  }

  .section-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 1rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    background: linear-gradient(45deg, #9333ea, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.5rem;
  }

  .section-subtitle {
    font-size: 1.25rem;
    color: #374151;
    max-width: 48rem;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    gap: 1.5rem;
  }

  .grid-2 {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .grid-3 {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .grid-4 {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(8px);
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(147, 51, 234, 0.1);
    transition: all 0.3s ease;
  }

  .card:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .card-title-wrapper {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .card-icon {
    width: 2rem;
    height: 2rem;
    color: #9333ea;
    flex-shrink: 0;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #1f2937;
  }

  .expand-button {
    background: none;
    border: none;
    color: #9333ea;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 0.25rem;
    transition: color 0.3s ease;
  }

  .expand-button:hover {
    color: #7c3aed;
  }

  .card-description {
    color: #374151;
    line-height: 1.75;
    animation: fadeIn 0.3s ease-in-out;
  }

  .audience-card {
    text-align: center;
    transition: transform 0.3s ease;
  }

  .audience-card:hover {
    transform: scale(1.05);
  }

  .audience-icon {
    width: 3rem;
    height: 3rem;
    color: #9333ea;
    margin-bottom: 1rem;
  }

  .audience-title {
    font-size: 1.125rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  .audience-description {
    color: #374151;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .tulia-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 1rem;
  }

  .tulia-header {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
  }

  .tulia-header::before {
    content: '';
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(45deg, #9333ea, #ec4899);
    border-radius: 2px;
  }

  .tulia-title {
    font-size: 3rem;
    font-weight: bold;
    background: linear-gradient(45deg, #9333ea, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
  }

  .tulia-tagline {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  .tulia-motto {
    font-size: 1.125rem;
    font-weight: 500;
    color: #7c3aed;
    margin-bottom: 1.5rem;
  }

  .tulia-description {
    font-size: 1.125rem;
    color: #374151;
    max-width: 64rem;
    margin: 0 auto;
    line-height: 1.75;
  }

  .founder-section {
    background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1));
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 3rem 0;
    text-align: center;
    border: 1px solid rgba(147, 51, 234, 0.2);
  }

  .founder-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #7c3aed;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .founder-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  .founder-role {
    color: #6b7280;
    font-style: italic;
  }

  .tulia-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
  }

  .tulia-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border-radius: 1.5rem;
    padding: 2.5rem;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .tulia-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(45deg, #9333ea, #ec4899);
  }

  .tulia-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }

  .tulia-card.student {
    border: 1px solid rgba(147, 51, 234, 0.2);
  }

  .tulia-card.teacher {
    border: 1px solid rgba(236, 72, 153, 0.2);
  }

  .tulia-card-title {
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .tulia-card-title.student {
    color: #7c3aed;
  }

  .tulia-card-title.teacher {
    color: #be185d;
  }

  .tulia-card-subtitle {
    color: #374151;
    margin-bottom: 2rem;
    font-size: 1.125rem;
    line-height: 1.6;
  }

  .week-item {
    border: 1px solid rgba(147, 51, 234, 0.2);
    border-radius: 0.75rem;
    padding: 1.25rem;
    background: linear-gradient(135deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05));
    margin-bottom: 1rem;
    transition: all 0.3s ease;
  }

  .week-item:hover {
    background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1));
    transform: translateX(5px);
  }

  .week-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .week-title {
    font-weight: 600;
    color: #6b21a8;
    font-size: 1.125rem;
  }

  .week-description {
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: 0.5rem;
    line-height: 1.5;
  }

  .week-badge {
    background: linear-gradient(45deg, #ddd6fe, #fce7f3);
    color: #6b21a8;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 600;
    border: 1px solid rgba(147, 51, 234, 0.2);
  }

  .tools-section {
    margin-top: 2rem;
    padding: 1.5rem;
    background: linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1));
    border-radius: 0.75rem;
    border: 1px solid rgba(147, 51, 234, 0.2);
  }

  .tools-text {
    font-size: 0.875rem;
    color: #374151;
    line-height: 1.6;
  }

  .workshop-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    border-radius: 0.75rem;
    transition: all 0.3s ease;
  }

  .workshop-item:hover {
    background: rgba(236, 72, 153, 0.05);
  }

  .workshop-icon {
    background: linear-gradient(135deg, #fce7f3, #f3e8ff);
    border-radius: 9999px;
    padding: 0.75rem;
    flex-shrink: 0;
    border: 1px solid rgba(236, 72, 153, 0.2);
  }

  .workshop-icon-svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #be185d;
  }

  .workshop-content h4 {
    font-weight: 600;
    color: #be185d;
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
  }

  .workshop-content p {
    font-size: 0.875rem;
    color: #6b7280;
    line-height: 1.5;
  }

  .objectives-section {
    margin-top: 4rem;
    text-align: center;
  }

  .objectives-card {
    background: linear-gradient(135deg, #9333ea, #ec4899);
    border-radius: 1.5rem;
    padding: 3rem;
    color: white;
    box-shadow: 0 20px 40px rgba(147, 51, 234, 0.3);
  }

  .objectives-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .objectives-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    text-align: left;
  }

  .objectives-list {
    list-style: none;
  }

  .objectives-list li {
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    position: relative;
  }

  .objectives-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #fbbf24;
    font-weight: bold;
  }

  .contact-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 1rem;
  }

  .contact-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .contact-title {
    font-size: 2.5rem;
    font-weight: bold;
    background: linear-gradient(45deg, #9333ea, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.5rem;
  }

  .contact-subtitle {
    font-size: 1.25rem;
    color: #374151;
    max-width: 48rem;
    margin: 0 auto;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .contact-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border-radius: 1.5rem;
    padding: 2.5rem;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(147, 51, 234, 0.1);
    text-align: center;
    transition: all 0.3s ease;
  }

  .contact-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }

  .contact-icon {
    width: 4rem;
    height: 4rem;
    color: #9333ea;
    margin: 0 auto 1.5rem;
  }

  .contact-method {
    font-size: 1.25rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  .contact-info {
    font-size: 1.125rem;
    color: #7c3aed;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .contact-description {
    color: #6b7280;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .footer {
    background: linear-gradient(45deg, #581c87, #831843);
    color: white;
    padding: 3rem 0;
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    text-align: center;
  }

  .footer-brand {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .footer-icon {
    width: 2.5rem;
    height: 2.5rem;
    color: #f9a8d4;
  }

  .footer-title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .footer-tagline {
    font-size: 1.125rem;
    color: #d8b4fe;
    margin-bottom: 1rem;
  }

  .footer-description {
    color: #c4b5fd;
    max-width: 32rem;
    margin: 0 auto;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .navbar-nav {
      display: none;
    }
    .mobile-menu-button {
      display: block;
    }
    .hero-title {
      font-size: 2rem;
    }
    .hero-subtitle {
      font-size: 1rem;
    }
    .hero-container {
      padding: 3rem 1rem;
    }
    .section-title {
      font-size: 2rem;
    }
    .tulia-grid {
      grid-template-columns: 1fr;
    }
    .objectives-grid {
      grid-template-columns: 1fr;
    }
    .tulia-title {
      font-size: 2rem;
    }
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .hero-title {
      font-size: 1.5rem;
    }
    .card {
      padding: 1rem;
    }
    .tulia-card {
      padding: 1.5rem;
    }
    .contact-card {
      padding: 2rem;
    }
  }
`

// Add styles to document head
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style")
  styleElement.textContent = styles
  document.head.appendChild(styleElement)
}

const MindBridgeWellness = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [expandedValues, setExpandedValues] = useState({})
  const [expandedPrograms, setExpandedPrograms] = useState({})
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleValue = (index) => {
    setExpandedValues((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const toggleProgram = (index) => {
    setExpandedPrograms((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every individual with empathy, care, and non-judgment.",
    },
    {
      icon: Zap,
      title: "Resilience",
      description: "We believe in the inner strength of every person to recover and grow.",
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Mental wellness should be available to all, regardless of background.",
    },
    {
      icon: Lightbulb,
      title: "Awareness",
      description: "We work to break the stigma around mental health through education and open dialogue.",
    },
    {
      icon: Shield,
      title: "Empowerment",
      description: "We equip individuals and communities to take charge of their mental wellbeing.",
    },
    {
      icon: Lock,
      title: "Confidentiality",
      description: "We provide safe, respectful, and private spaces for healing and support.",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description:
        "We build partnerships with schools, institutions, and communities to strengthen mental health systems.",
    },
  ]

  const targetAudience = [
    { icon: GraduationCap, title: "Youth and Students", description: "Secondary and university level students" },
    { icon: Briefcase, title: "Working Professionals", description: "Especially those facing burnout" },
    { icon: Heart, title: "Burnout Survivors & Caregivers", description: "Support for recovery and care" },
    { icon: BookOpen, title: "Educators and School Counselors", description: "Educational professionals" },
    { icon: Users, title: "Churches, Community Groups & Families", description: "Community-based support" },
    { icon: MapPin, title: "Underserved Communities", description: "Urban and rural Kenya" },
    { icon: Shield, title: "Drug and Alcohol Addicts", description: "Addiction recovery support" },
    { icon: Heart, title: "HIV and AIDS Victims", description: "Compassionate care and support" },
  ]

  const communityPrograms = [
    {
      icon: Lightbulb,
      title: "Mental Health Education & Awareness Workshops",
      description:
        "Host regular sessions in schools, churches, youth groups, and workplaces. Topics: stress management, signs of depression, self-care, emotional intelligence.",
    },
    {
      icon: Users,
      title: "Community Peer Support Groups",
      description:
        "Safe spaces for people to share experiences without judgment. Run weekly groups for youth, parents, teachers, and caregivers.",
    },
    {
      icon: Phone,
      title: "Mobile Counseling & Helpline Services",
      description:
        "Offer free or affordable call/text/WhatsApp support lines. Partner with local therapists for referrals or digital check-ins.",
    },
    {
      icon: Heart,
      title: "Mindfulness, Yoga & Wellness Sessions",
      description:
        "Run free outdoor group sessions to help reduce anxiety and burnout. Teach breathing, grounding, and meditation techniques.",
    },
    {
      icon: Palette,
      title: "Art, Music, and Creative Therapy Workshops",
      description:
        "Use storytelling, drawing, music, and journaling for expression and healing. Especially effective for youth, survivors of trauma, and burnout sufferers.",
    },
    {
      icon: Activity,
      title: "Mental Wellness Sports Days & Walks",
      description:
        "Community fun runs, football matches, or mental health walks to break stigma and bond. Mix physical activity with short talks or wellness booths.",
    },
    {
      icon: GraduationCap,
      title: "Mental Health in Schools Program",
      description:
        "Train teachers to identify early signs of distress. Offer school clubs or 'safe talk corners' for students. Conduct burnout prevention training for teachers too.",
    },
    {
      icon: Briefcase,
      title: "Burnout Prevention for Workers & Caregivers",
      description:
        "Target professionals (nurses, teachers, boda riders, police, etc.) with burnout screening. Run workplace wellness programs, stress check-ins, and resilience workshops.",
    },
    {
      icon: MapPin,
      title: "Community Outreach Campaigns",
      description:
        "Roadshows, village forums (baraza), radio shows, and social media to fight stigma. Engage local leaders, religious leaders, and influencers.",
    },
    {
      icon: Wrench,
      title: "Skills-building & Purpose Workshops",
      description:
        "Link mental wellbeing with employment and life skills. Offer entrepreneurship, digital skills, or creative writing classes as empowerment tools.",
    },
  ]

  const tuliaWeeks = [
    { week: 1, title: "What is Burnout?", description: "Understanding the signs and causes of burnout" },
    { week: 2, title: "Identifying Emotions", description: "Learning to recognize and name your feelings" },
    { week: 3, title: "Managing Stress and Anxiety", description: "Practical tools for stress management" },
    { week: 4, title: "Journaling and Self-Reflection", description: "Building self-awareness through writing" },
    { week: 5, title: "Focus and Digital Detox", description: "Creating healthy boundaries with technology" },
    { week: 6, title: "Self-Care Habits and Peer Support", description: "Building sustainable wellness practices" },
  ]

  const navigation = [
    { id: "home", label: "Home" },
    { id: "values", label: "Core Values" },
    { id: "audience", label: "Target Audience" },
    { id: "tulia", label: "Tulia Schools Program" },
    { id: "community", label: "Community Programs" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <Heart className="h-8 w-8 text-purple-600" />
            <h1 className="navbar-title">MindBridge Wellness</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-nav">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`nav-button ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-menu-button">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id)
                setMobileMenuOpen(false)
              }}
              className={`mobile-nav-button ${activeSection === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === "home" && (
        <div className="hero-section">
          <div className="hero-container">
            <div>
              <Heart className="hero-icon" />
              <h1 className="hero-title">BRIDGING MINDS TO WELLNESS</h1>
              <p className="hero-subtitle">
                At MindBridge, we believe mental wellness is the foundation for a thriving life. Our mission is to
                connect individuals, communities, and institutions to resources, support, and innovative programs that
                nurture mental health, resilience, and personal growth.
              </p>
            </div>

            <div className="hero-cards">
              <div className="hero-card vision">
                <h2 className="hero-card-title vision">🌟 VISION</h2>
                <p className="hero-card-text">
                  To be a leading force in promoting mental wellness and emotional resilience across Africa, empowering
                  every individual to live a balanced, fulfilled, and mentally healthy life.
                </p>
              </div>

              <div className="hero-card mission">
                <h2 className="hero-card-title mission">🎯 MISSION</h2>
                <p className="hero-card-text">
                  MindBridge exists to bridge the gap between mental health needs and access to care through education,
                  community-based programs, digital innovation, and advocacy—fostering a culture where mental wellbeing
                  is prioritized and stigma is eliminated.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Core Values Section */}
      {activeSection === "values" && (
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">🔹 Our Core Values</h2>
            <p className="section-subtitle">
              These values guide every aspect of our work and shape how we approach mental wellness in our communities.
            </p>
          </div>

          <div className="grid grid-3">
            {coreValues.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="card">
                  <div className="card-header">
                    <div className="card-title-wrapper">
                      <Icon className="card-icon" />
                      <h3 className="card-title">{value.title}</h3>
                    </div>
                    <button onClick={() => toggleValue(index)} className="expand-button">
                      {expandedValues[index] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </button>
                  </div>
                  {expandedValues[index] && <p className="card-description">{value.description}</p>}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Target Audience Section */}
      {activeSection === "audience" && (
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">🌟 Our Target Audience</h2>
            <p className="section-subtitle">
              We serve diverse communities across Kenya, reaching those who need mental health support most.
            </p>
          </div>

          <div className="grid grid-4">
            {targetAudience.map((audience, index) => {
              const Icon = audience.icon
              return (
                <div key={index} className="card audience-card">
                  <Icon className="audience-icon" />
                  <h3 className="audience-title">{audience.title}</h3>
                  <p className="audience-description">{audience.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Tulia Schools Program Section */}
      {activeSection === "tulia" && (
        <div className="tulia-container">
          <div className="tulia-header">
            <h2 className="tulia-title">Tulia Schools Program</h2>
            <p className="tulia-tagline">Mental Wellness for Every Learner</p>
            <p className="tulia-motto">Strong Minds, Bright Futures</p>
            <p className="tulia-description">
              The Tulia Schools Program is a school-based mental wellness and burnout prevention initiative designed for
              students, teachers, and parents. It equips school communities with simple, evidence-based tools to manage
              stress, promote emotional health, and build resilience.
            </p>
          </div>

          <div className="founder-section">
            <h3 className="founder-title">
              <User className="h-6 w-6" />
              Program Founder
            </h3>
            <p className="founder-name">Ngeresa Vincent Ongeri</p>
            <p className="founder-role">Founder & Mental Wellness Advocate</p>
          </div>

          <div className="tulia-grid">
            {/* 6-Week Student Program */}
            <div className="tulia-card student">
              <h3 className="tulia-card-title student">
                <GraduationCap className="h-8 w-8" />
                Student Mental Wellness Program (6 Weeks)
              </h3>
              <p className="tulia-card-subtitle">
                Weekly 45-minute sessions designed to build resilience and emotional intelligence.
              </p>

              <div>
                {tuliaWeeks.map((week, index) => (
                  <div key={index} className="week-item">
                    <div className="week-header">
                      <div>
                        <h4 className="week-title">
                          Week {week.week}: {week.title}
                        </h4>
                        <p className="week-description">{week.description}</p>
                      </div>
                      <div className="week-badge">{week.week}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="tools-section">
                <p className="tools-text">
                  <strong>Tools:</strong> Journals, guided breathing, group games, and access to the Tulia App (free
                  version)
                </p>
              </div>
            </div>

            {/* Teacher Workshop */}
            <div className="tulia-card teacher">
              <h3 className="tulia-card-title teacher">
                <BookOpen className="h-8 w-8" />
                Teacher Burnout Recovery Workshop
              </h3>
              <p className="tulia-card-subtitle">
                Half-day training focused on educator wellbeing and sustainable teaching practices.
              </p>

              <div>
                <div className="workshop-item">
                  <div className="workshop-icon">
                    <Shield className="workshop-icon-svg" />
                  </div>
                  <div className="workshop-content">
                    <h4>Recognizing Teacher Burnout</h4>
                    <p>Early warning signs and prevention strategies</p>
                  </div>
                </div>

                <div className="workshop-item">
                  <div className="workshop-icon">
                    <Zap className="workshop-icon-svg" />
                  </div>
                  <div className="workshop-content">
                    <h4>Stress Management & Energy Renewal</h4>
                    <p>Practical tools for maintaining energy and focus</p>
                  </div>
                </div>

                <div className="workshop-item">
                  <div className="workshop-icon">
                    <Users className="workshop-icon-svg" />
                  </div>
                  <div className="workshop-content">
                    <h4>Work-Life Boundaries & Self-Care</h4>
                    <p>Creating sustainable practices and healthy boundaries</p>
                  </div>
                </div>

                <div className="workshop-item">
                  <div className="workshop-icon">
                    <Handshake className="workshop-icon-svg" />
                  </div>
                  <div className="workshop-content">
                    <h4>Peer Support Group Facilitation</h4>
                    <p>Optional training for leading support groups</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="objectives-section">
            <div className="objectives-card">
              <h3 className="objectives-title">Program Objectives</h3>
              <div className="objectives-grid">
                <ul className="objectives-list">
                  <li>Raise awareness of burnout and mental health in school communities</li>
                  <li>Equip students with tools for emotional self-care, focus, and resilience</li>
                </ul>
                <ul className="objectives-list">
                  <li>Support teachers to manage stress and prevent burnout</li>
                  <li>Promote a supportive and stigma-free school environment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Community Programs Section */}
      {activeSection === "community" && (
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Community Level Programs</h2>
            <p className="section-subtitle">
              Comprehensive mental health initiatives that reach every corner of our communities, breaking stigma and
              building resilience.
            </p>
          </div>

          <div className="grid grid-2">
            {communityPrograms.map((program, index) => {
              const Icon = program.icon
              return (
                <div key={index} className="card">
                  <div className="card-header">
                    <div className="card-title-wrapper">
                      <Icon className="card-icon" />
                      <h3 className="card-title">{program.title}</h3>
                    </div>
                    <button onClick={() => toggleProgram(index)} className="expand-button">
                      {expandedPrograms[index] ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {expandedPrograms[index] && <p className="card-description">{program.description}</p>}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Contact Section */}
      {activeSection === "contact" && (
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">📞 Get In Touch</h2>
            <p className="contact-subtitle">
              Ready to bridge the gap to mental wellness? Reach out to us and let's start the conversation about mental
              health in your community.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <Mail className="contact-icon" />
              <h3 className="contact-method">Email Us</h3>
              <p className="contact-info"> mindbridgewellness33@gmail.com
</p>
              <p className="contact-description">
                Send us your questions, partnership inquiries, or program requests. We'll get back to you within 24
                hours.
              </p>
            </div>

            <div className="contact-card">
              <Phone className="contact-icon" />
              <h3 className="contact-method">Call Us</h3>
              <p className="contact-info">+254 746 863 868</p>
              <p className="contact-description">
                Speak directly with our team about mental wellness programs, workshops, or emergency support services.
              </p>
            </div>

            <div className="contact-card">
              <MessageSquare className="contact-icon" />
              <h3 className="contact-method">WhatsApp</h3>
              <p className="contact-info">0746863868</p>
              <p className="contact-description">
                Quick support and information via WhatsApp. Perfect for urgent inquiries or program scheduling.
              </p>
            </div>
          </div>

          <div className="founder-section">
            <h3 className="founder-title">
              <Award className="h-6 w-6" />
              Connect with Our Founder
            </h3>
            <p className="founder-name">Ngeresa Vincent Ongeri</p>
            <p className="founder-role">Mental Wellness Advocate & Program Developer</p>
            <p className="contact-description" style={{ marginTop: "1rem" }}>
              Passionate about transforming mental health care in Kenya through innovative, community-based approaches.
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <Heart className="footer-icon" />
            <h2 className="footer-title">MindBridge Wellness Initiative</h2>
          </div>
          <p className="footer-tagline">Bridging Minds to Wellness</p>
          <p className="footer-description">
            Empowering communities across Kenya to prioritize mental health, break stigma, and build resilience for a
            brighter future.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default MindBridgeWellness
