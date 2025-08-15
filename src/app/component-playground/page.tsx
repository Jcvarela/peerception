import fs from 'fs';
import path from 'path';
import { ComponentPlayground } from '@/app/component-playground/ComponentPlayground';

function getComponentNames(): string[] {
  const componentsDir = path.join(process.cwd(), 'src', 'components');
  return fs
    .readdirSync(componentsDir)
    .filter((name) => fs.statSync(path.join(componentsDir, name)).isDirectory());
}

export default function Page() {
  const componentNames = getComponentNames();
  return <ComponentPlayground componentNames={componentNames} />;
}
