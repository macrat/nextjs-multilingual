enum Locale {
    En = "en",
    Ja = "ja",
}


namespace Locale {
    export function toList(): Locale[] {
        return Object.values(Locale).filter(x => typeof x === 'string').map(x => x as Locale);
    }

    export function toString(locale: Locale) {
        switch (locale) {
        case Locale.En:
            return 'English';
        case Locale.Ja:
            return '日本語';
        }
    }
}


export {Locale};
export const defaultLocale = Locale.En;
