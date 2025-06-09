import html from '../assets/iconos/html.svg';
import css from '../assets/iconos/css.svg';
import javascript from '../assets/iconos/javascript.svg';
import react from '../assets/iconos/react.svg';
import astro from '../assets/iconos/astro.svg';
import nodejs from '../assets/iconos/nodejs.svg';
import nextjs from '../assets/iconos/nextjs.svg';
import mysql from '../assets/iconos/mysql.svg';
import express from '../assets/iconos/express.svg';
import sqlserver from '../assets/iconos/sqlserver.svg';
import git from '../assets/iconos/git.svg';
import strapi from '../assets/iconos/strapi.svg';
import typescript from '../assets/iconos/typescript.svg';
import csharp from '../assets/iconos/csharp.svg';

export const iconos = {
    "HTML": "html",
    "CSS": "css",
    "Js": "javascript",
    "React": "react",
    "Astro": "astro",
    "NodeJs": "nodejs",
    "NextJs": "nextjs",
    "MySql": "mysql",
    "Express": "express",
}

export const iconosTecnologias = {
  frontend: [
    { titulo: "HTML", icono: html },
    { titulo: "CSS", icono: css },
    { titulo: "JavaScript", icono: javascript },
    { titulo: "React", icono: react },
    { titulo: "Astro", icono: astro },
    { titulo: "NextJs", icono: nextjs },
    { titulo: "TypeScript", icono: typescript },
  ],
  backend: [
    { titulo: "NodeJs", icono: nodejs },
    { titulo: "Express", icono: express },
    { titulo: "MySql", icono: mysql },
    { titulo: "SQL Server", icono: sqlserver },
    { titulo: "Strapi", icono: strapi },
    { titulo: "C#", icono: csharp },
  ],
  herramientas: [
    { titulo: "Git", icono: git },
  ],
};