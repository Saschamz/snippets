## GradientGenerator
Generates random gradient based on arguments.
The option objects takes the following key/value pairs.
- {stops} (integer) Defines how many colors will be generated and split evenly from point A to point B. Default: 2.
- {hue: {min, max}} (object: {integer, integer}) Defines what hue range the colors are allowed. Default: 0-255.
- {saturation} (integer) Defines what saturation the colors will have. Default: 80.
- {lightness} (integer) Defines what lightness the colors will have. Default: 60.
- {direction} (string) Defines the gradients direction. Default: to bottom.
- {alpha} (float) Defines gradient transparency. Default: 1.