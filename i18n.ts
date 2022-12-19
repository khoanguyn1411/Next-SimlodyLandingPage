import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LayoutEN from "./public/locales/en/layout.json";
import LayoutVI from "./public/locales/vi/layout.json";

export const defaultNS = "translation";
export const resources = {
  en: {
    layout: LayoutEN,
  },
  vi: {
    layout: LayoutVI,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "en",
  ns: ["layout"],
  defaultNS,
  resources,
});

export default i18n;
