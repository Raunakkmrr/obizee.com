import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const root=process.cwd(), scratch=fs.mkdtempSync(path.join(os.tmpdir(),'seo-sitemap-negative-'));
try{
 for(const name of ['src','tests','.next'])fs.symlinkSync(path.join(root,name),path.join(scratch,name),'dir');
 fs.cpSync(path.join(root,'public'),path.join(scratch,'public'),{recursive:true});
 const file=path.join(scratch,'public/sitemap-content.xml'),original=fs.readFileSync(file,'utf8');
 const audit=()=>JSON.parse(execFileSync(process.execPath,['tests/release-route-audit.mjs'],{cwd:scratch,env:process.env,encoding:'utf8'}));
 const first=original.match(/  <url>.*?<\/url>/)[0];
 fs.writeFileSync(file,original.replace('</urlset>',first+'\n</urlset>'));
 assert.equal(audit().sitemap.duplicateEntries.length,1,'Duplicate sitemap destination must be detected');
 fs.writeFileSync(file,original.replace(first,''));
 assert.equal(audit().sitemap.missingContentCount,1,'Missing content sitemap destination must be detected');
 console.log(JSON.stringify({negativeProofs:2,result:'pass',candidateUnmodified:true}));
}finally{fs.rmSync(scratch,{recursive:true,force:true});}
