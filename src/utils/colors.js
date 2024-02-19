export const getContrastRatio = (color1, color2) => {
    // Function to convert hex to RGB
    const hexToRgb = hex => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    };

    // Function to calculate luminance
    const luminance = rgb => {
        const sRGB = rgb.map(val => {
            val /= 255;
            return val <= 0.03928
                ? val / 12.92
                : Math.pow((val + 0.055) / 1.055, 2.4);
        });
        return sRGB[0] * 0.2126 + sRGB[1] * 0.7152 + sRGB[2] * 0.0722;
    };

    // Calculate contrast ratio
    const contrastRatio =
        (luminance(hexToRgb(color1)) + 0.05) /
        (luminance(hexToRgb(color2)) + 0.05);
    return contrastRatio;
};

export const reduceBrightness = (hexColor, reduction) => {
    // Helper function to convert hex to RGB
    function hexToRgb(hex) {
        return [
            parseInt(hex.slice(1, 3), 16),
            parseInt(hex.slice(3, 5), 16),
            parseInt(hex.slice(5, 7), 16),
        ];
    }

    // Reduce brightness by 50%
    const rgb = hexToRgb(hexColor).map(c =>
        Math.max(0, Math.round(c * reduction))
    );

    // Convert RGB back to hex
    const reducedHexColor =
        "#" + rgb.map(c => c.toString(16).padStart(2, "0")).join("");

    return reducedHexColor;
};

// Recursive function to adjust color for contrast ratio
export const adjustColorForContrast = (color1, color2) => {
    const contrast = getContrastRatio(color1, color2); // Compare with white
    if (contrast < 4.5) {
        // Reduce brightness
        const newColor = reduceBrightness(color2, 0.9);
        return adjustColorForContrast(color1, newColor); // Recursive call
    }
    return color2; // Return when contrast is satisfactory
};
