// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    about: {
      title: "About Me",
      intro: "Hi, I'm Zaina, a designer based in Alberta.",
      toolsIntro: "My primary tools of choice includes:",
      tools: ["Figma", "HTML", "CSS"],
      passion: "Beyond designing, I enjoy hanging out with my pets and loved ones. I enjoy playing boardgames and trying various coffee/matcha.",
      approach: "I want to understand the client's needs as well as the user pain points, before I start designing a rough sketch of the digital product."
    }
  });
}
