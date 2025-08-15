import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { ComponentPreview } from '@/app/component-playground/[componentName]/ComponentPreview';

interface ComponentPageProps {
  params: { componentName: string };
}

export function generateStaticParams() {
  const componentsDir = path.join(process.cwd(), 'src', 'components');
  return fs
    .readdirSync(componentsDir)
    .filter((name) => fs.statSync(path.join(componentsDir, name)).isDirectory())
    .map((name) => ({ componentName: name }));
}

export default async function Page({ params }: ComponentPageProps) {
  const { componentName } = params;
  try {
    await import(`@/components/${componentName}/${componentName}`);
  } catch {
    notFound();
  }
  return <ComponentPreview name={componentName} />;
}
