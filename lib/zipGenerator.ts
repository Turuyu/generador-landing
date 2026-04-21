'use client';

import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { LandingData } from '@/types';
import { generateHTML } from './generator';
import { generateCSS } from './cssGenerator';
import { generateJS } from './jsGenerator';

export async function generateAndDownloadZip(data: LandingData): Promise<void> {
  const zip = new JSZip();
  
  const html = generateHTML(data);
  const css = generateCSS(data);
  const js = generateJS();
  
  const folderName = data.company.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  
  zip.file('index.html', html);
  zip.file('styles.css', css);
  zip.file('script.js', js);
  
  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, `${folderName}-landing.zip`);
}

export function generateAllFiles(data: LandingData): { html: string; css: string; js: string } {
  return {
    html: generateHTML(data),
    css: generateCSS(data),
    js: generateJS(),
  };
}