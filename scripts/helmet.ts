export const helmet = (component: string) => {
  return `
    <html>
        <head>
            <title>React</title>
        </head>
        <body>
            <div id="_app">
                ${component}
            </div>
        </body>
    </html>
    `;
};
