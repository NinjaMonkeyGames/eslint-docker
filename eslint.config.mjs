export default
[
    {
        // ADDITIONAL RULE MODIFICATIONS

        rules: 
        {
            semi: "error",                  // Enfore semi-colons at end of statements.
            "prefer-const": "error",        // Report misuse of contants.
            "strict": ["error", "global"]   // Enable reporting of strict violations as errors globaly.
        },

        // LANGUAGE STANDARD OPTIONS

        languageOptions: 
        {
            parserOptions:                  // Code parsing options.
            {
                ecmaVersion: 2023,          // Specify ECMAScript version.
                sourceType: "module",       // Specify script or module.

                ecmaFeatures:               // Toggle ECMA features.
                {
                    impliedStrict: true     // Enable global strict mode
                }
            }
        }
    }
];
