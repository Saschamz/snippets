function randomizeGradient(options) {
  
    // Default values
    const stopsDefault = 2;
    const hueDefault = {min: 0, max: 255};
    const saturationDefault = 80;
    const lightnessDefault = 60;
    const directionDefault = 'to bottom';
    const alphaDefault = 1;
    
    // Options handling
    if(!options) {
      options = {
      stops: stopsDefault,
      hue: {min: hueDefault.min, max: hueDefault.max},
      saturation: saturationDefault,
      lightness: lightnessDefault,
      direction: directionDefault,
      alpha: alphaDefault
    }} else {
      !options.stops && ( options.stops = stopsDefault );
      !options.hue && ( options.hue = {min: hueDefault.min, max: hueDefault.max} );
      !!options.hue && ( !options.hue.min || !options.hue.max ) && (
        options.hue = {min: hueDefault.min, max: hueDefault.max}
      );
      !options.saturation && ( options.saturation = saturationDefault );
      !options.direction && ( options.direction = directionDefault );
      !options.lightness && ( options.lightness = lightnessDefault );
      !options.alpha && ( options.alpha = alphaDefault );
    }
    
    // Generate colors
    const colors = [];
    const usedHues = [];
    for(let i = 0; i < options.stops; i++) {
      let hue = Math.floor( Math.random() * (options.hue.max - options.hue.min + 1) + options.hue.min );
      usedHues.forEach(usedHue => {
        const hueDiff = Math.abs(hue - usedHue);
        if(hueDiff < 50 ) ( hue >= usedHue && ( hue += 50 ) ) || ( hue < usedHue && ( hue -= 50 ) );
      });
      colors.push(`hsla(${hue}, ${options.saturation}%, ${options.lightness}%, ${options.alpha})`);
      usedHues.push(hue);
    }
    
    // Return full gradient string
    const gradient = `linear-gradient(${options.direction}, ${colors.join(', ')})`;
    return gradient;
  }