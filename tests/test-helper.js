import resolver                  from './helpers/resolver';
import prepTests, { addToQueue } from 'mammoth-test-helpers/test-support/prep-tests';
import linkTo                    from 'mammoth-test-helpers/test-support/helpers/link-to-helper';
import googleChart               from 'mammoth-test-helpers/test-support/stubs/google-chart';
import stripe                    from 'mammoth-test-helpers/test-support/stubs/stripe';
import wysihtml5                 from 'mammoth-test-helpers/test-support/stubs/wysihtml5';
import { setResolver }           from 'ember-qunit';

setResolver(resolver);
addToQueue(linkTo);
addToQueue(googleChart);
addToQueue(stripe);
addToQueue(wysihtml5);
prepTests();
