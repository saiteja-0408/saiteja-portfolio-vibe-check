import React from 'react';

const ImageTest = () => {
  const testImages = [
    "/ProjectsPhotos/Automated-Extraction-Validation.png",
    "/ProjectsPhotos/Automated-Testing-Framework.png",
    "/ProjectsPhotos/CI-CD-Pipeline-Automation.png",
    "/ProjectsPhotos/CISC-Simulator.png",
    "/ProjectsPhotos/Data-Migration-Pipeline.png",
    "/ProjectsPhotos/Deep-Learning-Uber-Fare-Prediction.png",
    "/ProjectsPhotos/GW-Athletics-Dashboard.png",
    "/ProjectsPhotos/Health-Wellness-Platform.png",
    "/ProjectsPhotos/Layout-Overlap-Detector.png",
    "/ProjectsPhotos/ML-Health-Risk-Assessment.png",
    "/ProjectsPhotos/Unqork-Corporate-Vehicle-Tracker.png"
  ];

  return (
    <div className="p-4 bg-white">
      <h2 className="text-2xl font-bold mb-4">Image Test</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {testImages.map((image, index) => (
          <div key={index} className="border p-2">
            <img 
              src={image} 
              alt={`Test ${index + 1}`}
              className="w-full h-32 object-contain"
              onLoad={() => console.log(`✅ Test image loaded: ${image}`)}
              onError={(e) => {
                console.error(`❌ Test image failed: ${image}`);
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                  <div class="w-full h-32 flex items-center justify-center bg-red-100 border border-red-300">
                    <div class="text-center text-red-600">
                      <div class="text-sm">Failed to load</div>
                      <div class="text-xs">${image}</div>
                    </div>
                  </div>
                `;
              }}
            />
            <div className="text-xs mt-1 truncate">{image.split('/').pop()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest; 