interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroElementProps) => {
  return <h1 className="text-5xl my-6">{children}</h1>;
};

export const HeroSubtitle = ({ children }: HeroElementProps) => {
  return <p className="text-lg mb-12 text-subtitle">{children}</p>;
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};

function removeDup(nums) {
  let indexMarker = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] != nums[i]) {
      nums[indexMarker] = nums[i];
      indexMarker++;
    }
  }
  return indexMarker;
}

function maxProfit(prices) {
  if (!prices || prices.length === 0) {
    return 0;
  }
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i];
    }
  }
  return profit;
}
