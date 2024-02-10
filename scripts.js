const colorsData = [
    { name: "AliceBlue", hex: "#f0f8ff", rgb: [240, 248, 255], rgba: "rgba(240, 248, 255, 1)" },

    { name: "AntiqueWhite", hex: "#faebd7", rgb: [250, 235, 215], rgba: "rgba(250, 235, 215, 1)" },

    { name: "Cornsilk", hex: "#fff8dc", rgb: [255, 248, 220], rgba: "rgba(255, 248, 220, 1)" },

    { name: "Gainsboro", hex: "#dcdcdc", rgb: [222, 222, 222], rgba: "rgba(222, 222, 222, 1)" },

    { name: "Linen", hex: "#faf0e6", rgb: [250, 240, 230], rgba: "rgba(250, 240, 230, 1)" },

    { name: "MistyRose", hex: "#ffe4e1", rgb: [255, 228, 225], rgba: "rgba(255, 228, 225, 1)" },

    { name: "NavajoWhite", hex: "#ffdead", rgb: [255, 222, 173], rgba: "rgba(255, 222, 173, 1)" },

    { name: "OldLace", hex: "#fdf5e6", rgb: [253, 245, 230], rgba: "rgba(253, 245, 230, 1)" },

    { name: "Seashell", hex: "#fff5ee", rgb: [255, 245, 238], rgba: "rgba(255, 245, 238, 1)" },

    { name: "Snow", hex: "#fffafa", rgb: [255, 250, 250], rgba: "rgba(255, 250, 250, 1)" },

    { name: "Wheat", hex: "#f5deb3", rgb: [245, 222, 179], rgba: "rgba(245, 222, 179, 1)" },

    { name: "WhiteSmoke", hex: "#f5f5f5", rgb: [245, 245, 245], rgba: "rgba(245, 245, 245, 1)" },

    { name: "SkyBlue", hex: "#87CEEB", rgb: [135, 206, 235], rgba: "rgba(135, 206, 235, 1)" },
  { name: "Goldenrod", hex: "#DAA520", rgb: [218, 165, 32], rgba: "rgba(218, 165, 32, 1)" },
  { name: "SlateGray", hex: "#708090", rgb: [112, 128, 144], rgba: "rgba(112, 128, 144, 1)" },
  { name: "Tomato", hex: "#FF6347", rgb: [255, 99, 71], rgba: "rgba(255, 99, 71, 1)" },
  { name: "Medium Purple", hex: "#9370DB", rgb: [147, 112, 219], rgba: "rgba(147, 112, 219, 1)" },
  { name: "Medium SeaGreen", hex: "#3CB371", rgb: [60, 179, 113], rgba: "rgba(60, 179, 113, 1)" },
  { name: "SaddleBrown", hex: "#8B4513", rgb: [139, 69, 19], rgba: "rgba(139, 69, 19, 1)" },
  { name: "RoyalBlue", hex: "#4169E1", rgb: [65, 105, 225], rgba: "rgba(65, 105, 225, 1)" },
  { name: "Dark OliveGreen", hex: "#556B2F", rgb: [85, 107, 47], rgba: "rgba(85, 107, 47, 1)" },
  { name: "Peru", hex: "#CD853F", rgb: [205, 133, 63], rgba: "rgba(205, 133, 63, 1)" },
  { name: "Dark Magenta", hex: "#8B008B", rgb: [139, 0, 139], rgba: "rgba(139, 0, 139, 1)" },
  { name: "Medium AquaMarine", hex: "#66CDAA", rgb: [102, 205, 170], rgba: "rgba(102, 205, 170, 1)" },
  { name: "Dark Goldenrod", hex: "#B8860B", rgb: [184, 134, 11], rgba: "rgba(184, 134, 11, 1)" },
  { name: "Indigo", hex: "#4B0082", rgb: [75, 0, 130], rgba: "rgba(75, 0, 130, 1)" },
  { name: "SteelBlue", hex: "#4682B4", rgb: [70, 130, 180], rgba: "rgba(70, 130, 180, 1)" },
  { name: "FireBrick", hex: "#B22222", rgb: [178, 34, 34], rgba: "rgba(178, 34, 34, 1)" },
  { name: "Teal", hex: "#008080", rgb: [0, 128, 128], rgba: "rgba(0, 128, 128, 1)" },
  { name: "Chocolate", hex: "#D2691E", rgb: [210, 105, 30], rgba: "rgba(210, 105, 30, 1)" },
  { name: "Medium VioletRed", hex: "#C71585", rgb: [199, 21, 133], rgba: "rgba(199, 21, 133, 1)" },
  { name: "Dark SlateGray", hex: "#2F4F4F", rgb: [47, 79, 79], rgba: "rgba(47, 79, 79, 1)" },
  { name: "Dark Cyan", hex: "#008B8B", rgb: [0, 139, 139], rgba: "rgba(0, 139, 139, 1)" },
  { name: "Pale VioletRed", hex: "#DB7093", rgb: [219, 112, 147], rgba: "rgba(219, 112, 147, 1)" },
  { name: "Medium SpringGreen", hex: "#00FA9A", rgb: [0, 250, 154], rgba: "rgba(0, 250, 154, 1)" },
  { name: "Dark Orchid", hex: "#9932CC", rgb: [153, 50, 204], rgba: "rgba(153, 50, 204, 1)" },
  { name: "Dark SlateBlue", hex: "#483D8B", rgb: [72, 61, 139], rgba: "rgba(72, 61, 139, 1)" },
  { name: "SlateBlue", hex: "#6A5ACD", rgb: [106, 90, 205], rgba: "rgba(106, 90, 205, 1)" },
  { name: "Medium Orchid", hex: "#BA55D3", rgb: [186, 85, 211], rgba: "rgba(186, 85, 211, 1)" },
  { name: "Medium Turquoise", hex: "#48D1CC", rgb: [72, 209, 204], rgba: "rgba(72, 209, 204, 1)" },
  { name: "CornflowerBlue", hex: "#6495ED", rgb: [100, 149, 237], rgba: "rgba(100, 149, 237, 1)" },
  { name: "Medium SlateBlue", hex: "#7B68EE", rgb: [123, 104, 238], rgba: "rgba(123, 104, 238, 1)" },
  { name: "Lime Green", hex: "#32CD32", rgb: [50, 205, 50], rgba: "rgba(50, 205, 50, 1)" },
  { name: "Sandy Brown", hex: "#F4A460", rgb: [244, 164, 96], rgba: "rgba(244, 164, 96, 1)" },
  { name: "Dodger Blue", hex: "#1E90FF", rgb: [30, 144, 255], rgba: "rgba(30, 144, 255, 1)" },
  { name: "Dark SeaGreen", hex: "#8FBC8F", rgb: [143, 188, 143], rgba: "rgba(143, 188, 143, 1)" },
  { name: "Goldenrod", hex: "#DAA520", rgb: [218, 165, 32], rgba: "rgba(218, 165, 32, 1)" },
  { name: "Crimson", hex: "#DC143C", rgb: [220, 20, 60], rgba: "rgba(220, 20, 60, 1)" },
  { name: "Dark Orange", hex: "#FF8C00", rgb: [255, 140, 0], rgba: "rgba(255, 140, 0, 1)" },
  { name: "Medium Turquoise", hex: "#48D1CC", rgb: [72, 209, 204], rgba: "rgba(72, 209, 204, 1)" },
  { name: "Orchid", hex: "#DA70D6", rgb: [218, 112, 214], rgba: "rgba(218, 112, 214, 1)" },
  { name: "Dark SlateGray", hex: "#2F4F4F", rgb: [47, 79, 79], rgba: "rgba(47, 79, 79, 1)" },
  { name: "Deep SkyBlue", hex: "#00BFFF", rgb: [0, 191, 255], rgba: "rgba(0, 191, 255, 1)" },
  { name: "Light Coral", hex: "#F08080", rgb: [240, 128, 128], rgba: "rgba(240, 128, 128, 1)" },
  { name: "Medium Purple", hex: "#9370DB", rgb: [147, 112, 219], rgba: "rgba(147, 112, 219, 1)" },
  { name: "Rosy Brown", hex: "#BC8F8F", rgb: [188, 143, 143], rgba: "rgba(188, 143, 143, 1)" },
  { name: "Dark Khaki", hex: "#BDB76B", rgb: [189, 183, 107], rgba: "rgba(189, 183, 107, 1)" },
  { name: "Medium Orchid", hex: "#BA55D3", rgb: [186, 85, 211], rgba: "rgba(186, 85, 211, 1)" },
  { name: "Sienna", hex: "#A0522D", rgb: [160, 82, 45], rgba: "rgba(160, 82, 45, 1)" },
  { name: "Sky Blue", hex: "#87CEEB", rgb: [135, 206, 235], rgba: "rgba(135, 206, 235, 1)" },
  { name: "Medium Aquamarine", hex: "#66CDAA", rgb: [102, 205, 170], rgba: "rgba(102, 205, 170, 1)" },
  { name: "Dark OliveGreen", hex: "#556B2F", rgb: [85, 107, 47], rgba: "rgba(85, 107, 47, 1)" },
  { name: "Pale Green", hex: "#98FB98", rgb: [152, 251, 152], rgba: "rgba(152, 251, 152, 1)" },
  { name: "Medium Slate Blue", hex: "#7B68EE", rgb: [123, 104, 238], rgba: "rgba(123, 104, 238, 1)" },
  { name: "Dark Turquoise", hex: "#00CED1", rgb: [0, 206, 209], rgba: "rgba(0, 206, 209, 1)" },
  { name: "Light Salmon", hex: "#FFA07A", rgb: [255, 160, 122], rgba: "rgba(255, 160, 122, 1)" },
  { name: "Cadet Blue", hex: "#5F9EA0", rgb: [95, 158, 160], rgba: "rgba(95, 158, 160, 1)" },
  { name: "Dark SlateBlue", hex: "#483D8B", rgb: [72, 61, 139], rgba: "rgba(72, 61, 139, 1)" },
  { name: "Pale VioletRed", hex: "#DB7093", rgb: [219, 112, 147], rgba: "rgba(219, 112, 147, 1)" },
  { name: "Medium SpringGreen", hex: "#00FA9A", rgb: [0, 250, 154], rgba: "rgba(0, 250, 154, 1)" },
  { name: "Dark Orchid", hex: "#9932CC", rgb: [153, 50, 204], rgba: "rgba(153, 50, 204, 1)" },
  { name: "Dark SlateGray", hex: "#2F4F4F", rgb: [47, 79, 79], rgba: "rgba(47, 79, 79, 1)" }
  ];
  
  const colorsContainer = document.querySelector('.colors');
  const colorDetailsName = document.getElementById('selectedColorName');
  const colorDetailsCode = document.getElementById('selectedColorCode');
  
  colorsData.forEach(color => {
    const colorCard = document.createElement('div');
    colorCard.classList.add('color');
    colorCard.style.backgroundColor = color.hex;
  
    colorCard.addEventListener('click', () => {
      navigator.clipboard.writeText(color.rgba).then(() => {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        const message = document.createElement('div');
        message.classList.add('popup-message');
        message.textContent = `Color ${color.rgba} copied!`;
        popup.appendChild(message);
        document.body.appendChild(popup);
  
        setTimeout(() => {
          popup.remove();
        }, 1000);
      });
  
      // Update color details below the color cards
      colorDetailsName.textContent = `Selected Color: ${color.name}`;
      colorDetailsCode.textContent = `Color Code: ${color.rgba}`;
    });
  
    colorsContainer.appendChild(colorCard);
  });
  
  // Additional styles and functionality for the color details section
  