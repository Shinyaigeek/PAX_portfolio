export const helmet = (component: string, page: string, title?: string) => {
  return `
    <html>
        <head>
            <title>React</title>
            <link rel="stylesheet" href="layout.css">
            <link rel="stylesheet" href="${page}.css">
        </head>
        <body>
            <div id="_app">
                ${component}
            </div>
        </body>
    </html>
    `;
};
