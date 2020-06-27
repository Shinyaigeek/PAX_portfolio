export const helmet = (component: string, page: string, title?: string) => {
  return `
    <html>
        <head>
            <title>React</title>
            <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover"
            />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <link rel="stylesheet" href="layout.css">
            <link href="https://fonts.googleapis.com/css?family=Noto+Serif+JP&display=swap" rel="stylesheet">
        </head>
        <body>
            <div id="_app">
                ${component}
            </div>
        </body>
        <script src="./${page}.js"></script>
    </html>
    `;
};
