import { stateData } from "../types";

const initialData = {
  order: ["all", "monday", "tuesday", "wednesday", "thursday", "friday"],
  days: {
    all: {
      id: "all",
      title: "Asignaturas",
      day: 0,
      subjectIds: [
        "subject-1-0",
        "subject-1-1",
        "subject-1-2",
        "subject-1-3",
        "subject-1-4",
        "subject-1-5",
        "subject-1-6",
        "subject-1-7",
        "subject-1-8",
        "subject-1-9",
        "subject-1-10",
        "subject-1-11",
        "subject-1-12",
        "subject-1-13",
        "subject-2-0",
        "subject-2-1",
        "subject-2-2",
        "subject-2-3",
        "subject-2-4",
        "subject-2-5",
        "subject-2-6",
        "subject-2-7",
        "subject-2-8",
        "subject-2-9",
        "subject-2-10",
        "subject-2-11",
        "subject-2-12",
        "subject-2-13",
        "subject-2-14",
        "subject-2-15",
        "subject-2-16",
        "subject-2-17",
        "subject-2-18",
        "subject-2-19",
        "subject-2-20",
        "subject-2-21",
        "subject-2-22",
        "subject-2-23",
        "subject-2-24",
        "subject-2-25",
        "subject-2-26",
        "subject-2-27",
        "subject-2-28",
        "subject-2-29",
        "subject-2-30",
        "subject-3-0",
        "subject-3-1",
        "subject-3-2",
        "subject-3-3",
        "subject-3-4",
        "subject-3-5",
        "subject-3-6",
        "subject-3-7",
        "subject-3-8",
        "subject-3-9",
        "subject-3-10",
        "subject-3-11",
        "subject-3-12",
        "subject-3-13",
        "subject-3-14",
        "subject-3-15",
        "subject-3-16",
        "subject-3-17",
        "subject-3-18",
        "subject-3-19",
        "subject-3-20",
        "subject-3-21",
        "subject-3-22",
        "subject-3-23",
        "subject-3-24",
        "subject-3-25",
        "subject-3-26",
        "subject-3-27",
        "subject-3-28",
        "subject-4-0",
        "subject-4-1",
        "subject-4-2",
        "subject-4-3",
        "subject-4-4",
        "subject-4-5",
        "subject-4-6",
        "subject-4-7",
        "subject-4-8",
        "subject-4-9",
        "subject-4-10",
        "subject-4-11",
        "subject-4-12",
        "subject-4-13",
        "subject-5-0",
        "subject-5-1",
        "subject-5-2",
        "subject-5-3",
        "subject-5-4",
        "subject-5-5",
        "subject-5-6",
        "subject-5-7"
      ]
    },
    monday: {
      id: "monday",
      title: "Lunes",
      day: 1,
      subjectIds: []
    },
    tuesday: {
      id: "tuesday",
      title: "Martes",
      day: 2,
      subjectIds: []
    },
    wednesday: {
      id: "wednesday",
      title: "Miércoles",
      day: 3,
      subjectIds: []
    },
    thursday: {
      id: "thursday",
      title: "Jueves",
      day: 4,
      subjectIds: []
    },
    friday: {
      id: "friday",
      title: "Viernes",
      day: 5,
      subjectIds: []
    }
  },
  subjects: {
    "subject-1-0": {
      hours: { start: "08:30", end: "10:00" },
      classroom: "C01",
      name: "Redes de Computadores",
      abrev: "RC",
      group: "A1",
      type: "Teoría",
      week: [2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      day: 1,
      course: "2A",
      id: "subject-1-0"
    },
    "subject-1-1": {
      hours: { start: "10:00", end: "11:30" },
      classroom: "C01",
      name: "Estructura de Datos no Lineales",
      abrev: "EDNL",
      group: "A1",
      type: "Teoría",
      week: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 1,
      course: "2A",
      id: "subject-1-1"
    },
    "subject-1-2": {
      hours: { start: "11:30", end: "13:00" },
      classroom: "C01",
      name: "Programación Orientada a Objetos",
      abrev: "POO",
      group: "A1",
      type: "Teoría",
      week: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 1,
      course: "2A",
      id: "subject-1-2"
    },
    "subject-1-3": {
      hours: { start: "13:00", end: "14:30" },
      classroom: "C01",
      name: "Ingeníeria del Software",
      abrev: "IS",
      group: "A1",
      type: "Teoría",
      week: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 1,
      course: "2A",
      id: "subject-1-3"
    },
    "subject-1-4": {
      hours: { start: "10:00", end: "11:30" },
      classroom: "C02",
      name: "Redes de Computadores",
      abrev: "RC",
      group: "A2",
      type: "Teoría",
      week: [2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      day: 1,
      course: "2B",
      id: "subject-1-4"
    },
    "subject-1-5": {
      hours: { start: "08:30", end: "10:00" },
      classroom: "C02",
      name: "Programación Orientada a Objetos",
      abrev: "POO",
      group: "A2",
      type: "Teoría",
      week: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 1,
      course: "2B",
      id: "subject-1-5"
    },
    "subject-1-6": {
      hours: { start: "11:30", end: "13:00" },
      classroom: "C02",
      name: "Ingeniería del Software",
      abrev: "IS",
      group: "A2",
      type: "Teoría",
      week: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 1,
      course: "2B",
      id: "subject-1-6"
    },
    "subject-1-7": {
      hours: { start: "13:00", end: "14:30" },
      classroom: "C02",
      name: "Estructura de Datos no Lineales",
      abrev: "EDNL",
      group: "A2",
      type: "Teoría",
      week: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 1,
      course: "2B",
      id: "subject-1-7"
    },
    "subject-1-8": {
      hours: { start: "16:00", end: "18:00" },
      classroom: "E09",
      name: "Estructura de Datos no Lineales",
      abrev: "EDNL",
      group: "C4",
      type: "Prácticas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 1,
      course: "2B",
      id: "subject-1-8"
    },
    "subject-1-9": {
      hours: { start: "18:00", end: "20:00" },
      classroom: "E09",
      name: "Estructura de Datos no Lineales",
      abrev: "EDNL",
      group: "C2",
      type: "Prácticas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 1,
      course: "2B",
      id: "subject-1-9"
    },
    "subject-1-10": {
      hours: { start: "16:00", end: "18:00" },
      classroom: "D09",
      name: "Programación Orientada a Objetos",
      abrev: "POO",
      group: "C2",
      type: "Prácticas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 1,
      course: "2B",
      id: "subject-1-10"
    },
    "subject-1-11": {
      hours: { start: "18:00", end: "20:00" },
      classroom: "E14",
      name: "Redes de Computadores",
      abrev: "RC",
      group: "D4",
      type: "Prácticas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 1,
      course: "2B",
      id: "subject-1-11"
    },
    "subject-1-12": {
      hours: { start: "16:00", end: "18:00" },
      classroom: "E14",
      name: "Redes de Computadores",
      abrev: "RC",
      group: "D2",
      type: "Prácticas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 1,
      course: "2B",
      id: "subject-1-12"
    },
    "subject-1-13": {
      hours: { start: "08:30", end: "10:00" },
      classroom: "B06",
      name: "Organizacion y Gestion de Empresas",
      abrev: "OGE",
      group: "A1",
      type: "Teoría",
      week: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 1,
      course: "1A",
      id: "subject-1-13"
    },
    "subject-2-0": {
      hours: { start: "08:30", end: "09:30" },
      classroom: "C03",
      name: "Bases de Datos",
      abrev: "BD",
      group: "B1",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2A",
      id: "subject-2-0"
    },
    "subject-2-1": {
      hours: { start: "09:30", end: "10:30" },
      classroom: "C04",
      name: "Bases de Datos",
      abrev: "BD",
      group: "B3",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2A",
      id: "subject-2-1"
    },
    "subject-2-2": {
      hours: { start: "08:30", end: "09:30" },
      classroom: "C04",
      name: "Ingeníeria del Software",
      abrev: "IS",
      group: "B3",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2A",
      id: "subject-2-2"
    },
    "subject-2-3": {
      hours: { start: "09:30", end: "10:30" },
      classroom: "C04",
      name: "Ingeníeria del Software",
      abrev: "IS",
      group: "B1",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2A",
      id: "subject-2-3"
    },
    "subject-2-4": {
      hours: { start: "10:30", end: "11:30" },
      classroom: "C04",
      name: "Programación Orientada a Objetos",
      abrev: "POO",
      group: "B3",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2A",
      id: "subject-2-4"
    },
    "subject-2-5": {
      hours: { start: "11:30", end: "12:30" },
      classroom: "C03",
      name: "Programación Orientada a Objetos",
      abrev: "POO",
      group: "B1",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2A",
      id: "subject-2-5"
    },
    "subject-2-6": {
      hours: { start: "10:30", end: "11:30" },
      classroom: "C03",
      name: "Estructura de Datos no Lineales",
      abrev: "EDNL",
      group: "B1",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2A",
      id: "subject-2-6"
    },
    "subject-2-7": {
      hours: { start: "11:30", end: "12:30" },
      classroom: "C04",
      name: "Estructura de Datos no Lineales",
      abrev: "EDNL",
      group: "B3",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2A",
      id: "subject-2-7"
    },
    "subject-2-8": {
      hours: { start: "12:30", end: "14:30" },
      classroom: "C08",
      name: "Programación Orientada a Objetos",
      abrev: "POO",
      group: "C7",
      type: "Prácticas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2A",
      id: "subject-2-8"
    },
    "subject-2-9": {
      hours: { start: "12:30", end: "14:30" },
      classroom: "D08",
      name: "Bases de Datos",
      abrev: "BD",
      group: "C7",
      type: "Prácticas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12],
      day: 2,
      course: "2A",
      id: "subject-2-9"
    },
    "subject-2-10": {
      hours: { start: "16:00", end: "18:00" },
      classroom: "D09",
      name: "Programación Orientada a Objetos",
      abrev: "POO",
      group: "C1",
      type: "Prácticas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2A",
      id: "subject-2-10"
    },
    "subject-2-11": {
      hours: { start: "08:30", end: "09:30" },
      group: "B2",
      name: "Estructura de Datos no Lineales",
      abrev: "EDNL",
      classroom: "C05",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2B",
      id: "subject-2-11"
    },
    "subject-2-12": {
      hours: { start: "08:30", end: "09:30" },
      group: "B4",
      name: "Programación Orientada a Objetos",
      abrev: "POO",
      classroom: "B03",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2B",
      id: "subject-2-12"
    },
    "subject-2-13": {
      hours: { start: "09:30", end: "10:30" },
      group: "B4",
      name: "Estructura de Datos no Lineales",
      abrev: "EDNL",
      classroom: "B03",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2B",
      id: "subject-2-13"
    },
    "subject-2-14": {
      hours: { start: "09:30", end: "10:30" },
      group: "B2",
      name: "Programación Orientado a Objetos",
      abrev: "POO",
      classroom: "C05",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2B",
      id: "subject-2-14"
    },
    "subject-2-15": {
      hours: { start: "08:30", end: "09:30" },
      group: "C6",
      name: "Programación Orientada a Objetos",
      abrev: "POO",
      classroom: "D09",
      type: "Prácticas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2B",
      id: "subject-2-15"
    },
    "subject-2-16": {
      hours: { start: "10:30", end: "11:30" },
      group: "B4",
      name: "Bases de Datos",
      abrev: "BD",
      classroom: "B03",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2B",
      id: "subject-2-16"
    },
    "subject-2-17": {
      hours: { start: "11:30", end: "12:30" },
      group: "B2",
      name: "Bases de Datos",
      abrev: "BD",
      classroom: "C05",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2B",
      id: "subject-2-17"
    },
    "subject-2-18": {
      hours: { start: "10:30", end: "11:30" },
      group: "B2",
      name: "Ingeniería del Software",
      abrev: "IS",
      classroom: "C05",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2B",
      id: "subject-2-18"
    },
    "subject-2-19": {
      hours: { start: "11:30", end: "12:30" },
      group: "B4",
      name: "Ingeniería del Software",
      abrev: "IS",
      classroom: "B03",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2B",
      id: "subject-2-19"
    },
    "subject-2-20": {
      hours: { start: "12:30", end: "14:30" },
      group: "C6",
      name: "Estructura de Datos no Lineales",
      abrev: "EDNL",
      classroom: "D09",
      type: "Prácticas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "2B",
      id: "subject-2-20"
    },
    "subject-2-21": {
      hours: { start: "08:30", end: "10:30" },
      group: "A1",
      name: "Seguridad en los Sistemas Inteligentes",
      abrev: "SSI",
      classroom: "C02",
      type: "Teoría",
      week: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "3º/4º Tecnologías de la Información",
      id: "subject-2-21"
    },
    "subject-2-22": {
      hours: { start: "13:00", end: "14:00" },
      group: "B2",
      name: "Sistemas Distribuidos",
      abrev: "SD",
      classroom: "C02",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "3º/4º Tecnologías de la Información",
      id: "subject-2-22"
    },
    "subject-2-23": {
      hours: { start: "15:00", end: "16:00" },
      group: "B1",
      name: "Sistemas Distribuidos",
      abrev: "SD",
      classroom: "C01",
      type: "Problemas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "3º/4º Tecnologías de la Información",
      id: "subject-2-23"
    },
    "subject-2-24": {
      hours: { start: "15:00", end: "18:00" },
      group: "A1",
      name: "Sistemas Distribuidos",
      abrev: "SD",
      classroom: "C01",
      type: "Teoría",
      week: [1, 2],
      day: 2,
      course: "3º/4º Tecnologías de la Información",
      id: "subject-2-24"
    },
    "subject-2-25": {
      hours: { start: "16:00", end: "18:00" },
      group: "A1",
      name: "Sistemas Distribuidos",
      abrev: "SD",
      classroom: "C01",
      type: "Teoría",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "3º/4º Tecnologías de la Información",
      id: "subject-2-25"
    },
    "subject-2-26": {
      hours: { start: "18:00", end: "20:30" },
      group: "C1",
      name: "Sistemas Distribuidos",
      abrev: "SD",
      classroom: "C08",
      type: "Prácticas",
      week: [4, 5, 6, 7, 8, 9, 10, 11],
      day: 2,
      course: "3º/4º Tecnologías de la Información",
      id: "subject-2-26"
    },
    "subject-2-27": {
      hours: { start: "08:30", end: "10:30" },
      classroom: "B02",
      name: "Fundamentos de Estructura de Computadores",
      abrev: "FEC",
      group: "A2",
      type: "Teoría",
      week: [1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14],
      day: 2,
      course: "1B",
      id: "subject-2-27"
    },
    "subject-2-28": {
      hours: { start: "11:30", end: "12:30" },
      classroom: "E08",
      name: "Fundamentos de Estructura de Computadores",
      abrev: "FEC",
      group: "C2",
      type: "Practicas Informaticas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "1B",
      id: "subject-2-28"
    },
    "subject-2-29": {
      hours: { start: "08:30", end: "10:30" },
      classroom: "D07",
      name: "Aprendizaje Computacional",
      abrev: "ApC",
      group: "A1",
      type: "Teoría",
      week: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      day: 2,
      course: "3º/4º Computación",
      id: "subject-2-29"
    },
    "subject-2-30": {
      hours: { start: "10:30", end: "13:00" },
      classroom: "E07",
      name: "Procesadores de Lenguaje",
      abrev: "PL",
      group: "C1",
      type: "Prácticas",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 2,
      course: "3º/4º Computación",
      id: "subject-2-30"
    },
    "subject-3-0": {
      hours: { start: "08:30", end: "10:30" },
      classroom: "D08",
      name: "Bases de Datos",
      abrev: "BD",
      group: "C5",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 12],
      day: 3,
      course: "2A",
      id: "subject-3-0"
    },
    "subject-3-1": {
      hours: { start: "10:30", end: "12:30" },
      classroom: "D08",
      name: "Bases de Datos",
      abrev: "BD",
      group: "C1",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 12],
      day: 3,
      course: "2A",
      id: "subject-3-1"
    },
    "subject-3-2": {
      hours: { start: "12:30", end: "14:30" },
      classroom: "D08",
      name: "Bases de Datos",
      abrev: "BD",
      group: "C3",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 12],
      day: 3,
      course: "2A",
      id: "subject-3-2"
    },
    "subject-3-3": {
      hours: { start: "08:30", end: "10:30" },
      classroom: "E08",
      name: "Ingeníeria del Software",
      abrev: "IS",
      group: "C1",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15],
      day: 3,
      course: "2A",
      id: "subject-3-3"
    },
    "subject-3-4": {
      hours: { start: "10:30", end: "12:30" },
      classroom: "E08",
      name: "Ingeníeria del Software",
      abrev: "IS",
      group: "C3",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15],
      day: 3,
      course: "2A",
      id: "subject-3-4"
    },
    "subject-3-5": {
      hours: { start: "12:30", end: "14:30" },
      classroom: "E08",
      name: "Ingeníeria del Software",
      abrev: "IS",
      group: "C5",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15],
      day: 3,
      course: "2A",
      id: "subject-3-5"
    },
    "subject-3-6": {
      hours: { start: "08:30", end: "10:30" },
      classroom: "E09",
      name: "Estructura de Datos no Lineales",
      abrev: "EDNL",
      group: "C3",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15],
      day: 3,
      course: "2A",
      id: "subject-3-6"
    },
    "subject-3-7": {
      hours: { start: "10:30", end: "12:30" },
      classroom: "E09",
      name: "Estructura de Datos no Lineales",
      abrev: "EDNL",
      group: "C5",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15],
      day: 3,
      course: "2A",
      id: "subject-3-7"
    },
    "subject-3-8": {
      hours: { start: "12:30", end: "14:30" },
      classroom: "E09",
      name: "Estructura de Datos no Lineales",
      abrev: "EDNL",
      group: "C1",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15],
      day: 3,
      course: "2A",
      id: "subject-3-8"
    },
    "subject-3-9": {
      hours: { start: "12:30", end: "14:30" },
      classroom: "D09",
      name: "Estructura de Datos no Lineales",
      abrev: "EDNL",
      group: "C7",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15],
      day: 3,
      course: "2A",
      id: "subject-3-9"
    },
    "subject-3-10": {
      hours: { start: "10:30", end: "12:30" },
      classroom: "E14",
      name: "Redes de Computadores",
      abrev: "RC",
      group: "D5",
      type: "Prácticas",
      week: [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14],
      day: 3,
      course: "2A",
      id: "subject-3-10"
    },
    "subject-3-11": {
      hours: { start: "16:00", end: "18:00" },
      classroom: "D09",
      name: "Programación Orientada a Objetos",
      abrev: "POO",
      group: "C5",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15],
      day: 3,
      course: "2A",
      id: "subject-3-11"
    },
    "subject-3-12": {
      hours: { start: "18:00", end: "20:00" },
      classroom: "D09",
      name: "Programación Orientada a Objetos",
      abrev: "POO",
      group: "C4",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15],
      day: 3,
      course: "2A",
      id: "subject-3-12"
    },
    "subject-3-13": {
      hours: { start: "08:30", end: "10:00" },
      classroom: "B01",
      name: "Ingeníeria del Software",
      abrev: "IS",
      group: "A1",
      type: "Teoría",
      week: [1, 2],
      day: 3,
      course: "2A",
      id: "subject-3-13"
    },
    "subject-3-14": {
      hours: { start: "10:00", end: "11:30" },
      classroom: "B01",
      name: "Programación Orientada a Objetos",
      abrev: "POO",
      group: "A1",
      type: "Teoría",
      week: [1, 2],
      day: 3,
      course: "2A",
      id: "subject-3-14"
    },
    "subject-3-15": {
      hours: { start: "11:30", end: "13:00" },
      classroom: "B01",
      name: "Estructura de Datos no Lineales",
      abrev: "EDNL",
      group: "A1",
      type: "Teoría",
      week: [1, 2],
      day: 3,
      course: "2A",
      id: "subject-3-15"
    },
    "subject-3-16": {
      hours: { start: "10:00", end: "11:30" },
      group: "A2",
      name: "Estructura de Datos no Lineales",
      abrev: "EDNL",
      classroom: "C02",
      type: "Teoría",
      week: [1, 2],
      day: 3,
      course: "2B",
      id: "subject-3-16"
    },
    "subject-3-17": {
      hours: { start: "08:30", end: "10:00" },
      group: "A2",
      name: "Programación Orientada a Objetos",
      abrev: "POO",
      classroom: "C02",
      type: "Teoría",
      week: [1, 2],
      day: 3,
      course: "2B",
      id: "subject-3-17"
    },
    "subject-3-18": {
      hours: { start: "10:30", end: "12:30" },
      group: "C4",
      name: "Programación Orientada a Objetos",
      abrev: "POO",
      classroom: "D09",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15],
      day: 3,
      course: "2B",
      id: "subject-3-18"
    },
    "subject-3-19": {
      hours: { start: "11:30", end: "13:00" },
      group: "A2",
      name: "Ingeniería del Software",
      abrev: "IS",
      classroom: "C02",
      type: "Teoría",
      week: [1, 2],
      day: 3,
      course: "2B",
      id: "subject-3-19"
    },
    "subject-3-20": {
      hours: { start: "09:00", end: "11:00" },
      group: "A1",
      name: "Administración de Servidores",
      abrev: "AS",
      classroom: "C07",
      type: "Teoría",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15],
      day: 3,
      course: "3º/4º Tecnologías de la Información",
      id: "subject-3-20"
    },
    "subject-3-21": {
      hours: { start: "09:00", end: "12:00" },
      group: "A1",
      name: "Administración de Servidores",
      abrev: "AS",
      classroom: "C07",
      type: "Teoría",
      week: [1, 2],
      day: 3,
      course: "3º/4º Tecnologías de la Información",
      id: "subject-3-21"
    },
    "subject-3-22": {
      hours: { start: "11:00", end: "13:30" },
      group: "C1",
      name: "Administración de Servidores",
      abrev: "AS",
      classroom: "C09",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15],
      day: 3,
      course: "3º/4º Tecnologías de la Información",
      id: "subject-3-22"
    },
    "subject-3-23": {
      hours: { start: "15:30", end: "18:00" },
      group: "C2",
      name: "Administración de Servidores",
      abrev: "AS",
      classroom: "C09",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15],
      day: 3,
      course: "3º/4º Tecnologías de la Información",
      id: "subject-3-23"
    },
    "subject-3-24": {
      hours: { start: "15:30", end: "18:00" },
      group: "C2",
      name: "Sistemas Distribuidos",
      abrev: "SD",
      classroom: "C08",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10],
      day: 3,
      course: "3º/4º Tecnologías de la Información",
      id: "subject-3-24"
    },
    "subject-3-25": {
      hours: { start: "18:00", end: "20:30" },
      group: "C3",
      name: "Sistemas Distribuidos",
      abrev: "SD",
      classroom: "C09",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10],
      day: 3,
      course: "3º/4º Tecnologías de la Información",
      id: "subject-3-25"
    },
    "subject-3-26": {
      hours: { start: "16:00", end: "17:30" },
      classroom: "D03",
      name: "Organizacion y Gestion de Empresas",
      abrev: "OGE",
      group: "B2",
      type: "Problemas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15],
      day: 3,
      course: "1B",
      id: "subject-3-26"
    },
    "subject-3-27": {
      hours: { start: "09:30", end: "11:30" },
      classroom: "C08",
      name: "Percepción",
      abrev: "P",
      group: "A1",
      type: "Teoría",
      week: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13],
      day: 3,
      course: "3º/4º Computación",
      id: "subject-3-27"
    },
    "subject-3-28": {
      hours: { start: "11:30", end: "14:30" },
      classroom: "C08",
      name: "Aprendizaje Computacional",
      abrev: "ApC",
      group: "C1",
      type: "Prácticas",
      week: [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14],
      day: 3,
      course: "3º/4º Computación",
      id: "subject-3-28"
    },
    "subject-4-0": {
      hours: { start: "16:00", end: "18:00" },
      classroom: "E14",
      name: "Redes de Computadores",
      abrev: "RC",
      group: "D3",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      day: 4,
      course: "2A",
      id: "subject-4-0"
    },
    "subject-4-1": {
      hours: { start: "18:00", end: "20:00" },
      classroom: "E14",
      name: "Redes de Computadores",
      abrev: "RC",
      group: "D1",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      day: 4,
      course: "2A",
      id: "subject-4-1"
    },
    "subject-4-2": {
      hours: { start: "10:30", end: "12:30" },
      classroom: "C01",
      name: "Redes de Computadores",
      abrev: "RC",
      group: "A1",
      type: "Teoría",
      week: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12],
      day: 4,
      course: "2A",
      id: "subject-4-2"
    },
    "subject-4-3": {
      hours: { start: "08:30", end: "10:30" },
      classroom: "C01",
      name: "Bases de Datos",
      abrev: "BD",
      group: "A1",
      type: "Teoría",
      week: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13],
      day: 4,
      course: "2A",
      id: "subject-4-3"
    },
    "subject-4-4": {
      hours: { start: "10:30", end: "12:30" },
      group: "A2",
      name: "Bases de Datos",
      abrev: "BD",
      classroom: "C02",
      type: "Teoría",
      week: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      day: 4,
      course: "2B",
      id: "subject-4-4"
    },
    "subject-4-5": {
      hours: { start: "09:00", end: "10:30" },
      classroom: "C02",
      name: "Redes de Computadores",
      abrev: "RC",
      group: "A2",
      type: "Teoría",
      week: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      day: 4,
      course: "2B",
      id: "subject-4-5"
    },
    "subject-4-6": {
      hours: { start: "08:30", end: "10:30" },
      group: "A1",
      name: "Seguridad en los Sistemas Informáticos",
      abrev: "SSI",
      classroom: "B02",
      type: "Teoría",
      week: [2],
      day: 4,
      course: "3º/4º Tecnologías de la Información",
      id: "subject-4-6"
    },
    "subject-4-7": {
      hours: { start: "08:30", end: "11:00" },
      group: "C1",
      name: "Seguridad en los Sistemas Informáticos",
      abrev: "SSI",
      classroom: "D15",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      day: 4,
      course: "3º/4º Tecnologías de la Información",
      id: "subject-4-7"
    },
    "subject-4-8": {
      hours: { start: "11:00", end: "13:30" },
      group: "C2",
      name: "Seguridad en los Sistemas Informáticos",
      abrev: "SSI",
      classroom: "D15",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      day: 4,
      course: "3º/4º Tecnologías de la Información",
      id: "subject-4-8"
    },
    "subject-4-9": {
      hours: { start: "11:30", end: "13:00" },
      classroom: "E15",
      name: "Fundamentos de Estructura de Computadores",
      abrev: "FEC",
      group: "D6",
      type: "Practicas de Laboratorios",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 4,
      course: "1B",
      id: "subject-4-9"
    },
    "subject-4-10": {
      hours: { start: "13:00", end: "14:30" },
      classroom: "E15",
      name: "Fundamentos de Estructura de Computadores",
      abrev: "FEC",
      group: "D8",
      type: "Practicas de Laboratorios",
      week: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 4,
      course: "1B",
      id: "subject-4-10"
    },
    "subject-4-11": {
      hours: { start: "12:00", end: "14:00" },
      classroom: "C19",
      name: "Procesadores de Lenguaje",
      abrev: "PL",
      group: "A1",
      type: "Teoría",
      week: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      day: 4,
      course: "3º/4º Computación",
      id: "subject-4-11"
    },
    "subject-4-12": {
      hours: { start: "12:00", end: "14:00" },
      classroom: "C19",
      name: "Procesadores de Lenguaje",
      abrev: "PL",
      group: "B1",
      type: "Problemas",
      week: [11, 12, 13, 14, 15],
      day: 4,
      course: "3º/4º Computación",
      id: "subject-4-12"
    },
    "subject-4-13": {
      hours: { start: "09:00", end: "12:00" },
      classroom: "B07",
      name: "Percepción",
      abrev: "P",
      group: "C1",
      type: "Prácticas",
      week: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      day: 4,
      course: "3º/4º Computación",
      id: "subject-4-13"
    },
    "subject-5-0": {
      hours: { start: "08:30", end: "10:00" },
      classroom: "C02",
      name: "Bases de Datos",
      abrev: "BD",
      group: "A1",
      type: "Teoría",
      week: [1, 2],
      day: 5,
      course: "2A",
      id: "subject-5-0"
    },
    "subject-5-1": {
      hours: { start: "08:30", end: "10:30" },
      group: "C2",
      name: "Ingeniería del Software",
      abrev: "IS",
      classroom: "E08",
      type: "Prácticas",
      week: [3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 5,
      course: "2B",
      id: "subject-5-1"
    },
    "subject-5-2": {
      hours: { start: "10:30", end: "12:30" },
      group: "C4",
      name: "Ingeniería del Software",
      abrev: "IS",
      classroom: "E08",
      type: "Prácticas",
      week: [3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 5,
      course: "2B",
      id: "subject-5-2"
    },
    "subject-5-3": {
      hours: { start: "08:30", end: "10:30" },
      group: "C6",
      name: "Bases de Datos",
      abrev: "BD",
      classroom: "D08",
      type: "Prácticas",
      week: [3, 4, 5, 7, 8, 9, 10, 11, 12],
      day: 5,
      course: "2B",
      id: "subject-5-3"
    },
    "subject-5-4": {
      hours: { start: "10:30", end: "12:30" },
      group: "C4",
      name: "Bases de Datos",
      abrev: "BD",
      classroom: "D08",
      type: "Prácticas",
      week: [3, 4, 5, 7, 8, 9, 10, 11, 12],
      day: 5,
      course: "2B",
      id: "subject-5-4"
    },
    "subject-5-5": {
      hours: { start: "12:30", end: "14:30" },
      group: "C2",
      name: "Bases de Datos",
      abrev: "BD",
      classroom: "D08",
      type: "Prácticas",
      week: [3, 4, 5, 7, 8, 9, 10, 11, 12],
      day: 5,
      course: "2B",
      id: "subject-5-5"
    },
    "subject-5-6": {
      hours: { start: "10:30", end: "12:30" },
      group: "A2",
      name: "Bases de Datos",
      abrev: "BD",
      classroom: "C02",
      type: "Teoría",
      week: [1, 2],
      day: 5,
      course: "2B",
      id: "subject-5-6"
    },
    "subject-5-7": {
      hours: { start: "08:30", end: "10:00" },
      classroom: "B02",
      name: "Organizacion y Gestion de Empresas",
      abrev: "OGE",
      group: "A2",
      type: "Teoría",
      week: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      day: 5,
      course: "1B",
      id: "subject-5-7"
    }
  }
} as stateData;
export default initialData;
