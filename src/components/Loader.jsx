const PortfolioLoader = () => {
  return (
    <div className="absolute inset-0 top-0 z-50 flex items-center justify-center h-screen overflow-hidden bg-bg_dark loader">
      {/* Main loader container */}
      <div className="z-[1000] flex flex-col items-center gap-8 minLoader fixed">

        {/* Hexagon loader */}
        <div className="relative w-32 h-32">

          {/* Outer rotating hexagon */}
          <svg
            className="absolute inset-0 z-[1000] w-full h-full animate-spin-slow"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient id="gradientLoader" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#E86B1D", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#F6C65B", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              fill="none"
              stroke="url(#gradientLoader)"
              strokeWidth="2"
              className="animate-draw-hexagon"
            />
          </svg>

          {/* Inner rotating hexagon */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin-reverse z-[1000]"
            viewBox="0 0 100 100"
          >
            <polygon
              points="50,20 75,32.5 75,67.5 50,80 25,67.5 25,32.5"
              fill="none"
              stroke="#E86B1D"
              strokeWidth="2"
              opacity="0.6"
              className="animate-draw-hexagon-delayed"
            />
          </svg>

          {/* Center glow */}
          <div className="absolute inset-0 flex items-center justify-center z-[1000]">
            <div
              className="w-8 h-8 rounded-full animate-pulse-glow"
              style={{
                background:
                  "radial-gradient(circle, #F6C65B 20%, #E86B1D 100%)",
                boxShadow:
                  "0 0 25px 8px rgba(232,107,29,0.6)",
              }}
            />
          </div>

          {/* Orbiting dots */}
          {[0, 120, 240].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-secondary animate-orbit z-[1000]"
              style={{
                animationDelay: `${i * 0.3}s`,
                transformOrigin: "50px 50px",
              }}
            />
          ))}
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {["L", "O", "A", "D", "I", "N", "G"].map((letter, i) => (
              <span
                key={i}
                className="text-2xl font-bold text-secondary animate-bounce-letter"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-48 h-1 overflow-hidden rounded-full bg-[#2a2a2a]">
            <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary animate-progress" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PortfolioLoader;

////////////////////////////////////////////////////////
