export default function Current() {
  return (
    <div className="flex flex-col items-center mb-8">
      <h1 className="text-2xl font-bold mb-4">🏀 THIS SUMMER 🏀</h1>
      <div className="flex flex-col justify-center gap-4 md:w-1/2 w-full">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/3PQhaXctASU"
          title="Jonathan Kuminga 2023"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/6lLqs8a2wgM"
          title="Marjon Beauchamp 2023"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/4itiBP2B6l8"
          title="Jamal Crawford vs. Nate Robinson 2023"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
