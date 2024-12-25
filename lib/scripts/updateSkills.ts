const PrismaClient = require('@prisma/client').PrismaClient;

const db = new PrismaClient();

const addOrUpdateSkillCategory = async (
  categoryName: string,
  skills: string[],
) => {
  try {
    if (!categoryName) {
      throw new Error('Category name is required.');
    }
    // Check if the skill category already exists
    let skillCategory = await db.skillCategory.findUnique({
      where: { name: categoryName },
    });

    if (!skillCategory) {
      // Create a new skill category if it doesn't exist
      skillCategory = await db.skillCategory.create({
        data: { name: categoryName },
      });
      console.log(`Created new skill category: ${categoryName}`);
    } else {
      console.log(`Skill category '${categoryName}' already exists.`);
    }

    // Add or update skills in the skill category
    for (const skillName of skills) {
      const existingSkill = await db.skill.findUnique({
        where: { name: skillName },
      });

      if (!existingSkill) {
        // Add new skill if it doesn't exist
        await db.skill.create({
          data: {
            name: skillName,
            skill_category_id: skillCategory.id,
          },
        });
        console.log(
          `Added new skill: ${skillName} under category '${categoryName}'.`,
        );
      } else if (existingSkill.skill_category_id !== skillCategory.id) {
        // Update the skill to point to the current category if mismatched
        await db.skill.update({
          where: { name: skillName },
          data: { skill_category_id: skillCategory.id },
        });
        console.log(
          `Updated skill '${skillName}' to belong to category '${categoryName}'.`,
        );
      } else {
        console.log(
          `Skill '${skillName}' is already up-to-date in category '${categoryName}'.`,
        );
      }
    }
  } catch (err) {
    console.error(`Error processing skill category '${categoryName}':`, err);
  }
};

// Predefined categories and skills
const categories = [
  {
    name: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Solidity', 'CSS'],
  },
  {
    name: 'Tools & Technologies',
    skills: [
      'Next.js',
      'React.js',
      'Node.js',
      'GraphQL',
      'MongoDB',
      'PostgreSQL',
      'Firebase',
      'Supabase',
      'Prisma ORM',
      'Docker',
      'Kubernetes',
      'AWS',
      'DigitalOcean',
      'Tailwind CSS',
      'Material UI',
      'WebRTC',
      'Jest',
      'Cypress',
      'GitHub Actions',
      'Jenkins',
      'Vercel',
    ],
  },
  {
    name: 'Industry Knowledge',
    skills: [
      'Full-Stack Development',
      'Real-Time Applications',
      'Progressive Web Apps (PWA)',
      'Backend Development',
      'Microservices',
      'Database Design',
      'DevOps Automation',
      'Serverless Architecture',
      'CI/CD Pipelines',
      'Frontend Development',
      'Technical SEO Optimization',
      'Performance Optimization',
      'Web3 Development',
      'Decentralized Applications (DApps)',
      'Unit Testing',
      'End-to-End Testing',
      'Code Reviews',
      'API Documentation',
      'Project Management',
      'Video Conferencing',
      'Version Control (Git & GitHub)',
    ],
  },
];

// Process the categories and skills
const updateSkills = async () => {
  for (const category of categories) {
    await addOrUpdateSkillCategory(category.name, category.skills);
  }
};

updateSkills()
  .then(() =>
    console.log('Skill categories and skills processed successfully!'),
  )
  .catch((err) => console.error('Error updating skills:', err));
