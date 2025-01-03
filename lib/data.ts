import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import EVIDENTLY from "@/public/EVIDENTLY.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "À propos",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Competences",
    hash: "#compentces",
  },
  {
    name: "Blog",
    hash: "#blog",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bibliothèque numérique",
    location: "Djibouti, Djibouti",
    description:
      "J'ai obtenu mon diplôme après 7 mois d'études. J'ai immédiatement trouvé un poste en tant que développeur full-stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "ArchiveApp",
    location: "Djibouti, Djibouti",
    description:
      "J'ai travaillé comme développeur front-end pendant 1 an. J'ai également évolué vers le full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Développeur Full-Stack",
    location: "Arta, Djibouti",
    description:
      "Je suis maintenant développeur full-stack travaillant en freelance. Ma stack inclut React, Next.js, TypeScript, Tailwind, Prisma et MongoDB. Je suis ouvert aux opportunités à temps plein.",
    icon: React.createElement(FaReact),
    date: "2021 - présent",
  },
] as const;

export const projectsData = [
  {
    title: "Bibliothèque numérique",
    location: "Djibouti, Djibouti",
    description:
      "J'ai développé une bibliothèque numérique spécifiquement pour les besoins universitaires, conçue pour offrir plusieurs avantages significatifs adaptés aux besoins des étudiants, du corps enseignant et de l'institution.",
    tags: ["Django", "Tailwind", "MySql"],
    imageUrl: corpcommentImg,
  },
  {
    title: "ArchiveApp",
    description:
      "L'ArchiveApp que j'ai développée est conçue pour offrir une solution complète de gestion et de conservation des documents et dossiers importants, particulièrement en entreprise.",
    tags: ["Laravel", "javascript.js", "bootstrap"],
    imageUrl: rmtdevImg,
  },
  {
    title: "EVIDENTLY",
    description:
      "L'outil que j'ai développé pour l'analyse des données relatives aux cartes d'identité offre des aperçus précieux sur la distribution et les tendances des cartes d'identité nouvelles et anciennes au sein d'une base d'utilisateurs.",
    tags: ["Python", "Jubiter", "PGSQL", "Pandas", "Streamlit"],
    imageUrl: EVIDENTLY,
  },
] as const;

export const blogData = [
  {
    date: "27 Nov 2024",
    title: "Ajouter de belles cartes à votre application Next.js avec MapBox GL",
    description: "Construction d'une fonctionnalité de carte interactive utilisant MapBox GL et Typescript, permettant des services basés sur la localisation dynamique avec un style personnalisé et des mises à jour en temps réel.",
  },
  {
    date: "17 Oct 2024",
    title: "Réparation du CRM pour entreprise",
    description: "Mise en œuvre de solutions complètes pour optimiser le système de Gestion de la Relation Client, améliorant l'expérience utilisateur et rationalisant les processus commerciaux.",
  },
  {
    date: "10 Mar 2024",
    title: "Système ERP pour l'université",
    description: "Développement d'un système de Planification des Ressources d'Entreprise personnalisé pour l'université afin d'améliorer l'efficacité administrative, la gestion des étudiants et les processus académiques.",
  },
] as const;
export const workIntro = {
  title: "Travail",
  description: "Je me spécialise en Python, data analytics, React, développement web, UI/UX, et design produit. Mais je suis toujours en train d'apprendre de nouvelles choses. Voici quelques-uns des endroits où j'ai travaillé."
} as const;

export const workData = [
  {
    title: "Développeur Full-Stack",
    company: "Freelance",
    location: "Djibouti, Djibouti",
    description: "Je travaille actuellement comme développeur full-stack indépendant, spécialisé dans Python, React et le développement web.",
    icon: "/freelance-icon.png",  // Make sure this image exists in your public folder
    date: "2021 - présent",
  },
  {
    title: "ArchiveApp",
    company: "ArchiveApp",
    location: "Djibouti, Djibouti",
    description: "Développement d'une application de gestion documentaire pour les entreprises.",
    icon: "/archive-icon.png",  // Make sure this image exists in your public folder
    date: "2022",
  },
  {
    title: "Bibliothèque numérique",
    company: "Université de Djibouti",
    location: "Djibouti, Djibouti",
    description: "Création d'une bibliothèque numérique pour les besoins universitaires.",
    icon: "/library-icon.png",  // Make sure this image exists in your public folder
    date: "2019",
  },
] as const;

