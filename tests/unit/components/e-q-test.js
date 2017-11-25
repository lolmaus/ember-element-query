import {expect} from 'chai'
import {describe, it} from 'mocha'
import {setupComponentTest} from 'ember-mocha'

describe('Unit | Component | e q', function () {

  setupComponentTest('e-q', {
    // Specify the other units that are required for this test
    needs : ['service:eq'],
    unit  : true,
  })



  it('eqWidth, eqBPsFromActive, eqBPsToActive recalculate on updateEqWidth', function () {
    const subject = this.subject({classNames : 'foo'})

    subject.set('eq.mapping', {
      foo : {
        from : [400, 500, 600],
        to   : [399, 499, 599],
      },
    })

    this.render()

    this.$().width(450)
    subject.eqUpdateSizes()

    expect(subject.get('eqWidth')).equal(450)
    expect(subject.get('eqBPsFromActive')).eql([400])
    expect(subject.get('eqBPsToActive')).eql([499, 599])

    this.$().width(550)
    subject.eqUpdateSizes()

    expect(subject.get('eqWidth')).equal(550)
    expect(subject.get('eqBPsFromActive')).eql([400, 500])
    expect(subject.get('eqBPsToActive')).eql([599])
  })
})
