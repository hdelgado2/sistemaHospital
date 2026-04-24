import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                "surface": "#f7f9fb",
                "primary": "#00366b",
                "on-background": "#191c1e",
                "on-tertiary-fixed": "#002113",
                "on-surface-variant": "#424750",
                "inverse-primary": "#a7c8ff",
                "on-error-container": "#93000a",
                "surface-variant": "#e0e3e5",
                "secondary-fixed-dim": "#b7c8e1",
                "on-secondary-fixed": "#0b1c30",
                "tertiary": "#003e29",
                "error-container": "#ffdad6",
                "on-error": "#ffffff",
                "on-primary-fixed-variant": "#114783",
                "surface-container-high": "#e6e8ea",
                "on-secondary": "#ffffff",
                "surface-container-low": "#f2f4f6",
                "secondary-fixed": "#d3e4fe",
                "primary-fixed-dim": "#a7c8ff",
                "surface-dim": "#d8dadc",
                "on-primary": "#ffffff",
                "background": "#f7f9fb",
                "tertiary-fixed-dim": "#4edea3",
                "outline": "#737781",
                "on-secondary-fixed-variant": "#38485d",
                "surface-container-highest": "#e0e3e5",
                "surface-container": "#eceef0",
                "surface-tint": "#325f9c",
                "on-surface": "#191c1e",
                "error": "#ba1a1a",
                "on-tertiary": "#ffffff",
                "outline-variant": "#c3c6d1",
                "on-tertiary-fixed-variant": "#005236",
                "secondary-container": "#d0e1fb",
                "inverse-surface": "#2d3133",
                "surface-bright": "#f7f9fb",
                "on-tertiary-container": "#42d59a",
                "on-primary-fixed": "#001b3c",
                "secondary": "#505f76",
                "tertiary-fixed": "#6ffbbe",
                "tertiary-container": "#00583b",
                "primary-fixed": "#d5e3ff",
                "primary-container": "#1b4d89",
                "on-primary-container": "#98bfff",
                "on-secondary-container": "#54647a",
                "inverse-on-surface": "#eff1f3",
                "surface-container-lowest": "#ffffff"
            },
            borderRadius: {
                DEFAULT: "0.125rem",
                lg: "0.25rem",
                xl: "0.5rem",
                full: "0.75rem"
            },
            spacing: {
                gutter: "24px",
                xl: "32px",
                md: "16px",
                sm: "8px",
                base: "8px",
                xs: "4px",
                margin: "40px",
                lg: "24px"
            },
            fontFamily: {
                h1: ["Manrope"],
                "label-md": ["Inter"],
                h2: ["Manrope"],
                "data-mono": ["Inter"],
                "body-sm": ["Inter"],
                "body-lg": ["Inter"],
                h3: ["Manrope"],
                "body-md": ["Inter"]
            },
            fontSize: {
                h1: ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }],
                "label-md": ["14px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }],
                h2: ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }],
                "data-mono": ["14px", { lineHeight: "20px", fontWeight: "500" }],
                "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
                "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
                h3: ["20px", { lineHeight: "28px", fontWeight: "600" }],
                "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }]
            }
        },
    },

    plugins: [forms],
    darkMode: "class"
};
