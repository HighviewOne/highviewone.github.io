# Fonts

Self-hosted copies of the latin subsets served by Google Fonts (variable `wght` axis, trimmed to the weights the site uses):

| File | Font | Weights | License |
|---|---|---|---|
| `Inter-latin.woff2` | [Inter](https://github.com/rsms/inter) | 400–500 | SIL Open Font License 1.1 |
| `InterTight-latin.woff2` | [Inter Tight](https://github.com/rsms/inter) | 500–600 | SIL Open Font License 1.1 |
| `JetBrainsMono-latin.woff2` | [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono) | 400–600 | SIL Open Font License 1.1 |

License text: https://openfontlicense.org/open-font-license-official-text/

The `@font-face` rules are at the top of `styles.css`. If a style needs a weight outside these ranges,
re-download the file with a wider `wght` range rather than letting the browser fake the weight.
