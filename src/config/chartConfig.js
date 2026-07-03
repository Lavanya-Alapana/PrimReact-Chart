export const getYAxisScale = (datasets, steps) => {
  let minValue = Infinity;
  let maxValue = -Infinity;

  datasets.forEach((dataset) => {
    dataset.data.forEach((value) => {
      if (value < minValue) {
        minValue = value;
      }

      if (value > maxValue) {
        maxValue = value;
      }
    });
  });

  return {
    min: Math.floor(minValue),
    max: Math.ceil(maxValue),

    ticks: {
      stepSize: Number(((maxValue - minValue) / steps).toFixed(2)),

      callback: (value) => {
        if (value >= 1_000_000_000) {
          return `$${(value / 1_000_000_000).toFixed(1).replace(".0", "")}B`;
        }

        if (value >= 1_000_000) {
          return `$${(value / 1_000_000).toFixed(1).replace(".0", "")}M`;
        }

        if (value >= 1_000) {
          return `$${(value / 1_000).toFixed(1).replace(".0", "")}K`;
        }

        return  `$${Number(value).toFixed(2)}`;
      },
    },
  };
};
