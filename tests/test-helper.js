import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import prepTests, { addToQueue } from 'mammoth-test-helpers/test-support/prep-tests';
import linkTo from 'mammoth-test-helpers/test-support/helpers/link-to-helper';
import googleChart from 'mammoth-test-helpers/test-support/stubs/google-chart';
import stripe from 'mammoth-test-helpers/test-support/stubs/stripe';
import wysihtml5 from 'mammoth-test-helpers/test-support/stubs/wysihtml5';

addToQueue(linkTo);
addToQueue(googleChart);
addToQueue(stripe);
addToQueue(wysihtml5);

prepTests();

setApplication(Application.create(config.APP));
start();
