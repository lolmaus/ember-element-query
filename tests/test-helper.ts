// @ts-ignore Missing types
import Application from 'dummy/app';

// @ts-ignore Missing type
import config from 'dummy/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
