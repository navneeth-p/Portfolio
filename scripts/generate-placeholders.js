const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const projectsDir = path.join(__dirname, '../public/projects');
const images = [
  { name: 'ecommerce.jpg', title: 'Agro Marketplace' },
  { name: 'dashboard.jpg', title: 'MinedFul Process Mining Tool' },
  { name: 'data-pipeline.jpg', title: 'Stellar Image Classification' }
];

// Create projects directory if it doesn't exist
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// Generate placeholder images
images.forEach(({ name, title }) => {
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(0, 0, 800, 600);

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 32px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(title, 400, 300);

  // Save image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(projectsDir, name), buffer);
}); 