import { colors } from "../types";

const colorSubject = {
  AS: { bgc: "rgba(203, 123, 140, 1)", abrev: "rgba(174, 49, 75, 1)" },
  BD: { bgc: "rgba(254, 114, 117, 1)", abrev: "rgba(216, 0, 3, 1)" },
  EDNL: { bgc: "rgba(152, 209, 141, 1)", abrev: "rgba(23, 122, 0, 1)" },
  IS: { bgc: "rgba(254, 181, 122, 1)", abrev: "rgba(216, 93, 0, 1)" },
  POO: { bgc: "rgba(220, 141, 236, 1)", abrev: "rgba(172, 0, 206, 1)" },
  RC: { bgc: "rgba(140, 192, 236, 1)", abrev: "rgba(0, 110, 206, 1)" },
  SD: { bgc: "rgba(255, 218, 97, 1)", abrev: "rgba(140, 119, 53, 1)" },
  SSI: { bgc: "rgba(119, 145, 174, 1)", abrev: "rgba(38, 58, 79, 1)" }
} as colors;

export const subjectBgColor = (subject: string): string => {
  return colorSubject[subject].bgc;
};

export const subjectAbrevColor = (subject: string): string => {
  return colorSubject[subject].abrev;
};
