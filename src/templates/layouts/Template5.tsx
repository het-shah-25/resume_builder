import React from 'react';
// import DAiictlogo from 'public/home/DaiictLogo.jpg';
import Image from 'next/image';

// import shallow from 'zustand/shallow';
// import {
//   useIntro,
//   useWork,
//   useSkills,
//   useAchievements,
//   useEducation,
// } from 'stores/data.store';

export function Template5() {
  // Uncomment below lines to access data

  // const intro = useIntro((state: any) => state.intro);
  // const education = useEducation((state: any) => state.education);
  // const experience = useWork((state: any) => state);
  // const [keyProjects, certificates] = useAchievements(
  //   (state: any) => [state.keyProjects, state.certificates],
  //   shallow
  // );
  // const [languages, frameworks, libraries, databases, technologies, practices, tools] = useSkills(
  //   (state: any) => [
  //     state.languages,
  //     state.frameworks,
  //     state.libraries,
  //     state.databases,
  //     state.technologies,
  //     state.practices,
  //     state.tools,
  //   ],
  //   shallow
  // );

  return <Image src="/DaiictLogo.jpg" alt="logo" />;
}
