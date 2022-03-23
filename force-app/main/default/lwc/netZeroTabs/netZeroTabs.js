import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NetZeroTabs extends NavigationMixin(LightningElement) {

  handleSetActiveSectionStationary() {
    const accordion = this.template.querySelector('.nzc-tabs');

    accordion.activeSectionName = 'Stationary';  
  }

  navToStatAssetCrbnFtprnt() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'ns__CrbnEmssnScopeAllocVal',
        actionName: 'list'
      }
    });
  };

  navToS3EmFctrs() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'sustain_app__EmissionFactorScope3__c',
        actionName: 'list'
      }
    })
  };

}