"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Charcodes = void 0;
class Charcodes {
}
exports.Charcodes = Charcodes;
Charcodes.CHARCODES = {
    "alphabets": {
        "Latin": { "unicode_ranges": ["0000-007F", "0080-00FF"],
            "offset": 0,
            "length": 384 },
        "Cyrillic": { "unicode_ranges": ["0400-04FF", "0500-052F"],
            "offset": 1024,
            "length": 336 },
        "Greek": { "unicode_ranges": ["0370-03FF"],
            "offset": 880,
            "length": 144 },
        "Hebrew": { "unicode_ranges": ["0590-05FF"],
            "offset": 1424,
            "length": 112 },
        "Arabic": { "unicode_ranges": ["0600-06FF", "0750-077F"],
            "offset": 1536,
            "length": 432 },
        "Devanagari": { "unicode_ranges": ["0900-097F"],
            "offset": 2304,
            "length": 128 },
        "Bengali": { "unicode_ranges": ["0980-09FF"],
            "offset": 2432,
            "length": 128 },
        "Tamil": { "unicode_ranges": ["0B80-0BFF"],
            "offset": 2944,
            "length": 128 },
        "Hiragana": { "unicode_ranges": ["3040-309F"],
            "offset": 12352,
            "length": 96 },
        "Katakana": { "unicode_ranges": ["30A0-30FF"],
            "offset": 12448,
            "length": 96 },
        "Han": { "unicode_ranges": ["4E00-9FFF"],
            "offset": 19968,
            "length": 20992 },
        "Hangul": { "unicode_ranges": ["1100-11FF", "AC00-D7AF"],
            "offset": 4352,
            "length": 11184 },
        "Thai": { "unicode_ranges": ["0E00-0E7F"],
            "offset": 3584,
            "length": 128 },
        "Armenian": { "unicode_ranges": ["0530-058F"],
            "offset": 1328,
            "length": 96 },
        "Georgian": { "unicode_ranges": ["10A0-10FF"],
            "offset": 4256,
            "length": 96 },
        "Ethiopic": { "unicode_ranges": ["1200-137F"],
            "offset": 4608,
            "length": 384 }
    },
    "country_codes": [
        "US", "CN", "IN", "RU", "BR", "ID", "PK", "NG", "BD", "JP",
        "DE", "FR", "GB", "IT", "KR", "MX", "ES", "CA", "TR", "VN"
    ],
    "countries": {
        "US": {
            "country_name": "United States",
            "languages": [
                {
                    "language_code": "en",
                    "language_name": "English",
                    "charsets": [
                        {
                            "alphabet": "Latin",
                            "unicode_ranges": ["0000-007F", "0080-00FF"]
                        }
                    ]
                }
            ]
        },
        "RU": {
            "country_name": "Russia",
            "languages": [
                {
                    "language_code": "ru",
                    "language_name": "Russian",
                    "charsets": [
                        {
                            "alphabet": "Cyrillic",
                            "unicode_ranges": ["0400-04FF", "0500-052F"]
                        }
                    ]
                }
            ]
        },
        "CN": {
            "country_name": "China",
            "languages": [
                {
                    "language_code": "zh",
                    "language_name": "Chinese",
                    "charsets": [
                        {
                            "alphabet": "Han",
                            "unicode_ranges": ["4E00-9FFF"]
                        }
                    ]
                }
            ]
        },
        "IN": {
            "country_name": "India",
            "languages": [
                {
                    "language_code": "hi",
                    "language_name": "Hindi",
                    "charsets": [
                        {
                            "alphabet": "Devanagari",
                            "unicode_ranges": ["0900-097F"]
                        }
                    ]
                },
                {
                    "language_code": "bn",
                    "language_name": "Bengali",
                    "charsets": [
                        {
                            "alphabet": "Bengali",
                            "unicode_ranges": ["0980-09FF"]
                        }
                    ]
                }
            ]
        },
        "FR": {
            "country_name": "France",
            "languages": [
                {
                    "language_code": "fr",
                    "language_name": "French",
                    "charsets": [
                        {
                            "alphabet": "Latin",
                            "unicode_ranges": ["0000-007F", "0080-00FF"]
                        }
                    ]
                }
            ]
        },
        "DE": {
            "country_name": "Germany",
            "languages": [
                {
                    "language_code": "de",
                    "language_name": "German",
                    "charsets": [
                        {
                            "alphabet": "Latin",
                            "unicode_ranges": ["0000-007F", "0080-00FF"]
                        }
                    ]
                }
            ]
        },
        "JP": {
            "country_name": "Japan",
            "languages": [
                {
                    "language_code": "ja",
                    "language_name": "Japanese",
                    "charsets": [
                        {
                            "alphabet": "Hiragana",
                            "unicode_ranges": ["3040-309F"]
                        },
                        {
                            "alphabet": "Katakana",
                            "unicode_ranges": ["30A0-30FF"]
                        },
                        {
                            "alphabet": "Han",
                            "unicode_ranges": ["4E00-9FFF"]
                        }
                    ]
                }
            ]
        },
        "SA": {
            "country_name": "Saudi Arabia",
            "languages": [
                {
                    "language_code": "ar",
                    "language_name": "Arabic",
                    "charsets": [
                        {
                            "alphabet": "Arabic",
                            "unicode_ranges": ["0600-06FF", "0750-077F"]
                        }
                    ]
                }
            ]
        }
    }
};
//# sourceMappingURL=Charcodes.js.map