// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"Artworks":{"name":"artworks","fields":{"Title":"Title","Price":"Price","Artist":"Artist","Style":"Style","id":"id"}},"Artists":{"name":"artists","fields":{"Name":"Name","Nationality":"Nationality","BirthYear":"BirthYear","id":"id"}},"Collections":{"name":"collections","fields":{"CollectionName":"CollectionName","Budget":"Budget","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    