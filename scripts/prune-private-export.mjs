import fs from 'node:fs';
import path from 'node:path';
// A notFound() page can be exported as an HTTP-200 static object.
// Do not ship that object: let the static host return its real 404.
if(process.env.SEO_EDITORIAL_PREVIEW!=='1'){
 const directory=path.resolve('out/editorial-preview');
 if(fs.existsSync(directory)){
  if(fs.lstatSync(directory).isSymbolicLink())throw new Error('Refusing a symlinked private export');
  const entries=fs.readdirSync(directory);
  if(entries.some(n=>!['index.html','index.txt'].includes(n)))throw new Error('Unexpected private export contents');
  for(const name of entries){const file=path.join(directory,name);if(!fs.lstatSync(file).isFile())throw new Error('Unexpected private export type');}
  for(const name of entries)fs.unlinkSync(path.join(directory,name));
  fs.rmdirSync(directory);
 }
 console.log('Private editorial route excluded from public export.');
}
