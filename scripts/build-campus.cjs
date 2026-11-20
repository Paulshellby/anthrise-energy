const path=require('path');
require('esbuild').build({entryPoints:[path.resolve(__dirname,'../src/campus/index.ts')],bundle:true,format:'esm',target:'es2022',minify:true,legalComments:'eof',outfile:path.resolve(__dirname,'../assets/js/campus.bundle.js')}).catch(()=>process.exitCode=1);
