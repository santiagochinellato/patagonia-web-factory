import { execSync } from 'child_process';

console.log('Obteniendo contraseña del túnel...');

try {
  // Fetch the tunnel password (public IP)
  const password = execSync('curl -s https://loca.lt/mytunnelpassword').toString().trim();
  
  console.log('\n' + '='.repeat(60));
  console.log('  ⚠️  IMPORTANTE: LOCAL TUNNEL REQUIERE CONTRASEÑA');
  console.log('  TU CONTRASEÑA ES:');
  console.log(`\n    \x1b[32m\x1b[1m${password}\x1b[0m\n`); // Green and Bold
  console.log('  1. Copia esta contraseña.');
  console.log('  2. Abre el link que aparecerá abajo.');
  console.log('  3. Pega la contraseña en la página "Tunnel Password".');
  console.log('  4. Haz click en "Click to Submit".');
  console.log('='.repeat(60) + '\n');

} catch (e: any) {
  console.error('Error obteniendo la contraseña del túnel:', e.message);
}

// Run the tunnel command
try {
  // Using npx to ensure we use the local version
  // Port 3000 is standard for Next.js (Katz app)
  // Using --local-host 127.0.0.1 to avoid IPv6 issues
  execSync('npx lt --port 3000 --local-host 127.0.0.1', { 
    stdio: 'inherit' 
  });
} catch (e) {
  // Ignore errors
}
