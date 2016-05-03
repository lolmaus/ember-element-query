/*jshint node:true*/
/*jshint esversion:6*/

module.exports = function(app) {
  const express   = require('express');
  const fooRouter = express.Router();
  const cwd       = process.cwd();
  const crypto    = require('crypto');
  const recursive = require('recursive-readdir');
  const fs        = require('fs');

  fooRouter.get('/repos/:user/:project/git/trees/:tree', function(req, res) {
    recursive(
      cwd,
      [
        `${cwd}/.idea/*`,
        `${cwd}/.git/*`,
        `${cwd}/bower_components/*`,
        `${cwd}/dist/*`,
        `${cwd}/node_modules/*`,
        `${cwd}/server/*`,
        `${cwd}/tests/*`,
        `${cwd}/tmp/*`,
        `${cwd}/vendor/*`,
      ],
      (err, files) => {
        res.send({
          sha: crypto.randomBytes(64).toString('hex'),
          tree: files.map(fileName => {
            const path = fileName.slice(cwd.length + 1);

            return {
              path
            };
          })
        });
      }
    );
  });

  fooRouter.get('/file/:path*', function (req, res) {
    const filename = `${cwd}/${req.params.path}${req.param(0)}`;
    const content = fs.readFileSync(filename, "utf8");
    res.send(content);
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/foo', require('body-parser').json());
  app.use('/github', fooRouter);
};
