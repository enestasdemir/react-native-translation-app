import tr from './languages/tr.json';

const languageFile: Record<string, string> = tr;

export const translate = (key: string) => languageFile[key];
