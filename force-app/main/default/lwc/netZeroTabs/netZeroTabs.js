import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NetZeroTabs extends NavigationMixin(LightningElement) {

  handleSetActiveSectionStationary() {
    const accordion = this.template.querySelector('.nzc-tabs');

    accordion.activeSectionName = 'Stationary';  
  }

// --------------------  STATIONARY ASSETS NAV FUNCTIONS--------------------
  navToStnryAssetEnvrSrc() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'StnryAssetEnvrSrc',
        actionName: 'home'
      }
    })
  };
  navToStnryAssetCrbnFtprnt() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'StnryAssetCrbnFtprnt',
        actionName: 'home'
      }
    })
  };
  navToStnryAssetEnrgyUse() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'StnryAssetEnrgyUse',
        actionName: 'home'
      }
    })
  };

// --------------------  VEHICLE ASSETS NAV FUNCTIONS--------------------
  navToVehicleAssetEmssnSrc() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'VehicleAssetEmssnSrc',
        actionName: 'home'
      }
    })
  };
  navToVehicleAssetCrbnFtprnt() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'VehicleAssetCrbnFtprnt',
        actionName: 'home'
      }
    })
  };
  navToVehicleAssetEnrgyUse() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'VehicleAssetEnrgyUse',
        actionName: 'home'
      }
    })
  };


  navToS3EmFctrs() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'sustain_app__EmissionFactorScope3__c',
        actionName: 'home'
      }
    })
  };

}