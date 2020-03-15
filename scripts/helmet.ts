export const helmet = (component: string, page: string, title?: string) => {
  return `
    <html>
        <head>
            <title>React</title>
            <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
            />
            <link rel="stylesheet" href="layout.css">
            <link rel="stylesheet" href="${page}.css">
        </head>
        <body>
            <div id="_app">
                ${component}
            </div>
        </body>
        // <script src="./${page}.js"></script>
    </html>
    `;
};
