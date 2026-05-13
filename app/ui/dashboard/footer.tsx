import { execSync } from 'child_process';

export default function Footer() {
  let branchName = 'main';

  try {
    // Executa o comando git para pegar o nome da branch atual
    branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  } catch (e) {
    branchName = 'Erro ao captar branch';
    console.error('Erro ao ler branch do Git:', e);
  }

  return (
   <footer className="mt-8 border-t border-gray-200 pt-6 pb-2 text-center text-sm text-gray-500">
      <p>
       Dashboard Version: <span className="font-mono font-semibold text-blue-500 uppercase tracking-wider">{branchName}</span>
      </p>
    </footer>
  );
}