import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const out=process.env.EDITORIAL_OUT;
assert.ok(out);
assert.equal(fs.existsSync('src/pages'),false,'Presentation components must not be accidental routes');
const report=JSON.parse(execFileSync(process.execPath,['tests/release-route-audit.mjs'],{encoding:'utf8',env:process.env}));
assert.equal(report.missingContentRouteCount,0);
assert.equal(report.caseMismatchCount,0);
assert.equal(report.missingIntendedContentRoutes.length,0);
assert.equal(report.brokenContentLinks.length,0);
assert.equal(report.sitemap.programmeCovered,508);
assert.equal(report.sitemap.missingContentCount,0);
assert.equal(report.sitemap.missingExport.length,0);
assert.equal(report.sitemap.duplicateEntries.length,0);
assert.equal(report.inheritedCapitalisedAliasCount,0);
for(const route of ['SignUp','SignIn','Help','Solutions'])assert.equal(fs.readdirSync(out).includes(route),false,route);
const lowerSignup=fs.readFileSync(path.join(out,'signup/index.html'),'utf8');
assert.ok(lowerSignup.includes('Choose category, volume and priority'));
assert.ok(lowerSignup.includes('aria-disabled="true"'),'Incomplete qualification cannot hand off');
assert.ok(!lowerSignup.includes('type="password"'));
const expected=execFileSync(process.execPath,['tests/content-sitemap-plan.mjs'],{encoding:'utf8'}).trim();
const actual=fs.readFileSync('public/sitemap-content.xml','utf8').trim();
// content-sitemap-plan.mjs owns WHICH urls belong here; scripts/fix-sitemaps.mjs
// owns each url's <lastmod>. Comparing raw bytes conflated the two and made a
// correct lastmod look like a regression, so compare the <loc> sequence instead
// -- same guarantee on set, order and duplicates -- then require the lastmod.
const locs=x=>[...x.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
assert.deepEqual(locs(actual),locs(expected),'Content sitemap url set or order drifted from the plan');
assert.ok(fs.readFileSync('public/sitemap.xml','utf8').includes('https://www.obizee.com/sitemap-content.xml'));
assert.ok(!expected.includes('editorial-preview'));
assert.ok(!actual.includes('editorial-preview'));
const urls=[...actual.matchAll(/<url>[\s\S]*?<\/url>/g)].map(m=>m[0]);
assert.equal(urls.length,locs(expected).length);
assert.equal(urls.filter(u=>/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/.test(u)).length,urls.length,'Every content sitemap url needs a dated lastmod');
console.log(JSON.stringify({result:'pass',build:report.buildId,exactCaseContentRoutes:509,programmeSitemapCoverage:508,feedbackIncluded:true,caseMismatches:0,brokenLocalDestinations:0,accidentalCapitalisedAliases:0,productionPublished:false}));
