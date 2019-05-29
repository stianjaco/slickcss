# SlickCSS

**Simple and flexible css-framework for rapid prototyping and weblayouts**
Created by: [Dropcode](https://www.dropcode.no/)

## Configure
Open the *src/scss/config/* folder. 

`_colors.scss` Controls all the defaults colors used.
`_grid.scss` Controls the container size, number of columns and gutters.
`_typography.scss` Controls default fonts, font-size etc.
`_ui.scss` Controls UI-elements like buttons, forms etc.
`_breakpoints.scss` Controls breakpoint widths and prefixes

## Build

    npm install
    nmp run build

## Usage

Include the css

    <link rel="stylesheet" type="text/css" href="./dist/css/slick.css" />
