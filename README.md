### Customization

You can easily configure the theme. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/main.css`: your CSS file using Tailwind CSS
- `utils/AppConfig.ts`: configuration file
- `src/pages/index.tsx`: the index page of the theme that uses the `Base` component
- `src/template/Base.tsx`: the `Base` component using component blocks
- `src/templates/*`: the list of component blocks
- `src/*`: other folders in src are the atomic components used by components blocks

Here is the layer:

- the entry point: `index.tsx` in `src/pages`
- the `Base` template: `Base.tsx` in `src/templates`
- use component blocks from `src/templates/*`
- use atomic components from `src/*`

### License

Licensed under the MIT License, Copyright © 2020

See [LICENSE](LICENSE) for more information.