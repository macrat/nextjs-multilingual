import {Locale} from './types';


export enum Key {
    Title = "title",
    Content = "content",
}


export const strings = {
    [Locale.En]: {
        [Key.Title]: "The Title for English",
        [Key.Content]: "this is a content",
    },
    [Locale.Ja]: {
        [Key.Title]: "日本語用のタイトル",
        [Key.Content]: "これは本文です",
    },
}
