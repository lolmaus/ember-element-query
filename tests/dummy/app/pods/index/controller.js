import Controller from '@ember/controller'
import computed from 'ember-macro-helpers/computed'
import {observer} from '@ember/object'
import {A} from '@ember/array'
import {inject as service} from '@ember/service'

import _ from 'lodash'



export default Controller.extend({

  // ----- Services -----
  eq : service('eq'),



  // ----- Overridden properties -----
  queryParams : ['page'],
  page        : '0',



  // ----- Static properties -----
  maxPage           : 12,
  isSidebarExpanded : false,



  // ----- Computed properties -----
  currentPage : computed('page',    page => parseInt(page, 10)),
  pages       : computed('maxPage', max  => A(_.times(max + 1))),



  // ----- Observers -----
  scrollToTop : observer('page', () => window.scrollTo(0, 0)),

  resizeOnSidebarToggle : observer('isSidebarExpanded', () => {
    const service = this.get('eq')
    service.triggerResize()
  }),

})
